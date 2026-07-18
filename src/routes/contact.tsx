import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mainline Plumbing Inc. | Escalon, CA Plumbers" },
      { name: "description", content: "Call (209) 560-6652 or request plumbing service online. Family-owned plumbing serving Escalon, Modesto and the Central Valley." },
      { property: "og:title", content: "Contact Mainline Plumbing Inc." },
      { property: "og:description", content: "Schedule fast, dependable plumbing service in the Central Valley." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-navy-deep text-white py-20">
        <div className="container-x">
          <span className="eyebrow">Contact</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">Schedule Service Today</h1>
          <p className="mt-4 text-white/80 max-w-xl">Call us or send a message, we're ready to help with any plumbing need, big or small.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
            {sent ? (
              <div className="text-center py-12">
                <div className="size-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center"><Send className="size-7 text-accent" /></div>
                <h3 className="mt-5 text-2xl font-bold text-navy">Thanks, we'll be in touch!</h3>
                <p className="mt-2 text-muted-foreground">We'll reply shortly. For emergencies, call (209) 560-6652.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid sm:grid-cols-2 gap-4">
                <h2 className="sm:col-span-2 text-2xl font-bold text-navy">Request Service</h2>
                <Input label="First Name" name="first" required />
                <Input label="Last Name" name="last" required />
                <Input label="Phone" name="phone" type="tel" required />
                <Input label="Email" name="email" type="email" required />
                <Input label="Address" name="address" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-navy mb-1">How can we help?</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="btn-primary sm:col-span-2 justify-self-start">
                  <Send className="size-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <ContactCard icon={Phone} label="Call Us">
              <a href="tel:2095606652" className="text-2xl font-bold text-navy">(209) 560-6652</a>
            </ContactCard>
            <ContactCard icon={MapPin} label="Visit Us">
              18332 Campbell Ave.<br />Escalon, CA 95320
            </ContactCard>
            <ContactCard icon={Clock} label="Hours">
              Mon–Fri: 7am – 7pm<br />Sat: 7am – 7pm<br />Sun: Closed<br />
              <span className="text-accent font-semibold">Emergency Repairs Available</span>
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
