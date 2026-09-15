// Approved services from fixtures/approved/M-T310-V3-service-catalog.md (revised 2026-09-11).
// Enquiry-oriented wording only: no prices, outcomes, guarantees, pesticide, health, or
// licensing claims. "Bat exclusion" remains a reserved follow-up topic
// (fixtures/followups/service-bat-exclusion.md) and is intentionally NOT published here.
// Related-article slugs are limited to the nine approved records in the article register;
// catalog references without an approved article (e.g. "when-to-avoid-a-wasp-nest",
// "exterior-entry-points-to-check") are omitted conservatively.

export interface Service {
  slug: string;
  name: string;
  priority: "High" | "Standard";
  summary: string;
  marketNote: string;
  relatedArticleSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "wildlife-exclusion",
    name: "Wildlife exclusion",
    priority: "High",
    summary:
      "Assessment-led exclusion of nuisance wildlife entry points, with scope agreed during enquiry before any work.",
    marketNote: "Denver-focused; supporting-area pages link here conservatively.",
    relatedArticleSlugs: ["safe-wildlife-exclusion-questions", "signs-of-animal-entry-in-an-attic"],
  },
  {
    slug: "wasp-nest-removal",
    name: "Wasp nest removal",
    priority: "High",
    summary:
      "Enquiries about wasp nests around the home start with an assessment of location and activity before any removal is discussed.",
    marketNote: "Denver-focused; supporting pages may link to it.",
    relatedArticleSlugs: ["where-wasps-build-nests"],
  },
  {
    slug: "rodent-checks",
    name: "Cold-season rodent checks",
    priority: "High",
    summary:
      "Seasonal exterior checks for signs of rodent entry as temperatures drop, described in seasonal language only.",
    marketNote: "Denver-focused; seasonal language only.",
    relatedArticleSlugs: ["cold-season-rodent-checklist", "gaps-that-invite-rodents"],
  },
  {
    slug: "attic-entry-assessment",
    name: "Attic entry assessment",
    priority: "High",
    summary:
      "An assessment-only look at attic spaces to identify signs of animal entry and likely entry points before any exclusion plan.",
    marketNote: "Denver-focused; assessment only.",
    relatedArticleSlugs: ["signs-of-animal-entry-in-an-attic", "attic-entry-points-to-check"],
  },
  {
    slug: "bird-deterrence",
    name: "Bird deterrence",
    priority: "Standard",
    summary:
      "Deterrence-oriented guidance for bird nesting pressure around the home; not offered or described as nest removal.",
    marketNote: "Denver service page; not described as removal.",
    relatedArticleSlugs: ["bird-nesting-around-the-home"],
  },
  {
    slug: "squirrel-exclusion",
    name: "Squirrel exclusion",
    priority: "Standard",
    summary:
      "Exclusion-focused approach to squirrel entry at rooflines and attics, scoped during enquiry without outcome claims.",
    marketNote: "Denver service page; no outcome claims.",
    relatedArticleSlugs: ["signs-of-animal-entry-in-an-attic", "gaps-that-invite-rodents"],
  },
  {
    slug: "raccoon-exclusion",
    name: "Raccoon exclusion",
    priority: "Standard",
    summary:
      "Exclusion and outdoor-attractant guidance for raccoon pressure; no trapping claims are made on this site.",
    marketNote: "Denver service page; no trapping claims.",
    relatedArticleSlugs: ["safe-wildlife-exclusion-questions", "securing-outdoor-attractants"],
  },
  {
    slug: "skunk-prevention",
    name: "Skunk prevention",
    priority: "Standard",
    summary:
      "Prevention-framed guidance for reducing skunk interest around a property, focused on attractants and access.",
    marketNote: "Denver service page; prevention framing only.",
    relatedArticleSlugs: ["securing-outdoor-attractants", "spring-yard-pest-prevention"],
  },
  {
    slug: "spider-management",
    name: "Spider management",
    priority: "Standard",
    summary:
      "General management enquiries for spider activity around the home; this site makes no treatment-detail claims.",
    marketNote: "Denver service page; no treatment-detail claims.",
    relatedArticleSlugs: ["spring-yard-pest-prevention"],
  },
  {
    slug: "ant-prevention",
    name: "Ant prevention",
    priority: "Standard",
    summary:
      "Prevention-framed guidance for ant pressure, centred on entry points and yard conditions.",
    marketNote: "Denver service page; prevention framing only.",
    relatedArticleSlugs: ["spring-yard-pest-prevention"],
  },
];
