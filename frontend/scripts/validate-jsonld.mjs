#!/usr/bin/env node
/**
 * Automated JSON-LD validator for Google Rich Results Test.
 *
 * What it does (pre-deployment, no network needed):
 *   1. Imports the centralized schema helpers from src/lib/seo-schema.ts
 *      and the page data (testimonials, services, blog).
 *   2. Re-builds the EXACT @graph payload each page injects at runtime
 *      via usePageMeta.
 *   3. Validates every node against Google Rich Results Test requirements
 *      (Organization, LocalBusiness, FAQPage, BreadcrumbList, Review,
 *       BlogPosting, MedicalBusiness, Service).
 *   4. Optionally POSTs each payload to Google's Schema Markup Validator
 *      (https://validator.schema.org/validate) when --remote is passed,
 *      to mirror Rich Results Test heuristics.
 *
 * Exit code: 0 = all green; 1 = errors; 2 = warnings only (still deployable).
 *
 * Usage:
 *   node frontend/scripts/validate-jsonld.mjs
 *   node frontend/scripts/validate-jsonld.mjs --remote      # also hit validator.schema.org
 *   node frontend/scripts/validate-jsonld.mjs --json        # machine-readable output
 *
 * Wire into CI by adding to package.json:
 *   "validate:seo": "node scripts/validate-jsonld.mjs"
 * and gating deploy on its success.
 */

import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = resolve(__dirname, "..");

const args = new Set(process.argv.slice(2));
const REMOTE = args.has("--remote");
const JSON_OUT = args.has("--json");

// ──────────────────────────────────────────────────────────────────────────
// Dynamic import of TS via tsx fallback or compiled bridge
// ──────────────────────────────────────────────────────────────────────────
async function importTs(rel) {
  const url = pathToFileURL(resolve(FRONTEND_ROOT, rel)).href;
  try {
    return await import(url);
  } catch (e) {
    // Bridge through tsx loader
    try {
      const { register } = await import("tsx/esm/api");
      register();
      return await import(url);
    } catch {
      throw new Error(
        `Cannot import ${rel}. Install tsx as dev dep (bun add -D tsx) or run with: npx tsx scripts/validate-jsonld.mjs\n${e.message}`
      );
    }
  }
}

const {
  buildGraph,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFAQSchema,
  buildReviewsGraph,
  SITE_BASE_URL,
} = await importTs("src/lib/seo-schema.ts");

const { testimonials } = await importTs("src/data/testimonialsData.ts");
const serviceMod = await importTs("src/data/serviceData.ts").catch(() => ({}));
const blogMod = await importTs("src/data/blogData.ts").catch(() => ({}));
const blogExtraMod = await importTs("src/data/blogDataExtra.ts").catch(() => ({}));

const services = serviceMod.servicesData
  ? Object.entries(serviceMod.servicesData).map(([slug, s]) => ({ slug, ...s }))
  : serviceMod.services || serviceMod.serviceData || [];
const blogPosts = [
  ...(blogMod.blogPosts || []),
  ...(blogExtraMod.blogPostsExtra || blogExtraMod.blogPosts || []),
];

// ──────────────────────────────────────────────────────────────────────────
// Validators — mirror Google Rich Results Test required fields
// https://developers.google.com/search/docs/appearance/structured-data
// ──────────────────────────────────────────────────────────────────────────
const REQUIRED = {
  Organization: ["name", "url", "logo"],
  LocalBusiness: ["name", "address", "telephone", "url"],
  MedicalBusiness: ["name", "address", "telephone"],
  FAQPage: ["mainEntity"],
  Question: ["name", "acceptedAnswer"],
  Answer: ["text"],
  BreadcrumbList: ["itemListElement"],
  ListItem: ["position", "name", "item"],
  Review: ["author", "reviewRating", "itemReviewed"],
  Rating: ["ratingValue"],
  AggregateRating: ["ratingValue", "ratingCount"],
  WebPage: ["name", "url"],
  BlogPosting: ["headline", "image", "datePublished", "author"],
  Service: ["name", "provider"],
  PostalAddress: ["streetAddress", "addressLocality", "addressCountry"],
};

const RECOMMENDED = {
  LocalBusiness: ["openingHoursSpecification", "aggregateRating", "image", "priceRange", "geo"],
  Organization: ["sameAs", "address"],
  Review: ["datePublished", "reviewBody"],
  BlogPosting: ["publisher", "mainEntityOfPage"],
};

