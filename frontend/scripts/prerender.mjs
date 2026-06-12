#!/usr/bin/env node
/**
 * Static prerender for AI / non-JS crawlers.
 *
 * For each key route (home, all service landing pages, about, contact,
 * blog index, every blog post) we:
 *   1. Clone dist/index.html
 *   2. Rewrite <title>, meta description, canonical, og:* and twitter:*
 *      to the route's specific values.
 *   3. Append a route-specific <script type="application/ld+json">
 *      (Article+BreadcrumbList for blog posts, MedicalProcedure +
 *      BreadcrumbList for services, FAQPage for home).
 *   4. Inject a crawler-visible <noscript>-style content block INSIDE
 *      #root so bots that don't execute JS (GPTBot, ClaudeBot,
 *      PerplexityBot, Applebot-Extended, plain curl/Apache fetches…)
 *      still receive the full headline, summary, breadcrumb and key
 *      copy. React's createRoot replaces this content on hydration in
 *      real browsers, so users see the live app.
 *   5. Write to dist/<path>/index.html.
 *
 * Output is fully static; Apache .htaccess's existing
 * `RewriteCond %{REQUEST_FILENAME} !-f` lets these files serve before
 * the SPA fallback.
 *
 * Set SKIP_PRERENDER=1 to bypass.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = resolve(__dirname, "..");
const DIST = resolve(FRONTEND_ROOT, "../dist");
const TEMPLATE_PATH = join(DIST, "index.html");

if (process.env.SKIP_PRERENDER === "1") {
  console.log("⏭  SKIP_PRERENDER=1 set — skipping prerender.");
  process.exit(0);
}

if (!existsSync(TEMPLATE_PATH)) {
  console.error(`✗ Prerender: ${TEMPLATE_PATH} not found. Run \`vite build\` first.`);
  process.exit(1);
}

// Lazy-register tsx loader so we can import the project's TS data files.
async function tsImport(rel) {
  const url = pathToFileURL(resolve(FRONTEND_ROOT, rel)).href;
  try {
    return await import(url);
  } catch {
    const { register } = await import("tsx/esm/api");
    register();
    return await import(url);
  }
}

const SITE_ORIGIN = "https://empathylaserclinic.com";
const SITE_BASE = `${SITE_ORIGIN}/laser-treatments/`;
const OG_DEFAULT = `${SITE_BASE}images/og-empathy-laser-clinic.jpg`;
const LOGO = OG_DEFAULT;

// ── Load data ────────────────────────────────────────────────────────────
const { serviceSeoData } = await tsImport("src/data/seoData.ts");
const { servicesData } = await tsImport("src/data/serviceData.ts");
const { allBlogPosts } = await tsImport("src/data/blogData.ts");

const serviceRouteMap = {
  laser: "laser-hair-removal-delhi",
  coolsculpting: "coolsculpting-delhi",
  weightloss: "weight-loss-clinic-delhi",
  skin: "skin-clinic-delhi",
  resurfx: "resurfx-delhi",
  botox: "botox-fillers-delhi",
  microdermabrasion: "microdermabrasion-delhi",
  bridal: "bridal-packages-delhi",
  facials: "facials-delhi",
  salon: "salon-services-delhi",
  acne: "acne-treatment-delhi",
  skinlightening: "skin-lightening-delhi",
  antiageing: "anti-ageing-delhi",
  hifu: "hifu-treatment-delhi",
  darkcircles: "dark-circles-treatment-delhi",
  skintightening: "skin-tightening-delhi",
  stretchmarks: "stretch-marks-delhi",
  tattooremoval: "tattoo-removal-delhi",
  molewart: "mole-wart-removal-delhi",
  hairloss: "hair-loss-treatment-delhi",
  hairtransplant: "hair-transplant-delhi",
  bodycontouring: "body-contouring-delhi",
};

// ── HTML helpers ─────────────────────────────────────────────────────────
const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function setMeta(html, selector, attr, value) {
  // selector e.g. 'meta[name="description"]' or 'meta[property="og:title"]'
  const m = selector.match(/meta\[(name|property)="([^"]+)"\]/);
  if (!m) return html;
  const [, kind, key] = m;
  const re = new RegExp(
    `(<meta[^>]*\\s${kind}\\s*=\\s*"${key.replace(/[.*+?^${}()|[\\\]\\\\]/g, "\\$&")}"[^>]*\\s${attr}\\s*=\\s*")([^"]*)(")`,
    "i"
  );
  if (re.test(html)) return html.replace(re, `$1${esc(value)}$3`);
  // Insert before </head> if missing
  const tag = `<meta ${kind}="${key}" ${attr}="${esc(value)}">`;
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);
}

function setCanonical(html, url) {
  if (/<link[^>]*rel="canonical"[^>]*>/i.test(html)) {
    return html.replace(
      /<link[^>]*rel="canonical"[^>]*href="[^"]*"[^>]*>/i,
      `<link rel="canonical" href="${esc(url)}" />`
    );
  }
  return html.replace(/<\/head>/i, `    <link rel="canonical" href="${esc(url)}" />\n  </head>`);
}

function appendJsonLd(html, jsonLd) {
  // Strip any previous prerender block, then inject before </head>
  html = html.replace(/<script type="application\/ld\+json" id="prerender-jsonld">[\s\S]*?<\/script>\s*/g, "");
  const block = `<script type="application/ld+json" id="prerender-jsonld">${JSON.stringify(jsonLd)}</script>`;
  return html.replace(/<\/head>/i, `    ${block}\n  </head>`);
}

