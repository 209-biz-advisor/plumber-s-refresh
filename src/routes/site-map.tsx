import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { plumbingServices, waterHeaterServices, servicePath } from "@/lib/services";
import { serviceCities } from "@/lib/service-cities";
import { categories, posts, postPath } from "@/lib/blog";

const URL = `${SITE_URL}/site-map/`;
const DESC =
  "Complete site map for Mainline Plumbing Inc: every plumbing service, water heater page, city service area, coupon, article and company page in one place.";

export const Route = createFileRoute("/site-map")({
  head: () => ({
    meta: [
      { title: "Site Map | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Site Map | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SiteMapPage,
});

function Group({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-navy">{title}</h2>
      <ul className="mt-3 space-y-1.5">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-muted-foreground hover:text-accent">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteMapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Site Map</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Site Map</h1>
          <p className="mt-4 text-white/85 max-w-2xl">{DESC}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Group
            title="Company"
            links={[
              { href: "/", label: "Home" },
              { href: "/about-us/", label: "About Us" },
              { href: "/about-us/faq/", label: "FAQ" },
              { href: "/about-us/video-center/", label: "Video Center" },
              { href: "/about-us/video-center/videos/", label: "All Videos" },
              { href: "/about-us/video-center/videos/about-our-company/", label: "About Our Company" },
              { href: "/contact-us/", label: "Contact Us" },
              { href: "/reviews/", label: "Reviews" },
              { href: "/coupons/", label: "Coupons & Specials" },
              { href: "/photo-gallery/", label: "Photo Gallery" },
              { href: "/photo-gallery/plumbing-work/", label: "Plumbing Work Gallery" },
              { href: "/photo-gallery/team/", label: "Our Team Gallery" },
            ]}
          />
          <Group
            title="Plumbing Services"
            links={[
              { href: "/plumbing-services/", label: "All Plumbing Services" },
              ...plumbingServices.map((s) => ({ href: servicePath(s), label: s.name })),
            ]}
          />
          <Group
            title="Water Heaters"
            links={[
              { href: "/water-heaters/", label: "Water Heaters" },
              ...waterHeaterServices.map((s) => ({ href: servicePath(s), label: s.name })),
            ]}
          />
          <Group
            title="Areas We Serve"
            links={[
              { href: "/areas-we-serve/", label: "All Service Areas" },
              ...serviceCities.map((c) => ({ href: `/areas-we-serve/${c.slug}/`, label: c.name })),
            ]}
          />
          <Group
            title="Blog Categories"
            links={[
              { href: "/blog/", label: "Blog Home" },
              ...categories.map((c) => ({ href: `/blog/categories/${c.slug}/`, label: c.name })),
            ]}
          />
          <Group title="Articles" links={posts.map((p) => ({ href: postPath(p), label: p.title }))} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
