import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Wrench, Droplets, Flame, ShieldCheck, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroCover from "@/assets/hero-cover.png";
import miguelOwner from "@/assets/miguel-owner.png";
import miguelAction from "@/assets/miguel-action.png";
import shield from "@/assets/logo-shield.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { name: "description", content: "Family-owned plumbers in Escalon, CA. 28+ years of expert plumbing repairs, water heaters, drain cleaning & 24/7 emergency service across the Central Valley." },
      { property: "og:title", content: "Mainline Plumbing Inc. | Escalon, CA" },
      { property: "og:description", content: "Family-owned plumbing experts serving Escalon, Modesto and the Central Valley. Call (209) 560-6652." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Wrench, title: "Plumbing Repairs", desc: "Fast, reliable repairs for leaks, fixtures, and full plumbing systems." },
  { icon: Flame, title: "Water Heater Services", desc: "Installation, repair, and replacement for tank & tankless water heaters." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Professional drain cleaning, hydro jetting, and clog removal." },
  { icon: ShieldCheck, title: "Leak Detection", desc: "Accurate leak detection that saves your floors, walls, and water bill." },
];

const reviews = [
  { quote: "My water heater stopped working and Miguel came immediately to fix it. So transparent with his work.", name: "Alondra A." },
  { quote: "Best service! Joey is very professional and did a neat, clean job installing our dishwasher same-day.", name: "Liz R." },
  { quote: "Their honesty and integrity speaks for itself and their workmanship is on point. Highly recommend.", name: "Pam N." },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroCover} alt="Mainline Plumbing Escalon CA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-transparent" />
        <div className="container-x relative py-28 md:py-40 text-white max-w-3xl">
          <span className="eyebrow">Escalon, CA · Family-Owned Since 1996</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-3 leading-[1.05]">
            For All Your Plumbing Needs <span className="text-accent">Call The Mainline.</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Family plumbers serving families just like yours across the Central Valley.
            28+ years of trusted, transparent service.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> Call (209) 560-6652</a>
            <Link to="/contact" className="btn-outline">Schedule Service <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2"><Star className="size-4 text-accent fill-accent" /> 5-Star Rated</div>
            <div className="flex items-center gap-2"><Clock className="size-4 text-accent" /> 24/7 Emergency</div>
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" /> Licensed & Insured</div>
          </div>
        </div>
      </section>

      {/* SPECIAL BAR */}
      <section className="bg-accent">
        <div className="container-x py-5 flex flex-wrap items-center justify-center gap-4 text-navy-deep font-bold uppercase tracking-wider text-sm md:text-base">
          <span className="text-2xl md:text-3xl font-display">$50 OFF</span>
          <span>New Customer Special</span>
          <Link to="/contact" className="ml-2 underline underline-offset-4">Claim Offer →</Link>
        </div>
      </section>

      {/* TRUSTED LOCAL PLUMBERS */}
      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={miguelOwner} alt="Miguel, Owner of Mainline Plumbing" className="relative z-10 w-full max-w-md mx-auto" />
            <img src={shield} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 opacity-15" />
          </div>
          <div>
            <span className="eyebrow">Trusted Local Plumbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">Reliable Plumbing Services from a Family You Can Trust</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our team of plumbing technicians are experts in their craft. With over 28 years of experience,
              Mainline Plumbing has proudly served the residential and commercial plumbing needs of our community.
              We deliver swift, effective solutions tailored to your situation — minimizing inconvenience and
              giving you peace of mind.
            </p>
            <ul className="mt-6 space-y-3">
              {["Fast & efficient service","Transparent, upfront pricing","Friendly, knowledgeable staff","24/7 emergency plumbing"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="size-5 text-accent shrink-0" /> {t}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">Comprehensive Plumbing Services</h2>
            <p className="mt-4 text-muted-foreground">From simple repairs to full system installations — our team handles it all.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-border hover:border-accent transition group" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="size-14 rounded-xl bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center group-hover:scale-110 transition">
                  <s.icon className="size-7 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">View All Services <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="relative bg-navy-deep text-white overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <span className="eyebrow">Emergency Service</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">24/7 Emergency Repairs</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              When disaster strikes, we move fast. Our team is on-call around the clock to stop the
              flood, fix the failure, and restore your peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> Call Now</a>
              <Link to="/contact" className="btn-outline">Request Service</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={miguelAction} alt="Mainline plumber fixing burst pipe" className="max-h-[420px] drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">What Our Neighbors Say</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent" />)}
                </div>
                <p className="mt-4 text-muted-foreground italic">"{r.quote}"</p>
                <p className="mt-4 font-bold text-navy">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