function injectCrawlerBody(html, contentHtml) {
  // React will replace #root on hydration, so injected content is for non-JS bots.
  return html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div id="prerender-content" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">${contentHtml}</div></div>`
  );
}

// ── JSON-LD builders ─────────────────────────────────────────────────────
const orgNode = {
  "@type": "Organization",
  "@id": `${SITE_BASE}#organization`,
  name: "Empathy Laser Clinic",
  alternateName: "Empathy Skin & Laser Hair Removal Clinic Delhi",
  url: SITE_BASE,
  logo: { "@type": "ImageObject", url: LOGO, width: 1200, height: 630 },
  image: LOGO,
  telephone: ["+919811157787", "+919811157784"],
  email: "info@empathylaserclinic.com",
  foundingDate: "2009",
  founder: [
    { "@type": "Person", name: "Dr. Jyoti Anand", jobTitle: "Director & Chief Dermatologist" },
    { "@type": "Person", name: "Dr. Rajnish Anand", jobTitle: "Director & Hair Transplant Surgeon" },
  ],
  sameAs: [
    "https://www.instagram.com/empathylaserclinic/",
    "https://www.facebook.com/empathylaserclinic",
    "https://www.youtube.com/user/tourismdentalindia",
    "https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi+-+Coolsculpting+-+Skin+Treatments/@28.7013523,77.1246251,15z",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "HD-6, First Floor, Main Road, Opp Metro Pillar 362",
    addressLocality: "Pitampura",
    addressRegion: "Delhi",
    postalCode: "110034",
    addressCountry: "IN",
  },
};

