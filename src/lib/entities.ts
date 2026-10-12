/**
 * Entity-graph data shared by root and city JSON-LD.
 *
 * knowsAbout maps the topics we genuinely service to stable Wikipedia nodes so AI
 * crawlers can resolve what this business is an authority on.
 *
 * SIMILAR_TO uses schema.org isSimilarTo (never sameAs, which would assert we are the
 * same legal entity). Contact details are owner-supplied; the shared $$ category
 * is owner-requested, not a verified comparison of charges. No ratings or rankings.
 */

export const KNOWS_ABOUT: string[] = [
  "https://en.wikipedia.org/wiki/Plumbing",
  "https://en.wikipedia.org/wiki/Water_heating",
  "https://en.wikipedia.org/wiki/Tankless_water_heating",
  "https://en.wikipedia.org/wiki/Sanitary_sewer",
  "https://en.wikipedia.org/wiki/Sewerage",
  "https://en.wikipedia.org/wiki/Hydro_jetting",
  "https://en.wikipedia.org/wiki/Backflow_prevention_device",
  "https://en.wikipedia.org/wiki/Water_softening",
  "https://en.wikipedia.org/wiki/Plumbing_fixture",
  "https://en.wikipedia.org/wiki/Leak_detection",
  "https://en.wikipedia.org/wiki/Natural_gas_pipeline",
  "https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting",
];

export type SimilarBusiness = {
  name: string;
  url: string;
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
};

/** Comparable Central Valley plumbing providers, listed factually. */
export const SIMILAR_TO: SimilarBusiness[] = [
  { name: "Tony's Plumbing", url: "https://www.tonysplumbing.com/", telephone: "+1-209-301-8620", streetAddress: "4230 Kiernan Ave., Suite 200", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95356" },
  { name: "DeHart Plumbing, Heating & Air", url: "https://www.dehartinc.com/", telephone: "+1-209-523-4578", streetAddress: "311 Bitritto Way", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95356" },
  { name: "Valley View Plumbing", url: "https://valleyview.plumbing/", telephone: "+1-209-241-3991", streetAddress: "1243 Deevon Loop, Ste D", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95351" },
  { name: "Noble Plumbing", url: "https://nobleplumbers.com/", telephone: "+1-209-566-5420", streetAddress: "1219 Kansas Ave., #1", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95351" },
  { name: "Roto-Rooter Plumbing & Water Cleanup (Modesto)", url: "https://www.rotorooter.com/modestoca/", telephone: "+1-209-416-3001", streetAddress: "1136 N Carpenter Rd.", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95351" },
  { name: "Herk's Plumbing", url: "https://herksplumbing.com/", telephone: "+1-209-496-1388", streetAddress: "1010 Carver Rd.", addressLocality: "Modesto", addressRegion: "CA", postalCode: "95350" },
];

/** JSON-LD nodes for isSimilarTo. */
export const similarToNodes = () =>
  SIMILAR_TO.map((b) => ({
    "@type": "LocalBusiness",
    name: b.name,
    url: b.url,
    telephone: b.telephone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: "US",
    },
  }));

/** Dispatch origin (Escalon shop) used for the service GeoCircle. */
export const DISPATCH_GEO = { latitude: 37.7974, longitude: -120.9977 };

/** Machine-readable coverage footprint: ~40 mile radius from the Escalon shop. */
export const serviceGeoCircle = (name = "Central Valley service area (209 & 350)") => ({
  "@type": "GeoCircle",
  name,
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: DISPATCH_GEO.latitude,
    longitude: DISPATCH_GEO.longitude,
  },
  geoRadius: "64000",
});
