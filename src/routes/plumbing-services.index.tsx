import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Droplets, Flame, ShieldCheck, Pipette, Bath, Phone, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";
import { topLevel, childrenOf, servicePath, waterHeaterServices } from "@/lib/services";

export const Route = createFileRoute("/plumbing-services/")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Escalon & Modesto | Mainline Plumbing Inc." },
      { name: "description", content: "Full-service residential & commercial plumbing, repairs, water heaters, drain cleaning, leak detection, repiping, and emergency plumbing repairs." },
      { property: "og:title", content: "Plumbing Services | Mainline Plumbing Inc." },
      { property: "og:description", content: "Repairs, water heaters, drain cleaning, leak detection, repiping and emergency service in the Central Valley." },
      { property: "og:url", content: `${SITE_URL}/plumbing-services/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/plumbing-services/` }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Wrench, title: "Plumbing Repairs", desc: "Toilets, sinks, faucets, garbage disposals, we fix it right the first time." },
  { icon: Flame, title: "Water Heater Services", desc: "Tank & tankless water heater repair, installation and replacement." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Clog removal, hydro jetting, and recurring drain maintenance." },
  { icon: ShieldCheck, title: "Leak Detection", desc: "Non-invasive detection of slab, wall, and underground leaks." },
  { icon: Pipette, title: "Piping & Repiping", desc: "Whole-home repipes, copper, PEX, and pipe replacement." },
  { icon: Bath, title: "Fixture Plumbing", desc: "Faucets, toilets, showers, tubs and full bathroom remodels." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Complete Plumbing Solutions</h1>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">
              {LICENSE_LABEL}
            </p>
            <p className="mt-4 text-white/80 max-w-2xl">Backed by 37+ years of hands-on plumbing experience, our skilled plumbers handle residential and commercial work across Stanislaus & San Joaquin County.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              <Link to="/areas-we-serve/" className="btn-outline">Areas We Serve</Link>
            </div>
          </div>
          <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
        </div>
      </section>


      <section className="py-20">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 border border-border hover:border-accent transition" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="size-14 rounded-xl bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                <s.icon className="size-7 text-accent" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FULL SERVICE DIRECTORY */}
      <section className="pb-20">
        <div className="container-x">
          <span className="eyebrow">Every Service We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Browse All Plumbing Services</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {topLevel("plumbing-services").map((s) => (
              <div key={s.slug}>
                <a href={servicePath(s)} className="font-semibold text-navy hover:text-accent">{s.name}</a>
                {childrenOf("plumbing-services", s.slug).length > 0 && (
                  <ul className="mt-1 mb-3 ml-3 space-y-1 border-l border-border pl-3">
                    {childrenOf("plumbing-services", s.slug).map((c) => (
                      <li key={c.slug}>
                        <a href={servicePath(c)} className="text-sm text-muted-foreground hover:text-accent">{c.name}</a>
                        {childrenOf("plumbing-services", c.slug).length > 0 && (
                          <ul className="mt-1 ml-3 space-y-1 border-l border-border pl-3">
                            {childrenOf("plumbing-services", c.slug).map((g) => (
                              <li key={g.slug}>
                                <a href={servicePath(g)} className="text-sm text-muted-foreground hover:text-accent">{g.name}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-white p-7">
            <h3 className="text-xl font-bold text-navy">Water Heaters</h3>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <a href="/water-heaters/" className="font-semibold text-navy hover:text-accent">All Water Heater Services</a>
              {waterHeaterServices.map((s) => (
                <a key={s.slug} href={servicePath(s)} className="text-sm text-muted-foreground hover:text-accent">{s.name}</a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* WATER HEATER DEEP DIVE */}
      <section id="water-heaters" className="bg-navy-deep text-white py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Our #1 Specialty</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Water Heater Replacement, <span className="text-accent">Done Right the First Time.</span>
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              Water heaters don't warn you before they go, they just quit, or worse, flood your garage
              at 6 AM. Mainline stocks the most common tank and tankless units in Escalon, pulls the
              permits, handles the gas and venting, and gets the hot water back on. Most standard tank
              swaps are done same day.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tank Water Heaters",
                price: "Same-Day Swaps",
                desc: "40, 50, and 75-gallon gas or electric. Bradford White, Rheem, and A.O. Smith. Full haul-away and code upgrades included.",
                bullets: ["Same-day installation", "6- to 12-year warranty options", "Seismic strapping & new T&P valve"],
              },
              {
                title: "Tankless Conversion",
                price: "Endless Hot Water",
                desc: "Endless hot water, wall-mounted, up to 30% more efficient. We size the unit, upsize the gas line if needed, and register the warranty for you.",
                bullets: ["Navien, Rinnai & Rheem certified", "20+ year expected lifespan", "Warranty registered for you"],
              },
              {
                title: "Repair & Rescue",
                price: "Fast Diagnosis",
                desc: "Pilot won't stay lit? No hot water in half the house? We diagnose thermocouples, heating elements, dip tubes, gas valves, and mixing valves fast.",
                bullets: ["Same-day diagnosis", "Upfront flat-rate pricing", "Honest repair-vs-replace advice"],
              },
            ].map((c) => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
                <div className="size-12 rounded-xl bg-brand-orange flex items-center justify-center mb-4">
                  <Flame className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white">{c.title}</h3>
                <div className="mt-1 text-accent font-display uppercase tracking-wider text-sm">{c.price}</div>
                <p className="mt-3 text-white/80 text-sm flex-1">{c.desc}</p>
                <ul className="mt-4 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-white/90">
                      <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-accent uppercase">Signs You Need a Replacement</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Your tank is 10+ years old (check the label)",
                  "Rusty, cloudy, or metallic-smelling hot water",
                  "Popping, rumbling, or knocking from the tank",
                  "Puddling, dampness, or corrosion at the base",
                  "Hot water runs out faster than it used to",
                  "Rising gas or electric bills with no other change",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-white/90"><CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-orange rounded-2xl p-8">
              <h3 className="text-2xl font-bold uppercase">Tank vs. Tankless: Which is Right for You?</h3>
              <p className="mt-3 text-white/90">
                A traditional tank is the fastest and lowest-cost swap. A tankless unit costs more up
                front but pays back in energy savings, saves floor space, and gives you endless hot
                water for busy households. In most Escalon and Modesto homes, tankless is the better
                long-term investment, but we'll only recommend it if it truly fits your home.
              </p>
              <p className="mt-4 text-white/90">
                We'll walk your home, measure your gas line, check your venting, and give you an
                honest, no-pressure recommendation. Free.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="inline-flex items-center gap-2 bg-white text-brand-orange-deep px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white/90">
                  <Phone className="size-4" /> 209.838.1000
                </a>
                <Link to="/contact-us/" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-orange transition">
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold uppercase text-white">The Mainline Water Heater Process</h3>
            <div className="mt-6 grid md:grid-cols-4 gap-6">
              {[
                { n: "01", t: "Free Assessment", d: "We inspect your existing unit, gas line, venting, and space." },
                { n: "02", t: "Honest Quote", d: "Flat-rate pricing with tank and tankless options, no surprises." },
                { n: "03", t: "Same-Day Install", d: "In-stock units. Permits pulled. Old unit hauled away." },
                { n: "04", t: "Warranty & Care", d: "Manufacturer warranty registered. Follow-up flush reminders." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-display text-4xl text-brand-orange">{s.n}</div>
                  <div className="mt-2 font-bold uppercase tracking-wider text-white">{s.t}</div>
                  <p className="mt-2 text-sm text-white/80">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="bg-secondary py-20">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">When You Choose Mainline</span>
            <h2 className="text-4xl font-bold text-navy mt-2">What you can expect</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Fast and efficient service","Transparent pricing and upfront estimates","Quality workmanship and attention to detail","Friendly and knowledgeable staff","emergency plumbing repairs","Code-compliant installations"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-deep text-white rounded-2xl p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold">Ready to schedule?</h3>
            <p className="mt-3 text-white/80">Call us or request service online, we'll be there fast.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              <Link to="/contact-us/" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
