import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, ChevronRight, CalendarDays } from "lucide-react";
import { Linkify } from "@/components/Linkify";
import { planLinks } from "@/lib/interlink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";
import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
import {
  categories,
  findPost,
  monthsOf,
  postPath,
  posts,
  postsByCategory,
  postsByMonth,
  postsByYear,
  titleCase,
  years,
} from "@/lib/blog";

type Resolved =
  | { kind: "post"; year: string; month: string; slug: string }
  | { kind: "category"; slug: string }
  | { kind: "year"; year: string }
  | { kind: "month"; year: string; month: string };

function resolve(splat: string): Resolved | null {
  const parts = splat.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  if (parts.length === 2 && parts[0] === "categories") {
    return categories.some((c) => c.slug === parts[1]) ? { kind: "category", slug: parts[1]! } : null;
  }
  if (parts.length === 1 && years.includes(parts[0]!)) return { kind: "year", year: parts[0]! };
  if (parts.length === 2 && monthsOf(parts[0]!).includes(parts[1]!)) {
    return { kind: "month", year: parts[0]!, month: parts[1]! };
  }
  if (parts.length === 3 && findPost(parts[0]!, parts[1]!, parts[2]!)) {
    return { kind: "post", year: parts[0]!, month: parts[1]!, slug: parts[2]! };
  }
  return null;
}

export const Route = createFileRoute("/blog/$")({
  loader: ({ params }) => {
    const r = resolve((params as { _splat?: string })._splat ?? "");
    if (!r) throw notFound();
    return r;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page Not Found | Mainline Plumbing Inc." }, { name: "robots", content: "noindex" }] };
    }
    let title = "";
    let desc = "";
    let path = "";
    if (loaderData.kind === "post") {
      const p = findPost(loaderData.year, loaderData.month, loaderData.slug)!;
      title = `${p.title} | Mainline Plumbing Inc.`;
      desc = p.excerpt;
      path = postPath(p);
    } else if (loaderData.kind === "category") {
      const c = categories.find((x) => x.slug === loaderData.slug)!;
      title = `${c.name} Articles | Mainline Plumbing Blog`;
      desc = `Mainline Plumbing articles about ${c.name.toLowerCase()} for homeowners in Escalon, Modesto, Manteca and the Central Valley.`;
      path = `/blog/categories/${c.slug}/`;
    } else if (loaderData.kind === "year") {
      title = `${loaderData.year} Plumbing Articles | Mainline Plumbing Blog`;
      desc = `Every Mainline Plumbing article published in ${loaderData.year}, covering water heaters, drains, leaks and seasonal plumbing care.`;
      path = `/blog/${loaderData.year}/`;
    } else {
      title = `${titleCase(loaderData.month)} ${loaderData.year} Plumbing Articles | Mainline Plumbing`;
      desc = `Mainline Plumbing articles from ${titleCase(loaderData.month)} ${loaderData.year} for Central Valley homeowners.`;
      path = `/blog/${loaderData.year}/${loaderData.month}/`;
    }
    const url = `${SITE_URL}${path}`;

    const scripts =
      loaderData.kind === "post"
        ? (() => {
            const p = findPost(loaderData.year, loaderData.month, loaderData.slug)!;
            return [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "@id": url,
                  headline: p.title,
                  description: p.excerpt,
                  articleSection: p.categories.map((c) => categories.find((x) => x.slug === c)?.name ?? c),
                  author: { "@type": "Organization", name: "Mainline Plumbing Inc." },
                  publisher: { "@type": "Plumber", name: "Mainline Plumbing Inc.", url: `${SITE_URL}/` },
                  mainEntityOfPage: url,
                }),
              },
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
                    { "@type": "ListItem", position: 3, name: p.title, item: url },
                  ],
                }),
              },
            ];
          })()
        : [];

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: loaderData.kind === "post" ? "article" : "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: BlogSplat,
});

