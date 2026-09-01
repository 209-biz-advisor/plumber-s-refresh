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
    sections: [
      {
        heading: "Plumbing Repairs in Escalon, Modesto & the 209 & 350",
        body: [
          "Most plumbing repair calls are not dramatic. They are the toilet that has been running since spring, the faucet that drips at night, the shutoff valve nobody has dared touch in fifteen years. None of it is urgent, and all of it is costing you water, money and eventually drywall.",
          "We repair residential and commercial plumbing across Stanislaus and San Joaquin County. Miguel has 37+ years in the trade and has owned this company since 2010, and every repair comes with a flat-rate quote up front and an explanation of what failed and why.",
        ],
      },
      {
        heading: "Signs You Need Plumbing Repairs",
        body: ["A plumbing system tells you it is in trouble long before it fails. These are the signals worth acting on."],
        list: [
          { lead: "Water bill climbing with no change in habits", text: "something is running or leaking, often a toilet or an underground line." },
          { lead: "Low water pressure through the house", text: "scaled galvanized piping, a failing pressure regulator or a developing leak." },
          { lead: "Stains on ceilings or walls", text: "an active leak inside the structure. This one does not improve on its own." },
          { lead: "Warm or damp spots on the floor", text: "a classic slab leak indicator, and worth a leak detection visit immediately." },
          { lead: "Rattling or banging pipes", text: "water hammer or loose strapping, which fatigues joints over time." },
          { lead: "Sewer or musty odors", text: "a dry trap, a failed wax ring or a vent problem." },
          { lead: "Fixtures that drain slowly all over the house", text: "a main line issue rather than a fixture issue." },
        ],
      },
      {
        heading: "The Repairs We Handle Most",
        body: [
          "Leaking supply and drain lines, failed angle stops and hose bibs, pressure regulators, water hammer arrestors, running toilets and wax rings, dripping faucets and shower valves, garbage disposals, dishwasher and washer connections, gas line repairs and repiping of failed galvanized branches.",
          "We show you the failed part when we pull it. You should be able to see why the repair was needed, and you should never have to take a plumber's word for it on faith.",
        ],
      },
      {
        heading: "Maintaining Your Plumbing System for the Long Run",
        body: [
          "The cheapest plumbing is preventive. Know where your main shutoff is. Keep house pressure in a sane range with a working regulator, because high pressure kills water heaters and fixtures early. Flush your water heater annually in our hard water. Test angle stops once a year so they still turn when you need them.",
          "Replace washing machine and dishwasher hoses on a schedule instead of after they burst, keep grease out of the kitchen drain, and get a camera inspection on the main line if you have mature trees over it. A yearly plumbing inspection catches nearly all of this before it becomes an emergency call.",
        ],
      },
      {
        heading: "Why Central Valley Homeowners Call Mainline",
        body: [
          "Hard water, aging galvanized and cast iron systems, expansive local soil and mature root systems are the four things that shape plumbing repair in this area. We have worked on all of it, in these neighborhoods, for decades.",
          "Family owned in Escalon, licensed as a California C-36 plumbing contractor, Lic. #953726, serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding communities. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "Do you charge for a diagnosis?", a: "We quote the repair upfront, and the service call is waived when you move forward with the repair." },
      { q: "Do you repair commercial plumbing too?", a: "Yes. We handle restaurants, offices, retail and multi-unit properties throughout the 209 & 350." },
      { q: "What is the most common plumbing repair?", a: "Running toilets and dripping faucets by volume, and failing angle stops right behind them. All three are quick fixes that stop real water waste." },
      { q: "How do I know whether to repair or replace?", a: "If the fixture body or pipe is sound and parts are available, repair. If the same component has failed repeatedly or the material itself is at the end of its life, replacement is the better spend, and we will say so." },
      { q: "What does plumbing maintenance actually involve?", a: "An annual look at supply lines, angle stops, water pressure, the water heater, visible drain connections and the main line. It is the difference between scheduling work and reacting to it." },
      { q: "Can I prevent plumbing emergencies?", a: "Most of them, yes. Correct house pressure, an annual water heater flush, hoses replaced before they fail and drains kept clear eliminate the majority of the calls we get at the worst possible time." },
      { q: "Do you repair galvanized pipes or do they need replacing?", a: "We can repair a section, but galvanized scales from the inside and the flow never fully returns. When several branches are affected, repiping is the honest recommendation." },
      { q: "How fast can you get out for a non-emergency repair?", a: "Usually within a day or two, and same day when the schedule allows. Active leaks and no-water situations get moved ahead of routine work." },
    ],
  },
  {
    slug: "leak-detection", hub: P, name: "Leak Detection",
    desc: "Non-invasive leak detection for slab leaks, wall leaks and underground water lines in Escalon, Modesto and surrounding cities.",
    intro:
      "A high water bill with nothing visibly wrong usually means a hidden leak. We locate slab, wall and underground leaks with acoustic and pressure equipment so the repair is surgical instead of destructive.",
    bullets: ["Slab leak location", "Wall and ceiling leak tracing", "Underground water and irrigation line leaks", "Pressure testing and meter verification", "Repair or reroute options quoted side by side"],
    sections: [
      {
        heading: "Slab Leak Detection in Escalon, Modesto & the 209 & 350",
        body: [
          "A slab leak is a supply line failing underneath the concrete your house sits on. Nothing drips from a ceiling and nothing sprays across a floor, which is why most homeowners find one through a water bill, a warm patch of tile, or the faint sound of running water at night with every fixture closed.",
          "We locate leaks acoustically and with pressure isolation, which means we find the failure point before anything gets opened up. Miguel has 37+ years in the trade and has owned this company since 2010, and we are licensed as a California C-36 plumbing contractor, Lic. #953726.",
        ],
      },
      {
        heading: "Signs You Have a Hidden Plumbing Leak",
        body: ["Hidden leaks announce themselves in small ways for weeks before they cause visible damage. Any one of these is worth a call."],
        list: [
          { lead: "Water bill jumped without a change in use", text: "the most reliable early indicator of a line leaking underground or inside a wall." },
          { lead: "A warm or damp spot on the floor", text: "classic slab leak on the hot water side, and it will only spread." },
          { lead: "Running water sound with everything off", text: "pressurized water escaping somewhere it should not be." },
          { lead: "The meter dial keeps creeping", text: "shut every fixture, watch the meter, and if it moves you have a leak." },
          { lead: "Musty smell or mildew in one room", text: "moisture behind drywall or under flooring feeding mold growth." },
          { lead: "Cracks in tile, flooring or foundation", text: "water moving under a slab shifts soil, and the floor above it follows." },
          { lead: "Soggy patches in the yard", text: "the service line or irrigation main is leaking below grade." },
        ],
      },
      {
        heading: "How We Find a Leak Without Tearing Up Your House",
        body: [
          "Detection comes first, demolition last. We isolate the system and pressure test to confirm whether the leak is on the supply side, then use acoustic listening equipment to trace the escaping water to a specific point, and thermal reading to confirm hot-line leaks under slab.",
          "Once we know exactly where the failure is, you get real options: open a small access point and repair the section, or reroute the line overhead and leave the concrete alone. Both get quoted side by side so you can weigh cost against disruption.",
        ],
      },
      {
        heading: "Why Central Valley Homes Develop Slab Leaks",
        body: [
          "Two local conditions drive most of the slab leaks we find. Our water is hard and mineral-heavy, which scales and abrades copper from the inside until a pinhole opens. And Valley soil expands and contracts with our wet winters and long dry summers, flexing the lines cast into and under the slab.",
          "Homes built with soft copper under the slab in the 1970s through 1990s are the ones we see most often in Escalon, Modesto, Riverbank, Oakdale and Ripon. A single pinhole in that era of piping usually means more are coming, which is worth knowing before you decide between a spot repair and a reroute.",
        ],
      },
      {
        heading: "What Waiting Actually Costs",
        body: [
          "A leak under a slab does not stay a plumbing problem for long. Left alone it wets subfloor and framing, lifts flooring, feeds mold in wall cavities, and washes soil out from under the foundation. The plumbing repair stays roughly the same price; the restoration is what climbs.",
          "If you suspect a leak, shut the main and call 209.838.1000. We serve Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know I have a hidden leak?", a: "Warm spots on the floor, a spiking water bill, the sound of running water with everything off, or a meter that keeps moving." },
      { q: "Do you have to break the slab?", a: "Not always. Depending on the location we can often reroute the line overhead instead of opening the concrete." },
      { q: "How do you detect a leak without cutting into walls?", a: "We isolate and pressure test the system, then trace the escaping water acoustically and confirm hot-line leaks by temperature before anything is opened." },
      { q: "Is a slab leak covered by homeowners insurance?", a: "Sudden failures and the resulting damage are often covered while long-term seepage frequently is not. Photograph everything before cleanup and keep our written invoice for the claim." },
      { q: "How soon should I address a suspected leak?", a: "Right away. The pipe repair costs about the same next month, but the flooring, framing and mold remediation do not." },
      { q: "Can you find a leak in an irrigation or underground line?", a: "Yes. Yard and service line leaks are located the same way, and we will pinpoint the spot so digging is limited to one small area." },
      { q: "What causes slab leaks around here?", a: "Hard water abrading copper from the inside, and expansive Valley soil flexing lines under the slab through our wet-dry seasonal swing." },
      { q: "Should I repair the section or reroute the line?", a: "If the piping is otherwise healthy, a spot repair is honest. If the same run has already leaked once, a reroute usually ends the cycle instead of postponing it." },
    ],
  },
  {
    slug: "gas-line", hub: P, name: "Gas Line Services",
    desc: "Licensed gas line repair, testing and installation for ranges, water heaters, furnaces, fire pits and outdoor kitchens.",
    intro:
      "Gas work is not the place to gamble. We're a licensed C-36 contractor and we pressure test every line we touch, whether it's a leak repair or a new run out to a barbecue island.",
    bullets: ["Gas leak location and repair", "Pressure testing and certification", "Appliance, range and water heater connections", "Permits pulled and inspections handled", "Sediment traps and shutoffs to code"],
    sections: [
      {
        heading: "Gas Line Repair & Replacement in Escalon, Modesto & the 209 & 350",
        body: [
          "Natural gas runs the appliances you rely on most: the range, the furnace, the water heater, the dryer. It is also the one utility in the house with no margin for a sloppy repair, which is why California requires a licensed contractor to touch it.",
          "Mainline Plumbing Inc. is family owned in Escalon and licensed as a California C-36 plumbing contractor, Lic. #953726. Miguel has 37+ years in the trade. Every line we repair, extend or replace gets pressure tested before we call it finished.",
        ],
      },
      {
        heading: "Signs of a Gas Leak",
        body: ["If you suspect a leak, leave the building first, do not touch light switches, and call your gas utility from outside. Once the property is safe, call us for the repair."],
        list: [
          { lead: "Rotten egg or sulfur smell", text: "the odorant added to natural gas, and the most common way a leak is found." },
          { lead: "Hissing or whistling near a line or appliance", text: "gas escaping under pressure. Leave and call from outside." },
          { lead: "Dead plants or bare soil along the line", text: "an underground leak displacing oxygen at the roots." },
          { lead: "Dirt or dust blowing from the ground", text: "gas venting up through soil above a buried line." },
          { lead: "A gas bill higher than the season explains", text: "gas is going somewhere other than your appliances." },
          { lead: "Headaches, dizziness or nausea indoors that clear outside", text: "treat this as an emergency, not an inconvenience." },
        ],
      },
      {
        heading: "Why Older Valley Gas Lines Need Attention",
        body: [
          "Many Escalon and Modesto homes still run on their original steel gas piping. Buried steel corrodes from the outside in, and our irrigation-heavy soil accelerates it. Add decades of remodels, appliance swaps and add-on runs, and the system stops matching what the house actually demands.",
          "We evaluate the whole run rather than just the failure point, so you find out whether you are dealing with one bad section or piping that has reached the end of its service life.",
        ],
      },
      {
        heading: "What We Handle",
        body: [
          "Leak location and repair, corroded section replacement, appliance and range connections, water heater and furnace lines, dryer hookups, sediment traps, appliance shutoff valves, capping abandoned runs, and pressure testing and certification after any modification.",
          "Permits and inspections are part of the job, not an upcharge surprise. We pull them, meet the inspector, and hand you the paperwork.",
        ],
      },
      {
        heading: "Local, Licensed and Accountable",
        body: [
          "Gas work is exactly where a license and a local reputation matter. We have been serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida since 2010, and hundreds of local reviews back that up.",
          "Call 209.838.1000 to schedule gas line service.",
        ],
      },
    ],
    faqs: [
      { q: "I smell gas. What now?", a: "Leave the house, don't touch switches, and call your utility from outside. Then call us for the repair." },
      { q: "Do gas lines need a permit?", a: "New runs and most modifications do. We pull the permit and meet the inspector so you don't have to." },
      { q: "How do you test a gas line?", a: "We isolate the section, pressurize it and watch it hold on a gauge over time. A line that drops pressure has a leak, no matter how small." },
      { q: "Can you repair a section instead of replacing the whole line?", a: "Yes, when the rest of the piping is sound. When we find widespread corrosion, we tell you that plainly rather than selling you a patch you will call us back about." },
      { q: "How long do gas lines last?", a: "Steel piping commonly serves 50 years or more, but buried runs in irrigated Valley soil age faster. Age plus soil conditions matter more than the number alone." },
      { q: "Can you connect a new gas appliance?", a: "Yes, including ranges, dryers, furnaces, water heaters, fire pits and outdoor kitchens, with the correct shutoff and sediment trap." },
      { q: "Is it safe to run a gas line near electrical wiring?", a: "Yes, when clearances and bonding follow California code. That is part of what a licensed installation and inspection verify." },
      { q: "Do you handle commercial gas line work?", a: "Yes, including restaurants and multi-unit properties throughout the 209 & 350." },
    ],
  },
  {
    slug: "gas-line/gas-line-installation", parent: "gas-line", hub: P, name: "Gas Line Installation",
    desc: "New gas line installation for ranges, tankless water heaters, pool heaters, fire pits and outdoor kitchens, permitted and pressure tested.",
    intro:
      "Adding a gas range, converting to tankless, or running a line out to a fire pit means sizing the pipe for real demand, not guessing. We calculate the load, size the run, and certify the finished line.",
    bullets: ["Load calculation and correct pipe sizing", "Black iron, CSST and underground PE runs", "Tankless water heater gas upsizing", "Outdoor kitchen, fire pit and pool heater lines", "Permitted, tested and inspected"],
    sections: [
      {
        heading: "Gas Line Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "A new gas line is a sizing problem before it is a plumbing problem. Every appliance on the system draws BTU, and a run that is undersized starves the appliance farthest from the meter. That is why the first thing we do is add up the load and size the pipe for it, not for the appliance in front of us.",
          "We install new runs for ranges, cooktops, dryers, furnaces, tankless water heaters, pool heaters, fire pits, patio heaters and outdoor kitchens, permitted and pressure certified. CA Lic. #953726, C-36 plumbing.",
        ],
      },
      {
        heading: "Understanding Gas Line Materials",
        body: ["The right material depends on where the line runs and what it feeds. We explain the tradeoff before we install anything."],
        list: [
          { lead: "Black iron pipe", text: "the workhorse for indoor runs. Strong, heat tolerant and long-serving." },
          { lead: "Corrugated stainless steel tubing (CSST)", text: "flexible and fast to route through finished spaces, and bonded per code." },
          { lead: "Copper", text: "used where local code and the application allow, typically for shorter appliance runs." },
          { lead: "Polyethylene (PE)", text: "the standard for underground runs out to a pool heater or outdoor kitchen because it does not corrode in soil." },
        ],
      },
      {
        heading: "Going Tankless? Check the Gas Line First",
        body: [
          "This is the single most common surprise in a tankless conversion. A tank water heater might draw 40,000 BTU. A whole-home tankless unit can call for 150,000 to 199,000. The existing half-inch branch that fed the tank usually cannot deliver that, and the new unit will short-cycle or fault if you force it.",
          "We calculate the load for the entire house, then size and run the correct line so the unit performs the way the manufacturer intended and the warranty stays intact.",
        ],
      },
      {
        heading: "Safety, Permits and Testing",
        body: [
          "Every installation ends the same way: the line is pressurized, held on a gauge, and inspected. We install an accessible shutoff at each appliance, add sediment traps where required, bond CSST properly, and protect any run through framing.",
          "We pull the permit, meet the inspector, and leave you the documentation. That paperwork matters at resale and it matters to your insurer.",
        ],
      },
      {
        heading: "Maintaining a New Gas System",
        body: [
          "Schedule annual inspections, know where your appliance shutoffs and main gas valve are, keep vegetation and irrigation off the ground above buried lines, and never dig in the yard without calling for a utility locate first. Install gas detectors near sleeping areas for the same reason you install smoke alarms.",
          "Planning a remodel, a new appliance or an outdoor kitchen? Call 209.838.1000 and we will size it correctly the first time.",
        ],
      },
    ],
    faqs: [
      { q: "Can my current gas line run a tankless heater?", a: "Often not without upsizing. Tankless units demand far more BTU than a tank, and we verify before quoting." },
      { q: "How long does an install take?", a: "Most residential runs are a one-day job, plus inspection scheduling." },
      { q: "Do I need a permit for a new gas line?", a: "Yes. New runs and most modifications are permitted and inspected in California, and we handle both." },
      { q: "What gas line material is best for my project?", a: "Black iron for most indoor runs, CSST where flexible routing through finished space helps, and polyethylene for anything buried. We match the material to the run." },
      { q: "Can you run a line out to a fire pit or outdoor kitchen?", a: "Yes. Those are underground PE runs with a proper shutoff at the appliance, sized for the burner load." },
      { q: "Can I upgrade my gas line to support new appliances?", a: "Yes. We recalculate the whole-house load and upsize the run so the new appliance does not starve the old ones." },
      { q: "Do older homes need gas line replacement?", a: "Many do eventually. Original buried steel in irrigated Valley soil corrodes, and an inspection tells you whether replacement is due." },
      { q: "What should I do if I smell gas after an installation?", a: "Leave the building, avoid switches and flames, call the gas utility from outside, then call us at 209.838.1000." },
    ],
  },
  {
    slug: "piping-repiping", hub: P, name: "Piping & Repiping",
    desc: "Whole-home repiping in copper and PEX. Replace failing galvanized, polybutylene and pinhole-leaking copper for good.",
    intro:
      "When you're patching a new pinhole every few months, you're paying for a repipe on the installment plan. We repipe homes in copper or PEX with clean access cuts, one shutdown, and a warranty behind it.",
    bullets: ["Whole-home and partial repipes", "Galvanized and polybutylene replacement", "Copper and PEX-A options", "Minimal, patch-ready drywall access", "Water back on the same day in most homes"],
    sections: [
      {
        heading: "Piping & Repiping in Escalon, Modesto & the 209 & 350",
        body: [
          "Pipes fail on a schedule, and older Valley homes are on it. Galvanized steel scales shut from the inside until the shower has no pressure. Polybutylene fails at the fittings. Copper in hard water develops pinholes, and once the first one shows up, others follow.",
          "We repipe homes and small commercial buildings in copper or PEX-A, with one planned shutdown, clean patch-ready access cuts, and water back on the same day in most houses. CA Lic. #953726, owner-operated since 2010.",
        ],
      },
      {
        heading: "Signs Your Home Needs Repiping",
        body: ["A repipe is rarely a surprise. The system tells you for a year or two first."],
        list: [
          { lead: "Pressure that drops when a second fixture runs", text: "supply lines scaled down to a fraction of their original diameter." },
          { lead: "Rusty or discolored water at startup", text: "galvanized pipe shedding corrosion from the pipe wall." },
          { lead: "Repeated pinhole leaks", text: "the material itself is failing. Patching it is a rental agreement, not a repair." },
          { lead: "Visible corrosion or green staining at joints", text: "active deterioration you can see from outside the pipe." },
          { lead: "A house built before 1970 with original piping", text: "galvanized has usually reached the end of its useful life." },
          { lead: "Gray polybutylene lines", text: "known fitting failures, and worth replacing before one lets go behind drywall." },
        ],
      },
      {
        heading: "Copper or PEX: The Honest Comparison",
        body: [
          "PEX-A resists the scale and pinhole corrosion our hard water causes, flexes instead of splitting, needs fewer fittings, and installs with far less demolition. Copper remains an excellent choice for exposed runs, mechanical rooms and anywhere UV exposure or rodent access is a factor.",
          "We quote both when both are appropriate and tell you which we would put in our own house, and why. There is no upsell either direction.",
        ],
      },
      {
        heading: "Reliable Pipe Repair and Preventive Maintenance",
        body: [
          "Not every failing line means a whole-home repipe. When a single branch is the problem and the rest of the system is healthy, we replace that branch. When the same house has already produced two or three pinholes, replacing the system is the cheaper answer over five years.",
          "Between now and then, keep house pressure regulated, insulate exposed runs in the garage and crawlspace, and get any weeping joint looked at rather than watching it. High pressure is the quietest killer of both piping and water heaters in this area.",
        ],
      },
      {
        heading: "Codes, Permits and What the Job Looks Like",
        body: [
          "Repiping is permitted and inspected work in Stanislaus and San Joaquin County. We pull the permit, install to current code with correct support, fittings and dielectric transitions, and get it inspected.",
          "Most homes take one to three days. Water goes back on each evening, drywall access is cut small and left ready for patching, and you get a flat-rate quote before anyone opens a wall. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "Copper or PEX?", a: "PEX resists the hard water and pinhole corrosion common here and costs less; copper is still preferred in exposed runs. We'll quote both." },
      { q: "Do I have to move out?", a: "No. Most repipes are one to three days with water restored each evening." },
      { q: "What are the benefits of repiping my home?", a: "Full water pressure returns, discolored water stops, leak risk drops sharply, and you stop paying for repeat patch repairs." },
      { q: "How long does a repiping project take?", a: "One to three days for most single-family homes, depending on size, stories and how much of the piping is accessible." },
      { q: "What is involved in the repiping process?", a: "We map the runs, cut minimal access, install and pressure test the new lines, get the permit inspected, then reconnect fixtures and leave the openings patch-ready." },
      { q: "Can you repair just one section instead?", a: "Yes, when the rest of the system is sound. With galvanized or a house that has already produced several pinholes, replacement is the honest recommendation." },
      { q: "Will my walls be destroyed?", a: "No. Access cuts are deliberately small and placed where a drywall patch is straightforward. We plan the route to minimize openings." },
      { q: "Do you repipe commercial buildings?", a: "Yes, including small commercial and multi-unit properties throughout the 209 & 350." },
    ],
  },
  {
    slug: "frozen-pipe-repair", hub: P, name: "Frozen Pipe Repair",
    desc: "Frozen and burst pipe repair during Central Valley cold snaps, plus freeze-proofing for exposed lines and hose bibs.",
    intro:
      "Valley winters don't stay cold long, which is exactly why local pipes aren't built for it. Exposed lines in garages, crawlspaces and along exterior walls are the ones that split when a hard freeze rolls through.",
    bullets: ["Safe thawing without damaging the pipe", "Burst section replacement", "Hose bib and irrigation line repair", "Insulation and heat tape on vulnerable runs", "Freeze-season prevention checks"],
    sections: [
      {
        heading: "Frozen Pipe Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "Central Valley homes are not built for hard freezes, because we only get a handful of them. That is exactly the problem. Hose bibs, garage lines, crawlspace runs and pipes along uninsulated exterior walls sit unprotected, and one December night in the twenties finds every one of them.",
          "Water expands as it freezes. The ice does not usually split the pipe where it forms; pressure builds between the ice plug and a closed faucet until the pipe fails at its weakest point. Then it thaws, and that is when the water arrives.",
        ],
      },
      {
        heading: "What to Do the Moment You Suspect a Frozen Pipe",
        body: ["Acting in the first few minutes is what decides whether this is a repair or a restoration project."],
        list: [
          { lead: "Open the affected faucet", text: "it gives melting water somewhere to go and relieves pressure behind the ice." },
          { lead: "Shut off the main water valve", text: "if the pipe has already split, this is the single most important step." },
          { lead: "Warm the area gently", text: "a space heater or hair dryer on the pipe. Never an open flame or a torch." },
          { lead: "Open cabinet doors under sinks", text: "let household heat reach the supply lines on exterior walls." },
          { lead: "Do not run appliances", text: "no laundry, no dishwasher, until you know the line is intact." },
          { lead: "Call 209.838.1000", text: "we thaw the line safely and check for splits before the water comes back on." },
        ],
      },
      {
        heading: "Signs a Pipe Is Frozen But Has Not Burst Yet",
        body: [
          "No water or a thin trickle from one fixture while the rest of the house runs normally is the clearest sign. Look also for frost on an exposed pipe, unusual bulging, gurgling or banging when a faucet is opened, and a distinct sewer-like smell from a drain whose trap has frozen.",
          "A pipe caught in that window can often be thawed and inspected with no replacement at all. That is worth a phone call before the thaw does it for you.",
        ],
      },
      {
        heading: "How We Repair a Burst Pipe",
        body: [
          "We shut and isolate the system, locate the failure, and cut out the compromised section rather than clamping over it. A pipe that has been stretched by ice is weakened along its length, so we replace to sound material on both sides, then pressure test before restoring service.",
          "Most single-point repairs are same-day work. If the freeze found several exposed runs, we prioritize getting water safely back on and lay out the rest in order of urgency, with a flat-rate quote before we start.",
        ],
      },
      {
        heading: "Freeze-Proofing So It Does Not Happen Again",
        body: [
          "Insulate exposed lines in the garage, crawlspace and along exterior walls. Cover hose bibs with faucet socks before the first cold snap. Drain and shut off irrigation for winter. Add heat tape to the runs that have frozen before, and seal the crawlspace vents and wall penetrations that let cold air blow directly across pipe.",
          "We handle all of that in a single prevention visit, and it costs a fraction of a burst-pipe cleanup. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida.",
        ],
      },
    ],
    faqs: [
      { q: "My pipe is frozen but not burst. What should I do?", a: "Open the faucet, shut the main if you can, and don't use an open flame. Call us to thaw it safely." },
      { q: "How do I prevent it next winter?", a: "Insulate exposed lines, cover hose bibs, and drain irrigation. We handle all three in one visit." },
      { q: "What are the most common signs a pipe is frozen but has not burst?", a: "No water or a trickle from one fixture, frost on an exposed pipe, and banging or gurgling when you open the faucet." },
      { q: "How long does it take to repair a burst frozen pipe?", a: "Most single-point repairs are completed the same day once the line is accessible. Multiple failures take longer, and we restore safe water service first." },
      { q: "Why is it dangerous to ignore a frozen pipe that has not burst?", a: "Pressure keeps building behind the ice, and ice stretches the pipe wall. A line that survives the freeze can still fail during the thaw." },
      { q: "Can I thaw a pipe myself?", a: "Gently, with a space heater or hair dryer, never a torch or open flame. And shut the main first so a hidden split does not flood the house when it opens up." },
      { q: "Do Central Valley homes really freeze?", a: "A few nights most winters, and that is enough. Our exposed piping is not built for cold, which is why one hard freeze produces a wave of calls." },
      { q: "How can I permanently protect the pipes that froze?", a: "Insulation, heat tape on the vulnerable run, hose bib covers, irrigation shutoff and sealing the air path that let cold reach the pipe in the first place." },
    ],
  },
  {
    slug: "plumbing-inspections", hub: P, name: "Plumbing Inspections",
    desc: "Whole-home plumbing inspections for buyers, sellers, landlords and homeowners, with photos and a prioritized report.",
    intro:
      "Buying, selling or just tired of surprises? We inspect supply lines, drains, fixtures, water heater, pressure and shutoffs, then hand you a plain-English report with what's urgent and what can wait.",
    bullets: ["Buyer and seller pre-sale inspections", "Water pressure and regulator testing", "Water heater age and condition review", "Sewer camera add-on available", "Photo report with prioritized findings"],
    sections: [
      {
        heading: "Plumbing Inspections in Escalon, Modesto & the 209 & 350",
        body: [
          "Most plumbing problems are invisible until they are expensive. An inspection by a licensed plumber is how you find out what your system is actually doing before it decides to tell you at 6 AM on a holiday weekend.",
          "We test supply lines, drains, fixtures, shutoff valves, water pressure, the pressure regulator, the water heater and visible piping, then hand you a photo report that separates what needs attention now from what can be budgeted for later. CA Lic. #953726.",
        ],
      },
      {
        heading: "When a Plumbing Inspection Is the Right Call",
        body: ["An inspection pays for itself in any of these situations."],
        list: [
          { lead: "Buying a home", text: "so you learn about the sewer line and the 22-year-old water heater before you own them." },
          { lead: "Selling a home", text: "fix what an inspector would flag, on your schedule and at your price." },
          { lead: "Planning a kitchen or bath remodel", text: "confirm the existing supply and drain lines can carry the new fixtures." },
          { lead: "You do not know the age or condition of the system", text: "the most common reason homeowners call us for one." },
          { lead: "Mature trees over the sewer lateral", text: "roots find joints, and a camera confirms it before a backup does." },
          { lead: "Rental or investment property", text: "documented condition protects you and your tenants." },
        ],
      },
      {
        heading: "Why This Is Not the Same as a Home Inspection",
        body: [
          "A general home inspector looks at plumbing among two dozen other systems, visually and briefly. We are licensed plumbers, and we test. Pressure gets measured against a gauge. Angle stops get operated. Drains get run under load. The water heater gets evaluated on age, anode condition, venting and connections.",
          "That difference is why plumbing issues so often surface after a clean general inspection. If plumbing is the thing you are worried about, have a plumber look at it.",
        ],
      },
      {
        heading: "A More Thorough Inspection With Camera Technology",
        body: [
          "For any home built before 1980, or any property with established trees near the sewer path, add a camera inspection of the main line. It is the only way to see cracked clay, offset joints, root intrusion or a bellied section, and it converts the biggest unknown in the house into a picture.",
          "You watch the screen with us. Nothing gets diagnosed off camera and described to you secondhand.",
        ],
      },
      {
        heading: "How Often and What You Get",
        body: [
          "Every two years suits most homes, annually for properties over 40 years old, on well water, with a history of main line trouble, or with a tankless unit. Your report includes photos, findings ranked by urgency, water heater age and expected remaining life, measured pressure, and a plain-English explanation of anything we flagged.",
          "Call 209.838.1000 to schedule an inspection in Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop or Salida.",
        ],
      },
    ],
    faqs: [
      { q: "Is this the same as a home inspection?", a: "No. A general inspector glances at plumbing; we're licensed plumbers testing the system in depth." },
      { q: "Should I add a sewer camera?", a: "On any home built before 1980, yes. Main line surprises are the expensive kind." },
      { q: "How often should I have my plumbing inspected?", a: "Every two years for most homes, and annually for older properties, well water, tankless units or a history of main line problems." },
      { q: "What do you actually check?", a: "Supply lines, drains, fixtures, shutoff valves, water pressure and regulator, water heater condition and age, visible piping and accessible connections." },
      { q: "How long does an inspection take?", a: "Usually one to two hours for a single-family home, longer if we add a sewer camera run." },
      { q: "Do I get a written report?", a: "Yes, with photos and findings ranked by urgency, so you can act on what matters and plan for the rest." },
      { q: "Is an inspection worth it before buying?", a: "It is the cheapest information you will buy in the whole transaction. A sewer line or slab leak found before closing is a negotiating point instead of your problem." },
      { q: "Can you inspect a commercial property?", a: "Yes, including restaurants, offices and multi-unit buildings across the 209 & 350." },
    ],
  },
  {
    slug: "plumbing-maintenance", hub: P, name: "Plumbing Maintenance",
    desc: "Preventive plumbing maintenance: water heater flushing, drain care, valve exercise and pressure checks for Valley homes.",
    intro:
      "Hard Central Valley water is rough on water heaters, fixtures and valves. An annual once-over catches the small stuff before it turns into an emergency call at 6 AM.",
    bullets: ["Water heater flush and anode check", "Angle stop and shutoff valve exercise", "Pressure regulator verification", "Drain and disposal maintenance", "Leak and corrosion walkthrough"],
    sections: [
      {
        heading: "Plumbing Maintenance in Escalon, Modesto & the 209 & 350",
        body: [
          "Nearly every plumbing emergency we respond to was preventable, and most of them were visible months earlier. Sediment in a water heater. Pressure creeping too high. An angle stop that has not turned since the house was built. Maintenance is simply catching those before they pick their own timing.",
          "Miguel has 37+ years in the trade and has owned this company since 2010. A maintenance visit means an experienced licensed plumber going through your system on purpose, not a technician looking for something to sell.",
        ],
      },
      {
        heading: "Schedule Maintenance If Any of These Apply",
        body: ["Some homes need it more than others. These are the ones where it makes the biggest difference."],
        list: [
          { lead: "You want the system to keep performing", text: "pressure, drainage and hot water all degrade quietly and gradually." },
          { lead: "You just bought the property", text: "start from a documented baseline instead of a guess." },
          { lead: "You do not know the current condition", text: "that alone is the reason to have it looked at." },
          { lead: "The house is over 30 years old", text: "original valves, supply lines and drains are all past middle age." },
          { lead: "You are on hard water without treatment", text: "scale is accumulating in the heater and at every fixture right now." },
          { lead: "You manage a rental or commercial property", text: "planned service beats emergency calls from tenants." },
        ],
      },
      {
        heading: "What a Maintenance Visit Covers",
        body: ["More than a walkthrough. Each item below is a real failure mode we are heading off."],
        list: [
          { lead: "Pipe and fixture inspection", text: "checking for leaks, corrosion and damage at pipes, faucets and connections." },
          { lead: "Drain care", text: "clearing early buildup so a slow drain never becomes a backup." },
          { lead: "Water heater service", text: "flushing sediment, checking the anode rod, the T&P valve, venting and connections." },
          { lead: "Toilet inspection", text: "silent leaks at the flapper and wax ring waste more water than anything else in the house." },
          { lead: "Leak detection", text: "finding hidden moisture in walls, floors and ceilings before it becomes structural." },
          { lead: "Pressure check", text: "confirming house pressure is in range, because high pressure destroys heaters and fixtures early." },
          { lead: "Shutoff valve exercise", text: "making sure every angle stop and the main valve actually turn when you need them to." },
        ],
      },
      {
        heading: "Why Hard Water Makes This Matter More Here",
        body: [
          "Central Valley water is mineral-heavy. Scale collects in the bottom of the water heater and insulates the burner from the water, so the unit works harder, costs more to run and fails years early. The same minerals build up in aerators, shower valves and fixture cartridges.",
          "An annual flush and fixture check is the single highest-return maintenance item for a home in this area. On tankless units it is not optional; it is a warranty condition.",
        ],
      },
      {
        heading: "No Membership Required",
        body: [
          "We do not sell monthly plans or lock anyone into a contract. You call when you want maintenance done, you get a straightforward quote, and we do the work. That is the whole arrangement.",
          "Call 209.838.1000. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities.",
        ],
      },
    ],
    faqs: [
      { q: "How often should plumbing be serviced?", a: "Once a year for most homes, and more often on well water or with a tankless unit." },
      { q: "Do you offer a membership plan?", a: "No monthly plans. You book maintenance when you want it, at a straightforward price." },
      { q: "What does plumbing maintenance include?", a: "Pipe and fixture inspection, drain care, water heater flush and anode check, toilet inspection, leak detection, pressure verification and shutoff valve exercise." },
      { q: "Can maintenance really prevent emergencies?", a: "Most of them. Correct pressure, an annual heater flush, working shutoffs and clear drains eliminate the majority of the after-hours calls we get." },
      { q: "Why does hard water matter so much here?", a: "Scale insulates the burner in your water heater and clogs fixture cartridges and aerators. An annual flush is the highest-return maintenance item in the Valley." },
      { q: "How long does a maintenance visit take?", a: "Typically one to two hours for a single-family home, including the water heater flush." },
      { q: "Will maintenance extend the life of my water heater?", a: "Yes, meaningfully. Sediment left in the tank shortens its life and raises operating cost every month it stays there." },
      { q: "Do you maintain commercial plumbing?", a: "Yes. Restaurants, offices and multi-unit properties, on whatever interval the property actually needs." },
    ],
  },
  {
    slug: "hydrojetting", hub: P, name: "Hydrojetting",
    desc: "High-pressure hydrojetting to scour grease, sludge and roots out of drain and sewer lines, residential and commercial.",
    intro:
      "A cable punches a hole through a clog. Hydrojetting scrubs the pipe wall back to full diameter. For grease-loaded kitchen lines and root-invaded sewers, it's the difference between a fix and a rerun.",
    bullets: ["Grease, sludge and scale removal", "Root cutting in sewer laterals", "Restaurant and commercial kitchen lines", "Before-and-after camera verification", "Safe pressure matched to your pipe material"],
    sections: [
      {
        heading: "Hydrojetting in Escalon, Modesto & the 209 & 350",
        body: [
          "Cabling a drain opens a channel through the blockage. That restores flow, and for a one-time clog it is the right tool. But the grease, sludge and scale still coating the pipe wall are what the next clog will be made of, which is why some lines back up again a few months later.",
          "Hydrojetting uses high-pressure water and a specialized nozzle to scour the full inside diameter of the pipe. The line comes out closer to how it left the factory than how you found it.",
        ],
      },
      {
        heading: "Understanding How Hydro Jetting Works",
        body: [
          "We feed a flexible hose into the line through a cleanout. The nozzle directs streams forward to break through the blockage and backward to pull debris toward the cleanout while propelling the hose up the pipe. Everything it cuts loose gets flushed out rather than pushed further downstream.",
          "Pressure is chosen deliberately. We camera the line first to identify material and condition, then set pressure to match. Cast iron, clay, ABS and PVC all tolerate different things, and knowing that beforehand is the difference between a cleaning and a repair.",
        ],
      },
      {
        heading: "Top Benefits of Hydro Jetting",
        body: ["Why we recommend jetting over repeat cabling on lines with a history."],
        list: [
          { lead: "Removes the cause, not just the blockage", text: "grease and biofilm come off the pipe wall instead of staying behind to rebuild." },
          { lead: "Restores full diameter", text: "flow returns to what the pipe was designed to carry, not just enough to drain." },
          { lead: "Cuts roots", text: "root hair invading a lateral joint gets cleared, and the camera shows whether the joint needs repair." },
          { lead: "No chemicals", text: "water only, which matters for septic systems, older piping and anything downstream." },
          { lead: "Longer intervals between service", text: "a properly jetted line stays clear far longer than a cabled one." },
          { lead: "Verified results", text: "we camera before and after, so you see the condition rather than take our word for it." },
        ],
      },
      {
        heading: "Local Conditions That Make Jetting the Right Call",
        body: [
          "Hard Valley water leaves scale on the inside of drain lines, and scale gives grease something to hold onto. Add older cast iron and clay laterals in Escalon, Modesto, Riverbank and Oakdale, plus mature trees whose roots have spent forty years working toward the moisture at a sewer joint, and you get lines that need more than a cable.",
          "Commercial kitchens are the clearest case of all. Grease loading is constant, and a scheduled jetting interval means you decide when the line is serviced instead of finding out mid-dinner rush.",
        ],
      },
      {
        heading: "Residential and Commercial Service",
        body: [
          "We jet residential main lines, kitchen branches, laundry lines and sewer laterals, along with restaurant, retail and multi-unit commercial systems. Every job includes camera verification and an honest assessment of whether the pipe needs repair rather than just cleaning.",
          "Call 209.838.1000. CA Lic. #953726, C-36 plumbing, family owned in Escalon since 2010.",
        ],
      },
    ],
    faqs: [
      { q: "Will jetting damage old pipes?", a: "We camera the line first and set pressure to the material. If a line is too fragile, we say so." },
      { q: "How often do restaurants need it?", a: "Most commercial kitchens run on a quarterly or semiannual schedule." },
      { q: "What is hydro jetting and how does it work?", a: "A high-pressure water nozzle fed through a cleanout that breaks up the blockage and scours the pipe wall clean, flushing debris back out rather than downstream." },
      { q: "Is hydro jetting safe for all types of pipes?", a: "Not at the same pressure. We inspect the line by camera first, identify the material and condition, and set pressure accordingly, or recommend cabling instead when the pipe is too compromised." },
      { q: "How is jetting different from snaking?", a: "A cable opens a path through the clog. Jetting removes the buildup that formed it, restoring the pipe's full diameter." },
      { q: "How often should residential lines be jetted?", a: "Most homes do not need it routinely. Lines with a history of grease buildup or root intrusion benefit from an annual or every-other-year interval." },
      { q: "Does hydro jetting use chemicals?", a: "No, water only. That makes it appropriate for septic systems and for older piping that caustic drain products would attack." },
      { q: "Can jetting clear tree roots?", 
        a: "Yes, it cuts root intrusion out of the line. The camera then shows whether the joint the roots entered through needs repair to keep them out." },
    ],
  },
  {
    slug: "sewer-services", hub: P, name: "Sewer Services",
    desc: "Complete sewer services: camera inspection, cleaning, spot repair and full lateral replacement across the 209 & 350.",
    intro:
      "The sewer lateral is the one line nobody thinks about until everything backs up at once. We inspect, clean, repair and replace laterals, and we show you the camera footage so you can see what you're paying to fix.",
    bullets: ["Sewer camera inspection and locating", "Cleaning, cabling and hydrojetting", "Spot repairs and full replacement", "Cleanout installation", "City and county permitting handled"],
    sections: [
      {
        heading: "Sewer Services in Escalon, Modesto & the 209 & 350",
        body: [
          "The sewer lateral carries everything out of your house through one buried pipe. When it slows, every fixture slows. When it fails, you find out in the lowest drain in the building, usually at the worst possible moment.",
          "We inspect, clean, repair and replace sewer lines for homes and businesses across Stanislaus and San Joaquin County. Every diagnosis starts with a camera and you watch the screen with us, because a decision about a buried pipe should be based on a picture, not a description.",
        ],
      },
      {
        heading: "Advanced Inspection and Sewer Clearing Technology",
        body: [
          "A camera locate tells us the material, the condition, the depth and the exact distance to the problem. That is what turns an expensive unknown into a defined repair: roots at a joint at 38 feet, a belly holding water at 55, a crushed section under the driveway.",
          "For clearing, we match the tool to what the camera shows. Cabling handles soft blockages and root hair. Hydrojetting scours grease, sludge and scale off the pipe wall and restores full diameter. Both end with a second camera pass so the result is verified, not assumed.",
        ],
      },
      {
        heading: "Signs You Need a Sewer Inspection",
        body: ["A lateral rarely fails without warning. These are the signals that mean the main line, not a single fixture."],
        list: [
          { lead: "Multiple drains slow at the same time", text: "the shared line is restricted, not the individual traps." },
          { lead: "Gurgling toilets or a tub filling when you flush", text: "air being displaced by a blockage downstream." },
          { lead: "Sewage backing up at the lowest drain", text: "the lateral is blocked. Stop using water and call." },
          { lead: "Sewer odor indoors or in the yard", text: "escaping gas from a cracked or broken section." },
          { lead: "Unusually green or sunken patches in the lawn", text: "a leaking lateral feeding or washing out the soil above it." },
          { lead: "Repeat backups in the same line", text: "the underlying defect was never addressed, only the symptom." },
        ],
      },
      {
        heading: "Cleanouts, Access and Pipe Rerouting",
        body: [
          "A properly placed cleanout is the cheapest sewer investment a house can have. It gives direct access for camera work and clearing, which makes every future service call faster and less invasive. Many older Escalon and Modesto homes have none, and installing one is often the first thing we recommend.",
          "When a lateral runs under a slab, a driveway or mature landscaping, rerouting the line along a better path is sometimes less disruptive and less expensive than replacing it where it sits. We lay out both options with real numbers so the choice is yours.",
        ],
      },
      {
        heading: "Repair, Replacement and What Drives the Decision",
        body: [
          "A single break, an offset joint or root intrusion at one point is a spot repair when the rest of the pipe is sound. Widespread cracking, a bellied run holding water, or clay that has deteriorated end to end calls for replacement, and we will tell you which one you are looking at.",
          "Permits and inspections through the city and county are part of the job. Call 209.838.1000. CA Lic. #953726, serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know the sewer is the problem?", a: "Multiple fixtures backing up at once, gurgling toilets, or sewage at the lowest drain in the house." },
      { q: "Can a damaged sewer line be repaired instead of replaced?", a: "Often yes. A camera inspection tells us whether we are dealing with a single break, root intrusion or a bellied line, and we repair the failed section when the rest of the pipe is sound." },
      { q: "What are the most common causes of sewer line blockages?", a: "Tree root intrusion at joints, grease and solids buildup, offset or cracked clay pipe, and bellied sections that hold water and collect debris." },
      { q: "When is hydrojetting recommended for sewer cleaning?", a: "When the line has backed up more than once, or when the camera shows grease, sludge or scale coating the pipe rather than a single obstruction." },
      { q: "How often should sewer inspections be scheduled?", a: "Every few years for most homes, and more often for properties with mature trees over the lateral or a history of backups. Always before buying a home built before 1980." },
      { q: "How can I prevent future sewer line issues?", a: "Keep grease and wipes out of the drains, avoid planting trees over the lateral path, install a cleanout for access, and have the line inspected periodically." },
      { q: "Do I need a cleanout installed?", a: "If your home does not have one, it is worth adding. It makes every future inspection and clearing faster, cheaper and far less invasive." },
      { q: "Do you handle permits for sewer replacement?", a: "Yes. We pull city and county permits, meet the inspector, and restore and compact the site when the work is done." },
    ],
  },
  {
    slug: "sewer-line-repair", hub: P, name: "Sewer Line Repair",
    desc: "Sewer line repair and replacement for cracked, offset, root-invaded and collapsed laterals, with camera proof before and after.",
    intro:
      "Cracked clay, offset joints and root intrusion are the three things we find under most older Valley properties. We locate the exact failure point, quote a spot repair when that's honest, and a replacement when it isn't.",
    bullets: ["Camera locate before any digging", "Spot repair on isolated failures", "Full lateral replacement", "Root intrusion and collapsed line correction", "Site restored and compacted when we're done"],
    sections: [
      {
        heading: "Sewer Line Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "Every drain in your home ends up in one buried pipe. When that lateral cracks, shifts or fills with roots, the problem does not stay outside; it comes back through the lowest drain in the house. Sewage on a floor is not a plumbing inconvenience, it is a health issue and a property damage issue at the same time.",
          "We locate the failure with a camera before anything gets dug, then repair the section or replace the run based on what the pipe actually looks like. You see the footage. CA Lic. #953726, C-36 plumbing, family owned in Escalon since 2010.",
        ],
      },
      {
        heading: "Do You Need Sewer Line Service?",
        body: ["Laterals give warning signs long before they back up completely. These are the ones that matter."],
        list: [
          { lead: "Recurring backups in the same line", text: "the defect is structural, and cabling it is only buying time." },
          { lead: "Multiple drains slow at once", text: "the shared lateral is restricted rather than one fixture trap." },
          { lead: "Gurgling toilets and drains", text: "air displaced by a blockage or a bellied section holding water." },
          { lead: "Sewer smell indoors or in the yard", text: "gas escaping through a crack or an open joint." },
          { lead: "Lush green or sunken patches over the line", text: "wastewater feeding the soil, or soil washing away beneath it." },
          { lead: "Slab cracks or shifting near the line path", text: "long-term leakage undermining the ground under the structure." },
        ],
      },
      {
        heading: "Why Older Valley Laterals Fail",
        body: [
          "Homes across Escalon, Modesto, Riverbank, Oakdale and Ripon were built with clay or cast iron laterals. Clay joints separate as soil expands and contracts through our wet winters and dry summers, and every separated joint is an invitation to roots. Cast iron roughens and scales from the inside until debris has something to catch on.",
          "Mature landscaping does the rest. A tree planted forty years ago has spent every summer since sending roots toward the only reliable moisture in the yard, which is the seam in your sewer pipe.",
        ],
      },
      {
        heading: "Repair Options and How We Decide",
        body: [
          "A single break, one offset joint or roots at one point is a spot repair when the camera shows the rest of the pipe is sound. That means a targeted excavation, a replaced section, and a verified camera pass afterward.",
          "Widespread cracking, a bellied run that holds water, or clay that has deteriorated end to end calls for replacing the lateral. Replacing once costs less than paying for the same emergency three times, and we will tell you plainly which category your line falls into rather than defaulting to the bigger job.",
        ],
      },
      {
        heading: "Protecting Your Sewer Line Going Forward",
        body: [
          "Keep grease, wipes, paper towels and hygiene products out of the drains, because those are what catch on a rough joint and start a blockage. Avoid planting trees over the lateral path. Install a cleanout if the property does not have one, so future inspections are quick and non-invasive.",
          "If the line has already given you trouble, an annual camera check tells you whether it is stable or moving. Call 209.838.1000. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida.",
        ],
      },
    ],
    faqs: [
      { q: "Spot repair or full replacement?", a: "If the rest of the line images clean, a spot repair is right. If the pipe is failing throughout, replacing it once beats paying twice." },
      { q: "How long does it take?", a: "Most residential sewer repairs are completed in one to two days including inspection." },
      { q: "What are the early warning signs of a sewer line issue?", a: "Repeat backups, several drains slowing together, gurgling toilets, sewer odor, and unusually green or sunken ground over the line." },
      { q: "What should I avoid flushing to protect my sewer line?", a: "Wipes of any kind, paper towels, hygiene products, grease, coffee grounds and food solids. Wipes cause more backups than anything else we see." },
      { q: "Will my landscaping be affected during a sewer repair?", a: "We keep excavation as narrow as the repair allows, and we backfill, compact and restore the area when the work is finished." },
      { q: "Do I need a permit for sewer line work?", a: "Yes for replacement and most repairs. We pull the city or county permit and meet the inspector." },
      { q: "Can roots be cleared instead of repairing the pipe?", a: "Clearing restores flow, but roots return through the same joint. The camera shows whether that joint needs repair to end the cycle." },
      { q: "Should I have the sewer inspected before buying a home?", a: "On any home built before 1980, yes. A lateral is one of the largest surprise costs a new owner can inherit." },
    ],
  },
  {
    slug: "video-camera-inspections", hub: P, name: "Video Camera Inspections",
    desc: "Sewer and drain video camera inspection with on-screen locating, recorded footage and a clear repair recommendation.",
    intro:
      "Guessing is expensive. We push a camera down the line, locate the trouble spot to the foot, and hand you the footage so any recommendation we make is something you can see for yourself.",
    bullets: ["Sewer lateral and drain line inspection", "Depth and location marking above ground", "Recorded video provided to you", "Pre-purchase inspections for buyers", "Post-repair verification"],
    sections: [
      {
        heading: "Video Camera Inspections in Escalon, Modesto & the 209 & 350",
        body: [
          "Plumbing problems are hard to diagnose because they happen inside a pipe you cannot see. For most of the history of the trade, the only way to know what was happening in a buried line was to dig it up and look. A camera on a flexible reel changed that completely.",
          "We feed a high-resolution camera down the drain or sewer lateral and watch the inside of the pipe in real time. You watch with us. Whatever we recommend afterward is based on something you have already seen with your own eyes.",
        ],
      },
      {
        heading: "What a Camera Inspection Finds",
        body: ["A single pass usually answers every question worth asking about a line."],
        list: [
          { lead: "Blockages", text: "grease, sludge, solids and debris, and exactly how far down the line they sit." },
          { lead: "Root intrusion", text: "which joint the roots entered through and how much of the diameter they are taking." },
          { lead: "Cracks and offset joints", text: "structural failures that clearing will never fix." },
          { lead: "Bellied sections", text: "a sag holding standing water, which is why some lines clog again and again." },
          { lead: "Corrosion and scale", text: "how much life is realistically left in cast iron or galvanized pipe." },
          { lead: "Collapse", text: "a crushed section, often under a driveway or a settled area of the yard." },
        ],
      },
      {
        heading: "On-Screen Locating: Marking the Spot Above Ground",
        body: [
          "Our camera carries a sonde transmitter, so as we watch the footage we also track the camera head from the surface. That means we can mark the exact spot and depth of the problem on your driveway or lawn with paint.",
          "This is what keeps excavation small. Instead of trenching a line to search for a failure, we dig one targeted hole where we already know the break is.",
        ],
      },
      {
        heading: "Before You Buy, and After We Repair",
        body: [
          "For homebuyers, a sewer camera is the cheapest insurance in the transaction. A lateral replacement discovered before closing is a negotiating item; discovered after, it is your problem. On any Valley home built before 1980, we consider it essential.",
          "We also camera lines after a repair or a jetting, so you have verification that the work actually accomplished what it was supposed to. And we recover lost valuables from traps and lines more often than you would expect.",
        ],
      },
      {
        heading: "Individualized Analysis, Not a Template",
        body: [
          "The equipment matters, but the interpretation matters more. Miguel has 37+ years in the trade, and knowing what a hairline offset means in clay pipe versus what scale means in cast iron is the part that determines whether you spend money in the right place.",
          "You get the footage to keep. Call 209.838.1000 to schedule an inspection. CA Lic. #953726.",
        ],
      },
    ],
    faqs: [
      { q: "Can you tell where the problem is from the surface?", a: "Yes. Our camera has a sonde locator, so we mark the exact spot and depth on the ground." },
      { q: "Is a camera worth it before buying a home?", a: "Absolutely. A lateral replacement is one of the largest surprise costs a new homeowner can hit." },
      { q: "Do I get a copy of the video?", a: "Yes. You keep the footage, which is useful for insurance, for a real estate negotiation, or simply for comparison at the next inspection." },
      { q: "Does a camera inspection require digging?", a: "No. It goes in through an existing cleanout or fixture opening, which is the entire point of doing it before any excavation." },
      { q: "How long does an inspection take?", a: "Usually under an hour for a residential sewer lateral, longer if we are inspecting several branch lines." },
      { q: "Can a camera find a water leak?", a: "Not a pressurized supply leak; that calls for acoustic leak detection. A camera inspects drain and sewer lines." },
      { q: "Should I camera the line after a backup?", a: "Yes, especially if it is the second one. Clearing tells you the line flows again; a camera tells you why it stopped." },
      { q: "Can you inspect commercial drain lines?", a: "Yes, including restaurants, multi-unit buildings and commercial kitchens across the 209 & 350." },
    ],
  },
  {
    slug: "commercial-plumbing", hub: P, name: "Commercial Plumbing",
    desc: "Commercial plumbing for restaurants, retail, offices and multi-unit properties: repairs, water heaters, drains and grease traps.",
    intro:
      "Downtime costs you money, so we schedule around your hours and show up with the truck stocked. From restaurant kitchens to property management portfolios, we keep commercial plumbing running.",
    bullets: ["Restaurant and commercial kitchen plumbing", "Commercial water heaters and recirculation", "Grease trap service and drain maintenance", "Multi-unit and property management accounts", "Before-hours and after-hours scheduling"],
    sections: [
      {
        heading: "Commercial Plumbing in Escalon, Modesto & the 209 & 350",
        body: [
          "Commercial plumbing is a different discipline than residential work. The volume is higher, the code requirements are stricter, the equipment is larger, and the cost of a failure is measured in closed doors and lost revenue rather than inconvenience.",
          "We serve restaurants, retail, offices, salons, medical and dental suites, warehouses, churches, schools and multi-unit residential properties throughout Stanislaus and San Joaquin County. Miguel has 37+ years in the trade and CA Lic. #953726, C-36 plumbing.",
        ],
      },
      {
        heading: "A Full Range of Commercial Services Under One Roof",
        body: ["One licensed contractor for the whole building, rather than three vendors who each know one system."],
        list: [
          { lead: "Commercial water heaters", text: "installation, repair and recirculation systems sized for real demand." },
          { lead: "Drain and sewer maintenance", text: "cabling, hydrojetting and camera inspection on a schedule you choose." },
          { lead: "Grease trap service", text: "cleaning and maintenance that keeps you compliant and keeps the kitchen line open." },
          { lead: "Backflow prevention and testing", text: "required certification handled and documented." },
          { lead: "Fixture and restroom plumbing", text: "commercial toilets, urinals, flush valves, sinks and ADA fixtures." },
          { lead: "Gas line work", text: "for commercial ranges, fryers, water heaters and rooftop equipment." },
          { lead: "Leak detection and repiping", text: "for aging commercial supply systems." },
        ],
      },
      {
        heading: "Scheduling Around Your Operation",
        body: [
          "A restaurant cannot shut its kitchen at noon and an office cannot lose its restrooms at 10 AM. We plan commercial work around your hours, including before opening and after closing when the job allows it, and we arrive with the truck stocked so one visit finishes the work.",
          "For emergencies, commercial calls go to the front of the schedule. We are honest that we are not a 24-hour operation, and we are equally honest that a business down is the first call we take.",
        ],
      },
      {
        heading: "Why Local Businesses and Property Managers Choose Mainline",
        body: [
          "You get a licensed C-36 contractor who has worked in these buildings for years, flat-rate quotes before work begins, and consolidated invoicing for portfolios. No layers of dispatch between you and the person who will actually do the work.",
          "We work with property managers on both one-off calls and ongoing maintenance across multiple addresses, with documentation that supports your records and your compliance obligations.",
        ],
      },
      {
        heading: "Preventive Maintenance Is Cheaper Than Closing",
        body: [
          "Scheduled drain jetting in a commercial kitchen, annual water heater service, backflow testing on time and periodic camera inspection of the main line eliminate most of the emergencies that shut a business down mid-shift.",
          "Call 209.838.1000 to set up commercial service. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop, Salida and the surrounding 209 & 350 communities.",
        ],
      },
    ],
    faqs: [
      { q: "Do you work with property managers?", a: "Yes, on both one-off calls and ongoing portfolios, with consolidated invoicing." },
      { q: "Can you work outside business hours?", a: "Yes. We schedule commercial work around your operating hours whenever possible." },
      { q: "What are common signs a commercial plumbing system needs repair?", a: "Slow or backing-up floor drains, recurring clogs in the same line, low pressure, water stains, running fixtures and rising water bills." },
      { q: "How often should a commercial plumbing system be inspected?", a: "Annually for most properties, and more often for restaurants and high-traffic buildings where grease loading and constant use accelerate wear." },
      { q: "What preventative steps can a business take?", a: "Scheduled drain jetting, on-time grease trap service, annual water heater maintenance, current backflow certification and periodic main line camera checks." },
      { q: "Should I try to fix a commercial plumbing problem myself?", a: "No. Commercial systems carry code, health and liability requirements that residential fixes do not, and an improper repair can put your permits at risk." },
      { q: "Do you service restaurants and commercial kitchens?", a: "Yes, including kitchen drain lines, grease traps, commercial gas lines, prep sinks and water heaters." },
      { q: "What should I do about a commercial plumbing emergency?", a: "Shut off water to the affected area if you can and call 209.838.1000. Business-down calls get moved to the top of our schedule." },
    ],
  },
  {
    slug: "kitchen-bath-remodeling", hub: P, name: "Kitchen & Bath Remodeling Plumbing",
    desc: "Remodel plumbing for kitchens and bathrooms: rough-in, relocation, fixture setting and code-compliant final connections.",
    intro:
      "Your remodel is only as good as the plumbing behind the tile. We handle rough-in, fixture relocation, venting and final connections so the finish work goes on straight the first time.",
    bullets: ["Supply and drain rough-in", "Fixture and appliance relocation", "Tub-to-shower conversions", "Pot fillers, farmhouse sinks and vanity sets", "Coordination with your contractor's schedule"],
    sections: [
      {
        heading: "Kitchen & Bath Remodel Plumbing in Escalon, Modesto & the 209 & 350",
        body: [
          "The plumbing in a remodel is the part nobody sees and everybody depends on. Fixtures get chosen for looks, but whether they work and whether they pass inspection comes down to supply sizing, drain slope and venting that was set weeks before the tile went up.",
          "We are regularly the plumbing trade on kitchen and bathroom remodels across Stanislaus and San Joaquin County, working alongside homeowners and general contractors. CA Lic. #953726, C-36 plumbing, 37+ years of trade experience behind the work.",
        ],
      },
      {
        heading: "What We Remodel",
        body: ["Almost every part of a kitchen or bath touches plumbing somewhere."],
        list: [
          { lead: "Kitchen sinks and faucets", text: "including farmhouse and undermount installations that need deck and cabinet modification." },
          { lead: "Dishwashers, disposals and pot fillers", text: "new supply, drain and air gap connections done to code." },
          { lead: "Tubs and tub-to-shower conversions", text: "one of the most requested remodels we do, and one that changes the drain." },
          { lead: "Showers, valves and pans", text: "mixing valve selection, pan slope and drain placement before waterproofing." },
          { lead: "Toilets and bidet-ready setups", text: "flange height, rough-in dimension and supply set correctly for the model chosen." },
          { lead: "Vanities and bathroom sinks", text: "new supply, drain and shutoff work for relocated or resized cabinetry." },
        ],
      },
      {
        heading: "Moving a Sink, Toilet or Shower",
        body: [
          "Relocating a fixture is usually possible, and the deciding factor is almost always the drain and vent, not the water supply. Drains need fall, and vents need a path. On a slab home that can mean cutting concrete; on a raised foundation it is generally much simpler.",
          "We check the existing layout before quoting so you find out what a relocation actually involves at the design stage rather than midway through demolition.",
        ],
      },
      {
        heading: "Working With Your Contractor and the Inspector",
        body: [
          "Remodel plumbing happens in two visits that bracket everyone else's work: rough-in before drywall, and final connections after the finishes are in. Missing either window costs the whole project time, so we schedule to your contractor's timeline and hold to it.",
          "Rough-in gets inspected. We install to current California code, pull what needs pulling, and meet the inspector so your project keeps moving.",
        ],
      },
      {
        heading: "Upgrades Worth Considering During a Remodel",
        body: [
          "A remodel is the one time the walls are already open, which makes it the cheapest moment to replace aging galvanized branches, add a shutoff where there never was one, upsize a drain, or run the gas line for a future range. Efficient fixtures and a properly sized water heater also fit naturally into this stage.",
          "Planning a kitchen or bath project? Call 209.838.1000 and let us look at the plumbing before the design is final.",
        ],
      },
    ],
    faqs: [
      { q: "Do you work with our contractor?", a: "Yes, we're regularly the plumbing trade on remodels and we schedule to their timeline." },
      { q: "Can you move a sink or toilet?", a: "Usually yes, depending on the drain and vent layout. We check before quoting." },
      { q: "What is the average timeline for remodel plumbing?", a: "Rough-in is typically one to three days depending on scope, then final connections happen after the finishes are installed." },
      { q: "Can you help me choose fixtures?", a: "Yes. We will tell you which fixtures hold up in hard Central Valley water and which ones we get called back to service, before you buy." },
      { q: "Do remodels need a permit?", a: "Relocated fixtures, new drain or vent work and gas line changes are permitted and inspected. We handle the plumbing side of that." },
      { q: "Can you convert a tub to a walk-in shower?", a: "Yes, and it is one of our most common remodel requests. The drain location and pan slope are the parts that need to be right." },
      { q: "How can I make my remodel more efficient?", a: "Efficient fixtures, a correctly sized water heater and properly insulated hot water runs. Small choices at rough-in that show up on every bill afterward." },
      { q: "Should I replace old piping during the remodel?", a: "If you have galvanized or a history of pinholes, yes. The walls are already open, which is the least expensive that work will ever be." },
    ],
  },
  {
    slug: "kitchen-bath-remodeling/toilet-repair", parent: "kitchen-bath-remodeling", hub: P, name: "Toilet Repair",
    desc: "Toilet repair for running, leaking, clogged, rocking and weak-flushing toilets, with same-day availability.",
    intro:
      "A running toilet can waste hundreds of gallons a day, and a rocking one is usually a failed wax ring quietly soaking your subfloor. Both are quick fixes when they're caught early.",
    bullets: ["Running and phantom-flushing toilets", "Wax ring and flange replacement", "Fill valve, flapper and handle repair", "Rocking, leaking and loose toilets", "Stubborn clogs and weak flush"],
    sections: [
      {
        heading: "Toilet Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "The toilet is the most used fixture in the house and the one most likely to waste water without anyone noticing. A worn flapper can pass hundreds of gallons a day silently, and it will show up on your bill long before you hear it.",
          "We repair running, leaking, clogged, rocking and weak-flushing toilets for homes and businesses across Stanislaus and San Joaquin County, usually in a single visit. CA Lic. #953726, owner-operated since 2010.",
        ],
      },
      {
        heading: "Common Toilet Problems and What Causes Them",
        body: ["Most toilet trouble comes down to six parts, and all six are repairable."],
        list: [
          { lead: "Constant running", text: "a worn flapper or a misadjusted fill valve letting water pass continuously into the bowl." },
          { lead: "Phantom flushing", text: "the tank refilling on its own, which means water is leaking past the flapper seat." },
          { lead: "Water pooling at the base", text: "a failed wax ring or a corroded flange. This water reaches your subfloor." },
          { lead: "A rocking or loose toilet", text: "loose bolts or a damaged flange, and every rock breaks the wax seal further." },
          { lead: "Weak or incomplete flush", text: "clogged rim jets, mineral buildup in the trapway, or a chain adjusted wrong." },
          { lead: "Repeat clogs", text: "often a partially blocked branch line rather than the toilet itself." },
        ],
      },
      {
        heading: "Repair or Replace: How We Decide",
        body: [
          "Under roughly ten years old, with a sound tank and bowl, repair almost always wins. Flappers, fill valves, flush valves, supply lines, angle stops and wax rings are inexpensive parts and a straightforward job.",
          "A cracked tank or bowl gets replaced, full stop; a hairline crack becomes a flood eventually. We also recommend replacement when a very old low-efficiency unit clogs constantly, because a modern fixture uses far less water per flush and actually clears the bowl.",
        ],
      },
      {
        heading: "Hard Water and Why Valley Toilets Struggle",
        body: [
          "Mineral-heavy Central Valley water leaves scale everywhere water sits or passes. In a toilet that means deposits in the rim jets and siphon jet, which is the single most common reason for a flush that seems to have lost its power over the years.",
          "The same minerals stiffen flapper rubber and coat the flapper seat, which is why a toilet that never used to run suddenly does. Both are repairs, not replacements, when they are caught in time.",
        ],
      },
      {
        heading: "Water Conservation and California Standards",
        body: [
          "California limits new toilets to 1.28 gallons per flush, and modern high-efficiency fixtures clear the bowl at that volume better than the 3.5 and 5 gallon units they replaced. If you still have an original 1980s toilet, a replacement pays back in water use rather than just in appearance.",
          "Either way, fixing a running toilet is the highest-return small plumbing repair in any house. Call 209.838.1000. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida.",
        ],
      },
    ],
    faqs: [
      { q: "Repair or replace?", a: "Under about ten years old, repair almost always wins. Cracked tanks or bowls get replaced." },
      { q: "Why is water pooling at the base?", a: "Usually a failed wax ring or a corroded flange. Don't wait on it, that water is reaching the subfloor." },
      { q: "Why does my toilet keep running?", a: "Almost always a worn flapper or a fill valve out of adjustment. Both are quick, inexpensive repairs, and both waste a startling amount of water until they are done." },
      { q: "Can a running toilet raise my water bill?", a: "Considerably. A silently leaking flapper can pass hundreds of gallons a day, and it is one of the most common causes of an unexplained bill jump." },
      { q: "Why is my flush weak?", a: "Usually mineral buildup in the rim and siphon jets from hard water, or a flush chain adjusted too long. We clear the jets and reset the mechanism." },
      { q: "Is it normal for a toilet to rock slightly?", a: "No. Movement means loose bolts or a damaged flange, and every rock works the wax seal loose. It should be corrected before it leaks." },
      { q: "How can I prevent toilet clogs?", a: "Flush only waste and toilet paper. Wipes labeled flushable, paper towels and hygiene products are the cause of most of the clogs we clear." },
      { q: "Can you repair commercial toilets?", a: "Yes, including flush valve and pressure-assist units in restaurants, offices and multi-unit properties." },
    ],
  },
  {
    slug: "water-softener-repair-installation", hub: P, name: "Water Softener Repair & Installation",
    desc: "Water softener installation, repair and salt system service for hard Central Valley water. Protect fixtures and water heaters.",
    intro:
      "Central Valley water is hard, and hard water is what shortens water heater life, spots your glassware and crusts your fixtures. A properly sized softener is one of the highest-return plumbing upgrades here.",
    bullets: ["Softener sizing based on your actual hardness", "New installation with bypass and drain", "Resin, valve and control head repair", "Salt-free conditioner options", "Loop installation for new construction"],
    sections: [
      {
        heading: "Water Softener Installation & Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "Central Valley water is hard, and hard water is not just a nuisance about spotty glassware. Dissolved calcium and magnesium plate out as scale inside your water heater, inside your supply lines and inside every fixture cartridge in the house. That scale is why heaters fail early here and why faucets stop working smoothly.",
          "We size, install, repair and service water softeners for homes and businesses throughout Stanislaus and San Joaquin County. CA Lic. #953726, and 37+ years of experience with exactly the water you have.",
        ],
      },
      {
        heading: "Signs You Need a Softener or Yours Has Failed",
        body: ["Hard water leaves the same evidence in every house. If a softener is already installed and you see these, the unit has stopped working."],
        list: [
          { lead: "White crust on faucets and shower heads", text: "mineral scale depositing wherever water evaporates." },
          { lead: "Spotted dishes and cloudy glassware", text: "minerals left behind as the water dries." },
          { lead: "Soap and shampoo that will not lather", text: "hardness binding with soap instead of foaming." },
          { lead: "Stiff laundry and faded fabrics", text: "minerals embedding in the fibers through every wash." },
          { lead: "Dry skin and dull hair", text: "the residue hard water leaves behind on both." },
          { lead: "A water heater that failed early", text: "scale on the bottom of the tank insulating the burner from the water." },
          { lead: "Salt not being consumed", text: "on an existing softener, this means the unit has stopped regenerating." },
        ],
      },
      {
        heading: "Sizing Matters More Than Brand",
        body: [
          "A softener that is undersized for the household regenerates constantly, wears out early and still lets hard water through during peak use. Oversized, it wastes salt and water. The right size comes from two numbers: your measured hardness and your actual daily water use.",
          "We test hardness on site rather than working from an average for the area, then match grain capacity to the household. Installation includes a bypass so the unit can be serviced without shutting off the house, and a proper drain connection.",
        ],
      },
      {
        heading: "Water Softener Repairs",
        body: [
          "Most softener failures are not the tank; they are the control head, the resin or the brine system. A unit that stops regenerating, a control valve stuck in bypass, a brine tank with a salt bridge crusted over the water, a leaking bypass valve or resin that has finally exhausted after ten to fifteen years are all repairable.",
          "We diagnose the actual failure and tell you whether repair or replacement makes better sense given the unit's age. If a control head repair buys five more good years, that is what we will recommend.",
        ],
      },
      {
        heading: "Salt-Free Conditioners and Which to Choose",
        body: [
          "Salt-based softeners remove hardness minerals through ion exchange; that is true softening, and it is what protects a water heater. Salt-free conditioners do not remove minerals, they alter them so they are less likely to adhere, which reduces scale without the slick feel or the salt.",
          "Both have a place. If your priority is water heater and fixture protection, a softener is the answer. If you are on a sodium-restricted diet or cannot accommodate a drain, a conditioner is a reasonable compromise. We will explain the tradeoff honestly instead of pushing one. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "How hard is the water here?", a: "Hard enough to matter. We test on site and size the unit to your household's hardness and usage." },
      { q: "Will a softener help my water heater?", a: "Yes. Scale is the number one reason tanks fail early in this area." },
      { q: "Are salt-free systems as effective as traditional softeners?", a: "They reduce scale but they do not remove hardness minerals. For water heater and fixture protection, a salt-based softener does more." },
      { q: "How often should I maintain or replace my softener?", a: "Check salt monthly, have the unit serviced annually, and expect resin to last roughly ten to fifteen years before capacity drops off." },
      { q: "Can hard water damage my water heater?", a: "Yes, and it is the most common cause of early tank failure here. Scale settles on the tank bottom and insulates the burner from the water it is heating." },
      { q: "What are the installation requirements?", a: "A supply connection point, a drain for regeneration discharge, and power. Homes without a plumbed softener loop need one added, which we handle." },
      { q: "Does softening affect the taste of drinking water?", a: "Slightly, and some households prefer a separate drinking water filter or reverse osmosis unit at the kitchen sink alongside a softener." },
      { q: "My softener is not using salt. What is wrong?", a: "It has stopped regenerating, usually a control head problem or a salt bridge crusted over the brine tank water. Both are common and both are repairable." },
    ],
  },
  {
    slug: "water-treatment-systems", hub: P, name: "Water Treatment Systems",
    desc: "Whole-home water treatment: filtration, softening, iron and sediment removal, and well water systems.",
    intro:
      "Between municipal chlorine and rural well water, no two homes here have the same water problem. We test first, then build a treatment system around what's actually in your water.",
    bullets: ["On-site water testing", "Whole-home filtration", "Iron, sulfur and sediment removal", "Well water treatment and pressure tanks", "Annual media and filter service"],
    sections: [
      {
        heading: "Water Treatment Systems in Escalon, Modesto & the 209 & 350",
        body: [
          "No two properties in this area have the same water. A house on Modesto municipal supply is dealing with hardness and chlorine. A rural property on a well two miles away might be dealing with iron, sulfur odor, sediment and bacteria instead. Selling the same system to both is how people end up with equipment that does not solve their problem.",
          "We test first. Then we design treatment around what the test actually shows. CA Lic. #953726, family owned in Escalon since 2010.",
        ],
      },
      {
        heading: "Common Water Treatment Problems and How to Prevent Them",
        body: ["Most of the failures we get called about are maintenance items, not equipment defects."],
        list: [
          { lead: "Hard water breaking through", text: "an undersized or failing softener no longer removing hardness minerals." },
          { lead: "Clogged filters", text: "restricting flow and dropping pressure through the whole house. Replace on schedule." },
          { lead: "System leaks", text: "worn fittings, connections and O-rings at the treatment equipment itself." },
          { lead: "Loud or cycling equipment", text: "often a pressure tank or control valve issue rather than the treatment media." },
          { lead: "Frequent regeneration", text: "the unit is undersized for the household, or the control settings are wrong." },
          { lead: "Iron staining or sulfur smell", text: "common on well water, and treatable with the right media." },
        ],
      },
      {
        heading: "Benefits of Professional Water Treatment",
        body: ["Treated water is a plumbing investment as much as a comfort one."],
        list: [
          { lead: "Protects your plumbing", text: "less scale in the pipes, the water heater and every fixture in the house." },
          { lead: "Extends appliance life", text: "dishwashers, washing machines and water heaters all last longer on treated water." },
          { lead: "Better taste and odor", text: "chlorine, sulfur and metallic taste removed at the source." },
          { lead: "Skin, hair and laundry", text: "no mineral residue left behind on any of the three." },
          { lead: "Lower operating cost", text: "a scale-free water heater uses less energy every single month." },
        ],
      },
      {
        heading: "Choosing the Right System",
        body: [
          "The right system follows the test results, the household's water use, the space and drain available where the equipment will live, and how much maintenance you actually want to perform. A whole-home carbon filter, a softener, a sediment prefilter and an iron filter all solve different problems, and some homes need two of them in series.",
          "We lay out what each piece does and what it will not do, so you are buying based on your water rather than on a brochure.",
        ],
      },
      {
        heading: "Well Water and Rural Properties",
        body: [
          "Rural properties around Escalon, Oakdale and Riverbank often need sediment filtration, iron and manganese removal, sulfur odor treatment, and in some cases disinfection, along with a correctly sized pressure tank. Well systems also need periodic testing, because well water changes over time in ways municipal supply does not.",
          "We service what we install and we service equipment other companies installed. Call 209.838.1000 for testing and treatment.",
        ],
      },
    ],
    faqs: [
      { q: "Do you test the water first?", a: "Always. Selling a system before testing is how people end up with the wrong equipment." },
      { q: "Do you service well systems?", a: "Yes, including sediment, iron and bacteria treatment for rural properties." },
      { q: "How do I know if my water treatment system is failing?", a: "Hardness symptoms returning, a pressure drop through the house, no salt consumption, staining or odor coming back, or visible leaking at the equipment." },
      { q: "What is the average lifespan of a water treatment system?", a: "Well-maintained equipment commonly serves ten to fifteen years, with filters and media replaced on schedule along the way." },
      { q: "Can water treatment remove all contaminants?", a: "No single system does. Each technology targets specific contaminants, which is exactly why testing comes before equipment selection." },
      { q: "How often should filters be changed?", a: "Depending on the stage and your water, typically every six to twelve months. Sediment prefilters on well water often need it sooner." },
      { q: "Is professional installation necessary?", a: "For whole-home equipment, yes. It ties into the main supply and needs a proper bypass, drain and correct sizing to work and to stay serviceable." },
      { q: "Do treatment systems need regular inspections?", a: "An annual check keeps performance where it should be and catches a failing control valve or exhausted media before you notice it at the tap." },
    ],
  },
  {
    slug: "water-purification-systems", hub: P, name: "Water Purification Systems",
    desc: "Drinking water purification: reverse osmosis, under-sink filtration and whole-home purification, installed and serviced.",
    intro:
      "If you're buying bottled water by the case, a purification system pays for itself fast. We install reverse osmosis and carbon systems at the sink or for the whole house, and we keep the filters on schedule.",
    bullets: ["Reverse osmosis under-sink systems", "Whole-home carbon purification", "Refrigerator and pot filler tie-ins", "Filter replacement service", "Post-install water quality verification"],
    sections: [
      {
        heading: "Water Purification in Escalon, Modesto & the 209 & 350",
        body: [
          "Water that meets every regulatory standard can still taste like a swimming pool, leave scale on your kettle and carry more dissolved solids than you would choose to drink. Purification is about what comes out of the tap you actually drink from.",
          "We install and service multi-stage purification, from under-sink reverse osmosis for drinking and cooking water to whole-home carbon systems that treat every fixture. We test before and after, so you can see what changed. CA Lic. #953726.",
        ],
      },
      {
        heading: "Signs You May Need a Purification System",
        body: ["The tap usually tells you before a test does."],
        list: [
          { lead: "Chlorine taste or smell", text: "municipal disinfectant residual, and the most common complaint we hear." },
          { lead: "Metallic or bitter taste", text: "dissolved metals or high total dissolved solids." },
          { lead: "Cloudy water at the tap", text: "sediment or trapped air, and worth identifying which." },
          { lead: "Buying bottled water regularly", text: "the clearest sign a purification system will pay for itself in convenience alone." },
          { lead: "Rotten egg smell", text: "hydrogen sulfide, common on well water and treatable." },
          { lead: "Staining in sinks and tubs", text: "iron, manganese or high mineral content." },
        ],
      },
      {
        heading: "Understanding Your Water Test Results",
        body: [
          "A test report is only useful if someone explains it. Total dissolved solids tell you the overall mineral load. Hardness tells you what will scale your water heater. Chlorine and chloramine explain taste and smell. Iron and manganese explain staining. pH affects how aggressive the water is toward your piping. Nitrates and bacteria matter most on well water.",
          "We walk through the numbers with you and connect each one to a specific stage of treatment, so you know exactly what you are paying to remove and why.",
        ],
      },
      {
        heading: "Reverse Osmosis, Whole-Home Carbon, or Both",
        body: [
          "Reverse osmosis pushes water through a semi-permeable membrane and removes the widest range of dissolved contaminants. It is the right choice for drinking and cooking water at a single point of use, typically the kitchen sink, and it can tie into the refrigerator and a pot filler.",
          "Whole-home carbon treats every tap in the house for chlorine, taste and odor, which is what you want for showers and laundry. Plenty of households install both: carbon for the whole house, reverse osmosis at the kitchen for drinking water.",
        ],
      },
      {
        heading: "Our Installation Process and Ongoing Service",
        body: [
          "We start with an on-site test and a conversation about what bothers you most about your water. Then we recommend the stages that address it, install with proper shutoffs and drain connections, and verify results by testing again afterward.",
          "Filters and membranes are consumables. Carbon and sediment stages typically run six to twelve months, RO membranes several years, and we handle replacement on schedule so the system keeps performing rather than quietly stopping. Call 209.838.1000.",
        ],
      },
    ],
    faqs: [
      { q: "RO or whole-home?", a: "RO for drinking and cooking water, whole-home carbon for taste, odor and chlorine at every tap. Many homes use both." },
      { q: "How often do filters change?", a: "Typically every six to twelve months depending on the stage and your usage." },
      { q: "How do I know if my water is contaminated?", a: "Testing is the only definitive answer. Taste, smell, staining and cloudiness are useful clues about what to test for." },
      { q: "What is the difference between filtration and purification?", a: "Filtration removes particles and specific compounds like chlorine. Purification goes further, removing dissolved solids and a much broader contaminant range, which is what reverse osmosis does." },
      { q: "How long does installation take?", a: "An under-sink reverse osmosis system is usually a same-day install. Whole-home equipment takes longer because it ties into the main supply." },
      { q: "Can I customize my purification system?", a: "Yes. Stages are selected from your test results, so a home with sulfur odor gets a different configuration than one with only chlorine taste." },
      { q: "Do I need to replace filters regularly?", a: "Yes. A neglected filter stops treating and starts restricting flow, so scheduled replacement is part of owning the system." },
      { q: "Is purified water safe for children and pets?", a: "Yes. Purified water is safe for everyone in the household, including for baby formula and pet bowls." },
    ],
  },
  {
    slug: "toilet-installation", hub: P, name: "Toilet Installation",
    desc: "New toilet installation including comfort height, dual flush and bidet-ready models, with haul-away of the old unit.",
    intro:
      "A new toilet is a same-day upgrade. We set it level on a solid flange with a new supply line and shutoff, and we take the old one with us.",
    bullets: ["Standard, comfort height and dual flush models", "New wax ring, bolts, supply line and angle stop", "Flange repair or replacement when needed", "Bidet-ready and smart toilet setups", "Old toilet hauled away"],
    sections: [
      {
        heading: "Toilet Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "Setting a toilet looks simple and goes wrong in quiet ways. A flange sitting below finished floor height, a bolt overtightened into porcelain, a wax ring that never fully seated: none of those announce themselves on day one. They show up months later as a rocking fixture, a stained ceiling below, or a soft spot in the subfloor.",
          "We install standard, comfort height, dual flush, one-piece, wall-hung, bidet-ready and smart toilets, and we haul the old unit away. CA Lic. #953726, 37+ years in the trade.",
        ],
      },
      {
        heading: "What a Complete Installation Includes",
        body: ["A proper install replaces the parts that fail, not just the fixture."],
        list: [
          { lead: "Flange inspection and repair", text: "the most common hidden problem, and the one that causes rocking and leaks." },
          { lead: "New wax ring or seal", text: "never reused, because a compressed ring will not seal a second time." },
          { lead: "New closet bolts", text: "corroded bolts are why old toilets cannot be tightened properly." },
          { lead: "New supply line and angle stop", text: "the two parts most likely to fail years after the toilet itself is fine." },
          { lead: "Level setting and shimming", text: "so the fixture does not rock and break the wax seal." },
          { lead: "Leak test and haul-away", text: "we verify a dry base under load and take the old unit with us." },
        ],
      },
      {
        heading: "Choosing the Right Toilet",
        body: [
          "Rough-in dimension comes first, and it is the measurement most people miss: the distance from the wall to the center of the drain, typically 12 inches but sometimes 10 or 14. Buy the wrong rough-in and the toilet will not fit the space.",
          "After that it is preference. Comfort height suits most adults and anyone with mobility considerations. Dual flush saves water on liquid waste. One-piece units are easier to clean. Elongated bowls are more comfortable; round bowls fit tight bathrooms. We will tell you which brands we get called back to repair, which is worth knowing before you buy.",
        ],
      },
      {
        heading: "Do You Need a New Toilet or a Repair?",
        body: [
          "If the fixture is under about ten years old with a sound tank and bowl, repair is usually the better spend: flapper, fill valve, wax ring and supply line are inexpensive parts.",
          "Replace when there is a crack anywhere in the tank or bowl, when a very old low-efficiency unit clogs constantly, when scale in the trapway has permanently weakened the flush, or when a wobble traces back to a floor and flange problem that has already been repaired once.",
        ],
      },
      {
        heading: "Water Savings and Local Standards",
        body: [
          "California requires new toilets to use no more than 1.28 gallons per flush. If your bathroom still has an original 3.5 or 5 gallon fixture, a modern high-efficiency toilet clears the bowl better and uses a fraction of the water, which shows up on the bill rather than just in the room.",
          "Most installations are finished in under two hours, including flange work. Call 209.838.1000. Serving Escalon, Modesto, Turlock, Riverbank, Oakdale, Ripon, Manteca, Lathrop and Salida.",
        ],
      },
    ],
    faqs: [
      { q: "How long does it take?", a: "Most installs are under two hours, including flange work." },
      { q: "Can you supply the toilet?", a: "Yes, or we'll install one you already purchased." },
      { q: "Do I need to replace my toilet or can it be repaired?", a: "Under about ten years old with no cracks, repair usually wins. Cracked porcelain, constant clogging in a very old unit, or a repeat flange failure point to replacement." },
      { q: "What are the benefits of a new toilet?", a: "Far less water per flush, a stronger and quieter flush, easier cleaning, and no more chasing repairs on worn internals." },
      { q: "Can I install a toilet myself?", a: "You can, and flange height, bolt torque and wax ring seating are exactly where DIY installs fail. Those failures leak into the subfloor before you see them." },
      { q: "How do I choose the right toilet for my bathroom?", a: "Start with the rough-in measurement from the wall to the drain center, then decide on height, bowl shape and flush type. We will confirm the fit before you buy." },
      { q: "Do you haul away the old toilet?", a: "Yes, removal and disposal are part of the installation." },
      { q: "Can you install a bidet-ready or smart toilet?", a: "Yes. Those need a supply connection for the bidet function and, for smart units, a nearby GFCI outlet, which we will confirm before install day." },
    ],
  },
  {
    slug: "garbage-disposal-repair", hub: P, name: "Garbage Disposal Repair",
    desc: "Garbage disposal repair for jammed, humming, leaking and dead units, with honest repair-versus-replace advice.",
    intro:
      "A humming disposal is usually jammed, a silent one is usually electrical, and a dripping one is usually done. We diagnose in minutes and tell you which of the three you have.",
    bullets: ["Jam clearing and reset", "Leaking flange and housing diagnosis", "Electrical and switch troubleshooting", "Drain and dishwasher line clearing", "Straight repair-or-replace recommendation"],
    sections: [
      {
        heading: "Garbage Disposal Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "A disposal tells you what is wrong by the sound it makes. A hum with no rotation is a jammed flywheel. Total silence usually means a tripped reset, a failed switch or a burned-out motor. A drip under the cabinet is a seal or a mount, and where the water shows up decides whether it gets fixed or replaced.",
          "We work on every common brand and horsepower, and because Miguel has 37+ years in the trade and has led this crew since 2010, the diagnosis happens in minutes instead of by trial and error. If the unit is worth saving, we say so. If it is not, we tell you that too.",
        ],
      },
      {
        heading: "Signs Your Disposal Needs Service",
        body: ["Most homeowners live with a failing disposal far longer than they need to. These are the symptoms worth a call."],
        list: [
          { lead: "Humming without grinding", text: "the motor has power but the flywheel is jammed on bone, fruit pit or fibrous waste." },
          { lead: "No sound at all", text: "a tripped reset button, a dead switch, a bad outlet or a failed motor winding." },
          { lead: "Water under the sink", text: "a leaking sink flange, a loose drain arm, or a housing seal that has given up." },
          { lead: "Standing water in the sink", text: "the drain line downstream of the disposal is restricted, not the unit itself." },
          { lead: "Rattling or metal-on-metal noise", text: "loose hardware inside the chamber or a shredder ring that has come apart." },
          { lead: "Persistent odor after cleaning", text: "food packed under the baffle or in the chamber walls, often with a slow drain behind it." },
        ],
      },
      {
        heading: "Repair or Replace: How We Decide",
        body: [
          "Jams, resets, switches, flanges, drain arms and dishwasher inlets are all repairs, and they are quick ones. A leak coming from the bottom shell is different: that is the internal seal, the water is already in the motor, and rebuilding it is not a real option.",
          "Age matters as well. A unit under about eight years old with a fixable fault gets repaired. An older unit that has already had a repair, is undersized for the household, or is loud enough to be heard across the kitchen is usually better replaced with a quieter, higher-torque model.",
        ],
      },
      {
        heading: "Keeping a Disposal Alive Longer",
        list: [
          { lead: "Run cold water while grinding", text: "cold keeps fats firm so they wash out of the line instead of coating it." },
          { lead: "Keep grease out of the sink", text: "the disposal handles solids, not oil, and oil is what builds the clog downstream." },
          { lead: "Skip fibrous and starchy waste", text: "celery, artichoke, onion skins, potato peels and coffee grounds are the usual jam and sludge culprits." },
          { lead: "Feed it gradually", text: "small amounts with running water instead of a full chamber packed at once." },
          { lead: "Run it regularly", text: "a disposal that sits unused corrodes internally and seizes." },
          { lead: "Never use chemical drain cleaner", text: "it attacks the seals and the drain line and leaves the clog in place." },
        ],
      },
      {
        heading: "Why Homeowners Here Call Mainline",
        body: [
          "We show up in a marked truck, quote it before we start, protect the cabinet we are working under, and clean up when we are done. CA Lic. #953726 (C-36 Plumbing), licensed, bonded and insured, family owned in Escalon since 2010, serving the 209 & 350.",
          "Disposal trouble often shows up alongside a slow kitchen line. If the sink is backing up as well, tell us on the phone and we will bring the drain equipment on the same trip.",
        ],
      },
    ],
    faqs: [
      { q: "My disposal just hums. Is it dead?", a: "Usually not. That's typically a jam, and it's a quick fix." },
      { q: "It's leaking from the bottom. Can it be fixed?", a: "A bottom leak means the housing seal failed. That one is a replacement." },
      { q: "How do I know if my disposal needs repair or replacement?", a: "Jams, resets, switches, flanges and drain connections are repairs. A leak from the bottom shell, a seized motor or a unit past about a decade with a second failure is a replacement." },
      { q: "What should I do if my disposal won't turn on?", a: "Press the red reset button on the bottom of the unit and check the breaker. If it still does nothing, the switch, outlet or motor needs testing, which is where we come in." },
      { q: "Can a jammed disposal be fixed without replacing it?", a: "Almost always. We clear the obstruction, free the flywheel, confirm the motor spins true, and check the drain line while we are there." },
      { q: "How can I prevent garbage disposal problems?", a: "Cold water while it runs, no grease, no fibrous or starchy waste, small loads, and regular use. That combination prevents most of the calls we get." },
      { q: "What items should never go in a garbage disposal?", a: "Grease and oil, bones, fruit pits, coffee grounds, eggshells in volume, celery and onion skins, potato peels, pasta and rice, and anything not food." },
      { q: "Is it safe to use chemical drain cleaner in a disposal?", a: "No. It corrodes the seals and hardware, sits on top of the clog, and makes the eventual repair worse and messier." },
    ],
  },
  {
    slug: "garbage-disposal-installation", hub: P, name: "Garbage Disposal Installation",
    desc: "New garbage disposal installation with proper mounting, dishwasher tie-in and drain alignment. Quiet high-torque models available.",
    intro:
      "The right disposal for a busy kitchen isn't the cheapest one on the shelf. We install quiet, higher-horsepower units, tie in the dishwasher correctly, and make sure the drain arm isn't fighting you.",
    bullets: ["1/2 to 1 HP unit sizing", "Sound-insulated models", "Dishwasher inlet connection", "Drain alignment and P-trap correction", "Old unit removed and hauled away"],
    sections: [
      {
        heading: "Garbage Disposal Installation in Escalon, Modesto & the 209 & 350",
        body: [
          "A disposal is the one appliance under your sink that touches every meal you cook. When it is sized right and mounted right, cleanup is quiet and the drain stays clear. When it is undersized or installed carelessly, you get noise, jams, leaks at the flange and a kitchen line that clogs every few months.",
          "We install new disposals and replace failed ones for homeowners across Stanislaus and San Joaquin County. Family owned in Escalon since 2010, CA Lic. #953726 (C-36 Plumbing), with Miguel's 37+ years in the trade behind every recommendation.",
        ],
      },
      {
        heading: "The Installation Process",
        body: ["Nothing about this is improvised. Every install follows the same sequence so the result is repeatable."],
        list: [
          { lead: "Assessment", text: "we confirm the sink flange type, cabinet clearance, drain arm height and whether the outlet and switch are correct for the new unit." },
          { lead: "Removal", text: "the old unit comes off, the flange and hardware are cleaned up, and we inspect the trap and drain arm for wear." },
          { lead: "Mounting", text: "a fresh mounting assembly and seal at the sink flange, torqued evenly so it does not weep months later." },
          { lead: "Drain and dishwasher tie-in", text: "the discharge is aligned to the trap without strain and the dishwasher inlet is connected and secured with a high loop." },
          { lead: "Electrical connection", text: "cord or hardwire terminated properly and the switch confirmed under load." },
          { lead: "Test and cleanup", text: "we run it under water, watch every joint for drips, then haul the old unit away and leave the cabinet dry." },
        ],
      },
      {
        heading: "Choosing the Right Unit for Your Kitchen",
        body: [
          "Horsepower is about how much waste you generate and how forgiving you want the unit to be. Half-horse units suit light single-person cooking. Three-quarter horse is the right answer for most families in this valley. A full horsepower unit belongs in a household that cooks heavily, hosts often, or has had jams with the previous disposal.",
          "Beyond horsepower, the differences that actually matter day to day are sound insulation, stainless grinding components that resist corrosion in hard water, and continuous versus batch feed. We will talk through those before anything is ordered, and we install customer-supplied units without complaint.",
        ],
      },
      {
        heading: "What a Modern Disposal Upgrades For You",
        list: [
          { lead: "Noticeably quieter operation", text: "insulated chambers and better motor mounts make normal conversation possible during cleanup." },
          { lead: "More grinding power", text: "higher torque means fewer jams and less standing over the sink with the reset button." },
          { lead: "Better corrosion resistance", text: "stainless components hold up to the hard water we deal with across the 209 & 350." },
          { lead: "Fewer kitchen drain clogs", text: "finer grinding sends smaller particles into the line instead of sludge that packs the trap." },
          { lead: "Lower water use per cycle", text: "current models grind faster, so the tap runs for less time." },
          { lead: "A correct, code-compliant install", text: "proper high loop, secure electrical and a flange that stays sealed." },
        ],
      },
      {
        heading: "Why Mainline for Kitchen Work",
        body: [
          "Most disposal failures we replace were installed with a reused mounting seal, a strained drain arm, or a dishwasher line run flat. Those shortcuts are why a two-hour job becomes a leak call. We do it once, correctly, and stand behind it.",
          "If your kitchen line is slow along with the disposal, mention it when you call and we will bring drain equipment on the same visit rather than scheduling twice.",
        ],
      },
    ],
    faqs: [
      { q: "What horsepower do I need?", a: "3/4 HP suits most families; 1 HP if you cook heavily or have a large household." },
      { q: "Can you install one I bought?", a: "Yes, customer-supplied units are fine." },
      { q: "How long does a garbage disposal installation take?", a: "Most replacements run about an hour to ninety minutes. A first-time install that needs a switch, an outlet or drain rework takes longer, and we will tell you before we start." },
      { q: "What are the signs I need a new disposal instead of a repair?", a: "Leaking from the bottom shell, a motor that will not turn after the reset, repeated jams on normal food waste, or a unit past about a decade that has already been repaired once." },
      { q: "What types of disposals do you install?", a: "Continuous feed and batch feed, half through one horsepower, sound-insulated and stainless-component models from the major brands, plus units you supply yourself." },
      { q: "Can a new disposal reduce kitchen odors?", a: "Yes. Finer grinding and a properly sealed flange leave less food packed in the chamber and less residue coating the drain line, which is where most of the smell comes from." },
      { q: "Do I need a special drain or electrical setup?", a: "You need a dedicated switched circuit and a drain arm at the right height. We verify both during the assessment and correct them if they are wrong." },
      { q: "Do you remove and dispose of the old unit?", a: "Yes. Removal, haul-away and cleanup are part of the installation." },
    ],
  },
  {
    slug: "backflow-prevention-testing", hub: P, name: "Backflow Prevention & Testing",
    desc: "Backflow prevention device installation, annual certification testing and repair for homes, businesses and irrigation systems.",
    intro:
      "Backflow devices protect the drinking water supply, and most water districts require an annual certified test. We install, test, repair and file the paperwork.",
    bullets: ["Annual certified testing", "Device installation and replacement", "Repair and rebuild kits", "Irrigation and fire line assemblies", "Reports filed with your water district"],
    sections: [
      {
        heading: "Backflow Testing & Prevention Across the 209 & 350",
        body: [
          "Backflow is what happens when pressure reverses and water that already left the potable system gets pulled back into it. Irrigation water, boiler water, wash-down water, fire line water: none of it belongs at your kitchen tap. A backflow assembly is the one device standing between the two, and it is a mechanical part that wears.",
          "We install, test, repair and certify assemblies for homes, businesses, irrigation systems and fire lines throughout Stanislaus and San Joaquin County, and we file the passing report with your water district so the compliance side is handled, not just the wrench side. CA Lic. #953726 (C-36 Plumbing).",
        ],
      },
      {
        heading: "Why Testing and Early Detection Matter",
        body: ["An assembly can look perfectly fine and still fail its test. The internals are springs, seats and check valves, and they degrade quietly."],
        list: [
          { lead: "Health protection", text: "a failed check valve is a direct path for irrigation, chemical or stagnant water into drinking water." },
          { lead: "Regulatory compliance", text: "districts here require annual certified testing on most assemblies, with deadlines and penalties for missed tests." },
          { lead: "Early repair instead of replacement", text: "a worn seat caught on a test is a rebuild kit; the same assembly ignored for years becomes a full replacement." },
          { lead: "Business continuity", text: "for restaurants, medical offices and commercial buildings, an out-of-compliance assembly can interrupt operations." },
          { lead: "Documentation you can produce", text: "a filed passing report answers the district, the inspector and the insurer without a scramble." },
        ],
      },
      {
        heading: "Common Causes of Backflow Problems",
        list: [
          { lead: "Pressure loss on the main", text: "a break or heavy draw drops supply pressure and reverses flow direction." },
          { lead: "Worn check valves and springs", text: "the most common test failure, and usually a rebuild rather than a replacement." },
          { lead: "Debris and scale fouling the seats", text: "hard water and grit in the line keep the check from sealing fully." },
          { lead: "Freeze damage", text: "an unprotected assembly cracked over winter often tests fine until it is put back under pressure." },
          { lead: "Cross-connections added later", text: "an irrigation zone, water feature or utility sink plumbed in without proper protection." },
          { lead: "Aging assemblies", text: "older devices with obsolete parts that no longer hold pressure at the required differential." },
        ],
      },
      {
        heading: "Our Complete Backflow Solution",
        body: [
          "We start with the device you already have: identify the type, verify it is the right assembly for the hazard level, and test it to certification standards. If it passes, you get the report. If it does not, we tell you on the spot whether it is a rebuild or a replacement and what the district needs from you.",
          "New installations are sized and placed to be testable and serviceable later, with proper clearances and freeze protection, so next year's test is a fifteen-minute visit instead of a project.",
        ],
      },
      {
        heading: "Schedule Certified Backflow Testing",
        body: [
          "If you have a notice from your water district with a deadline on it, call 209.838.1000 and we will get you on the schedule before it lapses. Family owned in Escalon since 2010, serving the 209 & 350, licensed, bonded and insured.",
        ],
      },
    ],
    faqs: [
      { q: "How often must it be tested?", a: "Annually in nearly every district here, and you'll usually get a notice with a deadline." },
      { q: "What if it fails?", a: "We rebuild or replace the assembly and retest, then submit the passing report." },
      { q: "What are the signs my backflow device may be failing?", a: "Continuous discharge from the relief port, water pooling under the assembly, a pressure drop after the device, discolored water, or visible corrosion and freeze cracking on the body." },
      { q: "Can you repair a failed device or does it need replacing?", a: "Most failures are worn checks, springs or seats, and a rebuild kit restores them. Cracked bodies, freeze damage and obsolete assemblies with no available parts get replaced." },
      { q: "Do I need backflow testing on a residential property?", a: "If your home has an irrigation system, a well, a fire sprinkler line, a pool fill line or any similar cross-connection, your district very likely requires an annual test." },
      { q: "How do I receive proof of compliance after the test?", a: "We complete the certified test report, provide you a copy, and file it with your water district so the record is on their side as well as yours." },
      { q: "How long does a backflow test take?", a: "A standard assembly test takes about twenty to thirty minutes, including a short water shutdown while the device is isolated." },
      { q: "What makes Mainline the right choice for backflow work?", a: "Certified testing, 37+ years of field experience under Miguel, CA Lic. #953726, honest rebuild-versus-replace calls, and paperwork filed for you rather than left on your counter." },
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
    sections: [
      {
        heading: "Fixture Installation & Repair in Escalon, Modesto & the 209 & 350",
        body: [
          "Fixtures are the plumbing you actually touch. Faucets, sinks, showers, tubs and toilets get used dozens of times a day, which is why they wear out first and why a small failure in one of them turns into water damage faster than anything else in the house.",
          "We install, upgrade and repair fixtures for homes and businesses throughout Stanislaus and San Joaquin County. Family owned in Escalon since 2010, licensed C-36, Lic. #953726, with Miguel's 37+ years in the trade behind the work.",
        ],
      },
      {
        heading: "Small Fixture Problems Have Big Consequences",
        body: [
          "A drip is not just a drip. A faucet losing one drop a second wastes thousands of gallons a year. A shower valve that never quite shuts off sends that water into the wall cavity instead of the drain. A running toilet can add more to a monthly bill than any other single fixture in the house.",
          "The other cost is the one you cannot see. Slow seepage under a sink swells the cabinet base, lifts the flooring and creates exactly the damp, dark conditions that mold wants. Fixing the fixture is cheap. Fixing the cabinet, floor and drywall is not.",
        ],
      },
      {
        heading: "Fixtures We Work On",
        body: ["One licensed crew for the whole list, so you are not scheduling three different trades for one bathroom."],
        list: [
          { lead: "Faucets", text: "kitchen, bath, laundry, bar and outdoor, installed new or repaired with quality cartridges." },
          { lead: "Sinks", text: "farmhouse, undermount, drop-in, vanity and pedestal, including drain and disposal tie-in." },
          { lead: "Showers and tubs", text: "valve replacement, trim, diverters, conversions and drain work." },
          { lead: "Toilets", text: "installation, reseating, flapper and fill valve repair, and running-toilet fixes." },
          { lead: "Garbage disposals", text: "replaced or repaired along with the dishwasher connection." },
          { lead: "Angle stops and supply lines", text: "the unglamorous parts that cause most fixture leaks." },
        ],
      },
      {
        heading: "Our Fixture Installation Process",
        body: [
          "We confirm fit against your rough-in and countertop before anything comes out, shut off and isolate the supply, remove and haul away the old fixture, replace supply lines and angle stops, set the new fixture level and properly sealed, then pressure test and check every joint by hand.",
          "You get a flat-rate quote before we start, and if we find something behind the old fixture that changes the scope, such as a corroded stop or a drain that has to be reworked, you hear about it and approve it before we continue.",
        ],
      },
      {
        heading: "Why Upgrading Fixtures Pays Off",
        body: [
          "Current fixtures move less water while feeling the same at the tap, which lowers both your water use and the energy spent heating it. Better cartridges last longer in hard water. And a matched set of fixtures is one of the first things a buyer or a guest notices in a kitchen or bath.",
          "If you are already opening a wall or replacing a countertop, that is the moment to do the fixture work. It is far cheaper as part of the same visit than as a separate call six months later.",
        ],
      },
    ],
    faqs: [
      { q: "Can you install a fixture I bought?", a: "Yes. We'll flag anything that won't fit your rough-in before we start." },
      { q: "Why does my new faucet drip already?", a: "Usually a defective cartridge or debris in the line from the install. Both are quick fixes." },
      { q: "What are the most common fixture problems in Valley homes?", a: "Hard water scale in cartridges and aerators, worn seals causing drips, failing angle stops under sinks, and running toilets. All four are routine repairs." },
      { q: "How often should fixtures be inspected?", a: "Glance under your sinks a couple of times a year for dampness or staining, and clean aerators and showerheads. That catches most problems while they are still small." },
      { q: "Can I upgrade fixtures without replacing my plumbing lines?", a: "Usually yes. We only recommend re-piping a branch when the existing galvanized line is so scaled that a new fixture would never get proper flow." },
      { q: "Are water-saving fixtures effective in the Central Valley?", a: "Yes. Modern low-flow trim maintains the feel of good pressure while using less water, and less hot water used means less energy burned heating it." },
      { q: "How do I choose the best fixture material and finish?", a: "Solid brass bodies with serviceable cartridges last longest. For finish, brushed nickel and matte black hide our hard water spotting far better than polished chrome." },
      { q: "Do fixture installations require a permit?", a: "Straight fixture swaps generally do not. Relocating a drain or supply, or altering walls during a remodel, often does, and we pull it when the scope calls for it." },
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
