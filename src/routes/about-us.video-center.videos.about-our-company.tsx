import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, PlayCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

const URL = `${SITE_URL}/about-us/video-center/videos/about-our-company/`;
const DESC =
  "Meet Mainline Plumbing Inc: family owned in Escalon since 2010, led by Miguel with 37+ years of hands-on plumbing experience. We treat your family like our family.";

export const Route = createFileRoute("/about-us/video-center/videos/about-our-company")({
  head: () => ({
    meta: [
      { title: "About Our Company | Mainline Plumbing Video Center" },
      { name: "description", content: DESC },
      { property: "og:title", content: "About Our Company | Mainline Plumbing Inc." },
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us/` },
            { "@type": "ListItem", position: 3, name: "Video Center", item: `${SITE_URL}/about-us/video-center/` },
            { "@type": "ListItem", position: 4, name: "About Our Company", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AboutOurCompanyVideo,
});

function AboutOurCompanyVideo() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/about-us/video-center/" className="hover:text-accent">Video Center</Link>
            <ChevronRight className="size-3" />
            <Link to="/about-us/video-center/videos/" className="hover:text-accent">Videos</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">About Our Company</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">About Our Company</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            We Treat Your Family, Like Our Family. That's not a slogan we bought, it's how a
            family-owned shop in a town like Escalon has to operate.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-accent/60 rounded-md px-4 py-2">{LICENSE_LABEL}</p>
          <div className="mt-7">
            <a href="tel:2098381000" className="btn-primary"><Phone className="size-4" /> (209) 838-1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl">
          <div className="aspect-video rounded-2xl bg-navy-deep flex flex-col items-center justify-center text-white">
            <PlayCircle className="size-14 text-accent" />
            <p className="mt-3 text-sm uppercase tracking-wider text-white/70">Company video coming soon</p>
          </div>
          <div className="mt-10 space-y-5 text-muted-foreground">
            <p>
              Mainline Plumbing Inc. was founded in 2010 in Escalon, California. Miguel, the owner and
              lead plumber, brings 37+ years of hands-on plumbing experience to every job, and he's
              still the one on most calls.
            </p>
            <p>
              We built the company around water heater replacement, emergency plumbing repairs, drain
              and sewer work, and the everyday repairs that keep Valley homes running. We quote flat
              rates before we start, we pull permits, and we leave the house cleaner than we found it.
            </p>
            <p>
              Today we serve Escalon, Modesto, Manteca, Lathrop, Oakdale, Riverbank, Ceres, Turlock,
              Salida, Hughson, Del Rio and the surrounding Central Valley, the 209 & 350.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about-us/" className="btn-primary">More About Us</Link>
            <Link to="/contact-us/" className="btn-outline">Request Service</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
