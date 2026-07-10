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
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] tracking-tight">
            Stands d'<span className="text-[color:var(--brand-orange)]">exposition</span>
          </h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/85">{p.subtitle}</p>
                  <span className="mt-4 inline-flex items-center border border-white text-white uppercase tracking-[0.25em] text-[11px] px-6 py-2.5 group-hover:bg-[color:var(--brand-orange)] group-hover:border-[color:var(--brand-orange)] transition-colors">
                    Découvrir
                  </span>
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
