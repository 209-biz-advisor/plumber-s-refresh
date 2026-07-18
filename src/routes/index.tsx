import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Wrench, Droplets, Flame, ShieldCheck, Clock, Star, ArrowRight,
  CheckCircle2, MessageSquare, Mail, MapPin, DollarSign, Users, Award, BookOpen, Send,
  BadgePercent, CalendarClock, AlertTriangle, ThumbsUp,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroCover from "@/assets/hero-cover.png";
import miguelOwner from "@/assets/miguel-owner.png";
import miguelAction from "@/assets/miguel-emergency.png";
import shield from "@/assets/logo-shield.png";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";
import { serviceCities } from "@/lib/service-cities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { name: "description", content: "Family-owned plumbers in Escalon, CA. 28+ years of expert plumbing repairs, water heaters, drain cleaning & emergency plumbing repairs across the Central Valley." },
      { property: "og:title", content: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { property: "og:description", content: "Family-owned plumbers in Escalon, CA. 28+ years of expert plumbing repairs, water heaters, drain cleaning & emergency plumbing repairs across the Central Valley." },
    ],
  }),
  component: HomePage,
});

const serviceColumns = [
  {
    icon: Wrench,
    title: "Plumbing Repairs & Upgrades",
    items: ["Plumbing Fixtures", "Water Lines", "Gas Lines", "Leak Detection", "Repiping", "Remodeling", "Commercial Plumbing"],
  },
  {
    icon: Droplets,
    title: "Drain & Sewer Solutions",
    items: ["Drain Cleaning", "Trenchless Pipe Lining", "Trenchless Pipe Bursting", "Sewer Services", "Hydro Jetting"],
  },
  {
    icon: Flame,
    title: "Water Heaters",
    items: ["Tank Water Heaters", "Tankless Water Heaters", "Repair & Replacement", "Same-Day Installation"],
  },
];

const pillars = [
  { icon: DollarSign, title: "Upfront Pricing & Expectations", sub: "Serving the 209 Since 1996" },
  { icon: Award, title: "No Two Solutions Are Alike", sub: "5-Star Service Rating From Real Neighbors" },
  { icon: Users, title: "Family-Owned & Customer-Focused", sub: "Plumbing Knowledge Is Power" },
];

const cities = serviceCities;

const reviews = [
  { quote: "My water heater stopped working and Miguel came immediately to fix it. So transparent with his work.", name: "Alondra A." },
  { quote: "Best service! Joey is very professional and did a neat, clean job installing our dishwasher same-day.", name: "Liz R." },
  { quote: "Their honesty and integrity speaks for itself and their workmanship is on point. Highly recommend.", name: "Pam N." },
];

const specials = [
  { big: "$0", label: "Service Call w/ Repair", fine: "When you book any repair. New customers.", icon: Wrench },
  { big: "$50", label: "Off Drain Clearing", fine: "Main line clearing. One coupon per household.", icon: Droplets },
  { big: "$250", label: "Off Tankless Water Heater", fine: "Installed by Mainline. Cannot combine offers.", icon: Flame },
  { big: "10%", label: "Senior & Military Discount", fine: "Valid ID required at time of service.", icon: BadgePercent },
];

const badges = [
  "BBB A+ Accredited",
  "Google 5-Star Rated",
  "Angi Certified Pro",
  "Yelp Verified",
  "Nextdoor Neighborhood Fave",
  "Family-Owned Since 1996",
];

const stats = [
  { num: "28+", label: "Years of Experience" },
  { num: "5.0", label: "Average Google Rating" },
  { num: "Fast", label: "Emergency Response" },
];

