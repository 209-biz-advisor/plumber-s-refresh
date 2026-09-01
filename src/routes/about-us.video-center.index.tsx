import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, PlayCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/about-us/video-center/`;
const DESC =
  "Mainline Plumbing video center: meet Miguel, see how we approach water heater replacement, and get plain-English plumbing tips for Central Valley homes.";

export const Route = createFileRoute("/about-us/video-center/")({
  head: () => ({
    meta: [
      { title: "Video Center | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Video Center | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: VideoCenter,
});

function VideoCenter() {
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
            <span className="text-accent">Video Center</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Video Center</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Short, straightforward videos about who we are and how we work, so you know exactly what
            to expect before you ever call.
          </p>
          <div className="mt-7">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {[
            { href: "/about-us/video-center/videos/", t: "All Videos", d: "Browse the full Mainline Plumbing video library." },
            { href: "/about-us/video-center/videos/about-our-company/", t: "About Our Company", d: "Meet Miguel and hear how Mainline has served Escalon since 2010." },
          ].map((c) => (
            <a key={c.href} href={c.href} className="bg-white rounded-2xl p-8 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="size-12 rounded-xl bg-brand-orange flex items-center justify-center">
                <PlayCircle className="size-6 text-white" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy">{c.t}</h2>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </a>
          ))}
        </div>
      </section>
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