const localBusinessNode = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_BASE}#localbusiness`,
  name: "Empathy Laser Clinic Delhi",
  alternateName: "Empathy Skin & Laser Hair Removal Clinic Delhi",
  description:
    "Delhi NCR's premier aesthetic clinic for laser hair removal (Lumenis LightSheer, Alma Soprano), CoolSculpting fat freezing, weight loss, body contouring, Botox, fillers, hair restoration & advanced skincare.",
  url: SITE_BASE,
  telephone: ["+919811157787", "+919811157784"],
  email: "info@empathylaserclinic.com",
  priceRange: "₹₹",
  image: LOGO,
  logo: LOGO,
  parentOrganization: { "@id": `${SITE_BASE}#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "HD-6, First Floor, Main Road, Opp Metro Pillar 362",
    addressLocality: "Pitampura",
    addressRegion: "Delhi",
    postalCode: "110034",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.7013527,
    longitude: 77.1349249,
  },
  hasMap:
    "https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Place", name: "Pitampura" },
    { "@type": "Place", name: "Rohini" },
    { "@type": "Place", name: "Shalimar Bagh" },
    { "@type": "Place", name: "Paschim Vihar" },
    { "@type": "Place", name: "Ashok Vihar" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "860",
    reviewCount: "860",
  },
  medicalSpecialty: ["Dermatology", "PlasticSurgery"],
  knowsAbout: [
    "Laser Hair Removal",
    "CoolSculpting",
    "Body Contouring",
    "Botox",
    "Dermal Fillers",
    "Skin Lightening",
    "Anti-Ageing",
    "PRP Therapy",
    "Hair Transplant",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aesthetic & Dermatology Treatments",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laser Hair Removal", description: "Permanent laser hair removal with Lumenis LightSheer Desire & Alma Soprano ICE Platinum. Safe for all Indian skin types." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CoolSculpting Fat Freezing", description: "FDA-cleared non-surgical fat freezing and body contouring. 27% fat reduction per session." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weight Loss Treatment", description: "Non-surgical weight loss and body contouring solutions." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skin Treatments", description: "Advanced skincare including skin lightening, anti-ageing, and skin tightening." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Botox & Fillers", description: "Anti-wrinkle injections and dermal fillers for facial rejuvenation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HIFU Face Lift", description: "Non-surgical face lift with High-Intensity Focused Ultrasound." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acne & Scar Treatment", description: "Advanced acne treatment and scar reduction therapies." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Loss & PRP Therapy", description: "PRP therapy and advanced treatments for hair loss and thinning." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Transplant", description: "FUE and FUT hair transplant procedures." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ResurFX Skin Resurfacing", description: "Non-ablative fractional laser skin resurfacing." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microdermabrasion", description: "Crystal-free microdermabrasion for skin rejuvenation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Packages", description: "Comprehensive pre-wedding beauty packages." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facials & HydraFacial", description: "Premium facial treatments including HydraFacial." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dark Circles Treatment", description: "Specialized under-eye dark circle reduction." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tattoo Removal", description: "Laser tattoo removal for all ink colors." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Contouring", description: "Non-surgical body shaping and contouring treatments." } },
    ],
  },
};

function breadcrumb(items, pageUrl) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// ── Crawler-visible content builders ─────────────────────────────────────
function bodyForService(svc, data, url, ogImage) {
  const benefits = (data.benefits || []).slice(0, 4)
    .map((b) => `<li><strong>${esc(b.title)}:</strong> ${esc(b.description)}</li>`)
    .join("");
  const faqs = (data.faqs || []).slice(0, 6)
    .map((f) => `<details><summary>${esc(f.question)}</summary><p>${esc(f.answer)}</p></details>`)
    .join("");
  return `
    <nav aria-label="Breadcrumb"><a href="${SITE_BASE}">Home</a> › <a href="${SITE_BASE}#services">Treatments</a> › <span>${esc(data.title)} ${esc(data.accent)}</span></nav>
    <h1>${esc(data.title)} ${esc(data.accent)} in Delhi NCR</h1>
    <img src="${esc(ogImage)}" alt="${esc(data.title)} ${esc(data.accent)} — Empathy Laser Clinic Delhi" width="1200" height="630" />
    <p><strong>${esc(data.tagline || "")}</strong></p>
    <p>${esc(data.longDescription || data.description || "")}</p>
    <h2>Why choose Empathy Laser Clinic</h2>
    <ul>${benefits}</ul>
    ${faqs ? `<h2>Frequently asked questions</h2>${faqs}` : ""}
    <p><a href="${SITE_BASE}contact">Book a free consultation</a> · Call <a href="tel:+919811157787">+91 98111 57787</a></p>
  `.trim();
}

function bodyForBlogPost(post, url) {
  const summary = esc((post.content || "").replace(/[#*`>|\-]/g, " ").replace(/\s+/g, " ").slice(0, 1200));
  return `
    <nav aria-label="Breadcrumb"><a href="${SITE_BASE}">Home</a> › <a href="${SITE_BASE}blog/">Blog</a> › <span>${esc(post.title)}</span></nav>
    <article>
      <h1>${esc(post.title)}</h1>
      <p><em>By ${esc(post.author)} · ${esc(post.date)} · ${esc(post.readTime)} · ${esc(post.category)}</em></p>
      <img src="${esc(post.image || OG_DEFAULT)}" alt="${esc(post.title)}" />
      <p>${esc(post.excerpt)}</p>
      <p>${summary}…</p>
      <p>Tags: ${(post.tags || []).map(esc).join(", ")}</p>
    </article>
    <p><a href="${SITE_BASE}contact">Book free consultation</a></p>
  `.trim();
}

