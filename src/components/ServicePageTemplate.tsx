import { Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ChevronRight, Flame, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { LICENSE_LABEL } from "@/lib/site";
import { serviceCities } from "@/lib/service-cities";
import { childrenOf, topLevel, type ServiceEntry } from "@/lib/services";

export function ServicePageTemplate({ service }: { service: ServiceEntry }) {
  const hubPath = `/${service.hub}/`;
  const hubName = service.hub === "water-heaters" ? "Water Heaters" : "Plumbing Services";
  const kids = childrenOf(service.hub, service.slug);
  const siblings = topLevel(service.hub)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 9);
  const Icon = service.hub === "water-heaters" ? Flame : Wrench;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO + QUICK FORM */}
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <a href={hubPath} className="hover:text-accent">{hubName}</a>
            <ChevronRight className="size-3" />
            <span className="text-accent">{service.name}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <span className="eyebrow">{hubName}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">{service.name}</h1>
              <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">{service.intro}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">
                {LICENSE_LABEL}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
                <Link to="/contact-us/" className="btn-outline">Request a Free Quote</Link>
              </div>
            </div>
            <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <span className="eyebrow">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Our {service.name} Service</h2>
            <ul className="mt-6 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-orange text-white rounded-2xl p-8">
            <div className="size-12 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon className="size-6 text-white" />
            </div>
            <h3 className="mt-5 text-2xl font-bold uppercase">Straight Pricing, No Surprises</h3>
            <p className="mt-3 text-white/90">
              You get a flat-rate quote before we touch anything, and the service call is waived when
              you move forward with the repair. Family owned since 2010, 37+ years of hands-on
              experience behind every job.
            </p>
            <a href="tel:+12098381000" className="mt-6 inline-flex items-center gap-2 bg-white text-brand-orange-deep px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white/90">
              <Phone className="size-4" /> 209.838.1000
            </a>
          </div>
        </div>
      </section>

      {/* SUB-SERVICES */}
      {kids.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="container-x">
            <h2 className="text-3xl font-bold text-navy">Related {service.name} Work</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kids.map((k) => (
                <a key={k.slug} href={`/${k.hub}/${k.slug}/`} className="bg-white rounded-xl p-6 border border-border hover:border-accent transition block">
                  <h3 className="font-bold text-navy">{k.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Questions We Get</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">{service.name} FAQ</h2>
          <div className="mt-8 space-y-6">
            {service.faqs.map((f) => (
              <div key={f.q} className="border-l-4 border-brand-orange pl-5">
                <h3 className="font-bold text-navy">{f.q}</h3>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-navy-deep text-white py-16">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold uppercase text-accent">More {hubName}</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <a href={`/${s.hub}/${s.slug}/`} className="text-white/85 hover:text-accent">{s.name}</a>
                </li>
              ))}
            </ul>
            <a href={hubPath} className="mt-5 inline-block text-accent font-semibold uppercase tracking-wider text-sm">All {hubName} →</a>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase text-accent">{service.name} Near You</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
              {serviceCities.map((c) => (
                <li key={c.slug}>
                  <Link to="/areas-we-serve/$city/" params={{ city: c.slug }} className="text-white/85 hover:text-accent">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