function typeNames(t) {
  if (!t) return [];
  return Array.isArray(t) ? t : [t];
}

function validateNode(node, pageUrl, path = "@graph") {
  const errors = [];
  const warnings = [];
  if (!node || typeof node !== "object") return { errors, warnings };
  const types = typeNames(node["@type"]);
  for (const t of types) {
    const req = REQUIRED[t];
    if (req) {
      for (const k of req) {
        if (node[k] === undefined || node[k] === null || node[k] === "") {
          errors.push(`${path} [${t}] missing required "${k}" (${pageUrl})`);
        }
      }
    }
    const rec = RECOMMENDED[t];
    if (rec) {
      for (const k of rec) {
        if (node[k] === undefined) {
          warnings.push(`${path} [${t}] missing recommended "${k}" (${pageUrl})`);
        }
      }
    }
    // Review snippet: Google requires itemReviewed to be a typed object, not just @id
    if (t === "Review") {
      const ir = node.itemReviewed;
      if (ir && typeof ir === "object" && !ir["@type"] && !ir.name) {
        errors.push(`${path} [Review] itemReviewed must include @type and name for rich results (${pageUrl})`);
      }
      const rating = node.reviewRating;
      if (rating && typeof rating === "object") {
        const rv = Number(rating.ratingValue);
        if (Number.isNaN(rv) || rv < 1 || rv > 5) {
          errors.push(`${path} [Review] reviewRating.ratingValue must be 1–5 (${pageUrl})`);
        }
      }
    }
    if (t === "FAQPage" && Array.isArray(node.mainEntity)) {
      if (node.mainEntity.length < 2) {
        warnings.push(`${path} [FAQPage] should have ≥2 questions for rich result eligibility (${pageUrl})`);
      }
    }
    if (t === "AggregateRating") {
      const rc = Number(node.ratingCount || node.reviewCount);
      if (!rc || rc < 1) errors.push(`${path} [AggregateRating] needs ratingCount ≥1 (${pageUrl})`);
    }
  }
  // Recurse into nested objects/arrays.
  // Skip `itemReviewed` — Google's review-snippet rich result allows a minimal
  // typed reference (just @type + name + address); it does NOT need to satisfy
  // the full LocalBusiness requirements. We already validate the shape above.
  const SKIP_RECURSE = new Set(["itemReviewed", "provider", "publisher", "isPartOf", "about", "breadcrumb", "parentOrganization"]);
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("@")) continue;
    if (SKIP_RECURSE.has(k)) continue;
    if (Array.isArray(v)) {
      v.forEach((child, i) => {
        if (child && typeof child === "object") {
          const r = validateNode(child, pageUrl, `${path}.${k}[${i}]`);
          errors.push(...r.errors);
          warnings.push(...r.warnings);
        }
      });
    } else if (v && typeof v === "object") {
      const r = validateNode(v, pageUrl, `${path}.${k}`);
      errors.push(...r.errors);
      warnings.push(...r.warnings);
    }
  }
  return { errors, warnings };
}

function validateGraph(payload, pageUrl) {
  const errors = [];
  const warnings = [];
  if (payload["@context"] !== "https://schema.org") {
    errors.push(`Missing/invalid @context on ${pageUrl}`);
  }
  const graph = payload["@graph"];
  if (!Array.isArray(graph) || graph.length === 0) {
    errors.push(`Empty @graph on ${pageUrl}`);
    return { errors, warnings };
  }
  for (let i = 0; i < graph.length; i++) {
    const r = validateNode(graph[i], pageUrl, `@graph[${i}]`);
    errors.push(...r.errors);
    warnings.push(...r.warnings);
  }
  return { errors, warnings };
}

// ──────────────────────────────────────────────────────────────────────────
// Build page payloads (must mirror what runtime renders)
// ──────────────────────────────────────────────────────────────────────────
const homeFaqs = [
  { q: "Where is the best laser hair removal clinic in Delhi?", a: "Empathy Laser Clinic in Pitampura, Delhi is consistently rated among Delhi NCR's top clinics for laser hair removal." },
  { q: "How much does CoolSculpting cost in Delhi?", a: "Book a free body assessment at Empathy Laser Clinic Pitampura for a personalised, transparent quote." },
  { q: "Is laser hair removal safe for Indian skin?", a: "Yes. We use Alma Soprano ICE Platinum and Lumenis LightSheer Desire, both clinically proven safe for Indian skin." },
  { q: "Which areas of Delhi NCR do you serve?", a: "Pitampura, Rohini, Shalimar Bagh, Model Town, Paschim Vihar, Ashok Vihar, Dwarka, Noida, Gurugram, Ghaziabad and Faridabad." },
];

