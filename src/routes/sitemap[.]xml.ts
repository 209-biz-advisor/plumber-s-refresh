import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { serviceCities } from "@/lib/service-cities";
import { SITE_URL } from "@/lib/site";
import { plumbingServices, waterHeaterServices, servicePath } from "@/lib/services";
import { blogUrls } from "@/lib/blog";

interface SitemapEntry {
  path: string;
  /** Only set when a real content date exists for the page. */
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about-us/", changefreq: "monthly", priority: "0.7" },
          { path: "/about-us/faq/", changefreq: "monthly", priority: "0.6" },
          { path: "/about-us/video-center/", changefreq: "monthly", priority: "0.5" },
          { path: "/about-us/video-center/videos/", changefreq: "monthly", priority: "0.4" },
          { path: "/about-us/video-center/videos/about-our-company/", changefreq: "monthly", priority: "0.4" },
          { path: "/contact-us/", changefreq: "monthly", priority: "0.8" },
          { path: "/coupons/", changefreq: "weekly", priority: "0.8" },
          { path: "/reviews/", changefreq: "weekly", priority: "0.8" },
          { path: "/photo-gallery/", changefreq: "monthly", priority: "0.5" },
          { path: "/photo-gallery/plumbing-work/", changefreq: "monthly", priority: "0.5" },
          { path: "/photo-gallery/team/", changefreq: "monthly", priority: "0.4" },
          { path: "/site-map/", changefreq: "monthly", priority: "0.3" },

          // Service hubs and every nested service URL
          { path: "/plumbing-services/", changefreq: "monthly", priority: "0.9" },
          ...plumbingServices.map((s) => ({
            path: servicePath(s),
            changefreq: "monthly" as const,
            priority: s.parent ? "0.6" : "0.8",
          })),
          { path: "/water-heaters/", changefreq: "monthly", priority: "0.9" },
          ...waterHeaterServices.map((s) => ({
            path: servicePath(s),
            changefreq: "monthly" as const,
            priority: "0.8",
          })),

          // Service areas
          { path: "/areas-we-serve/", changefreq: "monthly", priority: "0.9" },
          ...serviceCities.map((c) => ({
            path: `/areas-we-serve/${c.slug}/`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),

          // Blog index, archives, categories and posts
          ...blogUrls().map((path) => ({
            path,
            changefreq: "monthly" as const,
            priority: path === "/blog/" ? "0.7" : "0.5",
          })),
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
