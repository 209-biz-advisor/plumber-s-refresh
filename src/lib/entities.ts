/**
 * Entity-graph data shared by root and city JSON-LD.
 *
 * knowsAbout maps the topics we genuinely service to stable Wikipedia nodes so AI
 * crawlers can resolve what this business is an authority on.
 *
 * SIMILAR_TO uses schema.org isSimilarTo (never sameAs, which would assert we are the
 * same legal entity). Nodes carry name + url only: no ratings, no comparative claims.
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

export type SimilarBusiness = { name: string; url: string };

/** Comparable Central Valley plumbing providers, listed factually. */
export const SIMILAR_TO: SimilarBusiness[] = [
  { name: "Tony's Plumbing", url: "https://www.tonysplumbing.com/" },
  { name: "DeHart Plumbing, Heating & Air", url: "https://www.dehartinc.com" },
  { name: "Valley View Plumbing", url: "https://valleyview.plumbing/" },
  { name: "Noble Plumbing", url: "https://nobleplumbers.com" },
  { name: "Roto-Rooter Plumbing & Water Cleanup (Modesto)", url: "https://www.rotorooter.com/modestoca/" },
  { name: "Herk's Plumbing", url: "https://herksplumbing.com/" },
];

/** JSON-LD nodes for isSimilarTo. */
export const similarToNodes = () =>
  SIMILAR_TO.map((b) => ({ "@type": "LocalBusiness", name: b.name, url: b.url }));

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
