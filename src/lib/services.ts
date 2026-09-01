/**
 * Service catalog. Slugs mirror the live mainlineplumber.com URL tree exactly so the
 * .net -> .com domain swap resolves 1:1 with what Google already has indexed.
 *
 * `slug` is the path AFTER the hub, e.g. "fixture-plumbing/faucet-repair" lives at
 * /plumbing-services/fixture-plumbing/faucet-repair/
 */
export type ServiceFaq = { q: string; a: string };

/** A long-form content block rendered between "What's Included" and the FAQ. */
export type ServiceSection = {
  heading: string;
  /** Paragraphs of prose. */
  body?: string[];
  /** Symptom / benefit list. `lead` is the bolded phrase before the colon. */
  list?: { lead?: string; text: string }[];
};

export type ServiceEntry = {
  slug: string;
  hub: "plumbing-services" | "water-heaters";
  name: string;
  /** Meta description + hero subhead. */
  desc: string;
  intro: string;
  bullets: string[];
  faqs: ServiceFaq[];
  /** Optional long-form authority content. Pages without it render as before. */
  sections?: ServiceSection[];
  /** Optional parent slug within the same hub, for breadcrumbs. */
  parent?: string;
};


const P = "plumbing-services" as const;
const W = "water-heaters" as const;

export const services: ServiceEntry[] = [
  {
    slug: "drain-cleaning", hub: P, name: "Drain Cleaning",
    desc: "Fast drain cleaning in Escalon, Modesto and across the 209 & 350. Kitchen, bath, laundry and main line clogs cleared the same day.",
    intro:
      "A slow sink is annoying. A backed-up main line is a wrecked weekend. We cable, snake and camera drain lines across Stanislaus and San Joaquin County, and we tell you straight whether you have a one-time clog or a line that needs real attention.",
    bullets: ["Kitchen, bath, laundry and main line clearing", "Cable machines and hydrojetting", "Camera inspection to confirm the cause", "Root intrusion and grease buildup removal", "Upfront flat-rate pricing before we start"],
    sections: [
      {
        heading: "Drain Cleaning in Escalon, Modesto & Across the 209 & 350",
        body: [
          "Drains almost never fail all at once. They get slower, they gurgle, they hold water for a second longer each week, and then one evening the kitchen sink backs up while dinner is on the stove. By that point the blockage has usually been building for months.",
          "We clear kitchen, bath, laundry, tub, shower and main sewer lines for homeowners and businesses throughout Stanislaus and San Joaquin County. Miguel has 37+ years in the trade and has been the owner and lead plumber here since 2010, so the tech at your door is not guessing about what a line is doing.",
        ],
      },
      {
        heading: "Signs Your Drain Needs Professional Cleaning",
        body: ["One slow fixture is usually local. Several slow fixtures at once points at the main line, and that is the call you want to make sooner rather than later."],
        list: [
          { lead: "Water standing in the sink or tub", text: "the line is partially blocked and the restriction is only going to tighten." },
          { lead: "Gurgling from another fixture", text: "air is being pushed back through the trap, which means the blockage is downstream." },
          { lead: "Bad smell at the drain", text: "grease, food and biofilm coating the pipe wall, not just something in the trap." },
          { lead: "Multiple fixtures slow at the same time", text: "a main line or branch line issue rather than a single clogged trap." },
          { lead: "Water backing up somewhere else", text: "flush the toilet and the tub fills, and you have a main line blockage." },
          { lead: "Repeat clogs in the same drain", text: "the cause was never removed. Cabling the same spot every few months is a symptom, not a repair." },
        ],
      },
      {
        heading: "How We Actually Clear the Line",
        body: [
          "We start by identifying which line is blocked and where the accessible cleanout is, then match the tool to the job. A cable machine cuts through soft blockages and root hair. Hydrojetting scours the full diameter of the pipe with water, which is what grease-loaded kitchen and restaurant lines actually need.",
          "When a line has backed up more than once, we put a camera down it. That turns guesswork into a picture: roots at a joint, a belly holding water, a crushed section, or simply years of buildup. You see the screen with us, so the repair decision is yours and it is informed.",
        ],
      },
      {
        heading: "Why Drains Clog Harder in the Central Valley",
        body: [
          "Two local realities work against your drain lines. Our water is hard, so scale builds on the inside of the pipe and gives grease and debris something to grab. And a lot of Escalon, Modesto, Riverbank and Oakdale homes sit on mature lots where established tree and shrub roots have spent decades finding their way toward the moisture in a sewer joint.",
          "Older neighborhoods add clay and cast iron lines to the mix, both of which roughen and scale with age. That is why a line that ran fine for twenty years suddenly needs attention twice in one year.",
        ],
      },
      {
        heading: "Keeping Drains Clear Between Visits",
        body: [
          "Scrape plates instead of rinsing them, keep grease and coffee grounds out of the sink, run hot water after doing dishes, and use a strainer in the shower. Skip the caustic store-bought drain chemicals. They sit on the blockage, generate heat, and in older galvanized and cast iron lines they attack the pipe more effectively than the clog.",
          "If your home has a history of main line trouble, an annual cleaning is cheaper than a backup. We serve Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding communities. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "How fast can you clear my drain?", a: "Most residential clogs are cleared in a single visit, and we hold same-day slots every day for backups that can't wait." },
      { q: "Why does my drain keep clogging?", a: "Repeat clogs usually mean grease buildup, root intrusion or a bellied line. We run a camera so you are fixing the cause, not the symptom." },
      { q: "How often should drains be professionally cleaned?", a: "Most homes do well with a main line cleaning every year or two. Homes with mature trees over the sewer line, or kitchens that see heavy cooking, benefit from an annual visit." },
      { q: "Are chemical drain cleaners safe for my pipes?", a: "We do not recommend them. They rarely remove the real blockage and they are hard on older galvanized, cast iron and ABS lines as well as on your trap seals." },
      { q: "What is the difference between snaking and hydrojetting?", a: "A cable punches through the blockage and restores flow. Hydrojetting uses high-pressure water to scrub the pipe wall clean, which is the better answer for grease, scale and recurring clogs." },
      { q: "Do you use a camera on every drain call?", a: "Not on a simple one-time clog. We recommend it any time a line has backed up more than once, or when we need to confirm roots, a belly or a broken section before you spend money on a repair." },
      { q: "Can you clear a main sewer line backup?", a: "Yes. Main line backups are one of our most common calls, and we will locate the cleanout, clear the line and tell you honestly what condition the pipe is in." },
      { q: "Do you handle commercial kitchen drains and grease lines?", a: "Yes, including restaurants and multi-unit properties. Grease-loaded lines respond best to jetting on a scheduled interval so you are not closing the kitchen unexpectedly." },
    ],
  },
  {
    slug: "emergency-plumbing", hub: P, name: "Emergency Plumbing",
    desc: "Emergency plumbing repairs for burst pipes, major leaks, sewer backups and water heater failures across the Central Valley.",
    intro:
      "When water is going somewhere it shouldn't, minutes matter. Our emergency plumbing crew handles burst supply lines, slab leaks, sewer backups and dead water heaters, and we walk you through shutting the water off while we're on the way.",
    bullets: ["Burst and leaking pipe repair", "Sewer and main line backups", "No hot water and leaking water heaters", "Overflowing toilets and failed shutoff valves", "Damage control guidance while we roll"],
    sections: [
      {
        heading: "Emergency Plumbing in Escalon, Modesto & the 209 & 350",
        body: [
          "A plumbing emergency is any moment where waiting makes the damage worse. Water spreading across a floor, sewage coming up a shower drain, a supply line that let go inside a wall. Those calls do not wait for a convenient appointment window, and we do not treat them like they should.",
          "We handle emergency repairs for homes and businesses across Stanislaus and San Joaquin County. To be straight with you, we are not a 24-hour call center; we are a family-owned shop that gets emergency work to the front of the schedule and gets a licensed plumber to you fast. Call 209.838.1000 and you will talk to people who know the area and the equipment.",
        ],
      },
      {
        heading: "What to Do First When You Have a Plumbing Emergency",
        body: ["Before anything else, stop the water. These four steps limit the damage while we are on the way."],
        list: [
          { lead: "Shut off the main water valve", text: "usually at the front of the house near the hose bib or at the street meter. Turn it clockwise until it stops." },
          { lead: "Kill power or gas to the water heater", text: "if the heater is the source, flip its breaker or turn the gas control to off." },
          { lead: "Move what you can", text: "get boxes, rugs and electronics off the wet floor before the water wicks into them." },
          { lead: "Do not use the fixtures", text: "with a sewer backup, every flush and every load of laundry adds to what is coming up." },
          { lead: "Call 209.838.1000", text: "tell us what you are seeing and we will talk you through anything else while a truck is dispatched." },
        ],
      },
      {
        heading: "Slow Leaks Are Emergencies Too, They Just Hide",
        body: [
          "The expensive leaks are often the quiet ones. Water moving behind drywall or under a slab can run for weeks before anyone notices, and by then you are dealing with framing, flooring and mold instead of a pipe.",
          "Watch for water stains on ceilings or walls, damp or warm spots on the floor, a sudden jump in your water bill, a musty smell in one room, or a meter that keeps creeping with every fixture off. Any one of those is worth a leak detection visit now rather than a restoration bill later.",
        ],
      },
      {
        heading: "The Emergencies We Get Called For Most",
        body: [
          "Burst and split supply lines, failed angle stops and hose bibs, water heaters leaking from the tank body, overflowing toilets, main sewer backups, slab leaks, broken pressure regulators and gas odors. We arrive with the parts and equipment those jobs actually take, so the first visit is usually the fix.",
          "Every repair gets a flat-rate quote before we start. Even in an emergency you should know the number first, and you should never feel rushed into a decision by the person holding the wrench.",
        ],
      },
      {
        heading: "Local, Licensed and Accountable",
        body: [
          "Mainline Plumbing Inc. is family owned in Escalon and licensed as a California C-36 plumbing contractor, Lic. #953726. Miguel has 37+ years in the trade and has run this company since 2010, and our reputation is built on hundreds of local reviews from neighbors, not on an ad budget.",
          "We respond throughout Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities.",
        ],
      },
    ],
    faqs: [
      { q: "What counts as a plumbing emergency?", a: "Any active leak, sewage backup, no-water situation or gas smell. If water is spreading or you had to shut the main off, call us." },
      { q: "What should I do before you arrive?", a: "Shut off the main water valve, kill power to the water heater if it is leaking, and move belongings out of the water." },
      { q: "Where is my main water shutoff?", a: "On most Valley homes it is on the street-facing wall near the hose bib, or in a box at the curb. It is worth finding it today, before you need it in the dark." },
      { q: "I smell gas. What should I do?", a: "Leave the building, do not flip switches, and call your gas utility from outside. Once they have made it safe, call us at 209.838.1000 for the line repair." },
      { q: "Are you available around the clock?", a: "We are not a 24-hour operation and we will not pretend otherwise. Emergency calls go to the top of the schedule and we get a licensed plumber out fast." },
      { q: "Do you handle commercial emergencies?", a: "Yes. Restaurants, offices, retail and multi-unit properties, where a backup means lost revenue every hour it continues." },
      { q: "Will my homeowners insurance cover this?", a: "Sudden failures are often covered while long-term seepage often is not. Take photos before cleanup and keep our written invoice; both help your claim." },
      { q: "Can a small drip really wait?", a: "It can wait for an appointment, but not indefinitely. A drip inside a wall or under a slab is doing damage you cannot see, and it never gets cheaper." },
    ],
  },
  {
    slug: "plumbing-repairs", hub: P, name: "Plumbing Repairs",
    desc: "Residential and commercial plumbing repairs: leaks, valves, toilets, faucets, disposals and supply lines, fixed right the first time.",
    intro:
      "Most plumbing calls aren't dramatic, they're just the thing that has been dripping, running or half-working for months. We fix it properly, with parts that last, and we show you what failed and why.",
    bullets: ["Leaking pipes, valves and supply lines", "Running toilets and dripping faucets", "Angle stops, hose bibs and pressure regulators", "Garbage disposals and dishwasher connections", "Written flat-rate quote before any work begins"],
    faqs: [
      { q: "Do you charge for a diagnosis?", a: "We quote the repair upfront, and the service call is waived when you move forward with the repair." },
      { q: "Do you repair commercial plumbing too?", a: "Yes. We handle restaurants, offices, retail and multi-unit properties throughout the 209 & 350." },
    ],
  },
  {
    slug: "leak-detection", hub: P, name: "Leak Detection",
    desc: "Non-invasive leak detection for slab leaks, wall leaks and underground water lines in Escalon, Modesto and surrounding cities.",
    intro:
      "A high water bill with nothing visibly wrong usually means a hidden leak. We locate slab, wall and underground leaks with acoustic and pressure equipment so the repair is surgical instead of destructive.",
    bullets: ["Slab leak location", "Wall and ceiling leak tracing", "Underground water and irrigation line leaks", "Pressure testing and meter verification", "Repair or reroute options quoted side by side"],
    faqs: [
      { q: "How do I know I have a hidden leak?", a: "Warm spots on the floor, a spiking water bill, the sound of running water with everything off, or a meter that keeps moving." },
      { q: "Do you have to break the slab?", a: "Not always. Depending on the location we can often reroute the line overhead instead of opening the concrete." },
    ],
  },
  {
    slug: "gas-line", hub: P, name: "Gas Line Services",
    desc: "Licensed gas line repair, testing and installation for ranges, water heaters, furnaces, fire pits and outdoor kitchens.",
    intro:
      "Gas work is not the place to gamble. We're a licensed C-36 contractor and we pressure test every line we touch, whether it's a leak repair or a new run out to a barbecue island.",
    bullets: ["Gas leak location and repair", "Pressure testing and certification", "Appliance, range and water heater connections", "Permits pulled and inspections handled", "Sediment traps and shutoffs to code"],
    faqs: [
      { q: "I smell gas. What now?", a: "Leave the house, don't touch switches, and call your utility from outside. Then call us for the repair." },
      { q: "Do gas lines need a permit?", a: "New runs and most modifications do. We pull the permit and meet the inspector so you don't have to." },
    ],
  },
  {
    slug: "gas-line/gas-line-installation", parent: "gas-line", hub: P, name: "Gas Line Installation",
    desc: "New gas line installation for ranges, tankless water heaters, pool heaters, fire pits and outdoor kitchens, permitted and pressure tested.",
    intro:
      "Adding a gas range, converting to tankless, or running a line out to a fire pit means sizing the pipe for real demand, not guessing. We calculate the load, size the run, and certify the finished line.",
    bullets: ["Load calculation and correct pipe sizing", "Black iron, CSST and underground PE runs", "Tankless water heater gas upsizing", "Outdoor kitchen, fire pit and pool heater lines", "Permitted, tested and inspected"],
    faqs: [
      { q: "Can my current gas line run a tankless heater?", a: "Often not without upsizing. Tankless units demand far more BTU than a tank, and we verify before quoting." },
      { q: "How long does an install take?", a: "Most residential runs are a one-day job, plus inspection scheduling." },
    ],
  },
  {
    slug: "piping-repiping", hub: P, name: "Piping & Repiping",
    desc: "Whole-home repiping in copper and PEX. Replace failing galvanized, polybutylene and pinhole-leaking copper for good.",
    intro:
      "When you're patching a new pinhole every few months, you're paying for a repipe on the installment plan. We repipe homes in copper or PEX with clean access cuts, one shutdown, and a warranty behind it.",
    bullets: ["Whole-home and partial repipes", "Galvanized and polybutylene replacement", "Copper and PEX-A options", "Minimal, patch-ready drywall access", "Water back on the same day in most homes"],
    faqs: [
      { q: "Copper or PEX?", a: "PEX resists the hard water and pinhole corrosion common here and costs less; copper is still preferred in exposed runs. We'll quote both." },
      { q: "Do I have to move out?", a: "No. Most repipes are one to three days with water restored each evening." },
    ],
  },
  {
    slug: "frozen-pipe-repair", hub: P, name: "Frozen Pipe Repair",
    desc: "Frozen and burst pipe repair during Central Valley cold snaps, plus freeze-proofing for exposed lines and hose bibs.",
    intro:
      "Valley winters don't stay cold long, which is exactly why local pipes aren't built for it. Exposed lines in garages, crawlspaces and along exterior walls are the ones that split when a hard freeze rolls through.",
    bullets: ["Safe thawing without damaging the pipe", "Burst section replacement", "Hose bib and irrigation line repair", "Insulation and heat tape on vulnerable runs", "Freeze-season prevention checks"],
    faqs: [
      { q: "My pipe is frozen but not burst. What should I do?", a: "Open the faucet, shut the main if you can, and don't use an open flame. Call us to thaw it safely." },
      { q: "How do I prevent it next winter?", a: "Insulate exposed lines, cover hose bibs, and drain irrigation. We handle all three in one visit." },
    ],
  },
  {
    slug: "plumbing-inspections", hub: P, name: "Plumbing Inspections",
    desc: "Whole-home plumbing inspections for buyers, sellers, landlords and homeowners, with photos and a prioritized report.",
    intro:
      "Buying, selling or just tired of surprises? We inspect supply lines, drains, fixtures, water heater, pressure and shutoffs, then hand you a plain-English report with what's urgent and what can wait.",
    bullets: ["Buyer and seller pre-sale inspections", "Water pressure and regulator testing", "Water heater age and condition review", "Sewer camera add-on available", "Photo report with prioritized findings"],
    faqs: [
      { q: "Is this the same as a home inspection?", a: "No. A general inspector glances at plumbing; we're licensed plumbers testing the system in depth." },
      { q: "Should I add a sewer camera?", a: "On any home built before 1980, yes. Main line surprises are the expensive kind." },
    ],
  },
  {
    slug: "plumbing-maintenance", hub: P, name: "Plumbing Maintenance",
    desc: "Preventive plumbing maintenance: water heater flushing, drain care, valve exercise and pressure checks for Valley homes.",
    intro:
      "Hard Central Valley water is rough on water heaters, fixtures and valves. An annual once-over catches the small stuff before it turns into an emergency call at 6 AM.",
    bullets: ["Water heater flush and anode check", "Angle stop and shutoff valve exercise", "Pressure regulator verification", "Drain and disposal maintenance", "Leak and corrosion walkthrough"],
    faqs: [
      { q: "How often should plumbing be serviced?", a: "Once a year for most homes, and more often on well water or with a tankless unit." },
      { q: "Do you offer a membership plan?", a: "No monthly plans. You book maintenance when you want it, at a straightforward price." },
    ],
  },
  {
    slug: "hydrojetting", hub: P, name: "Hydrojetting",
    desc: "High-pressure hydrojetting to scour grease, sludge and roots out of drain and sewer lines, residential and commercial.",
    intro:
      "A cable punches a hole through a clog. Hydrojetting scrubs the pipe wall back to full diameter. For grease-loaded kitchen lines and root-invaded sewers, it's the difference between a fix and a rerun.",
    bullets: ["Grease, sludge and scale removal", "Root cutting in sewer laterals", "Restaurant and commercial kitchen lines", "Before-and-after camera verification", "Safe pressure matched to your pipe material"],
    faqs: [
      { q: "Will jetting damage old pipes?", a: "We camera the line first and set pressure to the material. If a line is too fragile, we say so." },
      { q: "How often do restaurants need it?", a: "Most commercial kitchens run on a quarterly or semiannual schedule." },
    ],
  },
  {
    slug: "sewer-services", hub: P, name: "Sewer Services",
    desc: "Complete sewer services: camera inspection, cleaning, spot repair and full lateral replacement across the 209 & 350.",
    intro:
      "The sewer lateral is the one line nobody thinks about until everything backs up at once. We inspect, clean, repair and replace laterals, and we show you the camera footage so you can see what you're paying to fix.",
    bullets: ["Sewer camera inspection and locating", "Cleaning, cabling and hydrojetting", "Spot repairs and full replacement", "Cleanout installation", "City and county permitting handled"],
    faqs: [
      { q: "How do I know the sewer is the problem?", a: "Multiple fixtures backing up at once, gurgling toilets, or sewage at the lowest drain in the house." },
      { q: "Can a damaged sewer line be repaired instead of replaced?", a: "Often yes. A camera inspection tells us whether we are dealing with a single break, root intrusion or a bellied line, and we repair the failed section when the rest of the pipe is sound." },
    ],
  },
  {
    slug: "sewer-line-repair", hub: P, name: "Sewer Line Repair",
    desc: "Sewer line repair and replacement for cracked, offset, root-invaded and collapsed laterals, with camera proof before and after.",
    intro:
      "Cracked clay, offset joints and root intrusion are the three things we find under most older Valley properties. We locate the exact failure point, quote a spot repair when that's honest, and a replacement when it isn't.",
    bullets: ["Camera locate before any digging", "Spot repair on isolated failures", "Full lateral replacement", "Root intrusion and collapsed line correction", "Site restored and compacted when we're done"],
    faqs: [
      { q: "Spot repair or full replacement?", a: "If the rest of the line images clean, a spot repair is right. If the pipe is failing throughout, replacing it once beats paying twice." },
      { q: "How long does it take?", a: "Most residential sewer repairs are completed in one to two days including inspection." },
    ],
  },
  {
    slug: "video-camera-inspections", hub: P, name: "Video Camera Inspections",
    desc: "Sewer and drain video camera inspection with on-screen locating, recorded footage and a clear repair recommendation.",
    intro:
      "Guessing is expensive. We push a camera down the line, locate the trouble spot to the foot, and hand you the footage so any recommendation we make is something you can see for yourself.",
    bullets: ["Sewer lateral and drain line inspection", "Depth and location marking above ground", "Recorded video provided to you", "Pre-purchase inspections for buyers", "Post-repair verification"],
    faqs: [
      { q: "Can you tell where the problem is from the surface?", a: "Yes. Our camera has a sonde locator, so we mark the exact spot and depth on the ground." },
      { q: "Is a camera worth it before buying a home?", a: "Absolutely. A lateral replacement is one of the largest surprise costs a new homeowner can hit." },
    ],
  },
  {
    slug: "commercial-plumbing", hub: P, name: "Commercial Plumbing",
    desc: "Commercial plumbing for restaurants, retail, offices and multi-unit properties: repairs, water heaters, drains and grease traps.",
    intro:
      "Downtime costs you money, so we schedule around your hours and show up with the truck stocked. From restaurant kitchens to property management portfolios, we keep commercial plumbing running.",
    bullets: ["Restaurant and commercial kitchen plumbing", "Commercial water heaters and recirculation", "Grease trap service and drain maintenance", "Multi-unit and property management accounts", "Before-hours and after-hours scheduling"],
    faqs: [
      { q: "Do you work with property managers?", a: "Yes, on both one-off calls and ongoing portfolios, with consolidated invoicing." },
      { q: "Can you work outside business hours?", a: "Yes. We schedule commercial work around your operating hours whenever possible." },
    ],
  },
  {
    slug: "kitchen-bath-remodeling", hub: P, name: "Kitchen & Bath Remodeling Plumbing",
    desc: "Remodel plumbing for kitchens and bathrooms: rough-in, relocation, fixture setting and code-compliant final connections.",
    intro:
      "Your remodel is only as good as the plumbing behind the tile. We handle rough-in, fixture relocation, venting and final connections so the finish work goes on straight the first time.",
    bullets: ["Supply and drain rough-in", "Fixture and appliance relocation", "Tub-to-shower conversions", "Pot fillers, farmhouse sinks and vanity sets", "Coordination with your contractor's schedule"],
    faqs: [
      { q: "Do you work with our contractor?", a: "Yes, we're regularly the plumbing trade on remodels and we schedule to their timeline." },
      { q: "Can you move a sink or toilet?", a: "Usually yes, depending on the drain and vent layout. We check before quoting." },
    ],
  },
  {
    slug: "kitchen-bath-remodeling/toilet-repair", parent: "kitchen-bath-remodeling", hub: P, name: "Toilet Repair",
    desc: "Toilet repair for running, leaking, clogged, rocking and weak-flushing toilets, with same-day availability.",
    intro:
      "A running toilet can waste hundreds of gallons a day, and a rocking one is usually a failed wax ring quietly soaking your subfloor. Both are quick fixes when they're caught early.",
    bullets: ["Running and phantom-flushing toilets", "Wax ring and flange replacement", "Fill valve, flapper and handle repair", "Rocking, leaking and loose toilets", "Stubborn clogs and weak flush"],
    faqs: [
      { q: "Repair or replace?", a: "Under about ten years old, repair almost always wins. Cracked tanks or bowls get replaced." },
      { q: "Why is water pooling at the base?", a: "Usually a failed wax ring or a corroded flange. Don't wait on it, that water is reaching the subfloor." },
    ],
  },
  {
    slug: "water-softener-repair-installation", hub: P, name: "Water Softener Repair & Installation",
    desc: "Water softener installation, repair and salt system service for hard Central Valley water. Protect fixtures and water heaters.",
    intro:
      "Central Valley water is hard, and hard water is what shortens water heater life, spots your glassware and crusts your fixtures. A properly sized softener is one of the highest-return plumbing upgrades here.",
    bullets: ["Softener sizing based on your actual hardness", "New installation with bypass and drain", "Resin, valve and control head repair", "Salt-free conditioner options", "Loop installation for new construction"],
    faqs: [
      { q: "How hard is the water here?", a: "Hard enough to matter. We test on site and size the unit to your household's hardness and usage." },
      { q: "Will a softener help my water heater?", a: "Yes. Scale is the number one reason tanks fail early in this area." },
    ],
  },
  {
    slug: "water-treatment-systems", hub: P, name: "Water Treatment Systems",
    desc: "Whole-home water treatment: filtration, softening, iron and sediment removal, and well water systems.",
    intro:
      "Between municipal chlorine and rural well water, no two homes here have the same water problem. We test first, then build a treatment system around what's actually in your water.",
    bullets: ["On-site water testing", "Whole-home filtration", "Iron, sulfur and sediment removal", "Well water treatment and pressure tanks", "Annual media and filter service"],
    faqs: [
      { q: "Do you test the water first?", a: "Always. Selling a system before testing is how people end up with the wrong equipment." },
      { q: "Do you service well systems?", a: "Yes, including sediment, iron and bacteria treatment for rural properties." },
    ],
  },
  {
    slug: "water-purification-systems", hub: P, name: "Water Purification Systems",
    desc: "Drinking water purification: reverse osmosis, under-sink filtration and whole-home purification, installed and serviced.",
    intro:
      "If you're buying bottled water by the case, a purification system pays for itself fast. We install reverse osmosis and carbon systems at the sink or for the whole house, and we keep the filters on schedule.",
    bullets: ["Reverse osmosis under-sink systems", "Whole-home carbon purification", "Refrigerator and pot filler tie-ins", "Filter replacement service", "Post-install water quality verification"],
    faqs: [
      { q: "RO or whole-home?", a: "RO for drinking and cooking water, whole-home carbon for taste, odor and chlorine at every tap. Many homes use both." },
      { q: "How often do filters change?", a: "Typically every six to twelve months depending on the stage and your usage." },
    ],
  },
  {
    slug: "toilet-installation", hub: P, name: "Toilet Installation",
    desc: "New toilet installation including comfort height, dual flush and bidet-ready models, with haul-away of the old unit.",
    intro:
      "A new toilet is a same-day upgrade. We set it level on a solid flange with a new supply line and shutoff, and we take the old one with us.",
    bullets: ["Standard, comfort height and dual flush models", "New wax ring, bolts, supply line and angle stop", "Flange repair or replacement when needed", "Bidet-ready and smart toilet setups", "Old toilet hauled away"],
    faqs: [
      { q: "How long does it take?", a: "Most installs are under two hours, including flange work." },
      { q: "Can you supply the toilet?", a: "Yes, or we'll install one you already purchased." },
    ],
  },
  {
    slug: "garbage-disposal-repair", hub: P, name: "Garbage Disposal Repair",
    desc: "Garbage disposal repair for jammed, humming, leaking and dead units, with honest repair-versus-replace advice.",
    intro:
      "A humming disposal is usually jammed, a silent one is usually electrical, and a dripping one is usually done. We diagnose in minutes and tell you which of the three you have.",
    bullets: ["Jam clearing and reset", "Leaking flange and housing diagnosis", "Electrical and switch troubleshooting", "Drain and dishwasher line clearing", "Straight repair-or-replace recommendation"],
    faqs: [
      { q: "My disposal just hums. Is it dead?", a: "Usually not. That's typically a jam, and it's a quick fix." },
      { q: "It's leaking from the bottom. Can it be fixed?", a: "A bottom leak means the housing seal failed. That one is a replacement." },
    ],
  },
  {
    slug: "garbage-disposal-installation", hub: P, name: "Garbage Disposal Installation",
    desc: "New garbage disposal installation with proper mounting, dishwasher tie-in and drain alignment. Quiet high-torque models available.",
    intro:
      "The right disposal for a busy kitchen isn't the cheapest one on the shelf. We install quiet, higher-horsepower units, tie in the dishwasher correctly, and make sure the drain arm isn't fighting you.",
    bullets: ["1/2 to 1 HP unit sizing", "Sound-insulated models", "Dishwasher inlet connection", "Drain alignment and P-trap correction", "Old unit removed and hauled away"],
    faqs: [
      { q: "What horsepower do I need?", a: "3/4 HP suits most families; 1 HP if you cook heavily or have a large household." },
      { q: "Can you install one I bought?", a: "Yes, customer-supplied units are fine." },
    ],
  },
  {
    slug: "backflow-prevention-testing", hub: P, name: "Backflow Prevention & Testing",
    desc: "Backflow prevention device installation, annual certification testing and repair for homes, businesses and irrigation systems.",
    intro:
      "Backflow devices protect the drinking water supply, and most water districts require an annual certified test. We install, test, repair and file the paperwork.",
    bullets: ["Annual certified testing", "Device installation and replacement", "Repair and rebuild kits", "Irrigation and fire line assemblies", "Reports filed with your water district"],
    faqs: [
      { q: "How often must it be tested?", a: "Annually in nearly every district here, and you'll usually get a notice with a deadline." },
      { q: "What if it fails?", a: "We rebuild or replace the assembly and retest, then submit the passing report." },
    ],
  },
  {
    slug: "grease-trap-cleaning", hub: P, name: "Grease Trap Cleaning",
    desc: "Commercial grease trap cleaning, pumping and maintenance scheduling for restaurants and food service in the 209 & 350.",
    intro:
      "A neglected grease trap ends in a kitchen backup during dinner service and a health inspection you didn't want. We keep traps on a schedule and document every service.",
    bullets: ["Interior and exterior trap cleaning", "Scheduled maintenance intervals", "Line jetting for grease-loaded drains", "Service documentation for inspections", "Off-hours service available"],
    faqs: [
      { q: "How often should it be cleaned?", a: "Most kitchens need service every one to three months depending on volume and trap size." },
      { q: "Can you service during off hours?", a: "Yes, we schedule around your service hours." },
    ],
  },
  {
    slug: "water-line-plumbing", hub: P, name: "Water Line Plumbing",
    desc: "Main water line repair and replacement, service line installation and underground leak repair from the meter to the house.",
    intro:
      "The line from the meter to your house is the one nobody sees until it fails. Low pressure, a soggy yard patch or a jumping meter usually points right at it.",
    bullets: ["Main water service replacement", "Underground leak repair", "Pressure regulator installation", "Meter-to-house line upsizing", "Yard restoration after the work"],
    faqs: [
      { q: "Why is my water pressure low everywhere?", a: "Commonly a failing pressure regulator or an undersized, corroded service line. We test to confirm which." },
      { q: "How long is a main line replacement?", a: "Typically one day for a standard residential run." },
    ],
  },
  {
    slug: "fixture-plumbing", hub: P, name: "Fixture Plumbing",
    desc: "Fixture plumbing: faucets, sinks, showers, tubs and toilets repaired, replaced and installed to code.",
    intro:
      "Fixtures are what you touch every day, so they're what you notice failing. We repair and install faucets, sinks, showers and tubs, and we set them so they stay tight.",
    bullets: ["Faucet, sink and shower installation", "Cartridge and valve repair", "Angle stops and supply lines replaced", "Tub spouts, diverters and trim kits", "Fixture removal and haul-away"],
    faqs: [
      { q: "Can you install a fixture I bought?", a: "Yes. We'll flag anything that won't fit your rough-in before we start." },
      { q: "Why does my new faucet drip already?", a: "Usually a defective cartridge or debris in the line from the install. Both are quick fixes." },
    ],
  },
  {
    slug: "fixture-plumbing/faucet-installation", parent: "fixture-plumbing", hub: P, name: "Faucet Installation",
    desc: "Kitchen, bathroom and utility faucet installation with new supply lines and shutoff valves, done in a single visit.",
    intro:
      "New faucet, clean install. We replace the supply lines and angle stops at the same time, because that's where the next leak comes from otherwise.",
    bullets: ["Kitchen, bath and utility faucets", "Pull-down, touchless and wall-mount models", "New braided supply lines and angle stops", "Deck plate and hole configuration handled", "Old faucet removed"],
    sections: [
      {
        heading: "Faucet Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "A new faucet is the fastest visible upgrade in a kitchen or bathroom, and it is also the easiest place to create a slow leak that nobody notices until the cabinet floor is soft. The faucet itself is rarely the problem. The connections underneath it are.",
          "We install kitchen, bathroom, laundry, bar and outdoor faucets across Stanislaus and San Joaquin County. Every install includes new braided supply lines and, where they are worn, new angle stops, because that is exactly where the next leak would have come from.",
        ],
      },
      {
        heading: "Faucet Types We Install",
        body: ["Bring us a faucet you already bought or let us recommend one. Either way we flag fit issues before anything is uninstalled."],
        list: [
          { lead: "Pull-down and pull-out kitchen faucets", text: "the most practical choice for rinsing large pans and cleaning the sink itself." },
          { lead: "Single-handle and widespread bath faucets", text: "matched to your existing hole configuration or a new deck plate." },
          { lead: "Touchless and sensor faucets", text: "genuinely useful in a busy kitchen, and they need a clean power and solenoid setup to be reliable." },
          { lead: "Wall-mount and pot filler", text: "great look, but they need the supply run planned before the wall is closed." },
          { lead: "Laundry, bar and utility faucets", text: "the ones that get forgotten until they seize up." },
          { lead: "Outdoor hose bibs and frost-proof sillcocks", text: "replaced with proper backflow protection." },
        ],
      },
      {
        heading: "Signs You May Need Faucet Replacement",
        body: ["If the fixture keeps coming back for repair, replacement is usually the better spend."],
        list: [
          { lead: "Dripping that returns after repair", text: "the valve seat inside the body is worn past the point a new cartridge fixes." },
          { lead: "Corrosion or mineral crust at the base", text: "water has been sitting where it should not, and the finish is failing." },
          { lead: "No parts available", text: "an off-brand or discontinued faucet with no serviceable cartridge." },
          { lead: "Weak flow that cleaning does not fix", text: "scale inside the body itself rather than in the aerator." },
          { lead: "Wobbling or loose spout", text: "worn mounting hardware, and often a leak under the deck already." },
        ],
      },
      {
        heading: "Caring for a New Faucet in Valley Water",
        body: [
          "Hard water is the enemy of a shiny finish. Wipe the faucet dry after heavy use, clean the aerator every few months by unscrewing it and soaking it in white vinegar, and skip abrasive cleaners and anything with bleach on brushed and matte finishes.",
          "Brushed nickel and matte black hide spotting better than polished chrome, which is worth knowing before you buy. If mineral is aggressive at your address, a properly sized water softener protects the faucet, the water heater and everything else on the line.",
        ],
      },
      {
        heading: "Why Homeowners Trust Mainline With Fixture Work",
        body: [
          "Family owned in Escalon since 2010, licensed as a California C-36 plumbing contractor, Lic. #953726, and led by Miguel with 37+ years in the trade. Flat-rate quote before we start, old faucet hauled away, and a leak check by hand at every joint before we leave.",
          "We install faucets in Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "Do you replace the shutoff valves too?", a: "We recommend it on any faucet install; old angle stops are the most common post-install leak." },
      { q: "How long does it take?", a: "Most faucet installs run one to two hours." },
      { q: "How do I know which faucet is right for my home?", a: "It comes down to your sink's hole configuration, the depth of the basin, how you use the room and the finish you want to live with. We will confirm fit before removing anything." },
      { q: "Can I install a faucet myself?", a: "Some people do. What we get called out for afterward is a reused angle stop that weeps, an overtightened supply nut, or a mounting that was never fully sealed to the deck." },
      { q: "Will a new faucet improve water efficiency?", a: "Yes. Current models move less water while feeling the same at the sink, which shows up on both the water and the water heating side." },
      { q: "What faucets work best for commercial spaces?", a: "Commercial-grade single-handle or sensor faucets with serviceable cartridges and metal bodies. They cost more up front and last far longer under heavy use." },
      { q: "Is a new faucet covered under warranty?", a: "Manufacturers warranty the fixture itself, and our workmanship covers the installation. Keep your paperwork and we will note the model on the invoice." },
      { q: "How can I keep a faucet from leaking again?", a: "New supply lines and angle stops at install time, an aerator cleaned a few times a year, and a look under the sink for dampness every so often. That is most of it." },
    ],
  },
  {
    slug: "fixture-plumbing/shower-installation", parent: "fixture-plumbing", hub: P, name: "Shower Installation",
    desc: "Shower installation and valve replacement, including tub-to-shower conversions and pressure-balanced valves.",
    intro:
      "Shower work is valve work. We set pressure-balanced or thermostatic valves so the temperature holds when someone flushes, and we get the rough-in right before tile goes up.",
    bullets: ["New shower rough-in and valve setting", "Tub-to-shower conversions", "Pressure-balanced and thermostatic valves", "Rain heads, body sprays and hand showers", "Drain and pan connections"],
    sections: [
      {
        heading: "Shower Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "Shower projects are judged on tile and glass, but they succeed or fail on the valve and the drain. Set the rough-in wrong and you find out after the wall is closed, when the temperature swings every time someone flushes or water finds its way into the framing.",
          "We handle the plumbing side of shower installations and replacements across Stanislaus and San Joaquin County: new rough-ins, valve replacement, tub-to-shower conversions, multi-head layouts and drain work, coordinated with your tile or surround installer so nobody is waiting on anybody.",
        ],
      },
      {
        heading: "Think These Through Before the Project Starts",
        body: ["Decisions made before demolition are cheap. The same decisions made after tile is up are not."],
        list: [
          { lead: "Layout and drain location", text: "moving the drain means opening the floor, so decide the footprint first." },
          { lead: "Valve type", text: "pressure-balanced holds temperature during a flush; thermostatic holds an exact setting and supports multiple heads." },
          { lead: "Water volume", text: "rain heads and body sprays together can outrun a half-inch supply line. We size the supply to the fixtures you actually want." },
          { lead: "Accessibility", text: "curbless entry, a bench, grab bar blocking and a hand shower are far easier to plan now than to retrofit later." },
          { lead: "Waterproofing", text: "the pan, curb and wall assembly have to be right underneath the tile. This is where shortcut installs fail." },
          { lead: "Water heater capacity", text: "a larger shower with more heads changes your hot water demand, and we will tell you if your heater can keep up." },
        ],
      },
      {
        heading: "Upgrading Showers in Older Valley Homes",
        body: [
          "Plenty of homes in Escalon, Modesto, Riverbank and Oakdale still have original single-handle or two-handle valves with no pressure balancing, galvanized supply lines, and a tub nobody has taken a bath in for a decade.",
          "Those are the best candidates for real improvement. Replacing the valve stops the cold-water shock when a toilet flushes. Re-piping the branch in copper or PEX restores flow that scale took away years ago. And a tub-to-shower conversion gives back usable space in a small bathroom while making it safer to get in and out of.",
        ],
      },
      {
        heading: "Hard Water and Shower Longevity",
        body: [
          "Central Valley water leaves mineral behind, and showers are where you see it first: crusted heads, weak spray, cartridges that stiffen up. Choosing quality trim with serviceable cartridges means the fixture can be repaired in ten years instead of replaced.",
          "We also recommend a hand shower or a head with cleanable nozzles, and where hardness is severe, a properly sized softener. It protects the shower valve, the water heater and every other fixture in the house at the same time.",
        ],
      },
      {
        heading: "What You Get From Mainline",
        body: [
          "A flat-rate quote before work starts, code-compliant valve and drain work, permits where the scope requires them, and a licensed C-36 contractor on the job, Lic. #953726. Family owned in Escalon since 2010, with Miguel's 37+ years in the trade behind the rough-in.",
          "We serve Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding communities. Call 209.838.1000 to talk through your shower project.",
        ],
      },
    ],
    faqs: [
      { q: "Why does my shower go cold when a toilet flushes?", a: "An old non-balanced valve. A pressure-balanced replacement solves it." },
      { q: "Can you convert my tub to a walk-in shower?", a: "Yes, we handle the plumbing side and coordinate with your tile or surround installer." },
      { q: "How long does a shower installation take?", a: "A valve and trim replacement is often a single day. A full conversion or new rough-in runs longer because tile, waterproofing and inspection have to fit in the schedule." },
      { q: "Can you build in accessibility features?", a: "Yes. Curbless entry, benches, hand showers and proper blocking for grab bars are all easiest to include while the wall is open." },
      { q: "What types of showers do you install?", a: "Standard tub-shower combinations, walk-in and curbless showers, tiled custom enclosures, prefabricated units, and multi-head or rain head layouts." },
      { q: "How do I choose the right shower for my bathroom?", a: "Start with the space and the drain, then the valve, then the fixtures. We walk the room with you and tell you what the existing supply lines and water heater can actually support." },
      { q: "Can you work in an older home with dated plumbing?", a: "Yes, and it is a lot of what we do. Galvanized supply lines, odd rough-in heights and obsolete valve bodies are all normal for Valley homes of a certain age." },
      { q: "Is a permit required for shower work?", a: "Trim and valve swaps usually are not. Moving drains, altering walls or a full conversion often are, and we pull the permit and handle the inspection when the scope calls for it." },
    ],
  },
  {
    slug: "fixture-plumbing/sink-installation", parent: "fixture-plumbing", hub: P, name: "Sink Installation",
    desc: "Kitchen and bathroom sink installation including farmhouse, undermount and vanity sinks, with drain and disposal tie-in.",
    intro:
      "Sink swaps look simple until the drain height doesn't line up. We handle the trap, tailpiece and disposal connection so everything drains right and nothing weeps behind the cabinet.",
    bullets: ["Farmhouse, undermount and drop-in sinks", "Vanity and pedestal sink setting", "P-trap and drain re-plumbing", "Garbage disposal and dishwasher tie-in", "Leak test before we leave"],
    sections: [
      {
        heading: "Sink Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "A sink swap is one of the highest-impact changes you can make in a kitchen or bath, and it is also where amateur installs cause the most hidden damage. The visible part is the bowl. The part that matters is the drain height, the trap alignment and the seal, because that is what keeps the cabinet floor dry for the next fifteen years.",
          "We set farmhouse, undermount, drop-in, vanity and pedestal sinks for homeowners and businesses across Stanislaus and San Joaquin County, and we leak test everything under pressure before we pack up.",
        ],
      },
      {
        heading: "Sink Types and What Each One Gives You",
        body: ["Choose based on how you use the room, not only on how the sink looks in the showroom."],
        list: [
          { lead: "Undermount", text: "mounts below the counter, so crumbs and water wipe straight into the bowl. Needs solid-surface countertop support." },
          { lead: "Drop-in", text: "the most forgiving and versatile option, and the easiest to swap later because the rim covers the cutout." },
          { lead: "Farmhouse or apron-front", text: "big, deep and comfortable for large pans. Heavy, so the cabinet usually needs modification and added support." },
          { lead: "Stainless steel", text: "durable and easy to live with. Thicker gauge means less noise and fewer dents." },
          { lead: "Composite granite or quartz", text: "excellent at hiding hard water spotting, which matters in Valley water." },
          { lead: "Fireclay and cast iron", text: "beautiful and long-lived, and heavy enough that support has to be planned before install day." },
        ],
      },
      {
        heading: "Installation Mistakes That Cost Real Money",
        body: ["Nearly every failed sink install we get called out to repair traces back to one of these."],
        list: [
          { lead: "Reusing old supply lines and angle stops", text: "the new sink is fine, the twenty-year-old valve under it is what leaks." },
          { lead: "Improper drain slope", text: "a trap arm without fall will hold water, smell and clog repeatedly." },
          { lead: "Wrong or missing sealant", text: "the wrong bead at the rim lets water wick under the counter where nobody sees it." },
          { lead: "Undersupported heavy sinks", text: "a farmhouse or cast iron bowl needs a rebuilt cabinet base, not hope." },
          { lead: "Overtightened connections", text: "cracked nuts and split tailpieces that weep months later." },
        ],
      },
      {
        heading: "What Your Sink Installation Includes",
        body: [
          "We remove and haul away the old sink, dry fit the new one, rework the drain, trap and tailpiece as needed, replace the supply lines and angle stops, reconnect the garbage disposal and dishwasher, seal the rim correctly and then run water and check every joint by hand.",
          "If the countertop cutout, cabinet or drain height needs modification, you hear about it before we start and it is written into the flat-rate quote. No mid-job surprises.",
        ],
      },
      {
        heading: "Why Central Valley Homes Choose Mainline",
        body: [
          "Family owned in Escalon since 2010, licensed as a California C-36 plumbing contractor, Lic. #953726, with Miguel's 37+ years in the trade behind every install. Hundreds of local reviews and a work area that gets left cleaner than we found it.",
          "We install sinks in Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "Can you install an apron-front sink?", a: "Yes, and we'll tell you upfront if your cabinet needs modification." },
      { q: "Do you re-plumb the drain?", a: "Whenever the new sink sits at a different depth, yes, it's included in the quote." },
      { q: "Can I get a new sink without replacing my countertop?", a: "Often yes, if the new sink matches the existing cutout or is slightly larger for a drop-in. Undermount changes usually need a fabricator to modify the stone." },
      { q: "How long does a sink installation take?", a: "A straightforward swap is usually a couple of hours. Farmhouse sinks, cabinet modification or drain rework add time, and we tell you the realistic window when we quote." },
      { q: "Which sink material holds up best in hard water?", a: "Composite granite and quartz hide mineral spotting best, and thicker-gauge stainless cleans up easily. Polished chrome-look finishes show every water spot." },
      { q: "Will a new sink help when I sell?", a: "Kitchen and bath updates are among the most noticed changes in a walkthrough, and a properly installed sink with no cabinet water damage underneath is part of that impression." },
      { q: "Should I replace the sink or repair it?", a: "Repair makes sense for a leaking trap, a failed drain assembly or a loose mount. Replace when the bowl is cracked, badly corroded or you are changing the layout." },
      { q: "Do you connect the garbage disposal and dishwasher?", a: "Yes, both are part of the installation, including the disposal dishwasher inlet and a proper high loop or air gap." },
    ],
  },
  {
    slug: "fixture-plumbing/fixture-repair", parent: "fixture-plumbing", hub: P, name: "Fixture Repair",
    desc: "Repair for leaking, dripping and low-flow faucets, sinks, showers and tubs, using quality replacement parts.",
    intro:
      "Most fixtures don't need replacing, they need the right cartridge, seat or seal. We carry parts for the common brands and fix it on the first trip whenever possible.",
    bullets: ["Cartridge, stem and seat replacement", "Leaking spouts and diverters", "Low flow and aerator restoration", "Drain assembly and pop-up repair", "Loose and wobbling fixtures re-secured"],
    sections: [
      {
        heading: "Fixture Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "A fixture that drips, sticks or trickles is easy to live with and expensive to ignore. A steady drip wastes thousands of gallons a year, a weeping shower valve rots the framing behind the tile, and a running toilet quietly inflates your water bill every single month.",
          "We repair faucets, sinks, showers, tubs and toilets for homeowners and businesses across Stanislaus and San Joaquin County. Most repairs are done on the first visit because we stock cartridges, stems, seats and seals for the brands that are actually in Valley homes.",
        ],
      },
      {
        heading: "Common Fixture Problems We Fix",
        body: ["If you recognize any of these, it is a repair and not a replacement in most cases."],
        list: [
          { lead: "Constant dripping", text: "a worn cartridge, stem or seat. The part is small, the water waste is not." },
          { lead: "Leaking at the base", text: "a failed O-ring or a loose mounting nut letting water run under the deck." },
          { lead: "Weak or uneven flow", text: "usually hard water scale in the aerator or cartridge, sometimes a partly closed angle stop." },
          { lead: "Stiff or sloppy handles", text: "internal wear. Left alone, the handle eventually snaps off in someone's hand." },
          { lead: "Shower that will not shut fully off", text: "a worn valve cartridge, and the water is running down the wall cavity while you wait." },
          { lead: "Slow drain at one fixture", text: "a fouled pop-up assembly or trap rather than a main line problem." },
          { lead: "Loose or rocking sink or toilet", text: "failed seal or mounting, which is a water damage problem waiting to happen." },
        ],
      },
      {
        heading: "Repair or Replace? We Tell You Straight",
        body: [
          "Repair is the right call when the fixture body is sound, the finish still looks good and parts are available. That covers most major brands, even fixtures that are fifteen or twenty years old.",
          "Replacement makes more sense when the body is corroded through, the brand is long gone with no parts available, or you are already planning to change the look. We will tell you which side of that line your fixture falls on before you spend anything, and we do not upsell a replacement to avoid doing a repair.",
        ],
      },
      {
        heading: "Hard Water Is Why Central Valley Fixtures Wear Faster",
        body: [
          "Our water carries a lot of mineral. That mineral settles inside aerators, cartridges and valve bodies, cuts flow, and grinds away at rubber seals until they leak. It is the single biggest reason fixtures here need attention sooner than the manufacturer's literature suggests.",
          "Cleaning aerators and showerheads a couple of times a year helps, and a properly sized water softener helps a lot more. We handle that side too, so the fix can address the cause and not just the last failed part.",
        ],
      },
      {
        heading: "Why Homeowners Call Mainline for Fixture Work",
        body: [
          "Family owned in Escalon since 2010, licensed as a California C-36 plumbing contractor, Lic. #953726, and led by Miguel with 37+ years in the trade. Flat-rate quote before we start, quality replacement parts, clean work area, and no lecture about the thing you have been meaning to fix.",
          "We serve Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding communities. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "Are parts still available for my old fixture?", a: "Usually yes for major brands. If not, we'll show you replacement options." },
      { q: "Is repair cheaper than replacement?", a: "Almost always, and we'll say so when it isn't." },
      { q: "What kinds of fixtures do you repair?", a: "Kitchen and bath faucets, sinks, showers, tubs, toilets, laundry sinks, hose bibs and utility fixtures, in both homes and commercial buildings." },
      { q: "Can you fix a leaking faucet in one visit?", a: "In most cases yes. We carry cartridges, seats and seals for the common brands, so the repair happens on the first trip." },
      { q: "Why is the water pressure low at just one fixture?", a: "Almost always scale in the aerator or cartridge, or a partly closed shutoff valve under the sink. Both are quick to correct." },
      { q: "My toilet keeps running. Is that a fixture repair?", a: "Yes. It is normally a worn flapper, fill valve or a chain adjustment, and it is one of the cheapest ways to cut a high water bill." },
      { q: "How often should fixtures be checked?", a: "Look under sinks a couple of times a year for dampness or staining and clean your aerators. Anything you find early is a small repair instead of a cabinet replacement." },
      { q: "Do you repair high-efficiency and touchless fixtures?", a: "Yes, including sensor faucets and low-flow trim. Their cartridges and solenoids still fail on hard water, and parts are available for the major brands." },
    ],
  },
  {
    slug: "fixture-plumbing/fixture-repair/faucet-repair", parent: "fixture-plumbing/fixture-repair", hub: P, name: "Faucet Repair",
    desc: "Faucet repair for drips, leaks at the base, stiff handles and weak flow in kitchen, bath and outdoor faucets.",
    intro:
      "A dripping faucet is worn internals, a base leak is a failed O-ring, and weak flow is usually a clogged aerator or cartridge. All three are same-visit repairs.",
    bullets: ["Drip and base leak repair", "Cartridge and O-ring replacement", "Stiff or loose handle correction", "Aerator cleaning and flow restoration", "Outdoor hose bib repair"],
    faqs: [
      { q: "How much water does a drip waste?", a: "A steady drip can waste thousands of gallons a year, which shows up on your bill." },
      { q: "Do you fix outdoor faucets?", a: "Yes, hose bibs and frost-proof sillcocks included." },
    ],
  },
  {
    slug: "fixture-plumbing/fixture-repair/sink-repair", parent: "fixture-plumbing/fixture-repair", hub: P, name: "Sink Repair",
    desc: "Sink repair for slow drains, leaking traps, corroded drain assemblies and loose or separating sinks.",
    intro:
      "Under-sink leaks show up as a warped cabinet floor long before anyone sees a drip. We rebuild the drain assembly, reseat the sink and clear the trap so the cabinet stays dry.",
    bullets: ["P-trap and tailpiece leak repair", "Corroded drain assembly replacement", "Slow drain clearing", "Re-sealing and re-securing loose sinks", "Cabinet water damage assessment"],
    faqs: [
      { q: "Why does my cabinet smell musty?", a: "Ongoing slow seepage from the trap or supply. It's worth finding now, not later." },
      { q: "Can an undermount sink be re-secured?", a: "Yes, in most cases we can re-support and re-seal it rather than replace the countertop." },
    ],
  },

  // ---------- Water heaters hub ----------
  {
    slug: "water-heater-installation", hub: W, name: "Water Heater Installation",
    desc: "Water heater installation and replacement in Escalon, Modesto and across the 209 & 350. Tank, electric and tankless units, permitted, most swaps same day.",
    intro:
      "Water heater replacement is our number one specialty. We stock the most common tank sizes, pull the permit, handle gas and venting, bring the install up to current code and haul the old unit away.",
    bullets: ["40, 50 and 75 gallon gas and electric tanks", "Bradford White, Rheem and A.O. Smith", "Seismic strapping, new T&P valve and expansion tank", "Permits pulled and inspection handled", "Same-day installation on most standard swaps"],
    sections: [
      {
        heading: "Water Heater Replacement in Escalon, Modesto & the 209 & 350",
        body: [
          "A water heater is easy to forget about right up until the morning it quits. When yours is done, you do not want a sales pitch, you want hot water back today from someone who has installed hundreds of these units in Valley homes.",
          "Miguel has 37+ years in the trade and has been the owner and lead plumber here since 2010. Every replacement is quoted flat rate before we touch anything, so what you approve is what you pay. Most standard tank swaps are finished the same day.",
        ],
      },
      {
        heading: "Signs You Need a Water Heater Replacement",
        body: ["Tanks rarely fail without warning. If you are seeing any of these, plan the replacement instead of waiting for a flooded garage."],
        list: [
          { lead: "Age", text: "the unit is 10 years old or more. Check the serial number on the label if you are not sure." },
          { lead: "Rusty or metallic hot water", text: "the tank lining or anode rod is gone and corrosion is now in your water." },
          { lead: "Rumbling and popping", text: "hardened sediment on the tank floor, which drives heat straight into the steel." },
          { lead: "Water at the base", text: "dampness, staining or corrosion on the shell means the tank itself is leaking. That is not repairable." },
          { lead: "Hot water runs out early", text: "capacity you used to have is now taken up by sediment." },
          { lead: "Rising energy bills", text: "an inefficient or scaled tank burns more fuel to deliver less hot water." },
        ],
      },
      {
        heading: "Consider Upgrading to a More Efficient Water Heater",
        body: [
          "If you are replacing anyway, it is the right moment to look at efficiency. A modern high-efficiency tank recovers faster and holds temperature better than a builder-grade unit from a decade ago.",
          "Hybrid heat pump electric models cut water heating energy use dramatically and frequently qualify for utility rebates. Tankless gives you endless hot water and reclaims the floor space. We walk your gas line, venting and electrical panel first, then tell you which options your home can actually support and which one we would put in our own house.",
        ],
      },
      {
        heading: "How the Central Valley Climate Affects Water Heaters",
        body: [
          "Our water is hard, and hard water is what kills water heaters here early. Scale settles out inside the tank, insulates the heating surface and forces the unit to work harder every cycle.",
          "That is why we set every install up for a long life: correct sizing, seismic strapping per California code, a fresh T&P valve, an expansion tank where the pressure calls for it, and a flushing schedule so the new unit does not repeat the last one's story.",
        ],
      },
      {
        heading: "Why Homeowners Choose Mainline Plumbing Inc.",
        body: [
          "We are family owned, local to Escalon, and licensed as a California C-36 plumbing contractor, Lic. #953726. Same-day service on most replacements, permits handled, old unit hauled away, and a clean work area when we leave.",
          "We serve Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding Stanislaus and San Joaquin County communities. Call 209.838.1000 and we will get your hot water back on.",
        ],
      },
    ],
    faqs: [
      { q: "How fast can you replace my water heater?", a: "Most standard tank replacements are completed the same day you call, since we stock the common sizes." },
      { q: "Is a permit required to replace a water heater?", a: "Yes in our service area, and we pull it as part of the job along with the inspection coordination." },
      { q: "What size water heater do I need?", a: "Household size and fixture count drive it. A 40 gallon covers many smaller homes, 50 gallon is the most common, and larger families or multi-bath homes often need 75 gallon or tankless." },
      { q: "What types of water heaters work best in our climate?", a: "Gas and electric tanks both perform well when they are flushed annually. Hybrid heat pump units are excellent in warm Valley garages, and tankless works well when the gas line and venting support it." },
      { q: "How often should a water heater be serviced?", a: "Once a year. A flush, anode inspection and T&P test is what keeps a tank from failing years early in hard water." },
      { q: "What should I do if my water heater is leaking?", a: "Shut off the cold water supply valve on top of the unit, turn off the gas or the breaker, then call 209.838.1000. If it is leaking from the tank body, replacement is the fix." },
      { q: "Are there rebates for a high-efficiency water heater?", a: "Rebate programs for heat pump and high-efficiency models come and go. We will tell you what is currently available for the model you are considering and point you to the program." },
      { q: "Do you haul away the old water heater?", a: "Yes, removal and disposal of the old unit is part of every installation." },
    ],
  },
  {
    slug: "water-heater-repair", hub: W, name: "Water Heater Repair",
    desc: "Water heater repair in Escalon, Modesto and the 209 & 350 for no hot water, pilot problems, leaks, noisy tanks and failed elements, with honest repair-or-replace advice.",
    intro:
      "No hot water isn't always a new water heater. We diagnose thermocouples, gas valves, heating elements, dip tubes and thermostats, and we tell you honestly when a repair is throwing money at a tank that's done.",
    bullets: ["No hot water and lukewarm water diagnosis", "Pilot light and thermocouple repair", "Heating element and thermostat replacement", "T&P valve, dip tube and anode service", "Straight repair-versus-replace guidance"],
    sections: [
      {
        heading: "End the Cold Shower Surprises",
        body: [
          "A cold shower at 6 a.m. is how most people find out their water heater is in trouble. The good news is that a lot of what goes wrong is a component, not the whole unit, and components are a repair.",
          "We diagnose first and quote flat rate before any work starts. If the repair makes sense, we do it, often the same day. If the tank itself is finished, we say so plainly rather than selling you a part that buys a month.",
        ],
      },
      {
        heading: "Signs Your Water Heater Needs Repair",
        list: [
          { lead: "No hot water at all", text: "usually a pilot, thermocouple, gas valve, failed element or tripped high-limit switch." },
          { lead: "Lukewarm or short showers", text: "a bad lower element, a broken dip tube or heavy sediment stealing capacity." },
          { lead: "Discolored or smelly water", text: "a spent anode rod or bacteria in the tank. Both are addressable." },
          { lead: "Popping, rumbling or knocking", text: "sediment buildup being cooked against the tank floor." },
          { lead: "Water around the unit", text: "could be a fitting, the T&P valve or the drain valve. It could also be the tank. We find out which." },
          { lead: "Pilot will not stay lit", text: "typically the thermocouple or a dirty pilot assembly, both routine repairs." },
        ],
      },
      {
        heading: "Repair or Replace? Straight Answers",
        body: [
          "Under about eight years old with a component failure, repair is almost always the right call. Past ten to twelve years, or once the tank body itself is leaking, you are better off putting that money toward a new unit with a fresh warranty.",
          "We give you both numbers and the reasoning behind them so the decision is yours, not ours. There is no upsell script here.",
        ],
      },
      {
        heading: "How to Get More Years Out of Your Water Heater",
        list: [
          { lead: "Flush it annually", text: "hard Valley water means sediment, and sediment is what shortens tank life." },
          { lead: "Check the anode rod", text: "it is the sacrificial part protecting your tank lining. Replacing it is far cheaper than replacing a tank." },
          { lead: "Test the T&P valve", text: "a stuck relief valve is a genuine safety issue." },
          { lead: "Set 120 degrees", text: "hot enough for the house, easier on the tank, and safer for kids." },
          { lead: "Keep the area clear", text: "combustion air and access matter, especially in a tight closet install." },
        ],
      },
      {
        heading: "No Job Is Too Large or Too Small",
        body: [
          "A single thermocouple in an Escalon rental, a 75 gallon unit in a Modesto multi-bath home, or a commercial tank in Turlock, we take the call either way. Family owned since 2010, CA C-36 Lic. #953726, and 37+ years of hands-on experience behind the diagnosis.",
        ],
      },
    ],
    faqs: [
      { q: "How quickly can I expect a repair?", a: "Most water heater repairs are handled the same day, and no hot water goes to the front of the schedule." },
      { q: "My pilot won't stay lit. What's wrong?", a: "Usually the thermocouple or a dirty pilot assembly, both common and inexpensive repairs." },
      { q: "What types of water heaters can you repair?", a: "Gas and electric tanks, hybrid heat pump models, and tankless units from the major manufacturers." },
      { q: "When is repair no longer worth it?", a: "Past ten to twelve years, or once the tank itself is leaking, replacement is the better spend." },
      { q: "What should I do if my water heater is leaking right now?", a: "Close the cold inlet valve, shut off the gas or breaker, and call 209.838.1000. Do not wait on a leaking tank in a garage or closet." },
      { q: "Can a noisy water heater be fixed?", a: "Often yes. If the rumbling is sediment caught early, a flush quiets it. If the sediment has hardened, we will tell you what you are really looking at." },
      { q: "How can I maintain my water heater between visits?", a: "Flush it yearly, keep the temperature around 120 degrees, and watch the base for moisture. That is most of it." },
      { q: "Do you repair commercial water heaters?", a: "Yes, we handle commercial tanks and light commercial systems throughout the 209 & 350." },
    ],
  },
  {
    slug: "tankless-water-heaters", hub: W, name: "Tankless Water Heaters",
    desc: "Tankless water heater installation, conversion and repair in Escalon, Modesto and the 209 & 350. Endless hot water, higher efficiency, wall-mounted space savings.",
    intro:
      "Tankless gives you endless hot water, up to about 30% better efficiency and your garage floor back. The catch is that it must be sized and gas-fed correctly, which is exactly where most bad installs go wrong.",
    bullets: ["Navien, Rinnai and Rheem installation", "Tank-to-tankless conversions", "Gas line upsizing and venting", "Descaling and annual maintenance", "20+ year expected service life"],
    sections: [
      {
        heading: "Tankless Water Heater Installation, Done Right the First Time",
        body: [
          "Tankless is a genuinely better way to make hot water, and it is also the install that gets botched most often. Undersize the unit or starve it of gas and the homeowner ends up with cold sandwiches and a warranty argument.",
          "We do the load math first: fixture count, simultaneous demand, incoming water temperature, gas capacity, venting path and electrical. Then we install it to manufacturer spec so the warranty holds and the unit performs the way the brochure promised.",
        ],
      },
      {
        heading: "Benefits of Going Tankless",
        list: [
          { lead: "Endless hot water", text: "the unit heats on demand, so back-to-back showers and a running dishwasher stop being a scheduling problem." },
          { lead: "Better efficiency", text: "no standby losses from keeping 50 gallons hot around the clock, commonly around 30% less energy for water heating." },
          { lead: "Space back", text: "a wall-mounted unit frees up the garage or closet footprint a tank was eating." },
          { lead: "Longer service life", text: "20+ years is a realistic expectation with annual descaling, roughly double a typical tank." },
          { lead: "No tank to fail", text: "no 50 gallon reservoir sitting in your garage waiting to split." },
        ],
      },
      {
        heading: "Gas Line, Venting & Electrical Requirements",
        body: [
          "A tankless unit fires far more BTU than the tank it replaces, so the existing half-inch gas line frequently will not carry it. We verify the meter and line capacity and upsize where the calculation requires it.",
          "Venting is category-specific stainless or PVC depending on the model, and condensing units need a condensate path. There is also a dedicated electrical requirement even on gas models. We handle all three, pull the permit, and get it inspected.",
        ],
      },
      {
        heading: "How Our Hard Water Affects Tankless Sizing & Care",
        body: [
          "Incoming water temperature in the Valley drops in winter, which lowers the flow a unit can heat to your target temperature. Sizing off summer numbers is how homeowners end up disappointed in January, so we size for the cold months.",
          "Hard water also means scale, and scale is the one thing tankless will not forgive. Annual descaling is required maintenance, not an upsell, and it is what keeps both the performance and the manufacturer warranty intact.",
        ],
      },
      {
        heading: "Tankless Water Heater Repair",
        body: [
          "Error codes, dropping temperatures, reduced flow, ignition faults and scale-related shutdowns are all repairable. We service the major brands, clean and descale the heat exchanger, replace flow sensors and igniters, and correct venting or gas problems left behind by a previous install.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a tankless water heater last?", a: "With annual descaling, 20 years or more is a reasonable expectation, roughly double a standard tank." },
      { q: "Do I need a bigger gas line?", a: "Often yes. Tankless demands far more BTU than a tank, and we verify meter and line capacity before quoting." },
      { q: "Can a tankless unit run my whole house?", a: "Yes when it is sized for your simultaneous demand and winter inlet temperature. That sizing is the whole job." },
      { q: "Do tankless water heaters require regular maintenance?", a: "Yes, annual descaling matters in our hard water, and it keeps the warranty intact." },
      { q: "How much space does a tankless unit save?", a: "It mounts on the wall, so you get back the full floor footprint of the old tank, typically a two-by-two foot area or more." },
      { q: "Is tankless worth the investment?", a: "For households that run out of hot water, want lower standby energy use, or need the space back, yes. For a small home with light demand, a high-efficiency tank can still be the smarter call, and we will say so." },
      { q: "Do you pull permits for tankless installation?", a: "Yes. Gas, venting and electrical changes are permitted work, and we handle the permit and inspection." },
      { q: "Why choose Mainline for tankless work in Modesto and Escalon?", a: "37+ years of hands-on experience, family owned since 2010, CA C-36 Lic. #953726, and water heaters are the single thing we do more than anything else." },
    ],
  },
  {
    slug: "water-heater-flushing", hub: W, name: "Water Heater Flushing",
    desc: "Water heater flushing and sediment removal in Escalon, Modesto and the 209 & 350 to extend tank life, restore capacity and cut energy costs in hard-water homes.",
    intro:
      "Hard Valley water leaves sediment on the bottom of your tank. That sediment is what makes it rumble, run out of hot water early and fail years ahead of schedule. An annual flush is the cheapest water heater insurance there is.",
    bullets: ["Full tank drain and sediment flush", "Anode rod inspection", "T&P valve test", "Tankless descaling service", "Annual reminder so you don't have to track it"],
    sections: [
      {
        heading: "Water Heater Flushing Service in Escalon, Modesto & the 209 & 350",
        body: [
          "Hot water at the turn of a knob is easy to take for granted, and the tank making it is the appliance homeowners maintain least. Flushing is the one piece of maintenance that reliably adds years to a water heater in this part of the Valley.",
          "Call 209.838.1000 and we will get a flush on the schedule, or fold it into a plumbing inspection while we are already at the house.",
        ],
      },
      {
        heading: "How Often Should You Flush Your Water Heater?",
        body: [
          "At least once a year for most homes here. If you are on particularly hard water or a well, every six to eight months keeps the tank in far better shape.",
          "If it has been several years, it is still worth doing, but tell us. A tank with hardened sediment needs to be opened carefully, and we will let you know honestly what condition it is in when we get in there.",
        ],
      },
      {
        heading: "Why Flushing Matters",
        body: [
          "Your water heater is doing two jobs: heating water and storing it. Minerals in the cold supply settle to the bottom of the tank and build into a layer of sediment between the burner and the water it is supposed to heat.",
          "From there it snowballs. The burner runs longer, the steel above it overheats, the usable capacity shrinks, and the water coming out of your tap picks up whatever is sitting in the bottom of that tank.",
        ],
      },
      {
        heading: "Four Things a Flush Gets You",
        list: [
          { lead: "More efficiency", text: "heat transfers into water instead of into a sediment blanket, so the unit uses less energy for the same hot shower." },
          { lead: "Longer tank life", text: "sediment cooking against the steel is what causes the corrosion that eventually leaks. Removing it buys years." },
          { lead: "A safer home", text: "a tank that never leaks is a garage that never floods and a floor that never rots." },
          { lead: "Better water quality", text: "clearer, cleaner hot water with no sediment or odor riding along with it." },
        ],
      },
      {
        heading: "How a Professional Plumber Helps",
        body: [
          "Draining a tank sounds simple, and on an accessible unit it mostly is. In a closet, an attic or a tight garage corner it is a different story, and a wrong step can surge sediment through the house plumbing or crack a brittle drain valve on a ten-year-old tank.",
          "While we are there we also inspect the anode rod, test the T&P valve, check the strapping and connections, and descale tankless units. You get the flush plus an honest read on how much life the unit has left. Family owned, CA C-36 Lic. #953726.",
        ],
      },
    ],
    faqs: [
      { q: "How often should I flush it?", a: "Once a year here. Twice if you're on well water or notice rumbling." },
      { q: "My tank is rumbling. Is a flush enough?", a: "Often yes if it's caught early. If the sediment has hardened, we'll tell you what you're actually looking at." },
      { q: "Can I flush my own water heater?", a: "On an easily accessible tank, a careful homeowner can. In a closet or attic, or on an older tank with a brittle drain valve, it is worth having a plumber do it." },
      { q: "Will flushing fix my discolored hot water?", a: "Frequently yes, especially when sediment is the source. If the anode rod is spent, that gets replaced too." },
      { q: "Do tankless water heaters need flushing?", a: "They need descaling, which is the tankless equivalent, and in our hard water it is an annual job that protects the warranty." },
      { q: "How long does a flush take?", a: "Most flushes are a straightforward same-visit service, and we combine it with the anode and T&P checks while the unit is open." },
      { q: "Will a flush make my old water heater last?", a: "It helps, but it is not a reset. Past ten to twelve years, a flush keeps it running while you plan the replacement rather than reacting to a leak." },
      { q: "Which cities do you flush water heaters in?", a: "Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding Stanislaus and San Joaquin County areas." },
    ],
  },

  {
    slug: "electric-water-heaters", hub: W, name: "Electric Water Heaters",
    desc: "Electric water heater installation and replacement, including hybrid heat pump models that cut water heating costs substantially.",
    intro:
      "Electric water heaters are a huge part of what we do, especially as more Valley homes go all-electric. Standard electric tanks install fast, and hybrid heat pump models can cut water heating costs dramatically while qualifying for rebates.",
    bullets: ["Standard electric tank installation", "Hybrid heat pump water heaters", "Gas-to-electric conversions", "Element, thermostat and breaker diagnostics", "Rebate-eligible high-efficiency models"],
    faqs: [
      { q: "Is a heat pump water heater worth it?", a: "For most households, yes. They typically use a fraction of the energy of a standard electric tank and often qualify for rebates." },
      { q: "Can you convert from gas to electric?", a: "Yes, including coordinating the electrical work required for the new circuit." },
    ],
  },
];

export const plumbingServices = services.filter((s) => s.hub === "plumbing-services");
export const waterHeaterServices = services.filter((s) => s.hub === "water-heaters");

/** Canonical path for a service entry, always trailing-slashed. */
export function servicePath(s: ServiceEntry) {
  return `/${s.hub}/${s.slug}/`;
}

export function findService(hub: ServiceEntry["hub"], slug: string) {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return services.find((s) => s.hub === hub && s.slug === clean);
}

/** Top-level (non-nested) services for hub listings. */
export function topLevel(hub: ServiceEntry["hub"]) {
  return services.filter((s) => s.hub === hub && !s.parent);
}

export function childrenOf(hub: ServiceEntry["hub"], slug: string) {
  return services.filter((s) => s.hub === hub && s.parent === slug);
}
