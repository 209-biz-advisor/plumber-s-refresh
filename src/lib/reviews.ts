/**
 * Verified third-party review profiles. Counts and ratings must only ever be
 * updated from the live profile, never estimated.
 */
export interface ReviewProfile {
  name: string;
  url: string;
  note: string;
  /** Review count shown on the live profile, when known. */
  count?: number;
}

/** Google Business Profile aggregate. 201 reviews as of August 2026. */
export const GOOGLE_REVIEW_COUNT = 201;
export const GOOGLE_RATING = "4.9";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/ZCcmqY46FtzNxew98";
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.0977089597477!2d-120.98057622464898!3d37.79529841097838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80905bc8466d2a99%3A0xaea65ff60fedfb12!2sMainline%20Plumbing%20Inc.!5e1!3m2!1sen!2sus!4v1788208775709!5m2!1sen!2sus";

export const reviewProfiles: ReviewProfile[] = [
  {
    name: "Google",
    url: GOOGLE_MAPS_URL,
    count: GOOGLE_REVIEW_COUNT,
    note: "Our largest body of verified customer feedback, built one job at a time since 2010.",
  },
  {
    name: "Yelp",
    url: "https://www.yelp.com/biz/mainline-plumbing-escalon-4",
    note: "Escalon and Modesto homeowners reviewing water heater replacements, drain work and emergency repairs.",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mainlineplumbinginc/",
    note: "Recommendations, job photos and community updates from the Mainline Plumbing page.",
  },
  {
    name: "Angi",
    url: "https://www.angi.com/companylist/us/ca/escalon/mainline-plumbing-inc-reviews-9045449.htm",
    note: "Screened and approved contractor listing with homeowner ratings and project detail.",
  },
  {
    name: "HomeAdvisor",
    url: "https://www.homeadvisor.com/rated.MainlinePlumbingInc.33776850.html",
    note: "Rated pro profile covering licensing, background screening and customer ratings.",
  },
];

/** Every canonical off-site profile for schema sameAs. */
export const SAME_AS: string[] = [
  GOOGLE_MAPS_URL,
  ...reviewProfiles.filter((p) => p.name !== "Google").map((p) => p.url),
];
