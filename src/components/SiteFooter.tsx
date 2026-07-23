import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Mainline Plumbing Inc." className="h-[100px] w-auto mb-4" />
          <p className="text-sm italic text-accent mb-2">"We Treat Your Family, Like Our Family."</p>
          <p className="text-sm">Family-owned plumbers serving Escalon, Modesto and the Central Valley since 2010, backed by 37+ years of plumbing experience.</p>
        </div>
        <div>
          <h4 className="text-white font-display text-lg mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="size-4 text-accent shrink-0 mt-0.5" /> <a href="tel:2098381000">(209) 838-1000</a></li>
            <li className="flex gap-2"><MapPin className="size-4 text-accent shrink-0 mt-0.5" /> 18332 Campbell Ave.<br />Escalon, CA 95320</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display text-lg mb-4 uppercase tracking-wider">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><Clock className="size-4 text-accent shrink-0 mt-0.5" /><span>Mon–Fri: 7am – 7pm<br />Sat: 7am – 7pm<br />Sun: Closed</span></li>
            <li className="text-accent font-semibold pt-2">Emergency Repairs Available</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display text-lg mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/mainlineplumbinginc/" aria-label="Facebook" className="bg-white/10 hover:bg-accent p-2 rounded-full"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-accent p-2 rounded-full"><Instagram className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Mainline Plumbing Inc. All rights reserved.</span>
          <span>Escalon · Modesto · Manteca · Stanislaus & San Joaquin County</span>
        </div>
      </div>
    </footer>
  );
}
