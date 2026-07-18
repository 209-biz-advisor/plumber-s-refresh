import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-horizontal.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Plumbing Services" },
  { to: "/services", label: "Drain Cleaning" },
  { to: "/services", label: "Water Heaters" },
  { to: "/areas-we-serve", label: "Areas We Serve" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur border-b border-white/10">
      {/* Top utility bar */}
      <div className="bg-black/40 border-b border-white/5 text-white text-xs">
        <div className="container-x flex items-center justify-between h-9 gap-4">
          <div className="flex items-center gap-4">
            <a href="tel:2095606652" className="flex items-center gap-2 font-bold tracking-wider hover:text-accent">
              <Phone className="size-3.5" /> (209) 560-6652
            </a>
            <span className="hidden md:inline text-accent/90 uppercase tracking-wider font-semibold">
              Summer's Here, Beat the heat with a same-day water heater replacement.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="bg-brand-red px-3 py-1 font-bold uppercase tracking-wider hover:bg-brand-red/80">Contact Us</Link>
            <a href="/contact" className="bg-accent text-navy-deep px-3 py-1 font-bold uppercase tracking-wider hover:opacity-90">Now Hiring</a>
          </div>
        </div>
      </div>
      <div className="container-x flex items-center justify-between h-28 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Mainline Plumbing Inc." className="h-[84px] w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {nav.map((n, i) => (
            <Link
              key={`${n.to}-${i}`}
              to={n.to}
              className="text-white/85 hover:text-accent text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="relative bg-brand-orange text-white pl-5 pr-6 py-3 font-display uppercase tracking-widest text-xs whitespace-nowrap hover:bg-brand-orange/90 flex items-center gap-2"
            style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)" }}
          >
            Request an Appointment <ArrowRight className="size-3.5" />
          </Link>
        </nav>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n, i) => (
              <Link
                key={`${n.to}-${i}`}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2 font-semibold uppercase tracking-wider text-sm"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Request an Appointment
            </Link>
            <a href="tel:2095606652" className="btn-outline justify-center">
              <Phone className="size-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
