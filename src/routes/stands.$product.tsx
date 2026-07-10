import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { standProducts } from "@/data/stands-products";

export const Route = createFileRoute("/stands/$product")({
  loader: ({ params }) => {
    const product = standProducts.find((p) => p.slug === params.product);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.title} — Big Things Decoration` },
          { name: "description", content: loaderData.product.subtitle },
        ]
      : [{ title: "Produit introuvable" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--brand-charcoal)]">Produit introuvable</h1>
        <Link to="/stands" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">
          ← Retour aux stands
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-charcoal)]">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            to="/stands"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
          >
            ← Stands d'exposition
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] uppercase tracking-tight">
                {product.title}
              </h1>
              <p className="mt-3 text-[color:var(--brand-orange)] uppercase tracking-widest text-xs font-semibold">
                {product.subtitle}
              </p>

              <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />

              <p className="mt-6 text-neutral-700 leading-relaxed">
                {product.description}
              </p>

              {product.gallery && product.gallery.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {product.gallery.map((src: string, i: number) => (
                    <div key={i} className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <img
                        src={src}
                        alt={`${product.title} — visuel ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center border border-[color:var(--brand-charcoal)] text-[color:var(--brand-charcoal)] uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
              >
                Obtenir un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
