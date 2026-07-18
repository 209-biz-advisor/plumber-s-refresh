import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, MapPin, CheckCircle2, ArrowRight, Wrench, Droplets, Flame, ShieldCheck, Star, Landmark, Users, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { findCity, serviceCities } from "@/lib/service-cities";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";

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
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/areas-we-serve" className="hover:text-accent">Areas We Serve</Link>
            <span>/</span>
            <span className="text-accent">{city.name}</span>
          </div>
          <span className="eyebrow mt-4 block">{city.name}, CA</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight max-w-3xl">
            Professional Plumbing Services in <span className="text-brand-red">{city.name}, CA</span>
          </h1>
          <p className="mt-4 font-display uppercase tracking-widest text-accent">Local Plumbers, Emergency Repairs Available</p>
          <p className="mt-5 text-white/85 max-w-2xl">
            Welcome to Mainline Plumbing Inc., your trusted partner for top-notch plumbing services in {city.name}, CA.
            With our commitment to excellence and experienced plumbers, we provide reliable solutions to meet all your
            plumbing needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:2095606652" className="btn-primary"><Phone className="size-4" /> (209) 560-6652</a>
            <Link to="/contact" className="btn-outline">Request Service</Link>
          </div>
        </div>
      </section>

      {/* INTRO CTA STRIP */}
      <section className="bg-brand-red text-white py-6">
        <div className="container-x text-center text-sm md:text-base font-semibold">
          Contact us at{" "}
          <a href="tel:2095606652" className="underline font-bold">(209) 560-6652</a>{" "}
          or{" "}
          <Link to="/contact" className="underline font-bold">online</Link>{" "}
          today to keep your {city.name} home safe and comfortable.
        </div>
      </section>

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
                  <CheckCircle2 className="size-5 text-brand-red shrink-0 mt-0.5" />
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
                <CheckCircle2 className="size-5 text-brand-red shrink-0 mt-0.5" />
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
      <section className="bg-brand-red text-white py-16">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for Reliable Plumbing in {city.name}?</h2>
          <p className="mt-4 text-white/90">
            Contact us at (209) 560-6652 or online today to ensure the optimal functionality of your plumbing
            systems. Your {city.name} plumbing needs are our priority.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:2095606652" className="bg-white text-brand-red px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm inline-flex items-center gap-2 hover:bg-white/90">
              <Phone className="size-4" /> (209) 560-6652
            </a>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-red">
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
            <a href="tel:2095606652" className="btn-primary mt-6"><Phone className="size-4" /> (209) 560-6652</a>
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
                to="/areas-we-serve/$city"
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
        <Link to="/areas-we-serve" className="btn-primary mt-8 inline-flex">See All Areas</Link>
      </section>
      <SiteFooter />
    </div>
  );
}
