/**
 * Contextual internal linking (keyword interlinking).
 *
 * Rules:
 *  1. One link per keyword group per page (first mention only).
 *  2. Never self-link.
 *  3. Max 2 links per paragraph, max 8 per page.
 *  4. Longest phrase wins.
 *  5. Anchor text is the real phrase from the sentence.
 *  6. One city link per page max.
 *
 * Not used in headings, hero H1, FAQ answers, JSON-LD, nav or footer.
 */

export type LinkGroup = {
  /** Canonical destination, trailing slash. */
  path: string;
  /** Phrases that should point at that page. */
  phrases: string[];
  /** City groups share a single per-page budget. */
  city?: boolean;
};

export const LINK_MAP: LinkGroup[] = [
  { path: "/plumbing-services/kitchen-bath-remodeling/toilet-repair/", phrases: ["running toilet", "clogged toilet", "toilet repair", "leaking toilet", "toilet"] },
  { path: "/plumbing-services/toilet-installation/", phrases: ["toilet installation", "new toilet"] },
  { path: "/plumbing-services/fixture-plumbing/fixture-repair/faucet-repair/", phrases: ["dripping faucet", "leaky faucet", "faucet repair", "faucet"] },
  { path: "/plumbing-services/fixture-plumbing/faucet-installation/", phrases: ["faucet installation", "new faucet"] },
  { path: "/plumbing-services/fixture-plumbing/sink-installations/", phrases: ["sink installation", "sink"] },
  { path: "/plumbing-services/fixture-plumbing/shower-installation/", phrases: ["shower installation", "shower valve", "shower"] },
  { path: "/plumbing-services/fixture-plumbing/", phrases: ["fixture plumbing", "plumbing fixtures"] },
  { path: "/plumbing-services/drain-cleaning/", phrases: ["clogged drain", "clogged drains", "drain cleaning", "slow drain", "slow drains", "drain"] },
  { path: "/plumbing-services/sewer-line-repair/", phrases: ["sewer line repair", "sewer line", "sewer lines", "sewer backup"] },
  { path: "/plumbing-services/sewer-services/", phrases: ["sewer services"] },
  { path: "/plumbing-services/video-camera-inspections/", phrases: ["camera inspection", "video camera inspection", "sewer camera"] },
  { path: "/plumbing-services/hydrojetting/", phrases: ["hydrojetting", "hydro jetting"] },
  { path: "/plumbing-services/gas-line/", phrases: ["gas line", "gas lines"] },
  { path: "/plumbing-services/gas-line/gas-line-installation/", phrases: ["gas line installation"] },
  { path: "/plumbing-services/piping-repiping/", phrases: ["repiping", "repipe", "galvanized pipe", "galvanized piping"] },
  { path: "/plumbing-services/leak-detection/", phrases: ["slab leak", "leak detection", "water leak", "hidden leak"] },
  { path: "/plumbing-services/frozen-pipe-repair/", phrases: ["frozen pipe", "frozen pipes"] },
  { path: "/plumbing-services/water-softener-repair-installation/", phrases: ["water softener", "hard water", "scale buildup"] },
  { path: "/plumbing-services/water-treatment-systems/", phrases: ["water treatment", "chlorine taste"] },
  { path: "/plumbing-services/water-purification-systems/", phrases: ["water purification", "reverse osmosis"] },
  { path: "/plumbing-services/water-line-plumbing/", phrases: ["water line", "main water line"] },
  { path: "/plumbing-services/garbage-disposal-repair/", phrases: ["garbage disposal repair", "garbage disposal"] },
  { path: "/plumbing-services/garbage-disposal-installation/", phrases: ["garbage disposal installation"] },
  { path: "/plumbing-services/emergency-plumbing/", phrases: ["emergency plumber", "emergency plumbing", "burst pipe", "burst pipes"] },
  { path: "/plumbing-services/plumbing-repairs/", phrases: ["plumbing repairs"] },
  { path: "/plumbing-services/plumbing-inspections/", phrases: ["plumbing inspection", "plumbing inspections"] },
  { path: "/plumbing-services/plumbing-maintenance/", phrases: ["plumbing maintenance"] },
  { path: "/plumbing-services/commercial-plumbing/", phrases: ["commercial plumbing", "commercial property"] },
  { path: "/plumbing-services/backflow-prevention-testing/", phrases: ["backflow prevention", "backflow testing", "backflow"] },
  { path: "/plumbing-services/grease-trap-cleaning/", phrases: ["grease trap", "grease traps"] },
  { path: "/plumbing-services/kitchen-bath-remodeling/", phrases: ["kitchen remodel", "bathroom remodel", "kitchen and bath remodeling"] },
  { path: "/water-heaters/water-heater-installation/", phrases: ["water heater installation", "water heater replacement", "tank replacement", "water heater"] },
  { path: "/water-heaters/tankless-water-heaters/", phrases: ["tankless water heater", "tankless water heaters", "tankless"] },
  { path: "/water-heaters/water-heater-flushing/", phrases: ["water heater flush", "annual flush", "flush the tank", "sediment"] },
  { path: "/water-heaters/electric-water-heaters/", phrases: ["electric water heater", "electric water heaters", "heat pump water heater"] },
  { path: "/water-heaters/water-heater-repair/", phrases: ["water heater repair", "no hot water", "pilot light", "thermocouple"] },
  { path: "/areas-we-serve/modesto/", phrases: ["Modesto"], city: true },
  { path: "/areas-we-serve/turlock/", phrases: ["Turlock"], city: true },
  { path: "/areas-we-serve/oakdale/", phrases: ["Oakdale"], city: true },
  { path: "/areas-we-serve/riverbank/", phrases: ["Riverbank"], city: true },
  { path: "/areas-we-serve/ripon/", phrases: ["Ripon"], city: true },
  { path: "/areas-we-serve/manteca/", phrases: ["Manteca"], city: true },
  { path: "/areas-we-serve/lathrop/", phrases: ["Lathrop"], city: true },
  { path: "/areas-we-serve/salida/", phrases: ["Salida"], city: true },
];

