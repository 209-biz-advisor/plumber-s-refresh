import { useState } from "react";
import { Send } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
};

export function QuickQuoteForm({
  title = "Need Help?",
  subtitle,
  compact = false,
  className = "",
}: Props) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`bg-white rounded-2xl p-6 md:p-7 text-navy border border-border ${className}`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
      aria-label="Request service form"
    >
      {sent ? (
        <div className="text-center py-10">
          <div className="size-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
            <Send className="size-6 text-accent" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Thanks, we'll be in touch!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For emergencies, call (209) 838-1000.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-center text-sm text-muted-foreground">{subtitle}</p>
          )}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <input required placeholder="First Name*" aria-label="First name" className="border border-border rounded-lg px-4 py-3 text-sm" />
            <input required placeholder="Last Name*" aria-label="Last name" className="border border-border rounded-lg px-4 py-3 text-sm" />
            <input required placeholder="Phone*" aria-label="Phone" className="border border-border rounded-lg px-4 py-3 text-sm" />
            <input required type="email" placeholder="Email*" aria-label="Email" className="border border-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <select aria-label="Are you a new customer?" className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm bg-white">
            <option>Are you a new customer?</option>
            <option>Yes, first time</option>
            <option>No, returning customer</option>
          </select>
          {!compact && (
            <select aria-label="How did you hear about us?" className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm bg-white">
              <option>How did you hear about us?</option>
              <option>Google</option>
              <option>Referral</option>
              <option>Facebook</option>
              <option>Other</option>
            </select>
          )}
          <textarea
            placeholder="How can we help?"
            aria-label="How can we help?"
            rows={compact ? 3 : 4}
            className="w-full mt-3 border border-border rounded-lg px-4 py-3 text-sm"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-brand-orange-deep text-white py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-brand-orange transition"
          >
            Request Service
          </button>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            * required. Or call <a href="tel:2098381000" className="font-bold text-navy">(209) 838-1000</a>
          </p>
        </>
      )}
    </form>
  );
}
