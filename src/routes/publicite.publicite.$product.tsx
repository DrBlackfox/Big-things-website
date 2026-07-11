import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { publiciteProducts } from "@/data/publicite-products";

export const Route = createFileRoute("/publicite/publicite/$product")({
  loader: ({ params }) => {
    const product = publiciteProducts.find((p) => p.slug === params.product);
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
        <Link
          to="/publicite/publicite"
          className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide"
        >
          ← Retour à la publicité
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: PubliciteProductPage,
});

function PubliciteProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-charcoal)]">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            to="/publicite/publicite"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
          >
            ← Publicité
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-orange)] uppercase tracking-tight">
                {product.title}
              </h1>
              <p className="mt-3 text-white/80 uppercase tracking-widest text-xs font-semibold">
                {product.subtitle}
              </p>
              <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />
              <p className="mt-6 text-white/75 leading-relaxed">{product.description}</p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
              >
                Obtenir un devis gratuit
              </Link>
            </div>
          </div>

          {product.gallery.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                Galerie
              </h2>
              <div className="mt-4 columns-2 md:columns-3 gap-5 [column-fill:_balance]">
                {product.gallery.map((src: string, i: number) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${product.title} — visuel ${i + 1}`}
                    className="mb-5 w-full h-auto block break-inside-avoid"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
