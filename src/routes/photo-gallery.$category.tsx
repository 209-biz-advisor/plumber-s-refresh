import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const galleries = {
  "plumbing-work": {
    name: "Plumbing Work",
    desc: "Water heater installations, whole-home repipes, sewer line repairs, drain cleaning and remodel rough-ins from around the Central Valley.",
    items: [
      "50-gallon gas tank replacements with new seismic strapping, T&P valve and expansion tank",
      "Tankless conversions with upsized gas lines and new venting",
      "Hybrid heat pump electric water heater installations",
      "Whole-home PEX repipes replacing failing galvanized supply lines",
      "Sewer lateral repairs with before-and-after camera footage",
      "Hydrojetted restaurant kitchen lines back to full diameter",
      "Kitchen and bath remodel rough-ins and fixture sets",
      "Slab leak reroutes that avoided opening the concrete",
    ],
  },
  team: {
    name: "Our Team",
    desc: "Miguel and the Mainline Plumbing crew: family owned in Escalon since 2010, 37+ years of hands-on plumbing experience leading every job.",
    items: [
      "Miguel, owner and lead plumber, on site in Escalon",
      "Marked trucks stocked with the most common water heater sizes",
      "Clean work areas, shoe covers and drop cloths on every call",
      "Licensed C-36 plumbers, bonded and insured",
      "Local crew serving Stanislaus and San Joaquin County",
    ],
  },
} as const;

type Slug = keyof typeof galleries;

export const Route = createFileRoute("/photo-gallery/$category")({
  beforeLoad: ({ params }) => {
    if (!(params.category in galleries)) throw notFound();
  },
  loader: ({ params }) => {
    const key = params.category as Slug;
    if (!galleries[key]) throw notFound();
    return { key, gallery: galleries[key] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page Not Found | Mainline Plumbing Inc." }, { name: "robots", content: "noindex" }] };
    }
    const { key, gallery } = loaderData;
    const url = `${SITE_URL}/photo-gallery/${key}/`;
    return {
      meta: [
        { title: `${gallery.name} Photo Gallery | Mainline Plumbing Inc.` },
        { name: "description", content: gallery.desc },
        { property: "og:title", content: `${gallery.name} | Mainline Plumbing Inc.` },
        { property: "og:description", content: gallery.desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Photo Gallery", item: `${SITE_URL}/photo-gallery/` },
              { "@type": "ListItem", position: 3, name: gallery.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: GalleryCategory,
});

function GalleryCategory() {
  const { gallery } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/photo-gallery/" className="hover:text-accent">Photo Gallery</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">{gallery.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">{gallery.name}</h1>
          <p className="mt-4 text-white/85 max-w-2xl">{gallery.desc}</p>
          <div className="mt-7">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {gallery.items.map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-border flex gap-3">
              <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{i}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
