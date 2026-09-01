import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, Camera } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/photo-gallery/`;
const DESC =
  "Photo gallery from Mainline Plumbing Inc: water heater installs, repipes, drain and sewer work, plus the Escalon crew behind every job.";

export const Route = createFileRoute("/photo-gallery/")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Photo Gallery | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: GalleryIndex,
});

function GalleryIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Photo Gallery</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Photo Gallery</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            A look at the work we do around the Central Valley and the people who do it.
          </p>
          <div className="mt-7">
            <a href="tel:+12098381000" className="btn-primary"><Phone className="size-4" /> 209.838.1000</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {[
            { href: "/photo-gallery/plumbing-work/", t: "Plumbing Work", d: "Water heater installs, repipes, sewer repairs, drain work and remodel rough-ins." },
            { href: "/photo-gallery/team/", t: "Our Team", d: "Miguel and the Mainline crew, in the trucks and on the job across the 209 & 350." },
          ].map((c) => (
            <a key={c.href} href={c.href} className="bg-white rounded-2xl p-8 border border-border hover:border-accent transition block" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="size-12 rounded-xl bg-brand-orange flex items-center justify-center">
                <Camera className="size-6 text-white" />
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
