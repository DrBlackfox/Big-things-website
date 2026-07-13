import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { abs } from "@/data/site";
import { publiciteCategories } from "@/data/publicite-categories";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/publicite/$category")({
  loader: ({ params }) => {
    const category = publiciteCategories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Catégorie introuvable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.title} — Big Things Decoration`;
    const url = abs(`/publicite/${params.category}`);
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.subtitle },
        { property: "og:url", content: url },
        { property: "og:image", content: loaderData.category.image },
        { name: "twitter:image", content: loaderData.category.image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryNotFound() {
  const t = useT();
  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--brand-charcoal)]">{t("Catégorie introuvable")}</h1>
        <Link to="/publicite" className="mt-8 inline-block text-[color:var(--brand-orange)] font-semibold uppercase text-sm tracking-wide">
          {t("← Retour")}
        </Link>
      </div>
    </PageShell>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const t = useT();

  return (
    <PageShell background="dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            to="/publicite"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
          >
            {t("← Publicité & Signalétique")}
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img src={category.image} alt={t(category.title)} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-orange)] uppercase tracking-tight">
                {t(category.title)}
              </h1>
              <p className="mt-3 text-white/80 uppercase tracking-widest text-xs font-semibold">
                {t(category.subtitle)}
              </p>
              <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />
              <p className="mt-6 text-white/80 leading-relaxed">{t(category.description)}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
              >
                {t("Obtenir un devis gratuit")}
              </Link>
            </div>
          </div>

          {category.gallery && category.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                {t("Galerie")}
              </h2>
              <div className="mt-4 columns-2 md:columns-3 gap-5 [column-fill:_balance]">
                {category.gallery.map((src: string, i: number) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${t(category.title)} — ${i + 1}`}
                    className="mb-5 w-full h-auto block break-inside-avoid"
                    decoding="async"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          {category.products.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                {t("Produits")}
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {category.products.map((name: string) => (
                  <div
                    key={name}
                    className="bg-white/5 border border-white/10 text-white px-5 py-6 uppercase tracking-wide text-sm font-semibold"
                  >
                    {t(name)}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
    </PageShell>
  );
}
