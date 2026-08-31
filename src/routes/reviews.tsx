import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

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
                is the only marketing that matters. Reviews from real customers live on our Google
                Business Profile and Facebook page, and we'd be grateful for yours after your service.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">{LICENSE_LABEL}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:2098381000" className="btn-primary"><Phone className="size-4" /> (209) 838-1000</a>
                <Link to="/contact-us/" className="btn-outline">Leave Us Feedback</Link>
              </div>
            </div>
            <QuickQuoteForm title="Need Help?" subtitle="Tell us what's going on and we'll call you right back." compact className="w-full max-w-md lg:ml-auto" />
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
      <SiteFooter />
    </div>
  );
}
