/**
 * Blog archive. Paths mirror the live mainlineplumber.com tree exactly:
 * /blog/{year}/{month}/{slug}/ plus /blog/{year}/, /blog/{year}/{month}/ and
 * /blog/categories/{slug}/ archives.
 */
export type Post = {
  year: string;
  month: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  /** Paragraphs of body copy. */
  body: string[];
};

export const categories = [
  { slug: "bathroom-remodel", name: "Bathroom Remodel" },
  { slug: "drains", name: "Drains" },
  { slug: "faq", name: "FAQ" },
  { slug: "fun", name: "Fun" },
  { slug: "garbage-disposal", name: "Garbage Disposal" },
  { slug: "leaks", name: "Leaks" },
  { slug: "plumbing", name: "Plumbing" },
  { slug: "save-water", name: "Save Water" },
  { slug: "seasonal", name: "Seasonal" },
  { slug: "tips", name: "Tips" },
  { slug: "water-heater", name: "Water Heater" },
];

export const posts: Post[] = [
  {
    year: "2017", month: "may", slug: "how-to-keep-your-garbage-disposal-blades-clean",
    title: "How to Keep Your Garbage Disposal Blades Clean",
    excerpt: "Simple habits that keep your disposal sharp, quiet and odor-free instead of jammed on a Sunday night.",
    categories: ["garbage-disposal", "tips"],
    body: [
      "A garbage disposal does not actually have knife-sharp blades. It has impellers that fling food against a grind ring, and when that ring loads up with grease and fibrous scraps, the whole unit slows down and starts to smell.",
      "The best maintenance is boring: run cold water while the disposal is on, keep it running a few seconds after the noise clears, and skip the things that wrap or expand, like celery, artichoke leaves, potato peels, rice and pasta. Grease is the worst offender because it coats the ring and the drain line downstream.",
      "For cleaning, grind a tray of ice cubes with a handful of coarse salt to knock buildup loose, then follow with citrus peels for odor. Avoid chemical drain cleaners, they sit on the metal and do more harm than good.",
      "If the unit hums but does not turn, it is jammed rather than dead, and that is a quick fix. If it leaks from the bottom, the housing seal is gone and it needs replacing. Either way, call us at (209) 838-1000 and we will tell you straight which one you have.",
    ],
  },
  {
    year: "2017", month: "july", slug: "why-go-tankless-for-your-next-water-heater",
    title: "Why Go Tankless for Your Next Water Heater",
    excerpt: "Endless hot water, better efficiency and a garage you can park in. Here is when tankless is genuinely worth it.",
    categories: ["water-heater", "tips"],
    body: [
      "A tank water heater keeps 40 to 75 gallons hot around the clock whether anyone is home or not. A tankless unit heats water only when a tap opens, which is why it can run up to about 30% more efficiently and never runs out mid-shower.",
      "The upgrade also gives you space back. A tankless unit hangs on the wall, so the footprint in your garage or closet disappears, and expected service life runs past twenty years with annual maintenance.",
      "The catch is the install. Tankless units demand far more BTU than a tank, so the gas line often needs upsizing and the venting has to be replaced. When a tankless unit disappoints someone, it is almost always because that work was skipped.",
      "We size the unit to your household's actual peak demand, verify gas capacity, handle the venting and register the warranty. If tankless is not the right fit for your home, we will say so.",
    ],
  },
  {
    year: "2019", month: "march", slug: "why-is-my-water-pressure-so-low-",
    title: "Why Is My Water Pressure So Low?",
    excerpt: "Low pressure at one fixture is a small problem. Low pressure everywhere usually points at the regulator or the service line.",
    categories: ["plumbing", "faq"],
    body: [
      "Start by figuring out whether it is one fixture or the whole house. A single slow faucet is almost always a clogged aerator or a failing cartridge, and both are quick repairs you may be able to do yourself.",
      "If pressure dropped everywhere at once, the usual suspects are a failing pressure regulator, a partially closed main valve, or a corroded service line between the meter and the house. Galvanized service lines in older Valley homes narrow from the inside as they scale up.",
      "There is also a quiet possibility worth ruling out: a hidden leak. If your meter keeps moving with every fixture off, water is going somewhere it should not.",
      "We test static pressure at the hose bib, check the regulator, and locate leaks without tearing the house apart. Call (209) 838-1000 and we will diagnose it properly.",
    ],
  },
  {
    year: "2019", month: "march", slug: "common-hot-water-issues-how-to-get-them-fixed",
    title: "Common Hot Water Issues & How to Get Them Fixed",
    excerpt: "Lukewarm water, hot water that runs out early, or none at all. Each symptom points somewhere specific.",
    categories: ["water-heater", "faq"],
    body: [
      "No hot water at all on a gas unit usually means the pilot is out or the thermocouple has failed. On an electric unit, it is typically a tripped high-limit switch or a burned-out upper element.",
      "Water that starts hot and dies early points at sediment stealing tank capacity or a broken dip tube mixing cold water into the top of the tank. In our hard water, sediment is the common answer.",
      "Lukewarm water everywhere is often a mixing valve or a failed lower element. Water that scalds is a thermostat set too high, which is worth correcting before someone gets hurt.",
      "Rusty water, rumbling and moisture at the base of the tank are different, those say the tank itself is on borrowed time. We diagnose all of it, and we tell you honestly when repair stops making sense.",
    ],
  },
  {
    year: "2019", month: "april", slug: "prevent-your-water-heater-from-breaking-early",
    title: "Prevent Your Water Heater From Breaking Early",
    excerpt: "Most water heaters in this area die years early for one reason: sediment. Here is how to get your full lifespan.",
    categories: ["water-heater", "tips"],
    body: [
      "Central Valley water is hard, and hardness turns into sediment on the bottom of your tank. Sediment insulates the burner from the water, so the tank works harder, rumbles, runs out of hot water early and eventually fails.",
      "An annual flush removes it. It takes under an hour and it is the single cheapest thing you can do to protect a water heater. On well water, twice a year is smarter.",
      "The anode rod matters just as much. It is a sacrificial metal rod that corrodes so your tank does not, and once it is consumed the tank starts rusting from the inside. Checking it every couple of years can add real years to the unit.",
      "Add a softener if your hardness is high, test the T&P valve, and keep the temperature around 120 degrees. Then call us at (209) 838-1000 when it is time for the flush.",
    ],
  },
  {
    year: "2020", month: "march", slug: "use-these-hot-design-trends-for-your-remodel",
    title: "Use These Hot Design Trends for Your Remodel",
    excerpt: "The remodel choices that look great and are also smart plumbing decisions.",
    categories: ["bathroom-remodel", "tips"],
    body: [
      "Curbless walk-in showers keep dominating bathroom remodels, and they are genuinely better long term: easier to clean, easier to age in, and no threshold to trip over. They do require careful drain and slope planning, so the plumbing has to be right before tile goes down.",
      "Freestanding tubs, wall-mounted faucets and floating vanities all move supply and drain lines, which is exactly why rough-in work should be quoted before you fall in love with a layout.",
      "In kitchens, pot fillers, filtered drinking water taps and apron-front sinks continue to lead. Each has a plumbing implication, from a new supply run to cabinet modification for the sink.",
      "We work as the plumbing trade on remodels all over the 209 and 350, and we coordinate directly with your contractor's schedule so nothing waits on us.",
    ],
  },
  {
    year: "2020", month: "april", slug: "5-unexpected-things-that-can-destroy-your-bathro",
    title: "5 Unexpected Things That Can Destroy Your Bathroom",
    excerpt: "The slow-motion bathroom disasters we get called out for most, and how to catch them early.",
    categories: ["bathroom-remodel", "leaks"],
    body: [
      "A failed wax ring is number one. Water seeps under the toilet with no visible drip and quietly rots the subfloor. If your toilet rocks even slightly, that is your warning.",
      "Second is a supply line at the toilet or vanity. Old rubber and plastic lines fail without notice, which is why we replace them with braided stainless on every fixture install.",
      "Third is grout and caulk failure at the shower. It looks cosmetic, but water tracking behind tile eventually reaches framing. Fourth is an exhaust fan that does not actually move air, which turns humidity into mold.",
      "Fifth is a slow drain that gets treated with chemical cleaner month after month, corroding the pipe instead of fixing the clog. Call us instead and we will clear it properly.",
    ],
  },
  {
    year: "2020", month: "june", slug: "4-tips-to-save-water-this-summer-",
    title: "4 Tips to Save Water This Summer",
    excerpt: "Valley summers are brutal on water bills. These four changes make a measurable difference.",
    categories: ["save-water", "seasonal", "tips"],
    body: [
      "First, fix the leaks you already know about. A single dripping faucet or running toilet can waste thousands of gallons a year, and a running toilet is often the biggest silent user in the house.",
      "Second, check your irrigation. Broken heads, misaimed spray and watering in the middle of the afternoon waste more water than anything happening inside the home.",
      "Third, upgrade fixtures. Modern low-flow showerheads and aerators feel the same and cut usage substantially, and high-efficiency toilets pay for themselves.",
      "Fourth, watch your meter. Shut everything off and see if it still moves. If it does, call (209) 838-1000 and we will find the hidden leak before it becomes a repair.",
    ],
  },
  {
    year: "2020", month: "july", slug: "barbecue-foods-that-can-clog-your-drains",
    title: "Barbecue Foods That Can Clog Your Drains",
    excerpt: "Summer cookouts are the busiest season for kitchen drain calls. Here is what causes it.",
    categories: ["drains", "seasonal"],
    body: [
      "Grease is the headline. Bacon fat, burger drippings and marinade oil pour down as liquid and solidify in the drain line where it cools, catching everything that follows.",
      "Corn husks, celery, onion skins and melon rinds are fibrous enough to wrap around a disposal's impellers instead of grinding. Bones and fruit pits are worse, they just chew up the unit.",
      "Starches are sneaky. Potato salad, pasta and rice swell in water and turn into paste in the trap.",
      "Scrape plates into the trash, pour grease into a can, and run cold water with the disposal. If the sink is already draining slow after the party, we clear kitchen lines same day.",
    ],
  },
  {
    year: "2020", month: "september", slug: "3-spooky-facts-about-stephen-king-s-it",
    title: "3 Spooky Facts About Stephen King's It",
    excerpt: "The most famous storm drain in fiction, and a few real things worth knowing about the drains under your street.",
    categories: ["fun", "drains"],
    body: [
      "It made a generation nervous about storm drains, and the imagery stuck because everyone has walked past one and wondered where it actually goes.",
      "In real life, storm drains and sanitary sewers are separate systems. Storm drains carry rainwater to creeks and rivers, which is exactly why dumping paint or oil into one is a genuine problem.",
      "The sanitary line leaving your house is the one we care about, and the horror story there is roots. Tree roots find hairline cracks in older clay laterals and grow into a mass that stops everything.",
      "The good news is a camera inspection takes the mystery out of it. You see what we see, and nobody has to guess. Call (209) 838-1000.",
    ],
  },
  {
    year: "2020", month: "september", slug: "protect-your-home-from-these-holiday-hazards",
    title: "Protect Your Home From These Holiday Hazards",
    excerpt: "The plumbing calls that spike every holiday season, and how to avoid making one.",
    categories: ["seasonal", "tips"],
    body: [
      "The day after Thanksgiving is one of the busiest drain days of the year, and the reason is simple: a full house, a full kitchen and a garbage disposal treated like a trash can.",
      "Keep fats, oils, poultry skin, stuffing and potato peels out of the drain entirely. Run cold water when the disposal is on, and give the dishwasher a break between loads.",
      "More guests also means more demand on your water heater. If it was already running out early for your household, it will not keep up with a full house, and that is worth handling before the relatives arrive.",
      "Finally, know where your main shutoff is and make sure it turns. That one piece of knowledge is the difference between a wet floor and a flooded house.",
    ],
  },
  {
    year: "2020", month: "november", slug: "7-unusual-holiday-gifts",
    title: "7 Unusual Holiday Gifts",
    excerpt: "Gift ideas for the homeowner who already has everything, from a plumber's perspective.",
    categories: ["fun"],
    body: [
      "A smart leak detector that texts a phone when it senses water under the sink or next to the water heater. Unromantic, genuinely useful, and cheaper than a floor.",
      "A whole-home water filtration or softener system, which in this area shows up immediately in how the water tastes and how long fixtures last.",
      "A touchless kitchen faucet, a bidet seat, a high-efficiency showerhead that actually feels good, and a real drain strainer set for every sink.",
      "And the practical one nobody thinks of: a water heater flush for their house. We will happily set it up. Call (209) 838-1000.",
    ],
  },
  {
    year: "2021", month: "january", slug: "9-iconic-bathroom-scenes-in-movie-and-tv",
    title: "9 Iconic Bathroom Scenes in Movie and TV",
    excerpt: "Hollywood has spent decades in the bathroom. A few favorites, and what they got wrong about plumbing.",
    categories: ["fun"],
    body: [
      "From Psycho's shower to the Godfather's restaurant restroom, bathrooms show up in film because they are the one place a character is genuinely alone.",
      "Hollywood plumbing takes liberties. Pipes do not usually burst in a dramatic spray, they weep for months first, and that is what wrecks a house.",
      "Water pressure in movies is also perfect, always, everywhere. In real homes, a shower going cold when a toilet flushes is a non-balanced valve, and it is fixable.",
      "If your real-life bathroom is producing its own drama, we handle valves, fixtures and remodel plumbing across the Central Valley.",
    ],
  },
  {
    year: "2021", month: "february", slug: "what-kind-of-water-should-i-use-for-baby-formula",
    title: "What Kind of Water Should I Use for Baby Formula?",
    excerpt: "A common question from new parents, answered plainly, plus what a home filtration system does and does not do.",
    categories: ["faq", "tips"],
    body: [
      "Most municipal tap water in our area is safe for formula, and pediatric guidance generally allows it. The two things worth paying attention to are lead from older home plumbing and fluoride levels if formula is a baby's only source.",
      "If your home was built before 1986 and may have lead solder or fittings, run the cold tap for a minute first and never mix formula with hot tap water, which pulls more metal out of the pipes.",
      "On well water, testing is not optional. Nitrates and bacteria matter enormously for infants, and a lab test is the only way to know.",
      "A reverse osmosis system at the kitchen sink is the most reliable at-home answer. We install and service them, and we test your water first so the system matches the actual problem.",
    ],
  },
  {
    year: "2021", month: "june", slug: "3-problematic-plumbing-pipe-materials",
    title: "3 Problematic Plumbing Pipe Materials",
    excerpt: "Galvanized steel, polybutylene and early plastic fittings. If your house has these, know what you are dealing with.",
    categories: ["plumbing", "leaks"],
    body: [
      "Galvanized steel was standard through the mid-century and it fails from the inside out. The zinc coating wears away, the steel rusts, and the pipe narrows until pressure drops and rusty water shows up at the tap.",
      "Polybutylene, used widely from the late 1970s into the mid-1990s, is the one that made headlines. The gray plastic pipe becomes brittle from chlorine exposure and fails at the fittings, often without warning.",
      "Early plastic and brass fitting combinations round out the list, along with copper in aggressive water conditions, which develops pinhole leaks that seem to arrive in clusters.",
      "The answer for all three is repiping in PEX or copper, done once, with clean access cuts and water restored the same day in most homes. We quote both options.",
    ],
  },
  {
    year: "2021", month: "july", slug: "6-animals-known-for-having-weird-poop",
    title: "6 Animals Known for Having Weird Poop",
    excerpt: "A plumber's tour of the animal kingdom's stranger waste habits. Yes, really.",
    categories: ["fun"],
    body: [
      "Wombats produce cube-shaped droppings, the only animal known to do it, and they use them to mark territory on rocks without rolling away.",
      "Sloths climb all the way down from the canopy roughly once a week for a single enormous deposit, which is about the riskiest bathroom trip in nature.",
      "Rabbits, capybaras and a surprising number of other animals eat their own droppings to extract nutrients a second time. Penguins launch theirs with real pressure, and pandas go dozens of times a day thanks to a bamboo diet.",
      "Human plumbing is far less impressive but far more expensive when ignored. Only flush what belongs, and skip the so-called flushable wipes.",
    ],
  },
  {
    year: "2021", month: "october", slug: "celebrity-kitchens-you-ll-love",
    title: "Celebrity Kitchens You'll Love",
    excerpt: "Big-budget kitchen features worth stealing, and what each one means for your plumbing.",
    categories: ["fun", "bathroom-remodel"],
    body: [
      "Double islands with prep sinks show up in nearly every celebrity kitchen, and they are the single most plumbing-intensive feature: new supply, drain and vent, plus a disposal circuit.",
      "Pot fillers over the range look extravagant and cost surprisingly little to add during a remodel, as long as someone runs the line before the backsplash goes on.",
      "Filtered water taps, under-counter ice makers and instant hot water dispensers are all realistic in an ordinary kitchen, and all three need a dedicated connection.",
      "Apron-front sinks are the most requested. If you want one, tell your plumber early, because the cabinet and drain height often need adjusting.",
    ],
  },
  {
    year: "2023", month: "april", slug: "eco-friendly-plumbing-upgrades-green-solutions-f",
    title: "Eco-Friendly Plumbing Upgrades: Green Solutions for Your Home",
    excerpt: "The upgrades that actually lower water and energy use in a Central Valley home, ranked by payback.",
    categories: ["save-water", "tips"],
    body: [
      "A hybrid heat pump water heater is the biggest single win available right now. It uses a fraction of the energy of a standard electric tank, and rebates often cover a meaningful part of the cost.",
      "Tankless gas units come next, cutting standby losses entirely while giving you endless hot water. Both options need the install done properly to deliver the savings.",
      "On the water side, high-efficiency toilets, low-flow showerheads and aerators are cheap and immediate. A recirculation pump on a timer stops you from running gallons down the drain waiting for hot water.",
      "Fixing leaks beats every upgrade on this list. If your bill jumped without explanation, let us find out why before you spend money on equipment.",
    ],
  },
  {
    year: "2023", month: "april", slug: "tips-for-handling-unexpected-plumbing-issues",
    title: "Tips for Handling Unexpected Plumbing Issues",
    excerpt: "What to do in the first five minutes of a plumbing problem, before anyone arrives.",
    categories: ["plumbing", "tips"],
    body: [
      "Know where your main water shutoff is, and turn it once a year so it does not seize. In an active leak, that valve is the whole ballgame.",
      "For an overflowing toilet, close the angle stop behind it. For a leaking water heater, shut the cold inlet valve and kill the gas or breaker before anything else.",
      "Move belongings out of the water, get airflow moving, and photograph everything for insurance before you clean up.",
      "Then call (209) 838-1000. We handle emergency plumbing repairs across the 209 and 350, and we will walk you through damage control while we are on the way.",
    ],
  },
  {
    year: "2023", month: "june", slug: "signs-of-a-plumbing-emergency-when-to-act-fast",
    title: "Signs of a Plumbing Emergency: When to Act Fast",
    excerpt: "How to tell the difference between a problem that can wait until Monday and one that cannot.",
    categories: ["plumbing", "leaks"],
    body: [
      "Act immediately for any of these: water spreading across a floor, sewage coming up at a drain, no water at all, a gas smell, or a water heater that is leaking rather than just cold.",
      "Sewage backup is the one people underestimate. Multiple fixtures backing up at once means the problem is in the main line, and every additional flush makes it worse.",
      "Hidden emergencies count too. A warm spot on the slab, a spiking bill, or a meter that moves with everything off means water is running somewhere inside your house.",
      "Things that can usually wait a day: a single slow drain, a dripping faucet, a running toilet you can shut off at the valve. Everything else, call us.",
    ],
  },
  {
    year: "2023", month: "june", slug: "is-your-water-heater-up-to-date-",
    title: "Is Your Water Heater Up to Date?",
    excerpt: "How to read your water heater's age off the label, and the six signs it is time to replace it.",
    categories: ["water-heater", "faq"],
    body: [
      "The serial number on the label encodes the manufacture date, usually with the year and week in the first four digits. If yours is past ten years, you are in replacement territory even if it is still working.",
      "The signs are consistent: rusty or metallic-smelling hot water, popping or rumbling, hot water running out faster than it used to, dampness or corrosion at the base, and rising energy bills with nothing else changed.",
      "Code has also moved. Newer installs require seismic strapping, an expansion tank in many cases, proper venting and a permit, so an old unit is often out of compliance in more ways than one.",
      "We stock the common tank sizes and can usually replace yours the same day, permit included. Ask about $150 off water heater replacement, or $250 off electric water heater installation.",
    ],
  },
];

export function postPath(p: Post) {
  return `/blog/${p.year}/${p.month}/${p.slug}/`;
}

export const years = Array.from(new Set(posts.map((p) => p.year))).sort((a, b) => Number(b) - Number(a));

export function monthsOf(year: string) {
  return Array.from(new Set(posts.filter((p) => p.year === year).map((p) => p.month)));
}

export function postsByYear(year: string) {
  return posts.filter((p) => p.year === year);
}

export function postsByMonth(year: string, month: string) {
  return posts.filter((p) => p.year === year && p.month === month);
}

export function postsByCategory(slug: string) {
  return posts.filter((p) => p.categories.includes(slug));
}

export function findPost(year: string, month: string, slug: string) {
  return posts.find((p) => p.year === year && p.month === month && p.slug === slug);
}

export function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Every blog URL that should appear in the sitemap. */
export function blogUrls() {
  const urls = new Set<string>(["/blog/"]);
  for (const y of years) {
    urls.add(`/blog/${y}/`);
    for (const m of monthsOf(y)) urls.add(`/blog/${y}/${m}/`);
  }
  for (const c of categories) urls.add(`/blog/categories/${c.slug}/`);
  for (const p of posts) urls.add(postPath(p));
  return Array.from(urls);
}
