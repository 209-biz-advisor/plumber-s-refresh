import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Droplets, Flame, ShieldCheck, Pipette, Bath, Phone, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Escalon & Modesto | Mainline Plumbing Inc." },
      { name: "description", content: "Full-service residential & commercial plumbing — repairs, water heaters, drain cleaning, leak detection, repiping, and 24/7 emergency service." },
      { property: "og:title", content: "Plumbing Services | Mainline Plumbing Inc." },
      { property: "og:description", content: "Repairs, water heaters, drain cleaning, leak detection, repiping and emergency service in the Central Valley." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Wrench, title: "Plumbing Repairs", desc: "Toilets, sinks, faucets, garbage disposals — we fix it right the first time." },
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
      <section className="bg-navy-deep text-white py-20">
        <div className="container-x">
          <span className="eyebrow">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">Complete Plumbing Solutions</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Backed by 28+ years of experience, our skilled plumbers handle residential and commercial work across Stanislaus & San Joaquin County.</p>
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

      <section className="bg-secondary py-20">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">When You Choose Mainline</span>
            <h2 className="text-4xl font-bold text-navy mt-2">What you can expect</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Fast and efficient service","Transparent pricing and upfront estimates","Quality workmanship and attention to detail","Friendly and knowledgeable staff","24/7 emergency plumbing services","Code-compliant installations"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-deep text-white rounded-2xl p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold">Ready to schedule?</h3>
            <p className="mt-3 text-white/80">Call us or request service online — we'll be there fast.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> (209) 560-6652</a>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
