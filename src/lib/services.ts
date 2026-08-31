/**
 * Service catalog. Slugs mirror the live mainlineplumber.com URL tree exactly so the
 * .net -> .com domain swap resolves 1:1 with what Google already has indexed.
 *
 * `slug` is the path AFTER the hub, e.g. "fixture-plumbing/faucet-repair" lives at
 * /plumbing-services/fixture-plumbing/faucet-repair/
 */
export type ServiceFaq = { q: string; a: string };

export type ServiceEntry = {
  slug: string;
  hub: "plumbing-services" | "water-heaters";
  name: string;
  /** Meta description + hero subhead. */
  desc: string;
  intro: string;
  bullets: string[];
  faqs: ServiceFaq[];
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
    faqs: [
      { q: "How fast can you clear my drain?", a: "Most residential clogs are cleared in a single visit, and we hold same-day slots every day for backups that can't wait." },
      { q: "Why does my drain keep clogging?", a: "Repeat clogs usually mean grease buildup, root intrusion or a bellied line. We run a camera so you are fixing the cause, not the symptom." },
    ],
  },
  {
    slug: "emergency-plumbing", hub: P, name: "Emergency Plumbing",
    desc: "Emergency plumbing repairs for burst pipes, major leaks, sewer backups and water heater failures across the Central Valley.",
    intro:
      "When water is going somewhere it shouldn't, minutes matter. Our emergency plumbing crew handles burst supply lines, slab leaks, sewer backups and dead water heaters, and we walk you through shutting the water off while we're on the way.",
    bullets: ["Burst and leaking pipe repair", "Sewer and main line backups", "No hot water and leaking water heaters", "Overflowing toilets and failed shutoff valves", "Damage control guidance while we roll"],
    faqs: [
      { q: "What counts as a plumbing emergency?", a: "Any active leak, sewage backup, no-water situation or gas smell. If water is spreading or you had to shut the main off, call us." },
      { q: "What should I do before you arrive?", a: "Shut off the main water valve, kill power to the water heater if it is leaking, and move belongings out of the water." },
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
      { q: "Do you offer trenchless replacement?", a: "We do not offer trenchless lining. We handle sewer line repair and full replacement using proven excavation methods." },
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
    faqs: [
      { q: "Do you replace the shutoff valves too?", a: "We recommend it on any faucet install; old angle stops are the most common post-install leak." },
      { q: "How long does it take?", a: "Most faucet installs run one to two hours." },
    ],
  },
  {
    slug: "fixture-plumbing/shower-installation", parent: "fixture-plumbing", hub: P, name: "Shower Installation",
    desc: "Shower installation and valve replacement, including tub-to-shower conversions and pressure-balanced valves.",
    intro:
      "Shower work is valve work. We set pressure-balanced or thermostatic valves so the temperature holds when someone flushes, and we get the rough-in right before tile goes up.",
    bullets: ["New shower rough-in and valve setting", "Tub-to-shower conversions", "Pressure-balanced and thermostatic valves", "Rain heads, body sprays and hand showers", "Drain and pan connections"],
    faqs: [
      { q: "Why does my shower go cold when a toilet flushes?", a: "An old non-balanced valve. A pressure-balanced replacement solves it." },
      { q: "Can you convert my tub to a walk-in shower?", a: "Yes, we handle the plumbing side and coordinate with your tile or surround installer." },
    ],
  },
  {
    slug: "fixture-plumbing/sink-installation", parent: "fixture-plumbing", hub: P, name: "Sink Installation",
    desc: "Kitchen and bathroom sink installation including farmhouse, undermount and vanity sinks, with drain and disposal tie-in.",
    intro:
      "Sink swaps look simple until the drain height doesn't line up. We handle the trap, tailpiece and disposal connection so everything drains right and nothing weeps behind the cabinet.",
    bullets: ["Farmhouse, undermount and drop-in sinks", "Vanity and pedestal sink setting", "P-trap and drain re-plumbing", "Garbage disposal and dishwasher tie-in", "Leak test before we leave"],
    faqs: [
      { q: "Can you install an apron-front sink?", a: "Yes, and we'll tell you upfront if your cabinet needs modification." },
      { q: "Do you re-plumb the drain?", a: "Whenever the new sink sits at a different depth, yes, it's included in the quote." },
    ],
  },
  {
    slug: "fixture-plumbing/fixture-repair", parent: "fixture-plumbing", hub: P, name: "Fixture Repair",
    desc: "Repair for leaking, dripping and low-flow faucets, sinks, showers and tubs, using quality replacement parts.",
    intro:
      "Most fixtures don't need replacing, they need the right cartridge, seat or seal. We carry parts for the common brands and fix it on the first trip whenever possible.",
    bullets: ["Cartridge, stem and seat replacement", "Leaking spouts and diverters", "Low flow and aerator restoration", "Drain assembly and pop-up repair", "Loose and wobbling fixtures re-secured"],
    faqs: [
      { q: "Are parts still available for my old fixture?", a: "Usually yes for major brands. If not, we'll show you replacement options." },
      { q: "Is repair cheaper than replacement?", a: "Almost always, and we'll say so when it isn't." },
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
    desc: "Water heater installation in Escalon, Modesto and across the 209 & 350. Tank and tankless units, permitted, most swaps same day.",
    intro:
      "Water heater replacement is our number one specialty. We stock the most common tank sizes, pull the permit, handle gas and venting, bring the install up to current code and haul the old unit away.",
    bullets: ["40, 50 and 75 gallon gas and electric tanks", "Bradford White, Rheem and A.O. Smith", "Seismic strapping, new T&P valve and expansion tank", "Permits pulled and inspection handled", "Same-day installation on most standard swaps"],
    faqs: [
      { q: "How fast can you replace my water heater?", a: "Most standard tank replacements are completed the same day you call." },
      { q: "Is a permit required?", a: "Yes in our service area, and we pull it as part of the job." },
    ],
  },
  {
    slug: "water-heater-repair", hub: W, name: "Water Heater Repair",
    desc: "Water heater repair for no hot water, pilot problems, leaks, noisy tanks and failed elements, with honest repair-or-replace advice.",
    intro:
      "No hot water isn't always a new water heater. We diagnose thermocouples, gas valves, heating elements, dip tubes and thermostats, and we tell you honestly when a repair is throwing money at a tank that's done.",
    bullets: ["No hot water and lukewarm water diagnosis", "Pilot light and thermocouple repair", "Heating element and thermostat replacement", "T&P valve, dip tube and anode service", "Straight repair-versus-replace guidance"],
    faqs: [
      { q: "My pilot won't stay lit. What's wrong?", a: "Usually the thermocouple or a dirty pilot assembly, both common repairs." },
      { q: "When is repair no longer worth it?", a: "Past ten to twelve years, or once the tank itself is leaking, replacement is the better spend." },
    ],
  },
  {
    slug: "tankless-water-heaters", hub: W, name: "Tankless Water Heaters",
    desc: "Tankless water heater installation, conversion and repair. Endless hot water, higher efficiency, wall-mounted space savings.",
    intro:
      "Tankless gives you endless hot water, up to about 30% better efficiency and your garage floor back. The catch is that it must be sized and gas-fed correctly, which is exactly where most bad installs go wrong.",
    bullets: ["Navien, Rinnai and Rheem installation", "Tank-to-tankless conversions", "Gas line upsizing and venting", "Descaling and annual maintenance", "20+ year expected service life"],
    faqs: [
      { q: "Do I need a bigger gas line?", a: "Often yes. Tankless units demand far more BTU than a tank, and we verify capacity before quoting." },
      { q: "Does tankless need maintenance?", a: "Yes, annual descaling matters in our hard water, and it keeps the warranty intact." },
    ],
  },
  {
    slug: "water-heater-flushing", hub: W, name: "Water Heater Flushing",
    desc: "Water heater flushing and sediment removal to extend tank life, restore capacity and cut energy costs in hard-water homes.",
    intro:
      "Hard Valley water leaves sediment on the bottom of your tank. That sediment is what makes it rumble, run out of hot water early and fail years ahead of schedule. An annual flush is the cheapest water heater insurance there is.",
    bullets: ["Full tank drain and sediment flush", "Anode rod inspection", "T&P valve test", "Tankless descaling service", "Annual reminder so you don't have to track it"],
    faqs: [
      { q: "How often should I flush it?", a: "Once a year here. Twice if you're on well water or notice rumbling." },
      { q: "My tank is rumbling. Is a flush enough?", a: "Often yes if it's caught early. If the sediment has hardened, we'll tell you what you're actually looking at." },
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
