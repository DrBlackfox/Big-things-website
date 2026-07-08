import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/creations")({
  head: () => ({ meta: [{ title: "Nos dernières créations — Big Things Decoration" }] }),
  component: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[color:var(--brand-charcoal)]">
          Nos dernières <span className="text-[color:var(--brand-orange)]">créations</span>
        </h1>
        <p className="mt-6 text-neutral-600">Page en cours de préparation — photos et vidéos arrivent bientôt.</p>
        <Link to="/" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">← Retour</Link>
      </main>
      <SiteFooter />
    </div>
  ),
});