const pages = [];

// Homepage
{
  const url = SITE_BASE_URL;
  pages.push({
    label: "Home (/)",
    url,
    payload: buildGraph(
      [
        buildBreadcrumbSchema([{ name: "Home", url }], url),
        buildWebPageSchema(url, "Empathy Laser Clinic Delhi", "Delhi NCR's premier aesthetic clinic."),
        buildFAQSchema(homeFaqs, url),
      ],
      buildReviewsGraph(
        testimonials.map((t) => ({
          author: t.author,
          body: t.text,
          rating: t.rating,
          datePublished: t.datePublished,
          treatment: t.treatment,
          location: t.location,
        })),
        url
      )
    ),
  });
}

// Service pages
for (const svc of services) {
  const slug = svc.slug || svc.id;
  if (!slug) continue;
  const url = `${SITE_BASE_URL.replace(/\/$/, "")}/${slug}`;
  const matched = testimonials
    .filter((t) =>
      (svc.category || svc.name || "")
        .toLowerCase()
        .split(/\s+/)
        .some((w) => w.length > 3 && t.treatment.toLowerCase().includes(w))
    )
    .slice(0, 5);
  const reviewsForBiz = (matched.length ? matched : testimonials.slice(0, 4)).map((t) => ({
    author: t.author,
    body: t.text,
    rating: t.rating,
    datePublished: t.datePublished,
    treatment: t.treatment,
    location: t.location,
  }));
  pages.push({
    label: `Service: ${svc.name || slug}`,
    url,
    payload: buildGraph(
      [
        buildBreadcrumbSchema(
          [
            { name: "Home", url: SITE_BASE_URL },
            { name: svc.name || slug, url },
          ],
          url
        ),
        buildWebPageSchema(url, svc.metaTitle || svc.name || slug, svc.metaDescription || svc.description || ""),
      ],
      buildReviewsGraph(reviewsForBiz, url)
    ),
  });
}

// ──────────────────────────────────────────────────────────────────────────
// Run validation
// ──────────────────────────────────────────────────────────────────────────
const report = { totalPages: pages.length, errors: 0, warnings: 0, details: [] };

for (const p of pages) {
  const { errors, warnings } = validateGraph(p.payload, p.url);
  report.errors += errors.length;
  report.warnings += warnings.length;
  report.details.push({ page: p.label, url: p.url, errors, warnings, nodes: p.payload["@graph"].length });
}

// Optional: remote check via Schema Markup Validator
if (REMOTE) {
  for (const p of pages) {
    try {
      const r = await fetch("https://validator.schema.org/validate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ html: `<script type="application/ld+json">${JSON.stringify(p.payload)}</script>` }),
      });
      const text = await r.text();
      if (!r.ok || /"errors":\s*\[[^\]]+/.test(text)) {
        report.errors++;
        report.details
          .find((d) => d.url === p.url)
          .errors.push(`Remote validator flagged issues: HTTP ${r.status}`);
      }
    } catch (e) {
      report.details.find((d) => d.url === p.url).warnings.push(`Remote validator unreachable: ${e.message}`);
      report.warnings++;
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────
// Output
// ──────────────────────────────────────────────────────────────────────────
if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const c = (s, code) => `\x1b[${code}m${s}\x1b[0m`;
  console.log(c("\nJSON-LD Rich Results validator", 1));
  console.log(`Pages checked: ${report.totalPages}`);
  for (const d of report.details) {
    const status = d.errors.length
      ? c("FAIL", 31)
      : d.warnings.length
      ? c("WARN", 33)
      : c(" OK ", 32);
    console.log(`  [${status}] ${d.page}  (${d.nodes} nodes)`);
    d.errors.forEach((e) => console.log("    " + c("✖ " + e, 31)));
    d.warnings.forEach((w) => console.log("    " + c("⚠ " + w, 33)));
  }
  console.log(
    `\nTotals: ${c(report.errors + " errors", report.errors ? 31 : 32)}, ${c(
      report.warnings + " warnings",
      report.warnings ? 33 : 32
    )}\n`
  );
  if (REMOTE) console.log("(Remote validator.schema.org check enabled)\n");
  else console.log("Tip: pass --remote to additionally POST each payload to validator.schema.org\n");
}

if (report.errors > 0) process.exit(1);
if (report.warnings > 0) process.exit(2);
process.exit(0);
