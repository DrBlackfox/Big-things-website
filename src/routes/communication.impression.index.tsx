import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";
import { publiciteProducts } from "@/data/publicite-products";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/communication/impression/")({
  head: () => ({
    meta: [
      { title: "Publicité — Big Things Decoration" },
      { name: "description", content: "Habillage de façades, bannières et supports publicitaires grand format pour rendre votre marque visible." },
      { property: "og:title", content: "Publicité — Big Things Decoration" },
      { property: "og:description", content: "Habillage de façades, bannières et supports publicitaires grand format pour rendre votre marque visible." },
      { property: "og:url", content: abs("/communication/impression") },
    ],
    links: [{ rel: "canonical", href: abs("/communication/impression") }],
  }),
  component: PubliciteProductsIndex,
});

function PubliciteProductsIndex() {
  const t = useT();
  return (
    <PageShell background="dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-6">
        <Link
          to="/communication"
          className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
        >
          {t("← Publicité & Signalétique")}
        </Link>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
          {t("PUBLICITÉ")}
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl uppercase tracking-wide text-sm">
          {t("Supports publicitaires et habillages sur mesure pour votre marque.")}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {publiciteProducts.map((p) => (
            <Link
              key={p.slug}
              to="/communication/impression/$product"
              params={{ product: p.slug }}
              className="group relative block aspect-[4/3] overflow-hidden bg-[color:var(--brand-charcoal)]"
            >
              <img
                src={p.image}
                alt={t(p.title)}
                decoding="async"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/55 backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center px-5">
                <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                  {t(p.title)}
                </h2>
                <p className="mt-1 text-xs md:text-sm text-white/85 max-w-xs">{t(p.subtitle)}</p>
                <span className="mt-4 inline-flex items-center border border-white text-white uppercase tracking-[0.25em] text-[11px] px-6 py-2.5 transition-colors duration-200 group-hover:bg-[var(--brand-orange)] group-hover:border-[var(--brand-orange)] group-hover:text-white hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)]">
                  {t("Découvrir")}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                  {t(p.title)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
