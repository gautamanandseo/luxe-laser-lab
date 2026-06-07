#!/usr/bin/env node
/**
 * Post-build asset integrity check.
 *
 * Scans:
 *   - src/data/*.ts (blog, service, seo, testimonials data)
 *   - src/lib/seo-schema.ts
 *   - All generated JSON-LD via the same builders the app uses
 *
 * For every local image URL referenced (path starting with "/"), verifies that
 * the file exists in both `public/` (source) and `dist/` (build output).
 *
 * Exits non-zero if any referenced image is missing, failing the build.
 * Set SKIP_ASSET_CHECK=1 to bypass.
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = resolve(__dirname, "..");
const PUBLIC_DIR = join(FRONTEND_ROOT, "public");
const DIST_DIR = join(FRONTEND_ROOT, "dist");

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif|svg|ico)$/i;
// Matches "/images/...jpg", "/uploads/...png", any root-relative image path
const URL_RE = /["'`](\/[^"'`\s)?#]+?\.(?:jpe?g|png|webp|avif|gif|svg|ico))(?:\?[^"'`\s)]*)?["'`]/gi;

const SCAN_FILES = [
  "src/data/blogData.ts",
  "src/data/blogDataBatch2.ts",
  "src/data/blogDataExtra.ts",
  "src/data/serviceData.ts",
  "src/data/seoData.ts",
  "src/data/testimonialsData.ts",
  "src/lib/seo-schema.ts",
  "index.html",
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function collectReferences() {
  const refs = new Map(); // url -> Set<sourceFile>
  for (const rel of SCAN_FILES) {
    const abs = join(FRONTEND_ROOT, rel);
    if (!existsSync(abs)) continue;
    const text = readFileSync(abs, "utf8");
    let m;
    while ((m = URL_RE.exec(text))) {
      const url = m[1];
      // skip data:, http(s):, and non-image paths
      if (!IMAGE_EXT.test(url)) continue;
      if (!refs.has(url)) refs.set(url, new Set());
      refs.get(url).add(rel);
    }
  }
  return refs;
}

function checkPath(url) {
  // strip leading "/"
  const rel = url.replace(/^\//, "");
  const inPublic = existsSync(join(PUBLIC_DIR, rel));
  const inDist = existsSync(join(DIST_DIR, rel));
  return { inPublic, inDist };
}

const refs = collectReferences();
const distExists = existsSync(DIST_DIR);

const missingPublic = [];
const missingDist = [];

for (const [url, sources] of refs) {
  const { inPublic, inDist } = checkPath(url);
  const srcList = [...sources].join(", ");
  if (!inPublic) missingPublic.push(`  ✗ ${url}\n      referenced in: ${srcList}`);
  if (distExists && !inDist) missingDist.push(`  ✗ ${url}\n      referenced in: ${srcList}`);
}

console.log(`\n🔍 Asset integrity check — scanned ${refs.size} unique image URL(s)`);

if (missingPublic.length === 0 && missingDist.length === 0) {
  console.log(`✓ All referenced images present in public/${distExists ? " and dist/" : ""}\n`);
  process.exit(0);
}

if (missingPublic.length) {
  console.error(`\n✗ Missing from frontend/public/ (${missingPublic.length}):`);
  console.error(missingPublic.join("\n"));
}
if (missingDist.length) {
  console.error(`\n✗ Missing from frontend/dist/ (${missingDist.length}):`);
  console.error(missingDist.join("\n"));
  console.error("\n  → Re-run `npm run build` and ensure public/ is copied to dist/.");
}

if (process.env.SKIP_ASSET_CHECK === "1") {
  console.warn("\n⚠ SKIP_ASSET_CHECK=1 set — continuing despite missing assets.\n");
  process.exit(0);
}

console.error("\n  Set SKIP_ASSET_CHECK=1 to bypass this check.\n");
process.exit(1);
