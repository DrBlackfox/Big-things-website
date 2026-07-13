import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";
import { standProducts } from "@/data/stands-products";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/stands/$product")({
  loader: ({ params }) => {
    const product = standProducts.find((p) => p.slug === params.product);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produit introuvable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.product.title} — Big Things Decoration`;
    const url = abs(`/stands/${params.product}`);
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.product.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.product.subtitle },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { property: "og:image", content: loaderData.product.image },
        { name: "twitter:image", content: loaderData.product.image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  const t = useT();
  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--brand-charcoal)]">{t("Produit introuvable")}</h1>
        <Link to="/stands" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">
          {t("← Retour aux stands")}
        </Link>
      </div>
    </PageShell>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const t = useT();

  return (
    <PageShell background="dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            to="/stands"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
          >
            {t("← Stands d'exposition")}
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
              <img
                src={product.image}
                alt={t(product.title)}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-orange)] uppercase tracking-tight">
                {t(product.title)}
              </h1>
              <p className="mt-3 text-white/80 uppercase tracking-widest text-xs font-semibold">
                {t(product.subtitle)}
              </p>

              <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />

              <p className="mt-6 text-white/75 leading-relaxed">
                {t(product.description)}
              </p>

              {product.gallery && product.gallery.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {product.gallery.map((src: string, i: number) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${t(product.title)} — ${i + 1}`}
                      className="w-full h-auto"
                      decoding="async"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
              >
                {t("Obtenir un devis gratuit")}
              </Link>
            </div>
          </div>
      </div>
    </PageShell>
  );
}
