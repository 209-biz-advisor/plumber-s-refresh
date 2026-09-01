import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Ticket, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

const URL = `${SITE_URL}/coupons/`;
const DESC =
  "Current plumbing coupons and specials from Mainline Plumbing Inc: $50 off for new customers, $150 off water heater replacement, $250 off electric water heater installation, and 10% off for veterans and law enforcement.";

export const coupons = [
  { amount: "$50", title: "Off For New Customers", desc: "First-time Mainline customers save $50 on any plumbing repair or installation.", fine: "New customers only. One per household." },
  { amount: "$150", title: "Off Water Heater Replacement", desc: "Save on any tank water heater replacement, including permit, code upgrades and haul-away.", fine: "Applies to standard tank replacements." },
  { amount: "$250", title: "Off Electric Water Heater Installation", desc: "Going electric or upgrading to a hybrid heat pump water heater? Save $250 on installation.", fine: "Electric and heat pump models." },
  { amount: "10%", title: "Veteran & Law Enforcement Discount", desc: "Thank you for your service. 10% off any plumbing service for veterans, active duty and law enforcement.", fine: "Valid ID required. Not combinable with other offers." },
];

export const Route = createFileRoute("/coupons")({
  head: () => ({
    meta: [
      { title: "Plumbing Coupons & Specials in Escalon, CA | Mainline Plumbing Inc." },
      { name: "description", content: DESC },
      { property: "og:title", content: "Current Plumbing Coupons | Mainline Plumbing Inc." },
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
            { "@type": "ListItem", position: 2, name: "Coupons", item: URL },
          ],
        }),
      },
    ],
  }),
  component: CouponsPage,
});

function CouponsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Coupons</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="eyebrow">Save On Your Service</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">Current Plumbing Coupons</h1>
              <p className="mt-4 text-white/85 max-w-2xl">
                Mention the offer when you call and we'll apply it to your invoice. Straightforward
                discounts, no memberships, no monthly fees.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">{LICENSE_LABEL}</p>
              <div className="mt-7">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              </div>
            </div>
            <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {coupons.map((c) => (
            <div key={c.title} className="border-2 border-dashed border-brand-orange rounded-2xl p-8 bg-white">
              <Ticket className="size-8 text-brand-orange" />
              <div className="mt-4 font-display text-5xl text-brand-orange-deep">{c.amount}</div>
              <h2 className="mt-2 text-xl font-bold uppercase text-navy">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
              <p className="mt-4 text-xs text-muted-foreground/80 uppercase tracking-wider">{c.fine}</p>
              <Link to="/contact-us/" className="mt-5 inline-block font-bold uppercase tracking-wider text-sm text-brand-orange-deep">Schedule Service →</Link>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
