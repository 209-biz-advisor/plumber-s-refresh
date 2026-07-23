import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, HeartHandshake, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import miguel from "@/assets/miguel-owner.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mainline Plumbing Inc. | Family-Owned Plumbers in Escalon, CA" },
      { name: "description", content: "Family-owned and operated plumbing company serving Escalon, Modesto and the Central Valley since 2010, backed by 37+ years of hands-on plumbing experience. We treat your family, like our family." },
      { property: "og:title", content: "About Mainline Plumbing Inc." },
      { property: "og:description", content: "We treat your family, like our family. Meet Miguel, 37+ years of plumbing experience, serving the 209 & 350 since 2010." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-navy-deep text-white py-20">
        <div className="container-x">
          <span className="eyebrow">About Us</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">A family business, doing right by yours.</h1>
          <p className="mt-5 font-display text-2xl md:text-3xl text-accent italic">
            "We Treat Your Family, Like Our Family."
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={miguel} alt="Miguel, Owner of Mainline Plumbing Inc." className="max-w-sm mx-auto" />
          <div>
            <span className="eyebrow">Meet Miguel</span>
            <h2 className="text-4xl font-bold text-navy mt-2">Owner & Lead Plumber</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              With 37 years of hands-on experience in the trade, Miguel founded Mainline Plumbing in 2010
              to bring honest, reliable plumbing service to families throughout the Central Valley.
              Every job, large or small, is handled with the same transparency and craftsmanship
              we'd want in our own homes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today our team continues that legacy, leveraging the latest tools and techniques to
              diagnose and resolve issues efficiently while keeping pricing fair and communication clear.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <h2 className="text-4xl font-bold text-navy text-center">Our Promise</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "37+ Years Experience", desc: "Decades of hands-on plumbing expertise serving Escalon and surrounding cities." },
              { icon: HeartHandshake, title: "Family-Owned & Operated", desc: "Local roots, real relationships, and accountability you can count on." },
              { icon: Users, title: "Customer-First Service", desc: "Quality plumbing service at an affordable cost, done right the first time." },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="size-14 rounded-xl bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                  <v.icon className="size-7 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary"><Phone className="size-4" /> Get In Touch</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
