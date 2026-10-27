# Ruyi Global Foundation website

Bilingual (English / 繁體中文) static site built with Astro + Tailwind CSS.

## Commands
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static files to dist/
npm run preview
npx astro check   # type check
```

## Where to edit
- Page copy: `src/i18n/en.ts` and `src/i18n/zh.ts` (same structure; `zh.ts` is type-checked against `en.ts`)
- Organization facts, form links, Zelle: `src/data/site.ts`
- **Recipient email for all forms and email buttons**: `contactEmail` in `src/data/site.ts` (never shown as page text)
- Feature switches in `src/data/site.ts` → `features`: `showBoard` (Board of Directors on About), `enrollmentOpen` (participant applications / youth waitlist)
- Form fields (mentor application, donation receipt, contact): `src/data/forms.ts`; forms open the visitor's email app via mailto (`src/components/MailtoForm.astro`)
- Board: `src/data/board.ts` · Pilot prices: `src/data/pricing.ts`
- Page layouts: `src/views/*.astro` (each rendered by `src/pages/` for `/` and `/zh/`)

## Deployment
Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`:
https://timslhsu.github.io/ruyi-global-foundation/

The site is served under the `/ruyi-global-foundation` base path (`astro.config.mjs`). Always build links with
`localizePath()` / `withBase()` from `src/i18n/utils.ts` instead of hard-coding `/...`.
When a custom domain is ready: set `site` to the domain, remove `base`, update `site.url` in `src/data/site.ts`,
and add the domain under repo Settings → Pages.

## Before launch
- Confirm `contactEmail` can receive mail, and optionally add external form URLs (`site.forms`); empty values fall back to email links.
- Confirm the Zelle recipient spelling with U.S. Bank and test-scan `public/images/zelle-qr.png`.
