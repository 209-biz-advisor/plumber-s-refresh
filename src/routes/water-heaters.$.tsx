import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { findService } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/water-heaters/$")({
  beforeLoad: ({ params }) => {
    const slug = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    if (!findService("water-heaters", slug)) throw notFound();
  },
  loader: ({ params }) => {
    const slug = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const service = findService("water-heaters", slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page Not Found | Mainline Plumbing Inc." }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const url = `${SITE_URL}/water-heaters/${s.slug}/`;
    return {
      meta: [
        { title: `${s.name} in Escalon & Modesto, CA | Mainline Plumbing Inc.` },
        { name: "description", content: s.desc },
        { property: "og:title", content: `${s.name} | Mainline Plumbing Inc.` },
        { property: "og:description", content: s.desc },
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
            "@graph": [
              {
                "@type": "Service",
                "@id": `${url}#service`,
                name: s.name,
                description: s.desc,
                serviceType: s.name,
                provider: { "@id": `${SITE_URL}/#business` },
                areaServed: { "@type": "AdministrativeArea", name: "Stanislaus & San Joaquin County, CA" },
                url,
              },
              {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: s.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumbs`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Water Heaters", item: `${SITE_URL}/water-heaters/` },
                  { "@type": "ListItem", position: 3, name: s.name, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: WaterHeaterServiceRoute,
});

function WaterHeaterServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServicePageTemplate service={service} />;
}
