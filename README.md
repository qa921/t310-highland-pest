# Highland Pest Response

Astro lead-generation site for the fictional Highland Pest Response brand (M-T310-V3 baseline, completed). No real business operations or outcomes are claimed.

## Structure

- `src/data/` — single source of truth, built from the approved registers in `fixtures/approved/`:
  - `site.ts` — brand, primary market, enquiry path, production origin placeholder
  - `services.ts` — approved service catalog (bat exclusion remains reserved and unpublished)
  - `areas.ts` — Denver (primary market) plus 12 confirmed supporting areas; supersedes the older three-area list in `specs/content.md`
  - `articles.ts` — the nine approved article topics with conservative bodies
- `src/layouts/BaseLayout.astro` + `src/components/` — shared layout and reusable card components
- `src/pages/` — home plus dynamic, data-driven routes: `/services/[slug]`, `/areas/[slug]`, `/articles/[slug]`; support pages: About, Contact (general enquiry), Privacy, 404; generated `/sitemap.xml`
- `public/robots.txt`, `public/favicon.svg`

## Content policy

Approved-source wording only: no prices, guarantees, licensing, health, pesticide, availability, or response-time claims; no phone number or street address. Where the older `specs/` material conflicts with the dated `fixtures/approved/` registers, the registers win. Article slugs referenced by the service catalog but absent from the approved article register (`when-to-avoid-a-wasp-nest`, `exterior-entry-points-to-check`) are deliberately not published.

## Develop / deploy

```sh
npm install
npm run dev
npm run build
```

Set the production origin in `src/data/site.ts` (`siteUrl`) before deploying and mirror it in `public/robots.txt`; it feeds `sitemap.xml`. Deploy only after the build passes (see `fixtures/approved/M-T310-V3-prior-state-audit.md`).
