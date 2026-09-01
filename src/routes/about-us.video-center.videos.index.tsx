import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, PlayCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/about-us/video-center/videos/`;
const DESC =
  "Browse Mainline Plumbing videos: company introduction, water heater replacement walkthroughs, and homeowner plumbing tips for the 209 & 350.";

export const Route = createFileRoute("/about-us/video-center/videos/")({
  head: () => ({
    meta: [
      { title: "All Videos | Mainline Plumbing Video Center" },
      { name: "description", content: DESC },
      { property: "og:title", content: "All Videos | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: VideoList,
});

const videos = [
  { href: "/about-us/video-center/videos/about-our-company/", t: "About Our Company", d: "Who we are, how we started in Escalon in 2010, and how we treat your family like our family." },
  { t: "Water Heater Replacement, Start to Finish", d: "What a same-day tank replacement actually looks like: permit, install, code upgrades and haul-away." },
  { t: "Tank vs. Tankless vs. Heat Pump", d: "How we help you choose, and when each option is genuinely the better long-term investment." },
  { t: "Why Your Drain Keeps Clogging", d: "Grease, roots and bellied lines, and how a camera inspection tells you which one you have." },
  { t: "Hard Water in the Central Valley", d: "What scale does to water heaters and fixtures, and what softening or conditioning actually fixes." },
];

function VideoList() {
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
            <span className="text-accent">Videos</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">All Videos</h1>
          <p className="mt-4 text-white/85 max-w-2xl">{DESC}</p>
          <div className="mt-7">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => {
            const inner = (
              <>
                <div className="size-12 rounded-xl bg-brand-orange flex items-center justify-center">
                  <PlayCircle className="size-6 text-white" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">{v.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </>
            );
            return v.href ? (
              <a key={v.t} href={v.href} className="bg-white rounded-2xl p-7 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
                {inner}
              </a>
            ) : (
              <div key={v.t} className="bg-white rounded-2xl p-7 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