function bodyForHome() {
  return `
    <h1>Empathy Laser Clinic Delhi — Laser Hair Removal, CoolSculpting &amp; Skin Treatments</h1>
    <p>Delhi NCR's premier aesthetic clinic since 2009. USFDA-cleared Lumenis LightSheer Desire and Alma Soprano ICE Platinum for permanent laser hair removal. CoolSculpting® Elite for non-surgical fat reduction. Advanced skin, hair and anti-ageing treatments at our Pitampura clinic.</p>
    <h2>Treatments</h2>
    <ul>
      ${Object.entries(serviceRouteMap).map(([k, slug]) => {
        const seo = serviceSeoData[k];
        return seo ? `<li><a href="${SITE_BASE}${slug}">${esc(seo.title.split("|")[0].trim())}</a></li>` : "";
      }).join("")}
    </ul>
    <h2>Visit us</h2>
    <p>HD-6, First Floor, Main Road, Opp Metro Pillar 362, Pitampura, Delhi 110034 · <a href="tel:+919811157787">+91 98111 57787</a> · Tue–Sun 10:00–19:00</p>
    <p><a href="${SITE_BASE}about">About</a> · <a href="${SITE_BASE}contact">Contact</a> · <a href="${SITE_BASE}blog/">Blog</a> · <a href="${SITE_BASE}gallery">Gallery</a></p>
  `.trim();
}

// ── Per-route writers ────────────────────────────────────────────────────
const template = readFileSync(TEMPLATE_PATH, "utf8");

function writeRoute({ path, title, description, canonical, ogImage, jsonLd, body }) {
  let html = template;
  html = setTitle(html, title);
  html = setMeta(html, 'meta[name="description"]', "content", description);
  html = setMeta(html, 'meta[property="og:title"]', "content", title);
  html = setMeta(html, 'meta[property="og:description"]', "content", description);
  html = setMeta(html, 'meta[property="og:url"]', "content", canonical);
  html = setMeta(html, 'meta[name="twitter:title"]', "content", title);
  html = setMeta(html, 'meta[name="twitter:description"]', "content", description);
  if (ogImage) {
    html = setMeta(html, 'meta[property="og:image"]', "content", ogImage);
    html = setMeta(html, 'meta[name="twitter:image"]', "content", ogImage);
    html = setMeta(html, 'meta[property="og:image:alt"]', "content", title);
  }
  html = setCanonical(html, canonical);
  if (jsonLd) html = appendJsonLd(html, jsonLd);
  if (body) html = injectCrawlerBody(html, body);

  const outDir = path === "/" ? DIST : join(DIST, path.replace(/^\/+|\/+$/g, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
  return join(outDir, "index.html");
}

const written = [];

// Home
written.push(
  writeRoute({
    path: "/",
    title: "Empathy Laser Clinic Delhi | Laser Hair Removal, CoolSculpting & Skin Treatments",
    description:
      "Delhi NCR's #1 aesthetic clinic for laser hair removal (Lumenis LightSheer, Alma Soprano), CoolSculpting fat freezing, Botox, fillers & skin treatments. 25,000+ clients. Book free consultation.",
    canonical: SITE_BASE,
    ogImage: OG_DEFAULT,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        orgNode,
        localBusinessNode,
        breadcrumb([{ name: "Home", url: SITE_BASE }], SITE_BASE),
        {
          "@type": "WebPage",
          "@id": SITE_BASE,
          url: SITE_BASE,
          name: "Empathy Laser Clinic Delhi — Laser Hair Removal, CoolSculpting & Skin Treatments",
          description: "Delhi NCR's premier aesthetic clinic for laser hair removal, CoolSculpting, Botox, fillers, skin & hair treatments.",
          isPartOf: { "@id": `${SITE_BASE}#organization` },
          about: { "@id": `${SITE_BASE}#localbusiness` },
          breadcrumb: { "@id": `${SITE_BASE}#breadcrumb` },
          inLanguage: "en-IN",
        },
      ],
    },
    body: bodyForHome(),
  })
);

// Services
let serviceCount = 0;
for (const [key, slug] of Object.entries(serviceRouteMap)) {
  const data = servicesData[key];
  const seo = serviceSeoData[key];
  if (!data || !seo) continue;
  const url = `${SITE_BASE}${slug}`;
  const ogImage = seo.ogImage || OG_DEFAULT;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      localBusinessNode,
      breadcrumb(
        [
          { name: "Home", url: SITE_BASE },
          { name: "Treatments", url: `${SITE_BASE}#services` },
          { name: `${data.title} ${data.accent}`, url },
        ],
        url
      ),
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#service`,
        name: `${data.title} ${data.accent} in Delhi`,
        description: data.longDescription || data.description,
        url,
        procedureType: "https://schema.org/NoninvasiveProcedure",
        image: ogImage,
        provider: { "@id": `${SITE_BASE}#localbusiness` },
        areaServed: { "@type": "City", name: "Delhi NCR" },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: seo.title,
        description: seo.description,
        primaryImageOfPage: ogImage,
        isPartOf: { "@id": `${SITE_BASE}#organization` },
        about: { "@id": `${SITE_BASE}#localbusiness` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-IN",
      },
    ],
  };
  written.push(
    writeRoute({
      path: `/${slug}`,
      title: seo.title,
      description: seo.description,
      canonical: url,
      ogImage,
      jsonLd,
      body: bodyForService(key, data, url, ogImage),
    })
  );
  serviceCount++;
}

