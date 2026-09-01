import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";
import { reviewProfiles, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED, SAME_AS } from "@/lib/reviews";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/reviews/`;
const DESC =
  "See why Central Valley homeowners trust Mainline Plumbing Inc. Read reviews, leave your own, and learn what to expect from our licensed C-36 plumbers.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews for Mainline Plumbing Inc. | Escalon & Modesto Plumbers" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Customer Reviews | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Reviews", item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Plumber", "LocalBusiness"],
          "@id": `${SITE_URL}/#business`,
          name: "Mainline Plumbing Inc.",
          url: `${SITE_URL}/`,
          telephone: "+1-209-838-1000",
          hasMap: GOOGLE_MAPS_URL,
          sameAs: SAME_AS,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_RATING,
            reviewCount: GOOGLE_REVIEW_COUNT,
            bestRating: "5",
            worstRating: "1",
          },
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Reviews</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="eyebrow">What Neighbors Say</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">Reviews & Reputation</h1>
              <p className="mt-4 text-white/85 max-w-2xl">
                We've been family owned in Escalon since 2010, and in a town this size your reputation
                is the only marketing that matters. Real customers have left us
                {" "}{GOOGLE_REVIEW_COUNT} reviews on Google, plus verified feedback on Yelp, Facebook,
                Angi and HomeAdvisor. We'd be grateful for yours after your service.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">{LICENSE_LABEL}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
                <Link to="/contact-us/" className="btn-outline">Leave Us Feedback</Link>
              </div>
            </div>
            <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">What Customers Consistently Tell Us</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "We show up when we say", d: "On-time arrival windows, a marked truck, and a call before we head your way." },
              { t: "The price is the price", d: "Flat-rate quotes before the work starts, so the invoice is never a surprise." },
              { t: "The house stays clean", d: "Shoe covers, drop cloths, and a workspace left cleaner than we found it." },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-2xl p-7 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-16 text-3xl font-bold text-navy">Verified Review Profiles</h2>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            We don't publish testimonials we wrote ourselves. Every rating below lives on a
            third-party profile you can verify yourself.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-7 border border-border hover:border-brand-orange transition-colors"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-navy">{p.name}</h3>
                  {p.count ? (
                    <span className="text-xs font-bold uppercase tracking-wider bg-brand-orange text-white rounded-md px-3 py-1">
                      {p.count} Reviews
                    </span>
                  ) : null}
                </div>
                {p.name === "Google" ? (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex gap-0.5 text-brand-orange">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                    </div>
                    <span className="text-sm font-semibold text-navy">{GOOGLE_RATING} average</span>
                  </div>
                ) : null}
                <p className="mt-3 text-muted-foreground text-sm">{p.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-orange-deep uppercase tracking-wider">
                  Read Reviews <ChevronRight className="size-4" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy">Find Us on Google Maps</h2>
              <p className="mt-3 text-muted-foreground">
                18332 Campbell Ave., Escalon, CA 95320. Monday through Saturday, 7:00 am to 7:00 pm.
                Emergency plumbing repairs prioritized during operating hours across the 209 & 350.
              </p>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-flex">
                Open in Google Maps
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border-4 border-brand-orange">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                title="Mainline Plumbing Inc. location on Google Maps"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[340px] border-0"
              />
            </div>
          </div>

          <div className="mt-12 bg-brand-orange text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold uppercase">Had Us Out Recently?</h2>
            <p className="mt-3 text-white/90 max-w-2xl">
              Reviews help other Valley families find a plumber they can trust. Leave one on Google or
              Facebook, or send it straight to us and we'll pass it to the crew who did the work.
            </p>
            <Link to="/contact-us/" className="mt-6 inline-flex items-center gap-2 bg-white text-brand-orange-deep px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white/90">
              Send Us Your Review
            </Link>
          </div>
        </div>
      </section>
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
