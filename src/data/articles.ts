// Approved editorial topics from fixtures/approved/M-T310-V3-article-register.md
// (revised 2026-09-10). Articles are practical education, not diagnostic, legal, health,
// or guarantee content. Nothing beyond these nine topics is published without source review.

export interface Article {
  slug: string;
  title: string;
  primaryServiceSlug: string;
  secondaryLink: { type: "service" | "area"; slug: string };
  evidenceDate: string;
  editorialNote: string;
  summary: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "safe-wildlife-exclusion-questions",
    title: "Questions to ask before wildlife exclusion",
    primaryServiceSlug: "wildlife-exclusion",
    secondaryLink: { type: "area", slug: "denver" },
    evidenceDate: "2026-09-10",
    editorialNote: "Required topic from older spec.",
    summary: "A short set of practical questions that helps you understand the scope of exclusion work before anything is agreed.",
    body: [
      "Wildlife exclusion work goes best when both sides understand the scope before anything is agreed. A few practical questions asked up front can prevent misunderstandings later.",
      "Ask what the initial assessment covers and which entry points were identified. Ask how exclusion materials are chosen and where they would be installed. Ask how follow-up checks are handled, and what a written quote includes.",
      "Answers will vary from property to property, and this article is general education rather than a checklist for any specific home. When you are ready, a general enquiry is the right place to raise these questions.",
    ],
  },
  {
    slug: "where-wasps-build-nests",
    title: "Where wasps commonly build nests around a home",
    primaryServiceSlug: "wasp-nest-removal",
    secondaryLink: { type: "area", slug: "denver" },
    evidenceDate: "2026-09-10",
    editorialNote: "Required topic from older spec.",
    summary: "The sheltered spots wasps favour, how to observe from a distance, and which nests are most worth raising as an enquiry.",
    body: [
      "Wasps tend to favour sheltered, undisturbed spots. Around a typical home, nests are commonly found under eaves and soffits, inside shed roofs, within wall voids, in dense shrubs, and occasionally in ground cavities.",
      "If you suspect a nest, observe from a distance rather than disturbing it. Activity going in and out of a single opening is usually a clearer sign than a few wasps passing through.",
      "Nests close to doors, paths, or play areas are the ones most worth raising through a general enquiry, so the location and activity can be assessed before any removal is discussed.",
    ],
  },
  {
    slug: "cold-season-rodent-checklist",
    title: "A cold-season rodent check for the home exterior",
    primaryServiceSlug: "rodent-checks",
    secondaryLink: { type: "area", slug: "denver" },
    evidenceDate: "2026-09-09",
    editorialNote: "Seasonal checklist, no prevention guarantee.",
    summary: "A short seasonal walkaround of the home exterior as temperatures drop — a starting point, not a prevention guarantee.",
    body: [
      "As temperatures drop, rodents look for warmth, and the home exterior is the first place to check. A short seasonal walkaround can catch obvious issues early.",
      "Look at the gaps where utility lines enter the walls, the condition of door sweeps and weatherstripping, the state of vents and their covers, and how firewood or stored items sit against the house.",
      "A checklist like this reduces the chance of missing obvious gaps, but it cannot guarantee prevention — it is a starting point for a seasonal rodent check enquiry, not a promise.",
    ],
  },
  {
    slug: "signs-of-animal-entry-in-an-attic",
    title: "Signs of animal entry in an attic",
    primaryServiceSlug: "attic-entry-assessment",
    secondaryLink: { type: "service", slug: "wildlife-exclusion" },
    evidenceDate: "2026-09-09",
    editorialNote: "Follow-up topic now approved; no health or guaranteed-removal claims.",
    summary: "Common indicators of animal entry in attic spaces, and why identification comes before any exclusion plan.",
    body: [
      "Attics often show the earliest signs of animal entry. Common indicators include sounds in the ceiling at night, displaced or disturbed insulation, and rub or gnaw marks around the roofline.",
      "If you find droppings or nesting material, avoid disturbing or handling it and arrange an assessment instead. The goal at this stage is identification, not cleanup.",
      "An attic entry assessment documents the signs and likely entry points before any exclusion plan is discussed. This article makes no health claims, and no removal outcome is guaranteed.",
    ],
  },
  {
    slug: "attic-entry-points-to-check",
    title: "Common attic entry points to look over",
    primaryServiceSlug: "attic-entry-assessment",
    secondaryLink: { type: "service", slug: "squirrel-exclusion" },
    evidenceDate: "2026-09-08",
    editorialNote: "Observation guidance only.",
    summary: "The predictable construction points where attic entry usually happens — observation guidance only.",
    body: [
      "Most attic entry happens at predictable construction points. Roofline gaps, soffit joints, gable and ridge vents, chimney flashing, and the junctions where additions meet the main roof are all worth a look.",
      "Observations should be made from the ground or during a proper assessment — climbing onto a roof to check is not recommended.",
      "This is observation guidance only. If you spot something, note the location and raise it through a general enquiry so it can be assessed properly.",
    ],
  },
  {
    slug: "gaps-that-invite-rodents",
    title: "Exterior gaps that can invite rodents",
    primaryServiceSlug: "rodent-checks",
    secondaryLink: { type: "service", slug: "squirrel-exclusion" },
    evidenceDate: "2026-09-08",
    editorialNote: "Avoid claims that a step solves every issue.",
    summary: "The small exterior openings rodents use — and why no single step solves every situation.",
    body: [
      "Rodents need only small openings. Common invitation points include gaps at garage door corners, utility penetrations, foundation vents, and deteriorated door sweeps.",
      "Sealing obvious gaps is a sensible step, but no single step solves every situation — the right mix depends on the property.",
      "A cold-season rodent check looks at these points systematically. If you are seeing signs, a general enquiry is the place to start.",
    ],
  },
  {
    slug: "bird-nesting-around-the-home",
    title: "Bird nesting around the home: practical considerations",
    primaryServiceSlug: "bird-deterrence",
    secondaryLink: { type: "area", slug: "denver" },
    evidenceDate: "2026-09-07",
    editorialNote: "Avoid legal advice.",
    summary: "Why deterrence and timing matter more than removal when birds nest on ledges, vents, and gutters.",
    body: [
      "Birds commonly nest on ledges, in vents, and around gutters. The practical considerations are mostly about timing and deterrence rather than removal.",
      "Timing matters because protections can apply to some nesting situations. Before acting on an active nest, check current local guidance — this article is not legal advice.",
      "Deterrence options discussed during enquiry typically focus on making favoured spots less inviting, such as physical barriers or visual deterrents, rather than disturbing nests.",
    ],
  },
  {
    slug: "securing-outdoor-attractants",
    title: "Securing outdoor attractants around a property",
    primaryServiceSlug: "raccoon-exclusion",
    secondaryLink: { type: "service", slug: "skunk-prevention" },
    evidenceDate: "2026-09-07",
    editorialNote: "General property guidance.",
    summary: "Bins, pet food, fallen fruit, compost, and shelter access — general property guidance that complements exclusion work.",
    body: [
      "Much wildlife pressure around a property starts with attractants. Latched bins, pet food kept indoors overnight, fallen fruit picked up, and managed compost all reduce interest.",
      "Pet doors and unsecured crawl-space access are also worth reviewing, since easy shelter can matter as much as food.",
      "Securing attractants complements exclusion work rather than replacing it. It is general property guidance that applies whether or not you currently have a problem.",
    ],
  },
  {
    slug: "spring-yard-pest-prevention",
    title: "Spring yard pest-prevention checklist",
    primaryServiceSlug: "ant-prevention",
    secondaryLink: { type: "service", slug: "spider-management" },
    evidenceDate: "2026-09-06",
    editorialNote: "Prevention framing only.",
    summary: "A spring yard pass: standing water, vegetation, firewood storage, and the perimeter — prevention framing only.",
    body: [
      "Spring is the right time for a yard-level prevention pass. Clear standing water, trim vegetation back from walls, and move firewood away from the house.",
      "Check the perimeter for new gaps that appeared over winter, and keep mulch depth modest near the foundation.",
      "This checklist is prevention framing only — results vary by property and season, and it is not a guarantee against pests.",
    ],
  },
];
