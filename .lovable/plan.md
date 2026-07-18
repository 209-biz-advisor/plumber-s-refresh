
## Goal
Model structural sections from andersonplumbingheatingandair.com that Mainline's current site is missing, adapted to Mainline's existing navy/orange brand, Oswald/Inter type, and current copy. No changes to services/about/contact page content — only the home page gets new sections, plus one small header addition.

## Sections to add (in this order on `/`)

Insert between the existing service cards and the "Quality Over Quantity" section:

1. **Current Offers / Specials strip**
   - Section heading: "Check Out Our Current Specials"
   - 4 offer cards in a responsive grid, each with big price/percentage, short label, fine-print restriction line, and a "Schedule Service" button.
   - Placeholder offers tuned to plumbing: `$0 Service Call w/ Repair`, `$50 Off Drain Clearing`, `$250 Off Tankless Water Heater`, `10% Senior & Military Discount`.
   - Ends with a text link: "View All Offers →" (points to `/contact` for now).

2. **Awards / Trust badges row**
   - Horizontal strip of 5–6 badge placeholders: BBB A+, Google 5-Star, Angi, Yelp, Nextdoor Neighborhood Fave, Family-Owned Since 1997.
   - Rendered as styled monochrome badges (SVG/inline styled divs) — no fake external logos.

3. **Stats block** (compact 3-stat strip on home)
   - `28+ Years Experience` · `5-Star Google Reviews` · `24/7 Emergency Response`
   - Sits above or replaces the existing single-line trust line under the owner block.

4. **Dual CTA footer band** (before the existing contact form)
   - Two side-by-side cards on a navy background with a subtle pattern:
     - Left: icon + "Schedule Your Service Today" + Schedule/Call buttons.
     - Right: icon (alert) + "Need Emergency Service?" + big phone button `(209) 560-6652`.

## Header addition
- Add a small left-side promo message in the utility bar: "Winter's Coming — Schedule your water heater flush today." Static text, no carousel.

## Explicitly not included
- **No maintenance membership / care club section** — removed per request.

## Files touched
- `src/routes/index.tsx` — add the 4 new sections in the order above; keep every existing section intact.
- `src/components/SiteHeader.tsx` — add promo line to top utility bar (left of phone).
- `src/styles.css` — add any small utility classes needed for offer cards and dual-CTA band (only if not achievable with existing classes).

## Out of scope
- No changes to Services, About, or Contact pages.
- No new routes (Specials, Blog, FAQ) — buttons point to `/contact`.
- No stock logos of BBB/Google/Angi — styled text badges only, to avoid trademark misuse.
- No copy rewrites for existing sections.

## Technical notes
- Reuse existing tokens: `--navy-deep`, `--brand-orange`, `--brand-red`, `.btn-primary`, `.btn-outline`, `.container-x`, `.eyebrow`.
- All new icons from `lucide-react`: `BadgePercent`, `ShieldCheck`, `Award`, `Star`, `Wrench`, `Phone`, `CalendarClock`, `AlertTriangle`.
- Fully responsive: 1-col mobile → 2-col tablet → 4-col desktop for offers and badges.
