import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";
import { signaletiqueProducts } from "@/data/signaletique-products";

export const Route = createFileRoute("/publicite/signaletique/")({
  head: () => ({
    meta: [
      { title: "Signalétique — Big Things Decoration" },
      { name: "description", content: "Enseignes lumineuses, néons LED et lettres lumineuses sur mesure pour vitrines, façades et espaces commerciaux." },
      { property: "og:title", content: "Signalétique — Big Things Decoration" },
      { property: "og:description", content: "Enseignes lumineuses, néons LED et lettres lumineuses sur mesure pour vitrines, façades et espaces commerciaux." },
      { property: "og:url", content: abs("/publicite/signaletique") },
    ],
    links: [{ rel: "canonical", href: abs("/publicite/signaletique") }],
  }),
  component: SignaletiqueIndex,
});

function SignaletiqueIndex() {
  return (
    <PageShell background="dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-6">
        <Link
          to="/publicite"
          className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
        >
          ← Publicité & Signalétique
        </Link>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
          SIGNALÉTIQUE
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl uppercase tracking-wide text-sm">
          Enseignes, néons et lettres lumineuses conçus et fabriqués sur mesure.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {signaletiqueProducts.map((p) => (
            <Link
              key={p.slug}
              to="/publicite/signaletique/$product"
              params={{ product: p.slug }}
              className="group relative block aspect-[4/3] overflow-hidden bg-[color:var(--brand-charcoal)]"
            >
              <img
                src={p.image}
                alt={p.title}
                decoding="async"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/55 backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center px-5">
                <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                  {p.title}
                </h2>
                <p className="mt-1 text-xs md:text-sm text-white/85 max-w-xs">{p.subtitle}</p>
                <span className="mt-4 inline-flex items-center border border-white text-white uppercase tracking-[0.25em] text-[11px] px-6 py-2.5 transition-colors duration-200 group-hover:bg-[var(--brand-orange)] group-hover:border-[var(--brand-orange)] group-hover:text-white hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)]">
                  Découvrir
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
