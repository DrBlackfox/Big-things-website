import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { publiciteCategories } from "@/data/publicite-categories";

export const Route = createFileRoute("/publicite/$category")({
  loader: ({ params }) => {
    const category = publiciteCategories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.title} — Big Things Decoration` },
          { name: "description", content: loaderData.category.subtitle },
        ]
      : [{ title: "Catégorie introuvable" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--brand-charcoal)]">Catégorie introuvable</h1>
        <Link to="/publicite" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">
          ← Retour
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-charcoal)]">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            to="/publicite"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
          >
            ← Publicité & Signalétique
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-orange)] uppercase tracking-tight">
                {category.title}
              </h1>
              <p className="mt-3 text-white/80 uppercase tracking-widest text-xs font-semibold">
                {category.subtitle}
              </p>
              <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />
              <p className="mt-6 text-white/80 leading-relaxed">{category.description}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
              >
                Obtenir un devis gratuit
              </Link>
            </div>
          </div>



          {category.gallery && category.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                Galerie
              </h2>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {category.gallery.map((src: string, i: number) => (
                  <div key={i} className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <img
                      src={src}
                      alt={`${category.title} — visuel ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {category.products.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                Produits
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {category.products.map((name: string) => (
                  <div
                    key={name}
                    className="bg-white/5 border border-white/10 text-white px-5 py-6 uppercase tracking-wide text-sm font-semibold"
                  >
                    {name}
                  </div>
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


}