// Static informational pages
for (const p of [
  {
    path: "/about",
    title: "About Empathy Laser Clinic | Delhi NCR's Premier Aesthetic Clinic",
    description:
      "Since 2009, Empathy Laser Clinic in Pitampura, Delhi has delivered USFDA-cleared laser, CoolSculpting and skin treatments to 25,000+ clients. Meet the team.",
    canonical: `${SITE_BASE}about`,
  },
  {
    path: "/contact",
    title: "Contact Empathy Laser Clinic | Pitampura, Delhi | Book Consultation",
    description:
      "Book a free consultation at Empathy Laser Clinic. HD-6, First Floor, Pitampura, Delhi 110034. Call +91 98111 57787. Tue–Sun 10:00–19:00.",
    canonical: `${SITE_BASE}contact`,
  },
  {
    path: "/blog",
    title: "Blog | Laser, Skin & Beauty Insights | Empathy Laser Clinic Delhi",
    description:
      "Expert articles on laser hair removal, CoolSculpting, skin and hair treatments from Delhi's premier aesthetic clinic.",
    canonical: `${SITE_BASE}blog/`,
  },
  {
    path: "/gallery",
    title: "Before & After Gallery | Empathy Laser Clinic Delhi",
    description:
      "Real client results from Delhi NCR's premier aesthetic clinic. Laser hair removal, CoolSculpting, skin and hair transformations.",
    canonical: `${SITE_BASE}gallery`,
  },
]) {
  const pageUrl = p.canonical;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      localBusinessNode,
      breadcrumb(
        [
          { name: "Home", url: SITE_BASE },
          { name: p.title.split(" | ")[0] || p.title, url: pageUrl },
        ],
        pageUrl
      ),
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: p.title,
        description: p.description,
        isPartOf: { "@id": `${SITE_BASE}#organization` },
        about: { "@id": `${SITE_BASE}#localbusiness` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        inLanguage: "en-IN",
      },
    ],
  };
  written.push(writeRoute({ ...p, ogImage: OG_DEFAULT, jsonLd }));
}

// Blog posts
let blogCount = 0;
for (const post of allBlogPosts || []) {
  const url = `${SITE_BASE}blog/${post.slug}/`;
  const ogImage = post.image?.startsWith("http")
    ? post.image
    : `${SITE_BASE}${(post.image || "").replace(/^\/+/, "")}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      localBusinessNode,
      breadcrumb(
        [
          { name: "Home", url: SITE_BASE },
          { name: "Blog", url: `${SITE_BASE}blog/` },
          { name: post.title, url },
        ],
        url
      ),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        headline: post.title.slice(0, 110),
        description: post.excerpt,
        image: [ogImage || OG_DEFAULT],
        keywords: (post.tags || []).join(", "),
        articleSection: post.category,
        wordCount: (post.content || "").trim().split(/\s+/).length,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: post.author || "Empathy Laser Clinic" },
        publisher: {
          "@type": "Organization",
          name: "Empathy Laser Clinic",
          url: SITE_BASE,
          logo: { "@type": "ImageObject", url: LOGO, width: 1200, height: 630 },
        },
        inLanguage: "en-IN",
      },
    ],
  };
  written.push(
    writeRoute({
      path: `/blog/${post.slug}`,
      title: `${post.title} | Empathy Laser Clinic Delhi`,
      description: (post.excerpt || "").slice(0, 155),
      canonical: url,
      ogImage: ogImage || OG_DEFAULT,
      jsonLd,
      body: bodyForBlogPost(post, url),
    })
  );
  blogCount++;
}

console.log(
  `\n✓ Prerender wrote ${written.length} static HTML files\n  • 1 homepage\n  • ${serviceCount} service pages\n  • 4 informational pages\n  • ${blogCount} blog posts\n`
);
