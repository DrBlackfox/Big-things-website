import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";

export const Route = createFileRoute("/creations")({
  head: () => ({
    meta: [
      { title: "Nos dernières créations — Big Things Decoration" },
      { name: "description", content: "Photos et vidéos de nos dernières réalisations : stands, enseignes lumineuses et projets événementiels." },
      { property: "og:title", content: "Nos dernières créations — Big Things Decoration" },
      { property: "og:description", content: "Photos et vidéos de nos dernières réalisations : stands, enseignes lumineuses et projets événementiels." },
      { property: "og:url", content: abs("/creations") },
    ],
    links: [{ rel: "canonical", href: abs("/creations") }],
  }),
  component: () => (
    <PageShell>
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[color:var(--brand-charcoal)]">
          Nos dernières <span className="text-[color:var(--brand-orange)]">créations</span>
        </h1>
        <p className="mt-6 text-neutral-600">Page en cours de préparation — photos et vidéos arrivent bientôt.</p>
        <Link to="/" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">← Retour</Link>
      </div>
    </PageShell>
  ),
});
