# Empathy Laser Clinic — Delhi

Marketing website for Empathy Skin & Laser Hair Removal Clinic, Pitampura, Delhi.

Live site: https://empathylaserclinic.com/laser-treatments/

## Tech stack

- Vite
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router
- Framer Motion

## Local development

Requires Node.js 18+ and npm.

```sh
npm install
npm run dev
```

## Production build

The site is deployed into the `/laser-treatments/` subfolder on Apache (Hostinger),
so the build base path is set accordingly in `vite.config.ts`.

```sh
npm run build
```

Build pipeline:

1. `prebuild` — regenerates `public/sitemap.xml` and validates all JSON-LD structured data.
2. `build` — Vite production build into `../dist`.
3. `postbuild` — verifies every referenced image exists, then prerenders 240+ static
   HTML pages (homepage, service pages, blog posts) for crawlers and non-JS bots.

To build for a different base path:

```sh
VITE_BASE=/ npm run build
```

## Deployment

Upload the contents of `dist/` into `public_html/laser-treatments/` on the server,
including the hidden `.htaccess` file which handles SPA routing and asset caching.