function Hero({ crumb, title, sub }: { crumb: string; title: string; sub: string }) {
  return (
    <section className="bg-navy-deep text-white py-14 md:py-20">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1 flex-wrap">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/blog/" className="hover:text-accent">Blog</Link>
          <ChevronRight className="size-3" />
          <span className="text-accent">{crumb}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mt-6 max-w-3xl">{title}</h1>
        <p className="mt-4 text-white/85 max-w-2xl">{sub}</p>
        <div className="mt-7">
          <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
        </div>
      </div>
    </section>
  );
}

function PostGrid({ list }: { list: typeof posts }) {
  return (
    <section className="py-16">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <a key={postPath(p)} href={postPath(p)} className="bg-white rounded-2xl p-6 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <p className="text-xs uppercase tracking-wider text-accent font-bold flex items-center gap-1.5">
              <CalendarDays className="size-3.5" /> {titleCase(p.month)} {p.year}
            </p>
            <h2 className="mt-2 text-lg font-bold text-navy">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function BlogSplat() {
  const data = Route.useLoaderData();

  if (data.kind === "post") {
    const p = findPost(data.year, data.month, data.slug)!;
    const plan = planLinks(postPath(p), p.body);
    const related = posts.filter((o) => o !== p && o.categories.some((c) => p.categories.includes(c))).slice(0, 3);
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <Hero crumb={p.title} title={p.title} sub={p.excerpt} />
        <article className="py-16">
          <div className="container-x max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {p.categories.map((c) => (
                <a key={c} href={`/blog/categories/${c}/`} className="text-xs font-bold uppercase tracking-wider text-accent border border-accent/40 rounded-md px-3 py-1">
                  {categories.find((x) => x.slug === c)?.name ?? c}
                </a>
              ))}
            </div>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              {p.body.map((para) => (
                <p key={para}><Linkify text={para} plan={plan} /></p>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-brand-orange text-white p-8">
              <h2 className="text-2xl font-bold">Need a plumber in the 209 & 350?</h2>
              <p className="mt-2 text-white/90">
                Family owned in Escalon since 2010. {LICENSE_LABEL}. Flat-rate quotes before we start.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:+12098381000" className="inline-flex items-center gap-2 rounded-lg bg-white text-navy font-bold px-5 py-3">
                  <Phone className="size-4" /> 209.838.1000
                </a>
                <Link to="/contact-us/" className="inline-flex items-center rounded-lg border border-white/70 font-bold px-5 py-3">
                  Request Service
                </Link>
              </div>
            </div>
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-navy">Related Articles</h2>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={postPath(r)}>
                      <a href={postPath(r)} className="text-muted-foreground hover:text-accent">{r.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
        <SiteFooter />
      </div>
    );
  }

  if (data.kind === "category") {
    const c = categories.find((x) => x.slug === data.slug)!;
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <Hero
          crumb={c.name}
          title={`${c.name} Articles`}
          sub={`Practical ${c.name.toLowerCase()} guidance from a family-owned Central Valley plumbing company.`}
        />
        <PostGrid list={postsByCategory(c.slug)} />
        <SiteFooter />
      </div>
    );
  }

  if (data.kind === "year") {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <Hero crumb={data.year} title={`${data.year} Articles`} sub={`Everything we published in ${data.year}.`} />
        <section className="pt-10">
          <div className="container-x flex flex-wrap gap-2">
            {monthsOf(data.year).map((m) => (
              <a key={m} href={`/blog/${data.year}/${m}/`} className="text-xs font-bold uppercase tracking-wider text-navy border border-border rounded-md px-3 py-1.5 hover:border-accent">
                {titleCase(m)}
              </a>
            ))}
          </div>
        </section>
        <PostGrid list={postsByYear(data.year)} />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Hero
        crumb={`${titleCase(data.month)} ${data.year}`}
        title={`${titleCase(data.month)} ${data.year} Articles`}
        sub={`Mainline Plumbing articles from ${titleCase(data.month)} ${data.year}.`}
      />
      <PostGrid list={postsByMonth(data.year, data.month)} />
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
