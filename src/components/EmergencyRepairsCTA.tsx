import { AlertTriangle, Phone, ShieldCheck, Star, MapPin } from "lucide-react";
import { GHLQuoteForm } from "@/components/GHLQuoteForm";
import { PHONE_DISPLAY, PHONE_TEL, LICENSE_LABEL } from "@/lib/site";
import { GOOGLE_REVIEW_COUNT } from "@/lib/reviews";

type Props = {
  /** Optional city name for local framing, e.g. "Turlock". */
  city?: string;
  className?: string;
};

/**
 * Bottom-of-page Emergency Plumbing Repairs conversion block.
 * Pairs the single HighLevel lead form with an emergency call CTA and trust signals.
 */
export function EmergencyRepairsCTA({ city, className = "" }: Props) {
  const where = city ? `${city}` : "the 209 & 350";

  return (
    <section className={`bg-brand-red text-white py-16 md:py-20 ${className}`}>
      <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/15 rounded-full px-4 py-2">
            <AlertTriangle className="size-4" /> Emergency Repairs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Emergency Plumbing Repairs
            {city ? <> in <span className="text-accent">{city}</span></> : null}
          </h2>
          <p className="mt-5 text-white/90 max-w-xl leading-relaxed">
            Burst pipe, sewer backup, or no hot water? Tell us what's happening and we'll get a
            licensed plumber moving. Emergency repairs get priority scheduling across {where}.
          </p>

          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-3 bg-white text-brand-red px-7 py-4 rounded-lg font-display text-2xl md:text-3xl tracking-wider hover:bg-white/90 transition"
          >
            <Phone className="size-7" /> {PHONE_DISPLAY}
          </a>

          <ul className="mt-8 space-y-3 text-sm text-white/90">
            <li className="flex gap-2">
              <ShieldCheck className="size-5 shrink-0 mt-0.5 text-accent" /> {LICENSE_LABEL}, bonded and insured
            </li>
            <li className="flex gap-2">
              <Star className="size-5 shrink-0 mt-0.5 text-accent fill-accent" /> {GOOGLE_REVIEW_COUNT} Google reviews from real Valley neighbors
            </li>
            <li className="flex gap-2">
              <MapPin className="size-5 shrink-0 mt-0.5 text-accent" /> Family owned in Escalon since 2010, serving the 209 &amp; 350
            </li>
          </ul>
        </div>

        <GHLQuoteForm className="w-full lg:ml-auto" />
      </div>
    </section>
  );
}
