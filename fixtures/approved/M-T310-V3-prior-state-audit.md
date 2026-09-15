# M-T310-V3 prior-state audit notes

Prepared 2026-09-13 from the incomplete baseline and editorial review. These are source facts for reconciliation, not a requested finished audit output.

| Record | Current state | Required later resolution |
| --- | --- | --- |
| `src/data/site.ts` | Has Denver primary market plus only Aurora, Lakewood, and Arvada in a generic `serviceRegions` array. | Replace/extend with a data model that distinguishes primary and confirmed supporting markets, based on the newer market register. |
| `specs/content.md` | Older draft names only three adjacent areas. | Treat as superseded for coverage by the dated M-T310-V3 market register; do not extend coverage beyond it. |
| `src/pages/index.astro` | One baseline paragraph; no hierarchy, no navigation, no enquiry path, and no links. | Build later from approved sources; Denver must be visible as the centre. |
| `fixtures/followups/service-bat-exclusion.md` | Bat exclusion is reserved with legal and seasonal questions. | Exclude from publishable services until a later approval. |
| `fixtures/followups/article-attic-signs.md` | Attic-entry topic was reserved but is now represented by a dated approved article record. | Article may be used with the listed cautions. |
| Existing Vercel deployment | Production alias is active but metadata calls it `incomplete-static-placeholder`. | Later workflow should deploy only after the Astro site is complete and verify alias/readiness. |
| Supporting areas | No baseline pages or relationship map exists. | Generate data-driven supporting pages and conservative links to relevant services/enquiry; no local-office or availability language. |

## Required support-page inputs

Approved practical support routes: About, Contact / enquiry, Privacy, 404, robots.txt, sitemap.xml, and favicon.svg. A real phone number, street address, licence details, pricing, availability, testimonials, and guarantees are intentionally absent and must not be invented.
