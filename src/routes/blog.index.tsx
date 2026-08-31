import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { posts, postPath, categories, years, titleCase } from "@/lib/blog";

const URL = `${SITE_URL}/blog/`;
const DESC =
  "Plumbing tips, water heater guidance and emergency advice from Mainline Plumbing Inc., a family-owned C-36 licensed plumber serving Escalon and the Central Valley since 2010.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Blog & Tips | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Plumbing Blog & Tips | Mainline Plumbing Inc." },
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
          "@type": "Blog",
          "@id": URL,
          name: "Mainline Plumbing Blog",
          description: DESC,
          publisher: { "@type": "Plumber", name: "Mainline Plumbing Inc.", url: `${SITE_URL}/` },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Plumbing Blog & Tips</h1>
          <p className="mt-4 text-white/85 max-w-2xl">{DESC}</p>
          <div className="mt-7">
            <a href="tel:2098381000" className="btn-primary"><Phone className="size-4" /> (209) 838-1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-[1fr_280px] gap-10">
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((p) => (
              <a key={postPath(p)} href={postPath(p)} className="bg-white rounded-2xl p-6 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <p className="text-xs uppercase tracking-wider text-accent font-bold flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" /> {titleCase(p.month)} {p.year}
                </p>
                <h2 className="mt-2 text-lg font-bold text-navy">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </a>
            ))}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">Categories</h2>
              <ul className="mt-3 space-y-1.5">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <a href={`/blog/categories/${c.slug}/`} className="text-sm text-muted-foreground hover:text-accent">{c.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">Archives</h2>
              <ul className="mt-3 space-y-1.5">
                {years.map((y) => (
                  <li key={y}>
                    <a href={`/blog/${y}/`} className="text-sm text-muted-foreground hover:text-accent">{y}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
