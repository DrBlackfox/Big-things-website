import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { standProducts } from "@/data/stands-products";

export const Route = createFileRoute("/stands/")({
  head: () => ({
    meta: [
      { title: "Stands d'exposition — Big Things Decoration" },
      {
        name: "description",
        content:
          "Nos gammes de stands d'exposition sur mesure : multimédia, lightbox, menuiserie, toile tendue, parapluie, tubulaire.",
      },
    ],
  }),
  component: StandsIndex,
});

function StandsIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-charcoal)]">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
            STANDS D'EXPOSITION
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl uppercase tracking-wide text-sm">
            Six gammes de stands sur mesure pour vos salons, showrooms et événements.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {standProducts.map((p) => (
              <Link
                key={p.slug}
                to="/stands/$product"
                params={{ product: p.slug }}
                className="group relative block aspect-[4/3] overflow-hidden bg-[color:var(--brand-charcoal)]"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sliding overlay panel */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/55 backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center px-5">
                  <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-white/85 max-w-xs">{p.subtitle}</p>
                  <span className="mt-4 inline-flex items-center border border-white text-white uppercase tracking-[0.25em] text-[11px] px-6 py-2.5 transition-colors duration-200 group-hover:bg-[var(--brand-orange)] group-hover:border-[var(--brand-orange)] group-hover:text-white hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)]">
                    Découvrir
                  </span>
                </div>
                {/* Persistent title strip at bottom (visible when not hovered) */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
