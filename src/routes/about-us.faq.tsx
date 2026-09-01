import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/about-us/faq/`;
const DESC =
  "Frequently asked questions about Mainline Plumbing Inc: hours, service area, pricing, permits, water heater replacement, emergency plumbing and our C-36 license.";

const faqs = [
  { q: "What are your hours?", a: "We're available 7:00 am to 7:00 pm. Call 209.838.1000 and you'll reach a real person, not a call center." },
  { q: "What areas do you serve?", a: "Escalon, Modesto, Manteca, Lathrop, Oakdale, Riverbank, Ceres, Turlock, Salida, Hughson, Del Rio and the surrounding Central Valley, the 209 & 350." },
  { q: "Are you licensed and insured?", a: `Yes. ${LICENSE_LABEL}, and we're bonded and insured. Every install is permitted where required.` },
  { q: "How long have you been in business?", a: "Mainline Plumbing Inc. was founded in 2010. Miguel, the owner and lead plumber, brings 37+ years of hands-on plumbing experience." },
  { q: "Do you charge for estimates?", a: "You get an upfront flat-rate quote before work begins, and the service call is waived when you move forward with the repair." },
  { q: "Do you handle emergency plumbing?", a: "Yes. Burst pipes, major leaks, sewer backups and dead water heaters get priority scheduling. Shut your main off and call us." },
  { q: "How fast can you replace a water heater?", a: "Most standard tank replacements are done the same day. We stock common sizes and pull the permit as part of the job." },
  { q: "Do you offer a maintenance membership?", a: "No monthly membership plans. You book service when you need it, at a straightforward price." },
  { q: "Do you repair and replace sewer lines?", a: "Yes. We camera the line first, then repair the failed section or replace the run using proven methods, with camera verification before and after." },
  { q: "What discounts do you offer?", a: "$50 off for new customers, $150 off water heater replacement, $250 off electric water heater installation, and 10% off for veterans and law enforcement." },
  { q: "What causes leaky pipes?", a: "Age and corrosion on galvanized lines, hard-water scale, high water pressure with no working regulator, shifting soil, poorly made joints and, on outdoor runs, freeze damage. We find the cause instead of only patching the wet spot." },
  { q: "Why do drains become clogged?", a: "Grease and food in kitchen lines, hair and soap in bath lines, wipes and paper in toilets, root intrusion in older sewer lines, and pipe bellies that hold water. Most clogs build for months before the drain finally stops." },
  { q: "What types of plumbing jobs can we do?", a: "All phases, residential and commercial: drain cleaning, sewer repair and camera inspection, water heaters including tankless and electric, leak detection, repiping, gas lines, fixtures, water softeners and treatment, backflow testing, grease trap service, and kitchen and bath remodel plumbing." },
  { q: "Does Mainline Plumbing cover warranties?", a: "Yes. Our workmanship is warrantied, and the equipment we install carries the manufacturer warranty. We register it and handle warranty service on what we installed so you are not chasing the manufacturer yourself." },
  { q: "Why should you go with Mainline Plumbing?", a: `You get the owner's standard on every call: Miguel has 37+ years in the trade, the company has been family owned in Escalon since 2010, and we quote before we start. ${LICENSE_LABEL}, bonded and insured.` },
  { q: "What makes Mainline Plumbing a company you can trust?", a: "Background-checked technicians, marked trucks, upfront flat-rate quotes, permits pulled where required, clean work areas, and hundreds of Google reviews from neighbors across the 209 & 350. We treat your family like our family." },
];

export const Route = createFileRoute("/about-us/faq")({
  head: () => ({
    meta: [
      { title: "Plumbing FAQ | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Frequently Asked Questions | Mainline Plumbing Inc." },
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
          "@graph": [
            {
              "@type": "FAQPage",
              "@id": `${URL}#faq`,
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us/` },
                { "@type": "ListItem", position: 3, name: "FAQ", item: URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/about-us/" className="hover:text-accent">About Us</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">FAQ</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="eyebrow">Answers First</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">Frequently Asked Questions</h1>
              <p className="mt-4 text-white/85 max-w-2xl">
                The questions we get on the phone every week, answered plainly. If yours isn't here,
                call and ask.
              </p>
              <div className="mt-7">
                <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
              </div>
            </div>
            <GHLQuoteForm className="w-full max-w-md lg:ml-auto" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl space-y-7">
          {faqs.map((f) => (
            <div key={f.q} className="border-l-4 border-brand-orange pl-5">
              <h2 className="text-lg font-bold text-navy">{f.q}</h2>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
