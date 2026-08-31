import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";
import { waterHeaterServices } from "@/lib/services";
import { serviceCities } from "@/lib/service-cities";

const URL = `${SITE_URL}/water-heaters/`;
const DESC =
  "Water heater installation, replacement, repair, tankless conversion, electric and heat pump models, plus annual flushing across Escalon, Modesto and the 209 & 350.";

export const Route = createFileRoute("/water-heaters/")({
  head: () => ({
    meta: [
      { title: "Water Heaters in Escalon & Modesto, CA | Mainline Plumbing Inc." },
      { name: "description", content: DESC },
      { property: "og:title", content: "Water Heater Replacement & Repair | Mainline Plumbing Inc." },
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
            { "@type": "ListItem", position: 2, name: "Water Heaters", item: URL },
          ],
        }),
      },
    ],
  }),
  component: WaterHeatersHub,
});

function WaterHeatersHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Water Heaters</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <span className="eyebrow">Our #1 Specialty</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                Water Heater Replacement, <span className="text-accent">Done Right the First Time.</span>
              </h1>
              <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">
                Gas, electric, hybrid heat pump or tankless, water heaters are what we do more than
                anything else. We stock the common sizes, pull the permits, handle the gas and
                venting, and get the hot water back on, usually the same day.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">
                {LICENSE_LABEL}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
                <Link to="/coupons/" className="btn-outline">See Current Specials</Link>
              </div>
            </div>
            <QuickQuoteForm title="Need Hot Water?" subtitle="Tell us what's going on and we'll call you right back." compact className="w-full max-w-md lg:ml-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Water Heater Services</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterHeaterServices.map((s) => (
              <a key={s.slug} href={`/water-heaters/${s.slug}/`} className="bg-white rounded-2xl p-7 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="size-12 rounded-xl bg-brand-orange flex items-center justify-center">
                  <Flame className="size-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-navy">Signs You Need a Replacement</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Your tank is 10+ years old (check the label)",
                "Rusty, cloudy or metallic-smelling hot water",
                "Popping, rumbling or knocking from the tank",
                "Puddling, dampness or corrosion at the base",
                "Hot water runs out faster than it used to",
                "Rising energy bills with no other change",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-orange text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold uppercase">Tank, Tankless, Electric or Heat Pump?</h2>
            <p className="mt-3 text-white/90">
              A standard tank is the fastest, lowest-cost swap. Tankless costs more up front and pays
              back in efficiency and endless hot water. Hybrid heat pump models cut electric water
              heating costs dramatically and often qualify for rebates. We walk your home, check the
              gas line, venting and electrical, then give you an honest recommendation. Free.
            </p>
            <a href="tel:+12098381000" className="mt-6 inline-flex items-center gap-2 bg-white text-brand-orange-deep px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white/90">
              <Phone className="size-4" /> 209.838.1000
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep text-white py-14">
        <div className="container-x">
          <h2 className="text-2xl font-bold uppercase text-accent">Water Heater Service Near You</h2>
          <ul className="mt-5 grid sm:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
            {serviceCities.map((c) => (
              <li key={c.slug}>
                <Link to="/areas-we-serve/$city/" params={{ city: c.slug }} className="text-white/85 hover:text-accent">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
