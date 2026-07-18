export type ServiceCity = {
  slug: string;
  name: string;
  region?: string;
  blurb: string;
};

export const serviceCities: ServiceCity[] = [
  { slug: "ceres", name: "Ceres", blurb: "Trusted plumbing repairs, water heaters and drain cleaning for homes and businesses across Ceres, CA." },
  { slug: "central-valley", name: "Central Valley", region: "209 & 559", blurb: "Full-service plumbing for neighborhoods throughout California's Central Valley, from Stockton down to Turlock." },
  { slug: "del-rio", name: "Del Rio", blurb: "Reliable local plumbers keeping the water flowing in Del Rio, CA and surrounding Stanislaus County." },
  { slug: "escalon", name: "Escalon", blurb: "Our hometown. Family-owned plumbing service in Escalon since 1996." },
  { slug: "hughson", name: "Hughson", blurb: "Prompt, professional plumbing repairs, water heaters and installs for Hughson, CA." },
  { slug: "lathrop", name: "Lathrop", blurb: "Expert plumbers serving Lathrop's growing residential and commercial community." },
  { slug: "manteca", name: "Manteca", blurb: "From leak detection to full repipes, we're your neighborhood plumber in Manteca, CA." },
  { slug: "oakdale", name: "Oakdale", blurb: "Dependable plumbing service for Oakdale families, ranches and businesses." },
  { slug: "riverbank", name: "Riverbank", blurb: "Local plumbers who show up on time and get it right the first time in Riverbank, CA." },
  { slug: "salida", name: "Salida", blurb: "Water heaters, drain cleaning and emergency plumbing repairs for Salida homes." },
  { slug: "turlock", name: "Turlock", blurb: "Trusted plumbing solutions for Turlock's homeowners, property managers and businesses." },
];

export function findCity(slug: string) {
  return serviceCities.find((c) => c.slug === slug);
}
