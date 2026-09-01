import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, MapPin, CheckCircle2, ArrowRight, Wrench, Droplets, Flame, ShieldCheck, Star, Landmark, Users, Calendar, AlertTriangle } from "lucide-react";
import { Linkify } from "@/components/Linkify";
import { createBudget } from "@/lib/interlink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { findCity, serviceCities } from "@/lib/service-cities";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";
import { SITE_URL, OG_IMAGE, LICENSE_LABEL } from "@/lib/site";

export const Route = createFileRoute("/areas-we-serve/$city")({
  loader: ({ params }) => {
    const city = findCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service Area Not Found | Mainline Plumbing Inc." }, { name: "robots", content: "noindex" }] };
    }
    const { city } = loaderData;
    const title = `Plumber in ${city.name}, CA | Mainline Plumbing Inc.`;
    const description = `Local plumbing services in ${city.name}, CA. Water heaters, drain cleaning, leak detection & emergency plumbing repairs from Mainline Plumbing Inc.`;
    const url = `${SITE_URL}/areas-we-serve/${city.slug}/`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas-we-serve/` },
                  { "@type": "ListItem", position: 3, name: city.name, item: url },
                ],
              },
              {
                "@type": ["Plumber", "LocalBusiness"],
                name: `Mainline Plumbing Inc. of ${city.name}, CA`,
                url,
                telephone: "+1-209-838-1000",
                image: "https://www.mainlineplumber.com/favicon.png",
                priceRange: "$$",
                parentOrganization: { "@id": "https://www.mainlineplumber.com/#business" },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "18332 Campbell Ave.",
                  addressLocality: "Escalon",
                  addressRegion: "CA",
                  postalCode: "95320",
                  addressCountry: "US",
                },
                areaServed: { "@type": "City", name: `${city.name}, CA` },
                openingHoursSpecification: [{
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  opens: "07:00", closes: "19:00",
                }],
                makesOffer: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: `Emergency Plumbing Repairs in ${city.name}, CA` } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: `Water Heater Replacement in ${city.name}, CA` } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: `Drain Cleaning in ${city.name}, CA` } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: `Leak Detection & Repair in ${city.name}, CA` } },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: CityPage,
  notFoundComponent: CityNotFound,
});

const services = [
  { icon: ShieldCheck, title: "Leak Detection & Repair", desc: "Non-invasive leak location and permanent repairs for pipes, faucets and fixtures." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Fast clog removal and hydro-jetting to restore proper drainage." },
  { icon: Wrench, title: "Fixture Installation", desc: "Faucets, toilets, sinks and full bathroom fixture upgrades installed with care." },
  { icon: Wrench, title: "Pipe Replacement & Repiping", desc: "Copper, PEX and full-home repipes for older or damaged plumbing." },
  { icon: Flame, title: "Water Heater Services", desc: "Tank and tankless repair, replacement and same-day installation." },
];

const serviceMenu = [
  {
    icon: Wrench,
    title: "Repairs & Upgrades",
    items: ["Plumbing fixtures", "Water lines", "Gas lines", "Leak detection", "Whole home repiping", "Remodel plumbing"],
  },
  {
    icon: Droplets,
    title: "Drain & Sewer",
    items: ["Drain cleaning", "Hydro jetting", "Sewer line repair", "Camera inspection", "Main line backups", "Sewer replacement"],
  },
  {
    icon: Flame,
    title: "Water Heaters",
    items: ["Tank repair & replacement", "Electric water heaters", "Tankless installs", "Anode & valve service", "Annual flush service", "Same day swaps"],
  },
  {
    icon: ShieldCheck,
    title: "Emergency & Commercial",
    items: ["Burst pipe repair", "No hot water calls", "Sewage backups", "Restaurant grease lines", "Backflow repairs", "Multi unit properties"],
  },
];

const drainSigns = [
  "Slow-draining sinks, tubs or showers",
  "Foul odors coming from drains",
  "Gurgling noises as water drains",
  "Water backing up in sinks or toilets",
  "Multiple fixtures clogged at the same time",
  "Overflowing toilet that won't clear with a plunger",
  "Fruit flies or sewer flies near drains",
  "Water pooling around drains or fixtures",
  "Changing water level in the toilet bowl",
];

function CityPage() {
  const { city } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-navy-deep text-white py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Link to="/areas-we-serve/" className="hover:text-accent">Areas We Serve</Link>
              <span>/</span>
              <span className="text-accent">{city.name}</span>
            </div>
            <span className="eyebrow mt-4 block">{city.name}, CA</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
              Professional Plumbing Services in <span className="text-brand-orange">{city.name}, CA</span>
            </h1>
            <p className="mt-4 font-display uppercase tracking-widest text-accent">Local Plumbers, Emergency Repairs Available</p>
            <p className="mt-5 text-white/85 max-w-2xl">
              Welcome to Mainline Plumbing Inc., your trusted partner for top-notch plumbing services in {city.name}, CA.
              With our commitment to excellence and experienced plumbers, we provide reliable solutions to meet all your
              plumbing needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              <Link to="/contact-us/" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Request Service</Link>
            </div>
          </div>
          <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
        </div>
      </section>


      {/* INTRO CTA STRIP */}
      <section className="bg-brand-orange-deep text-white py-6">
        <div className="container-x text-center text-sm md:text-base font-semibold">
          Contact us at{" "}
          <a href="tel:+12098381000" className="underline font-bold">209.838.1000</a>{" "}
          or{" "}
          <Link to="/contact-us/" className="underline font-bold">online</Link>{" "}
          today to keep your {city.name} home safe and comfortable.
        </div>
      </section>

      {/* LOCAL FLAVOR (only when we've written city-specific knowledge) */}
      {city.local && (
        <section className="py-20 bg-white">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="eyebrow">Part of the {city.name} Community</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">{city.local.identity}</h2>
              <p className="mt-4 text-lg text-navy/80 font-semibold italic">{city.local.tagline}</p>
              <p className="mt-4 text-muted-foreground"><Linkify text={city.local.intro} budget={budget} /></p>
            </div>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 text-navy">
                  <Landmark className="size-5 text-brand-orange" />
                  <h3 className="font-display uppercase tracking-wider text-sm">{city.name} Landmarks We Work Around</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {city.local!.landmarks.map((l: string) => (
                    <li key={l} className="flex gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-accent shrink-0 mt-0.5" /> {l}
                    </li>
                  ))}
                </ul>
              </div>

              {city.local.events && city.local.events.length > 0 && (
                <div className="bg-secondary rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-2 text-navy">
                    <Calendar className="size-5 text-brand-orange" />
                    <h3 className="font-display uppercase tracking-wider text-sm">Local Traditions We Support</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {city.local!.events!.map((e: string) => (
                      <li key={e} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" /> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 text-navy">
                  <Users className="size-5 text-brand-orange" />
                  <h3 className="font-display uppercase tracking-wider text-sm">Neighboring Communities We Cover</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {city.local!.neighbors.map((n: string) => (
                    <li key={n} className="text-xs font-semibold uppercase tracking-wider bg-white border border-border text-navy px-3 py-1.5 rounded-full">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-navy-deep text-white rounded-2xl p-8 md:p-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <span className="eyebrow text-accent">Why It Matters for Your {city.name} Home</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">The Mainline Approach in {city.name}</h3>
              <p className="mt-4 text-white/85"><Linkify text={city.local.plumbingTieIn} budget={budget} /></p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
                <Link to="/contact-us/" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Request Service</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* IMPORTANCE */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">The Importance of Expert Plumbing Services</h2>
            <p className="mt-4 text-muted-foreground italic">Maintaining a Functional Home</p>
            <p className="mt-3 text-muted-foreground">
              Professional plumbing services are essential for maintaining the functionality of your home's plumbing
              systems in {city.name}. Our skilled plumbers ensure your water supply and drainage systems operate
              smoothly, year-round.
            </p>
            <h3 className="mt-8 font-display uppercase tracking-wider text-navy">Benefits of Expert Plumbing:</h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Preventive Maintenance:", "Regular service prevents leaks, clogs and costly emergency repairs."],
                ["Water Conservation:", "A tuned plumbing system minimizes waste and lowers monthly bills."],
                ["Health & Safety:", "Timely repairs stop mold, mildew and other water-damage hazards."],
              ].map(([b, t]) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><span className="font-bold text-navy">{b}</span> {t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <span className="eyebrow">Serving {city.name}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mt-2">Our Plumbing Services in {city.name}, CA</h3>
            <p className="mt-3 text-muted-foreground italic">Mainline Plumbing Inc.'s Expertise</p>
            <p className="mt-4 text-muted-foreground">
              We offer a comprehensive range of plumbing solutions tailored to homeowners and businesses in {city.name}.
              Our experienced plumbers are dedicated to delivering prompt, reliable results.
            </p>
            <div className="mt-6 space-y-4">
              {services.map((s) => (
                <div key={s.title} className="flex gap-3">
                  <div className="size-10 rounded-lg bg-navy-deep flex items-center justify-center shrink-0">
                    <s.icon className="size-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-navy uppercase tracking-wider text-sm">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL SERVICE MENU BY CATEGORY */}
      <section className="py-20 bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">{city.name} Plumbing Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Everything We Fix, Replace and Install in {city.name}</h2>
            <p className="mt-4 text-muted-foreground">
              Plumbing problems range from small annoyances to full emergencies. Mainline Plumbing Inc. covers the whole
              range for {city.name} homes and businesses, with licensed plumbers, upfront pricing and clean work.
              Mainline Plumbing Inc. is a California licensed C-36 plumbing contractor, {LICENSE_LABEL}, bonded and insured.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceMenu.map((group) => (
              <div key={group.title} className="bg-white rounded-2xl border border-border p-6" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="size-10 rounded-lg bg-navy-deep flex items-center justify-center">
                  <group.icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-4 font-display uppercase tracking-wider text-navy text-sm">{group.title}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-brand-orange shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
            <Link to="/contact-us/" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* SIGNS YOU NEED PLUMBING SERVICE */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Warning Signs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Signs You Need Plumbing Services in {city.name}</h2>
            <p className="mt-4 text-muted-foreground">
              Catching a problem early is the cheapest repair you will ever make. Watch for these signs in your
              {" "}{city.name} home and call us before a small leak turns into water damage.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Leaks or water stains:", "Check under sinks, behind toilets and along baseboards for moisture."],
                ["Slow drains:", "Water lingering in a sink, tub or shower usually means a building blockage."],
                ["Foul odors:", "Sewage, rotten egg or musty smells point to a clog, dry trap or drain line break."],
                ["Low water pressure:", "Test several fixtures. Whole-home pressure loss often means pipe corrosion."],
                ["Unusual sounds:", "Gurgling, banging or whistling pipes signal venting, pressure or valve trouble."],
                ["Rising water bills:", "A jump with no change in usage almost always means a hidden leak."],
              ].map(([b, t]) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><span className="font-bold text-navy">{b}</span> {t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-red text-white rounded-2xl p-8 md:p-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <AlertTriangle className="size-10" />
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Emergency Plumber in {city.name}</h2>
            <p className="mt-4 text-white/90">
              A burst supply line or a sewage backup will not wait for business hours. When you call Mainline, you get a
              real person, a straight answer and a plumber headed toward {city.name} instead of a voicemail box.
            </p>
            <ul className="mt-6 space-y-2">
              {["Burst and leaking pipes", "No hot water", "Sewer and main line backups", "Overflowing toilets", "Water heater failures", "Gas line concerns"].map((i) => (
                <li key={i} className="flex gap-2 text-sm text-white/90">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
            <a href="tel:+12098381000" className="mt-8 inline-flex items-center gap-3 bg-white text-brand-red px-6 py-3.5 rounded-lg font-display text-2xl tracking-wider hover:bg-white/90 transition">
              <Phone className="size-6" /> 209.838.1000
            </a>
          </div>
        </div>
      </section>

      {/* WATER HEATERS */}
      <section className="py-20 bg-navy-deep text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Our Specialty</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{city.name} Water Heater Repair & Replacement</h2>
            <p className="mt-4 text-white/85">
              Water heaters are what we do most, and we stock the common sizes so a cold shower does not turn into a
              week of waiting. We install and service tank, tankless and electric systems throughout {city.name}.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: "Traditional Tank Heaters", d: "Gas or electric with a storage tank. Reliable, lower upfront cost, and the fastest same-day swap in most {city} homes." },
              { t: "Tankless On Demand", d: "Heats water as you use it. Endless hot water, smaller footprint and lower monthly energy use." },
              { t: "Electric Water Heaters", d: "Perfect for homes without gas service or garage installs. Simple venting, clean install, strong efficiency." },
            ].map((c) => (
              <div key={c.t} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <Flame className="size-8 text-brand-orange" />
                <h3 className="mt-4 font-display uppercase tracking-wider text-sm">{c.t}</h3>
                <p className="mt-3 text-sm text-white/80">{c.d.replace("{city}", city.name)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> Ask About Water Heater Specials</a>
          </div>
        </div>
      </section>

      {/* REPIPING + REMODEL + COMMERCIAL */}
      <section className="py-20">
        <div className="container-x space-y-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="eyebrow">Repiping</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">{city.name} Repiping Specialists</h2>
              <p className="mt-4 text-muted-foreground">
                Older galvanized and corroded copper lines cause pressure loss, rusty water and leaks inside walls. We
                repipe {city.name} homes in copper or PEX with clean access, tidy patching and pressure tested results
                that hold up for decades.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-2xl p-8">
              <span className="eyebrow">Remodels</span>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mt-2">Upgrade Your Plumbing in {city.name}</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                {[
                  "Showers and tub replacements",
                  "Refrigerator and ice maker lines",
                  "New sinks and faucets",
                  "Toilet replacements",
                  "Low flow efficient fixtures",
                  "Rerouting pipes for additions",
                  "Kitchen, bath and laundry plumbing",
                  "Gas lines for ranges and BBQs",
                ].map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-brand-orange shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy-deep text-white rounded-2xl p-8 md:p-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="eyebrow text-accent">Commercial</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">Commercial Plumbing in {city.name}</h2>
                <p className="mt-4 text-white/85">
                  Restaurants, shops, offices and ag facilities around {city.name} count on us for grease line
                  jetting, water heater banks, backflow repairs and fixture work scheduled around business hours so you
                  stay open.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
                <Link to="/contact-us/" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Request Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Why {city.name} Calls Mainline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">We Treat Your Family, Like Our Family</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "37 Years of Experience", d: "Miguel, our owner and lead plumber, has 37 years in the trade. The company has served the 209 & 350 since 2010." },
              { t: "Upfront Pricing", d: "You approve the price before we start. No surprise add ons after the work is done." },
              { t: "Emergency Repairs Available", d: "Burst pipes and no hot water get priority scheduling for {city} customers." },
              { t: "Clean, Respectful Work", d: "Drop cloths, shoe covers and a jobsite left cleaner than we found it." },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-2xl border border-border p-6">
                <ShieldCheck className="size-8 text-brand-orange" />
                <h3 className="mt-4 font-display uppercase tracking-wider text-navy text-sm">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d.replace("{city}", city.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20">
        <div className="container-x max-w-4xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-navy">What common plumbing issues can Mainline Plumbing Inc. address in {city.name}?</h3>
              <p className="mt-2 text-muted-foreground">
                Our team handles a wide range of issues, including leak repairs, clog removal, pipe replacements,
                water heater service, fixture installations and more.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-navy">Can Mainline Plumbing Inc. help with emergency plumbing situations?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes. We offer emergency plumbing services in {city.name} to address urgent issues like burst pipes,
                sewage backups and no-hot-water situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS YOU NEED DRAIN CLEANING */}
      <section className="py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Drain Cleaning in {city.name}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Signs You Need Drain Cleaning</h2>
            <p className="mt-4 text-muted-foreground">
              Here are the most common warning signs it's time to call Mainline for drain cleaning in {city.name}:
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {drainSigns.map((sign) => (
              <div key={sign} className="bg-white border border-border rounded-lg p-5 flex gap-3">
                <CheckCircle2 className="size-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm text-navy">{sign}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground max-w-3xl">
            If you notice any of these signs, address the issue promptly to prevent further damage and ensure proper
            drainage in your {city.name} plumbing system.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange-deep text-white py-16">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for Reliable Plumbing in {city.name}?</h2>
          <p className="mt-4 text-white/90">
            Contact us at 209.838.1000 or online today to ensure the optimal functionality of your plumbing
            systems. Your {city.name} plumbing needs are our priority.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+12098381000" className="bg-white text-brand-orange-deep px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm inline-flex items-center gap-2 hover:bg-white/90">
              <Phone className="size-4" /> 209.838.1000
            </a>
            <Link to="/contact-us/" className="border-2 border-white text-white px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-orange-deep">
              Request Service Online
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-secondary">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">What Our {city.name} Neighbors Say</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { q: "I was able to source my own water heater which was bigger than what they had on hand and they arrived promptly the same day to install it with no issues.", n: "Eric G." },
              { q: "My water heater stopped working and when I called Mainline, Miguel answered and immediately came to fix it. So transparent with his work.", n: "Alondra A." },
              { q: "Joey is amazing, professional, and courteous! They also did my water heater a couple of years ago. Will call them again.", n: "Jim T." },
              { q: "Best service. Needed the dishwasher installed and Joey came the same day. Neat, clean job, A+ from start to finish.", n: "Liz R." },
            ].map((r) => (
              <div key={r.n} className="bg-white rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent" />)}
                </div>
                <p className="mt-3 italic text-muted-foreground">"{r.q}"</p>
                <p className="mt-3 font-bold text-navy">— {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              {city.name} Sits Right Inside Our Coverage Zone
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our plumbers cover the full 209 from Stockton down to Turlock, with {city.name} squarely
              in the middle of our daily service route. That means faster arrival times, same-day
              scheduling and easier follow-up on warranty work.
            </p>
            <a href="tel:+12098381000" className="btn-primary mt-6"><Phone className="size-4" /> 209.838.1000</a>
          </div>
          <div className="mx-auto w-4/5 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
            <img src={serviceMap.url} alt={`Mainline Plumbing service area map covering ${city.name}, CA`} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="py-16 bg-navy-deep text-white">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-bold">Other Cities We Serve</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceCities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                to="/areas-we-serve/$city/"
                params={{ city: c.slug }}
                className="border border-white/20 rounded-lg px-4 py-3 flex items-center justify-between hover:border-accent hover:bg-white/5 transition"
              >
                <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-sm">
                  <MapPin className="size-3.5 text-accent" /> {c.name}
                </span>
                <ArrowRight className="size-4 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmergencyRepairsCTA city={city.name} />

      <SiteFooter />
    </div>
  );
}

function CityNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="flex-1 container-x py-24 text-center">
        <h1 className="text-4xl font-bold text-navy">Service Area Not Found</h1>
        <p className="mt-4 text-muted-foreground">We couldn't find that city page. Browse all the areas we serve below.</p>
        <Link to="/areas-we-serve/" className="btn-primary mt-8 inline-flex">See All Areas</Link>
      </section>
      <SiteFooter />
    </div>
  );
}
