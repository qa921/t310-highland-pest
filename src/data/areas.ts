// Confirmed markets from fixtures/approved/M-T310-V3-market-register.md (revised 2026-09-12),
// which supersedes the older three-area list in specs/content.md for coverage decisions.
// No pages or claims for Boulder, Broomfield, Centennial, Castle Rock, Parker, or any
// unlisted market. Supporting pages must not claim an office, technician location,
// same-day response, availability, or travel radius.

export interface Area {
  slug: string;
  name: string;
  role: "primary" | "supporting";
  angle: string;
  evidenceDate: string;
}

export const areas: Area[] = [
  { slug: "denver", name: "Denver", role: "primary", angle: "Main local landing page and navigation priority", evidenceDate: "2026-09-12" },
  { slug: "aurora", name: "Aurora", role: "supporting", angle: "Residential wildlife and nuisance-pest enquiries", evidenceDate: "2026-09-12" },
  { slug: "lakewood", name: "Lakewood", role: "supporting", angle: "Home exclusion and seasonal checks", evidenceDate: "2026-09-12" },
  { slug: "arvada", name: "Arvada", role: "supporting", angle: "Older-home entry-point guidance", evidenceDate: "2026-09-12" },
  { slug: "wheat-ridge", name: "Wheat Ridge", role: "supporting", angle: "Property-perimeter and attic-entry guidance", evidenceDate: "2026-09-10" },
  { slug: "edgewater", name: "Edgewater", role: "supporting", angle: "Compact-property inspection enquiries", evidenceDate: "2026-09-10" },
  { slug: "golden", name: "Golden", role: "supporting", angle: "Foothill-adjacent property prevention guidance", evidenceDate: "2026-09-09" },
  { slug: "englewood", name: "Englewood", role: "supporting", angle: "Seasonal rodent-check enquiries", evidenceDate: "2026-09-09" },
  { slug: "littleton", name: "Littleton", role: "supporting", angle: "Home exclusion planning", evidenceDate: "2026-09-08" },
  { slug: "sheridan", name: "Sheridan", role: "supporting", angle: "Practical property assessment enquiries", evidenceDate: "2026-09-08" },
  { slug: "commerce-city", name: "Commerce City", role: "supporting", angle: "Perimeter and nuisance-wildlife enquiries", evidenceDate: "2026-09-07" },
  { slug: "northglenn", name: "Northglenn", role: "supporting", angle: "Seasonal home pest-prevention guidance", evidenceDate: "2026-09-07" },
  { slug: "westminster", name: "Westminster", role: "supporting", angle: "General home pest and exclusion enquiries", evidenceDate: "2026-09-06" },
];

export const primaryArea = areas.find((a) => a.role === "primary")!;
export const supportingAreas = areas.filter((a) => a.role === "supporting");