function HomePage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroCover} alt="Mainline Plumbing Escalon CA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/40" />
        <div className="container-x relative py-24 md:py-36 text-white">
          <div className="max-w-3xl">
            <span className="eyebrow">Escalon, CA · Family-Owned Since 1996</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-3 leading-[1.05]">
              We Protect Plumbing <span className="text-accent">and Peace of Mind.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Our friendly team has been serving Escalon, Modesto and the 209 for over 28 years ,
              providing plumbing maintenance, repairs, and more. Put us to work for you.
            </p>
            <p className="mt-3 font-display tracking-widest text-accent uppercase text-sm">
              The Mainline's got your back.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-outline"><Mail className="size-4" /> Contact</Link>
              <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> Call</a>
              <a href="sms:2095606652" className="btn-outline"><MessageSquare className="size-4" /> Text</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><Star className="size-4 text-accent fill-accent" /> 5-Star Rated</div>
              <div className="flex items-center gap-2"><Clock className="size-4 text-accent" /> Emergency Service</div>
              <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" /> Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES, Live Life Unclogged */}
      <section className="py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <span className="eyebrow">Plumbing Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2 leading-tight">
              Live Life <span className="text-brand-red">Unclogged.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              When your plumbing goes awry, so does life, disrupting everyday tasks, your comfort and your patience.
            </p>
            <p className="mt-3 text-muted-foreground">
              Call us day, night, weekends too. You can trust that our plumbing experts will deliver top-quality
              service and exceptional care regardless if it's a clogged drain or a burst pipe. And everything in between.
            </p>
            <a href="tel:2095606652" className="btn-primary mt-7"><Phone className="size-4" /> Call Now</a>
          </div>
          {serviceColumns.map((col) => (
            <div key={col.title} className="bg-white rounded-2xl p-7 border border-border hover:border-accent transition" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="size-12 rounded-xl bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center mb-4">
                <col.icon className="size-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-red uppercase leading-tight">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-navy hover:text-accent underline-offset-4 hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO BAR */}
      <section className="bg-accent">
        <div className="container-x py-5 flex flex-wrap items-center justify-center gap-4 text-navy-deep font-bold uppercase tracking-wider text-sm md:text-base">
          <span className="text-2xl md:text-3xl font-display">$50 OFF</span>
          <span>New Customer Special, Limited Time</span>
          <Link to="/contact" className="ml-2 px-4 py-2 border-2 border-navy-deep rounded hover:bg-navy-deep hover:text-white transition">Learn More →</Link>
        </div>
      </section>

      {/* CURRENT SPECIALS */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Save On Your Next Service</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">Check Out Our Current Specials</h2>
            <p className="mt-4 text-muted-foreground">
              Real savings for real neighbors. Mention the offer when you book, restrictions apply.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specials.map((s) => (
              <div key={s.label} className="relative bg-white rounded-2xl p-6 border border-border flex flex-col hover:border-accent transition" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="absolute -top-3 -right-3 size-12 rounded-full bg-brand-red text-white flex items-center justify-center">
                  <s.icon className="size-6" />
                </div>
                <div className="font-display text-5xl md:text-6xl text-brand-red leading-none">{s.big}</div>
                <div className="mt-2 font-bold uppercase tracking-wider text-navy text-sm">{s.label}</div>
                <p className="mt-3 text-xs text-muted-foreground flex-1">{s.fine}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center justify-center gap-2 bg-navy-deep text-white px-4 py-2.5 rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-navy transition">
                  Schedule Service <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="text-navy font-bold uppercase tracking-wider text-sm hover:text-brand-red">
              View All Offers →
            </Link>
          </div>
        </div>
      </section>

      {/* AWARDS / TRUST BADGES */}
      <section className="bg-white border-y border-border py-10">
        <div className="container-x">
          <p className="text-center eyebrow mb-6">Trusted By Your Neighbors</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 px-4 py-3 border-2 border-navy/10 rounded-lg bg-secondary">
                <ShieldCheck className="size-5 text-brand-red shrink-0" />
                <span className="font-display uppercase tracking-wider text-navy text-xs md:text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-navy-deep to-navy text-white py-12">
        <div className="container-x grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl md:text-6xl text-accent leading-none">{s.num}</div>
              <div className="mt-3 uppercase tracking-widest text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WATER HEATER FEATURE */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Water Heater Specialists</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2 leading-tight">
              No Hot Water? <span className="text-brand-red">We'll Fix That, Today.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Water heaters are the #1 call we get in the 209, and the #1 thing we install. From a
              leaking 15-year-old tank to a full tankless conversion, we stock the units, we pull the
              permits, and we get the hot water back on the same day whenever we can.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Tank Replacement", d: "40, 50 & 75-gal gas and electric. Haul-away included." },
                { t: "Tankless Conversion", d: "Endless hot water. Navien, Rinnai & Rheem certified." },
                { t: "Same-Day Install", d: "In-stock units for most Escalon & Modesto homes." },
                { t: "Repair & Rescue", d: "Pilot lights, thermocouples, elements, T&P valves." },
              ].map((f) => (
                <div key={f.t} className="border-l-4 border-brand-red pl-4">
                  <div className="font-bold text-navy uppercase tracking-wider text-sm">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-secondary rounded-xl p-5 border border-border">
              <p className="text-sm text-navy font-semibold uppercase tracking-wider">Is it time to replace?</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="size-4 text-brand-red shrink-0 mt-0.5" /> Tank is 10+ years old</li>
                <li className="flex gap-2"><CheckCircle2 className="size-4 text-brand-red shrink-0 mt-0.5" /> Rusty or discolored hot water</li>
                <li className="flex gap-2"><CheckCircle2 className="size-4 text-brand-red shrink-0 mt-0.5" /> Popping or rumbling sounds</li>
                <li className="flex gap-2"><CheckCircle2 className="size-4 text-brand-red shrink-0 mt-0.5" /> Puddles or moisture at the base</li>
                <li className="flex gap-2"><CheckCircle2 className="size-4 text-brand-red shrink-0 mt-0.5" /> Hot water runs out faster than it used to</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> Get a Free Quote</a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-navy text-navy font-bold uppercase tracking-wider text-sm hover:bg-navy hover:text-white transition">
                Book an Assessment
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Ask about our <span className="font-bold text-brand-red">$250 off tankless</span> and financing options.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-navy-deep to-navy rounded-2xl p-8 text-white" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="flex items-center gap-3">
                <div className="size-14 rounded-xl bg-brand-red flex items-center justify-center">
                  <Flame className="size-7 text-white" />
                </div>
                <div>
                  <div className="eyebrow !text-accent">Featured Install</div>
                  <div className="font-display text-2xl uppercase">Tankless Conversion</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { n: "∞", l: "Hot Water" },
                  { n: "20+", l: "Year Lifespan" },
                  { n: "30%", l: "Energy Savings" },
                ].map((s) => (
                  <div key={s.l} className="bg-white/5 border border-white/10 rounded-lg py-4">
                    <div className="font-display text-3xl text-accent">{s.n}</div>
                    <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm">
                {[
                  "Free in-home sizing & gas-line assessment",
                  "Permits & inspections handled for you",
                  "Old tank removed & recycled, no mess left behind",
                  "12-year manufacturer warranty on qualifying units",
                  "Financing available with approved credit",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/90">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Call the specialist</div>
                  <div className="font-display text-xl text-accent">(209) 560-6652</div>
                </div>
                <a href="tel:2095606652" className="bg-accent text-navy-deep p-3 rounded-full hover:opacity-90">
                  <Phone className="size-5" />
                </a>
              </div>
            </div>

            <div className="mt-5 bg-brand-red text-white rounded-xl p-5 flex items-center gap-4">
              <AlertTriangle className="size-8 shrink-0" />
              <div>
                <div className="font-bold uppercase tracking-wider text-sm">Leaking Water Heater?</div>
                <div className="text-sm text-white/90">Shut off the water supply and call us, we're on call for plumbing emergencies.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-brand-red text-white py-20 md:py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow !text-white/80">Why Choose Mainline?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Quality Over Quantity. <br />
            <span className="text-white/90">It's The Mainline Way.</span>
          </h2>
          <p className="mt-6 text-white/90 leading-relaxed">
            At Mainline Plumbing, our goal isn't to book as many jobs as possible, it's to ensure every
            job we do book is a job done right. We hire the best, champion their efforts, and continuously
            train to ensure we're delivering the most advanced plumbing solutions on time and on budget.
          </p>
          <p className="mt-4 text-white/90 leading-relaxed">
            Because relationships are everything in our line of work, our goal is to retain you as a
            customer for all your plumbing needs, and to be the first name you pass along to your neighbors.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 bg-navy-deep text-white px-8 py-3 rounded font-bold uppercase tracking-wider text-sm hover:bg-navy transition">
            About Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 md:py-24">
        <div className="container-x grid md:grid-cols-3 gap-10 text-center">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center">
              <div className="size-20 rounded-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                <p.icon className="size-9 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-red uppercase">{p.title}</h3>
              <div className="mt-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent" />)}
              </div>
              <p className="mt-3 text-sm text-navy font-semibold uppercase tracking-wider">{p.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED LOCAL PLUMBERS / OWNER */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={miguelOwner} alt="Miguel, Owner of Mainline Plumbing" className="relative z-10 w-full max-w-md mx-auto" />
            <img src={shield} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 opacity-15" />
          </div>
          <div>
            <span className="eyebrow">Trusted Local Plumbers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">Reliable Plumbing from a Family You Can Trust</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              With over 28 years of experience, Mainline Plumbing has proudly served the residential
              and commercial plumbing needs of our community. We deliver swift, effective solutions
              tailored to your situation, minimizing inconvenience and giving you peace of mind.
            </p>
            <ul className="mt-6 space-y-3">
              {["Fast & efficient service","Transparent, upfront pricing","Friendly, knowledgeable staff","emergency plumbing repairs"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="size-5 text-accent shrink-0" /> {t}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP, MIDDLE OF PAGE */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow">Our Service Area</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 leading-tight">
                We Go Where You Need Us,<br />
                <span className="text-brand-red">All Around the 209.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Since 1996, we've been protecting Escalon, Modesto and surrounding communities, providing
                plumbing maintenance, emergency repairs, pipe replacements and more.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm font-bold text-brand-red uppercase">
                {cities.map((c) => (
                  <Link key={c.slug} to="/areas-we-serve/$city" params={{ city: c.slug }} className="hover:underline flex items-center gap-1">
                    <MapPin className="size-3" /> {c.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> Call (209) 560-6652</a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-navy text-navy font-bold uppercase tracking-wider text-sm hover:bg-navy hover:text-white transition">
                  Request Service
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
                <img src={serviceMap.url} alt="Map of Mainline Plumbing service area around Escalon, Modesto and the 209" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-red text-white px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg">
                Serving the 209
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE, dark grid */}
      <section className="bg-navy-deep text-white py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-brand-red">Areas</span> We Serve
            </h2>
            <p className="mt-4 text-white/80">
              At Mainline Plumbing, we're proud to offer exceptional plumbing repairs, maintenance,
              and installations to our neighbors throughout Stanislaus & San Joaquin counties.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cities.map((c) => (
              <Link key={c.slug} to="/areas-we-serve/$city" params={{ city: c.slug }} className="border border-white/20 rounded-lg px-5 py-4 flex items-center justify-between hover:border-accent hover:bg-white/5 transition">
                <span className="font-bold uppercase tracking-wider text-sm">{c.name}</span>
                <span className="text-accent text-xl">+</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-24">
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
                <p className="mt-4 font-bold text-navy">, {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL CTA BAND */}
      <section className="bg-navy-deep text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,var(--brand-orange),transparent_50%),radial-gradient(circle_at_80%_80%,var(--brand-red),transparent_50%)]" aria-hidden />
        <div className="container-x grid md:grid-cols-2 gap-6 relative">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
            <CalendarClock className="size-10 text-accent" />
            <h3 className="mt-4 text-2xl md:text-3xl font-bold">Schedule Your Service Today</h3>
            <p className="mt-3 text-white/80">
              Book online or by phone. Same-day and next-day appointments available across the 209.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary"><Mail className="size-4" /> Schedule</Link>
              <a href="tel:2095606652" className="btn-outline"><Phone className="size-4" /> Call</a>
            </div>
          </div>
          <div className="bg-brand-red rounded-2xl p-8 border border-white/10">
            <AlertTriangle className="size-10 text-white" />
            <h3 className="mt-4 text-2xl md:text-3xl font-bold">Need Emergency Service?</h3>
            <p className="mt-3 text-white/90">
              Burst pipe? No hot water? We answer the phone for plumbing emergencies, day, night, weekends, holidays.
            </p>
            <a href="tel:2095606652" className="mt-6 inline-flex items-center gap-3 bg-white text-brand-red px-6 py-3.5 rounded-lg font-display text-2xl tracking-wider hover:bg-white/90 transition">
              <Phone className="size-6" /> (209) 560-6652
            </a>
          </div>
        </div>
      </section>

      {/* INLINE CONTACT FORM */}
      <section className="bg-brand-red text-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow !text-white/80">Let's Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Plumbing Can Get a Bit Hairy. <br />
              <span className="text-white/90">Bring It On.</span>
            </h2>
            <p className="mt-5 text-white/90 max-w-md">
              Ready to work with plumbers who truly understand your home or business? Call (209) 560-6652
              or submit the form to request an appointment. Whether you're dealing with an emergency or
              planning preventive maintenance, we're here to help.
            </p>
            <div className="mt-8 space-y-3 text-white/95">
              <div className="flex gap-3 items-center"><Phone className="size-5" /> <a href="tel:2095606652" className="font-bold">(209) 560-6652</a></div>
              <div className="flex gap-3 items-center"><MapPin className="size-5" /> 18332 Campbell Ave, Escalon, CA</div>
              <div className="flex gap-3 items-center"><Clock className="size-5" /> Emergency Service Available</div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-white rounded-2xl p-7 text-navy"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="size-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center"><Send className="size-7 text-accent" /></div>
                <h3 className="mt-5 text-2xl font-bold">Thanks, we'll be in touch!</h3>
                <p className="mt-2 text-muted-foreground">For emergencies, call (209) 560-6652.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <input required placeholder="First Name*" className="border border-border rounded-lg px-4 py-3 text-sm" />
                  <input required placeholder="Last Name*" className="border border-border rounded-lg px-4 py-3 text-sm" />
                  <input required placeholder="Phone*" className="border border-border rounded-lg px-4 py-3 text-sm" />
                  <input required type="email" placeholder="Email*" className="border border-border rounded-lg px-4 py-3 text-sm" />
                </div>
                <select className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm bg-white">
                  <option>Are you a new customer?</option>
                  <option>Yes, first time</option>
                  <option>No, returning customer</option>
                </select>
                <select className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm bg-white">
                  <option>How did you hear about us?</option>
                  <option>Google</option>
                  <option>Referral</option>
                  <option>Facebook</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="How can we help?" rows={4} className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm" />
                <button type="submit" className="mt-4 w-full bg-navy-deep text-white py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-navy transition">
                  Contact Us
                </button>
                <p className="mt-3 text-xs text-muted-foreground">* required</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="relative bg-navy-deep text-white overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <span className="eyebrow">Emergency Service</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Emergency Plumbing Repairs</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              When disaster strikes, we move fast. Our team is on call for plumbing emergencies to stop
              the flood, fix the failure, and restore your peace of mind.
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

      {/* SERVICE AREA MAP, NEAR FOOTER */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={serviceMap.url} alt="" className="w-full h-full object-cover" aria-hidden />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-navy-deep/70" aria-hidden />
        <div className="container-x relative py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow !text-accent">Your Local Plumbers</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
                See Where We Serve.<br />
                <span className="text-brand-red">Then Call Us Out.</span>
              </h2>
              <p className="mt-4 text-white/80 max-w-md">
                From Escalon to Stockton, Modesto to Turlock, we cover the neighborhoods that keep the 209 running.
                If you live inside the circle, you're in our service area.
              </p>
              <a href="tel:2095606652" className="mt-8 inline-flex items-center gap-3 bg-accent text-navy-deep px-6 py-3.5 rounded-lg font-display text-xl tracking-wider hover:bg-white transition">
                <Phone className="size-5" /> (209) 560-6652
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Cities & Towns We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {cities.map((c) => (
                  <Link key={c.slug} to="/areas-we-serve/$city" params={{ city: c.slug }} className="flex items-center gap-2 text-white/90 hover:text-accent transition">
                    <MapPin className="size-3 text-accent" /> {c.name}
                  </Link>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/10 text-xs text-white/60">
                Don't see your city? Call us anyway. We frequently travel to neighboring communities for water heaters, emergency repairs and larger projects.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
