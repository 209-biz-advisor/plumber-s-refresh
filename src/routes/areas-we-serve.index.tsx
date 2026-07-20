import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceCities } from "@/lib/service-cities";
import serviceMap from "@/assets/mainline-service-map.png.asset.json";

export const Route = createFileRoute("/areas-we-serve/")({
  head: () => ({
    meta: [
      { title: "Areas We Serve | Mainline Plumbing Inc. | Escalon, Modesto & the 209" },
      { name: "description", content: "Mainline Plumbing proudly serves Ceres, Escalon, Hughson, Lathrop, Manteca, Oakdale, Riverbank, Salida, Turlock and the greater Central Valley." },
      { property: "og:title", content: "Areas We Serve | Mainline Plumbing Inc." },
      { property: "og:description", content: "Local plumbers serving cities across Stanislaus & San Joaquin County." },
    ],
  }),
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-navy-deep text-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Areas We Serve</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
              Local Plumbers <span className="text-brand-red">Across the 209.</span>
            </h1>
            <p className="mt-5 text-white/80 max-w-lg">
              Our plumbers proudly service the cities and neighborhoods below. Family-owned and
              operating in the Central Valley since 1996.
            </p>
            <a href="tel:2098381000" className="btn-primary mt-8"><Phone className="size-4" /> (209) 838-1000</a>
          </div>
          <div className="mx-auto w-4/5 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
            <img src={serviceMap.url} alt="Mainline Plumbing service area map" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">Our Plumbers Proudly Service</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCities.map((c) => (
              <Link
                key={c.slug}
                to="/areas-we-serve/$city"
                params={{ city: c.slug }}
                className="group bg-white border border-border rounded-xl p-6 flex items-start justify-between gap-3 hover:border-brand-red hover:shadow-lg transition"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-brand-red" />
                    <span className="font-display text-xl uppercase text-navy">{c.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
                <ArrowRight className="size-5 text-brand-red shrink-0 mt-1 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
