import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";
import { GOOGLE_MAPS_EMBED, GOOGLE_MAPS_URL } from "@/lib/reviews";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Mainline Plumbing Inc. | Escalon, CA Plumbers" },
      { name: "description", content: "Call 209.838.1000 or request plumbing service online. Family-owned plumbing serving Escalon, Modesto and the Central Valley." },
      { property: "og:title", content: "Contact Mainline Plumbing Inc." },
      { property: "og:description", content: "Schedule fast, dependable plumbing service in the Central Valley." },
      { property: "og:url", content: `${SITE_URL}/contact-us/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact-us/` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-navy-deep text-white py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Schedule Service Today</h1>
            <p className="mt-4 text-white/80 max-w-xl">Call us or send a message, we're ready to help with any plumbing need, big or small.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              <a href="sms:2098381000" className="btn-outline">Text Us</a>
            </div>
          </div>
          <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
        </div>
      </section>


      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <span className="eyebrow">What Happens Next</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-2">How We Handle Your Request</h2>
            <ol className="mt-6 space-y-5">
              {[
                { t: "You reach a real person", d: "Call 209.838.1000 during business hours and you'll talk to our team, never a call center." },
                { t: "We triage the problem", d: "Emergencies like burst pipes, sewer backups and dead water heaters get priority scheduling." },
                { t: "You get a flat-rate quote", d: "We diagnose on site and quote before any work begins, so the invoice is never a surprise." },
                { t: "Licensed work, cleaned up", d: `${LICENSE_LABEL}. Permits pulled where required, and we leave the space cleaner than we found it.` },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-brand-orange-deep text-white font-display text-xl flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-navy text-sm">{s.t}</div>
                    <p className="mt-1 text-muted-foreground text-sm">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              <a href="sms:2098381000" className="btn-outline">Text Us</a>
            </div>
          </div>

          <aside className="space-y-5">
            <ContactCard icon={Phone} label="Call Us">
              <a href="tel:+12098381000" className="text-2xl font-bold text-navy">209.838.1000</a>
            </ContactCard>
            <ContactCard icon={MapPin} label="Visit Us">
              18332 Campbell Ave.<br />Escalon, CA 95320
            </ContactCard>
            <ContactCard icon={Clock} label="Hours">
              Mon–Fri: 7am – 7pm<br />Sat: 7am – 7pm<br />Sun: Closed<br />
              <span className="text-accent font-semibold">Emergency Repairs Available</span>
            </ContactCard>
            <ContactCard icon={ShieldCheck} label="Licensed & Insured">
              {LICENSE_LABEL}<br />Bonded and insured for residential and light commercial work.
            </ContactCard>
            <ContactCard icon={Mail} label="Service Area">
              Escalon · Modesto · Manteca · Stanislaus & San Joaquin County
            </ContactCard>
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x text-center">
          <span className="eyebrow">Service Area</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Where We Serve</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            From Stockton to Turlock and everywhere in between, our plumbers cover the full 209
            coverage zone shown below.
          </p>
          <div className="mt-10 mx-auto w-4/5 max-w-3xl rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
            <img src={serviceMap.url} alt="Mainline Plumbing service area map" className="w-full h-auto" />
          </div>
          <div className="mt-10 mx-auto w-4/5 max-w-3xl rounded-2xl overflow-hidden border-4 border-brand-orange shadow-2xl">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              title="Mainline Plumbing Inc. location on Google Maps"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[360px] border-0"
            />
          </div>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-flex">
            Get Directions in Google Maps
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Input({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-navy mb-1">{label}</label>
      <input {...rest} className="w-full rounded-lg border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function ContactCard({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6" style={{ boxShadow: "var(--shadow-elegant)" }}>
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center"><Icon className="size-5 text-accent" /></div>
        <span className="eyebrow !text-navy">{label}</span>
      </div>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </div>
  );
}
