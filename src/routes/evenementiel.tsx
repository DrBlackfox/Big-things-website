import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";

export const Route = createFileRoute("/evenementiel")({
  head: () => ({
    meta: [
      { title: "Événementiel — Big Things Decoration" },
      { name: "description", content: "Communication événementielle hybride : conception, production et logistique pour vos salons, conférences et lancements." },
      { property: "og:title", content: "Événementiel — Big Things Decoration" },
      { property: "og:description", content: "Communication événementielle hybride : conception, production et logistique pour vos salons, conférences et lancements." },
      { property: "og:url", content: abs("/evenementiel") },
    ],
    links: [{ rel: "canonical", href: abs("/evenementiel") }],
  }),
  component: () => (
    <PageShell>
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[color:var(--brand-charcoal)]">
          Événe<span className="text-[color:var(--brand-orange)]">mentiel</span>
        </h1>
        <p className="mt-6 text-neutral-600">Page en cours de préparation — les produits arrivent bientôt.</p>
        <Link to="/" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">← Retour</Link>
      </div>
    </PageShell>
  ),
});