const MAX_PER_PARAGRAPH = 2;
const MAX_PER_PAGE = 8;
const MAX_CITY_LINKS = 1;

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** All phrases, longest first, so "tankless water heater" beats "water heater". */
const PHRASES: { phrase: string; group: LinkGroup }[] = LINK_MAP.flatMap((group) =>
  group.phrases.map((phrase) => ({ phrase, group })),
).sort((a, b) => b.phrase.length - a.phrase.length);

/** Phrases match with an optional plural suffix so "faucets" links like "faucet". */
const MASTER = new RegExp(
  `\\b(${PHRASES.map((p) => `${escapeRegExp(p.phrase)}(?:es|s)?`).join("|")})\\b`,
  "gi",
);

/** Strip a plural suffix so a matched word maps back to its phrase group. */
function singularize(s: string) {
  return s.replace(/(?:es|s)$/i, "");
}

export type LinkPart = { text: string; href?: string };

/** Per-page link budget. Create one per rendered page. */
export type LinkBudget = {
  currentPath: string;
  used: Set<string>;
  total: number;
  cities: number;
};

function normalizePath(p: string) {
  const clean = p.split("?")[0]!.split("#")[0]!;
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function createBudget(currentPath: string): LinkBudget {
  return { currentPath: normalizePath(currentPath), used: new Set(), total: 0, cities: 0 };
}

/**
 * Split a paragraph into plain-text and link parts, honoring the budget.
 * Returns a single plain part when nothing matched.
 */
export function linkifyParts(text: string, budget: LinkBudget): LinkPart[] {
  if (!text) return [{ text }];
  const parts: LinkPart[] = [];
  let inParagraph = 0;
  let cursor = 0;

  MASTER.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = MASTER.exec(text)) !== null) {
    if (budget.total >= MAX_PER_PAGE || inParagraph >= MAX_PER_PARAGRAPH) break;
    const matched = m[0];
    const lower = matched.toLowerCase();
    const base = singularize(lower);
    const found = PHRASES.find((p) => {
      const ph = p.phrase.toLowerCase();
      return ph === lower || ph === base;
    });
    if (!found) continue;
    const { group } = found;
    if (group.path === budget.currentPath) continue;
    if (budget.used.has(group.path)) continue;
    if (group.city && budget.cities >= MAX_CITY_LINKS) continue;

    if (m.index > cursor) parts.push({ text: text.slice(cursor, m.index) });
    parts.push({ text: matched, href: group.path });
    cursor = m.index + matched.length;
    budget.used.add(group.path);
    budget.total += 1;
    inParagraph += 1;
    if (group.city) budget.cities += 1;
  }

  if (parts.length === 0) return [{ text }];
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}

/**
 * Deterministic page plan.
 *
 * Link assignment must not depend on React render order: mutating a shared budget
 * during render can produce a different result on the server than on the client and
 * trip a hydration mismatch. Callers pass every body string in data order once, and
 * render from the returned map.
 */
export function planLinks(currentPath: string, texts: (string | undefined)[]): Map<string, LinkPart[]> {
  const budget = createBudget(currentPath);
  const plan = new Map<string, LinkPart[]>();
  for (const t of texts) {
    if (!t || plan.has(t)) continue;
    plan.set(t, linkifyParts(t, budget));
  }
  return plan;
}
