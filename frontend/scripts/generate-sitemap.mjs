#!/usr/bin/env node
/**
 * Generate public/sitemap.xml from live source data:
 *   • Static pages (home, about, contact, gallery, blog)
 *   • All service pages (serviceSeoData)
 *   • Every blog post (allBlogPosts)
 *
 * Mirrors the routes the prerender script bakes into dist/.
 * Runs in prebuild so the sitemap stays in sync with content.
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = resolve(__dirname, "..");
const OUT = resolve(FRONTEND_ROOT, "public/sitemap.xml");
const SITE_BASE = "https://empathylaserclinic.com/laser-treatments";

async function tsImport(rel) {
  const url = pathToFileURL(resolve(FRONTEND_ROOT, rel)).href;
  try { return await import(url); }
  catch {
    const { register } = await import("tsx/esm/api");
    register();
    return await import(url);
  }
}

const { serviceSeoData } = await tsImport("src/data/seoData.ts");
const { allBlogPosts } = await tsImport("src/data/blogData.ts");

const today = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const entries = [];
const push = (path, { lastmod = today, changefreq = "monthly", priority = "0.7" } = {}) => {
  const loc = path.startsWith("http") ? path : `${SITE_BASE}${path}`;
  entries.push({ loc, lastmod, changefreq, priority });
};

// Static / informational
push("/", { changefreq: "weekly", priority: "1.0" });
push("/about", { priority: "0.8" });
push("/contact", { priority: "0.8" });
push("/gallery", { priority: "0.7" });
push("/blog", { changefreq: "weekly", priority: "0.8" });

// Service pages (canonical URLs from SEO data)
const servicePriority = {
  laser: "0.9", coolsculpting: "0.9", weightloss: "0.9",
  skin: "0.8", botox: "0.8",
};
for (const [key, seo] of Object.entries(serviceSeoData)) {
  push(seo.canonical, { priority: servicePriority[key] || "0.7" });
}

// Blog posts
for (const post of allBlogPosts) {
  const lastmod = (post.date && /^\d{4}-\d{2}-\d{2}/.test(post.date))
    ? post.date.slice(0, 10)
    : today;
  push(`/blog/${post.slug}`, { lastmod, changefreq: "monthly", priority: "0.6" });
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map(e => `  <url><loc>${esc(e.loc)}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(OUT, xml);
console.log(`✓ sitemap.xml written (${entries.length} URLs) → public/sitemap.xml`);
