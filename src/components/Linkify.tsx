import { linkifyParts, type LinkBudget } from "@/lib/interlink";

/**
 * Renders body copy with contextual internal links.
 * Linked keywords render bold in the site orange.
 */
export function Linkify({ text, budget }: { text: string; budget: LinkBudget }) {
  const parts = linkifyParts(text, budget);
  return (
    <>
      {parts.map((p, i) =>
        p.href ? (
          <a
            key={`${p.href}-${i}`}
            href={p.href}
            className="font-bold text-brand-orange hover:text-brand-orange-deep hover:underline"
          >
            {p.text}
          </a>
        ) : (
          <span key={`t-${i}`}>{p.text}</span>
        ),
      )}
    </>
  );
}
