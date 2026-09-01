import type { LinkPart } from "@/lib/interlink";

/**
 * Renders body copy with contextual internal links.
 * Linked keywords render bold in the site orange.
 *
 * Parts come from a precomputed page plan (see planLinks) so server and client
 * always render identical markup.
 */
export function Linkify({ text, plan }: { text: string; plan: Map<string, LinkPart[]> }) {
  const parts = plan.get(text) ?? [{ text }];
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
