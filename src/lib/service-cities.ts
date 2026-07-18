export type CityLocal = {
  identity: string; // short archetype line, e.g. "The Heritage & Stewardship Community"
  tagline: string; // one sentence positioning
  intro: string; // 2-3 sentences of local flavor + plumbing tie-in
  landmarks: string[]; // recognizable local places
  events?: string[]; // signature annual events (optional)
  neighbors: string[]; // nearby communities we also serve
  plumbingTieIn: string; // paragraph connecting local identity to our plumbing work
};

export type ServiceCity = {
  slug: string;
  name: string;
  region?: string;
  blurb: string;
  local?: CityLocal;
};

export const serviceCities: ServiceCity[] = [
  { slug: "ceres", name: "Ceres", blurb: "Trusted plumbing repairs, water heaters and drain cleaning for homes and businesses across Ceres, CA." },
  { slug: "central-valley", name: "Central Valley", region: "209 & 350", blurb: "Full-service plumbing for neighborhoods throughout California's Central Valley, from Stockton down to Turlock." },
  { slug: "del-rio", name: "Del Rio", blurb: "Reliable local plumbers keeping the water flowing in Del Rio, CA and surrounding Stanislaus County." },
  {
    slug: "escalon",
    name: "Escalon",
    blurb: "Our hometown. Family-owned plumbing service in Escalon since 1996.",
    local: {
      identity: "The Heritage & Stewardship Community of the Northern San Joaquin Valley",
      tagline: "Escalon is home. Reputation travels faster than advertising here, and we've spent decades earning ours one house at a time.",
      intro:
        "Escalon runs on generations, craftsmanship, and neighbors who actually know each other. From the family farms out on Escalon-Bellota Road to the storefronts along Main Street and Brennan Avenue, this is a town where a handshake still means something and the work you did last year is talked about at the next high school football game.",
      landmarks: [
        "Historic Downtown Escalon & Main Street",
        "Hogan-Ennis Park",
        "Escalon Community Center",
        "Escalon Sports Complex",
        "Escalon Historical Society Museum",
        "State Route 120 Corridor",
      ],
      events: ["Escalon Park Fete", "Christmas on Main", "Community Christmas Parade", "Escalon Farmers Market"],
      neighbors: ["Ripon", "Riverbank", "Oakdale", "Manteca", "Modesto", "Farmington", "Linden", "Stockton"],
      plumbingTieIn:
        "Older Escalon homes near downtown often have galvanized supply lines and cast iron drains that are past their prime, while newer builds toward the edges of town need water heaters, softeners, and pressure regulators tuned to Escalon's hard well and municipal water. We treat every job like it's for a neighbor, because most of the time it is.",
    },
  },
  { slug: "hughson", name: "Hughson", blurb: "Prompt, professional plumbing repairs, water heaters and installs for Hughson, CA." },
  {
    slug: "lathrop",
    name: "Lathrop",
    blurb: "Expert plumbers serving Lathrop's growing residential and commercial community.",
    local: {
      identity: "California's Innovation & Logistics Gateway",
      tagline: "Lathrop is where tomorrow is already under construction, and your plumbing should be built to keep up.",
      intro:
        "From the waterfront neighborhoods at River Islands to the distribution corridors along Interstate 5 and the Tesla Megafactory footprint, Lathrop is one of California's fastest-growing communities. New builds, new families, new businesses, all rely on modern plumbing that works the first time and every time after.",
      landmarks: [
        "River Islands master-planned community",
        "Mossdale Landing Regional Park",
        "San Joaquin River",
        "Lathrop Generations Center",
        "River Islands Boathouse",
        "Interstate 5 & State Route 120",
      ],
      events: ["Lathrop Days Festival", "River Islands Community Events", "Holiday Tree Lighting", "Summer Concert Series"],
      neighbors: ["Manteca", "Ripon", "Stockton", "Tracy", "Mountain House", "French Camp", "Modesto"],
      plumbingTieIn:
        "New construction in River Islands and the Mossdale corridor comes with tankless water heaters, PEX manifolds, and recirculation loops that need someone who actually understands modern systems. We install and service them right the first time, and we're set up for the fast, professional response Lathrop homeowners and property managers expect.",
    },
  },
  {
    slug: "manteca",
    name: "Manteca",
    blurb: "From leak detection to full repipes, we're your neighborhood plumber in Manteca, CA.",
    local: {
      identity: "The Crossroads of Growth & Opportunity",
      tagline: "Manteca is where Bay Area investment meets Central Valley opportunity, and where your home is one of the biggest bets you'll ever make.",
      intro:
        "Sitting at the crossroads of Highway 99, Interstate 5, and State Route 120, Manteca has become the growth capital of the 209. Master-planned neighborhoods like Del Webb at Woodbridge, destination retail along the Promenade Shops, and families relocating from the Bay Area are all raising the bar for what quality home service should look like.",
      landmarks: [
        "Great Wolf Lodge Northern California",
        "Bass Pro Shops",
        "Big League Dreams Sports Park",
        "Woodward Community Park",
        "Downtown Manteca",
        "Del Webb at Woodbridge",
        "Tidewater Bikeway",
      ],
      events: ["Manteca Pumpkin Fair", "Crossroads Street Faire", "Fourth of July Celebration", "Christmas Parade"],
      neighbors: ["Ripon", "Lathrop", "Stockton", "Tracy", "Escalon", "Salida", "Modesto", "French Camp", "Mountain House"],
      plumbingTieIn:
        "Whether you're protecting a new build in a Manteca master-planned community, upgrading to a tankless water heater before resale, or dealing with a hard-water tank failure in an older home off Yosemite Avenue, we bring the professionalism and turnaround time growing Manteca families expect. This is your investment. We treat it that way.",
    },
  },
  {
    slug: "oakdale",
    name: "Oakdale",
    blurb: "Dependable plumbing service for Oakdale families, ranches and businesses.",
    local: {
      identity: "The Cowboy Capital & Western Lifestyle Gateway",
      tagline: "Oakdale isn't just a small town. It's a way of life, and it deserves plumbing that respects the property, the ranch, and the way things get done out here.",
      intro:
        "From Historic Downtown Oakdale and the Rodeo Grounds to the ranches along Valley Home Road and the weekend crowds heading up Highway 108 to Sonora and Yosemite, Oakdale runs on heritage, hospitality, and hard work. It's a town where craftsmanship and reputation matter more than a low-ball quote.",
      landmarks: [
        "Historic Downtown Oakdale",
        "Oakdale Rodeo Grounds",
        "Oakdale Cowboy Museum",
        "Knights Ferry Recreation Area",
        "Woodward Reservoir",
        "Stanislaus River",
        "Orange Blossom Recreation Area",
      ],
      events: ["Oakdale Rodeo", "Oakdale Chocolate Festival", "Cowboy Christmas", "Downtown Street Fairs"],
      neighbors: ["Riverbank", "Waterford", "Knights Ferry", "Valley Home", "Escalon", "Sonora", "Jamestown", "Modesto"],
      plumbingTieIn:
        "Ranch properties, well systems, older downtown homes, and equestrian setups all bring their own plumbing challenges: pressure tanks, filtration, long supply runs, and hard water on tank water heaters. We show up on time, in a marked truck, quote it straight, and leave the property cleaner than we found it. That's the Oakdale standard, and it's ours too.",
    },
  },
  {
    slug: "riverbank",
    name: "Riverbank",
    blurb: "Local plumbers who show up on time and get it right the first time in Riverbank, CA.",
    local: {
      identity: "The Retail Gateway & Family Growth Corridor",
      tagline: "Riverbank is the City of Action, and your plumber should move at the same speed.",
      intro:
        "Riverbank sits right on the Highway 108 corridor between Modesto and Oakdale, with the Stanislaus River running through it and family neighborhoods expanding around Claribel, Patterson, and Oakdale Road. From the Crossroads Shopping Center out to Jacob Myers Park, this is a suburban community that values convenience, responsiveness, and businesses that actually pick up the phone.",
      landmarks: [
        "Crossroads Shopping Center",
        "Downtown Riverbank",
        "Jacob Myers Park",
        "Stanislaus River",
        "Riverbank Sports Complex",
        "Historic Santa Fe Depot",
        "Highway 108 Corridor",
      ],
      events: ["Riverbank Cheese & Wine Exposition", "Community Christmas Parade", "Summer Concerts in the Park"],
      neighbors: ["Modesto", "Oakdale", "Escalon", "Waterford", "Salida", "Hughson", "Valley Home", "Knights Ferry"],
      plumbingTieIn:
        "Growing Riverbank neighborhoods off Claribel and Patterson Road tend to run into the same issues: builder-grade water heaters aging out, slab leaks in early-2000s tract homes, and drain lines struggling after years of a growing family using them. We diagnose it straight, quote it upfront, and get in and out without rearranging your day.",
    },
  },
  { slug: "salida", name: "Salida", blurb: "Water heaters, drain cleaning and emergency plumbing repairs for Salida homes." },
  { slug: "turlock", name: "Turlock", blurb: "Trusted plumbing solutions for Turlock's homeowners, property managers and businesses." },
];

export function findCity(slug: string) {
  return serviceCities.find((c) => c.slug === slug);
}
