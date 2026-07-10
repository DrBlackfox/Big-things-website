import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { publiciteCategories } from "@/data/publicite-categories";

export const Route = createFileRoute("/publicite/")({
  head: () => ({
    meta: [
      { title: "Publicité & Signalétique — Big Things Decoration" },
      {
        name: "description",
        content:
          "Signalétique lumineuse, publicité grand format et revêtement Alucobond : trois pôles d'expertise pour votre visibilité.",
      },
    ],
  }),
  component: PubliciteIndex,
});

function PubliciteIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-charcoal)]">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[95%] px-2 sm:px-4 pt-10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
            PUBLICITÉ & SIGNALÉTIQUE
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl uppercase tracking-wide text-sm">
            Trois pôles d'expertise pour rendre votre marque visible.
          </p>
        </div>

        <div className="mx-auto max-w-[95%] px-2 sm:px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {publiciteCategories.map((c) => (
              <Link
                key={c.slug}
                to="/publicite/$category"
                params={{ category: c.slug }}
                className="group relative block aspect-[3/5] overflow-hidden bg-[color:var(--brand-charcoal)]"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sliding overlay panel */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[color:var(--brand-charcoal)]/90 backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-white/90 max-w-md leading-relaxed">{c.subtitle}</p>
                  <span className="mt-8 inline-flex items-center border border-white text-white uppercase tracking-[0.25em] text-sm px-8 py-3.5 transition-colors duration-200 group-hover:bg-[var(--brand-orange)] group-hover:border-[var(--brand-orange)] group-hover:text-white hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)]">
                    Découvrir
                  </span>
                </div>
                {/* Persistent title strip */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[color:var(--brand-orange)]">
                    {c.title}
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
