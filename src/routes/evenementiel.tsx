import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MuxVideoCard } from "@/components/mux-video-card";
import { abs } from "@/data/site";
import { useT } from "@/lib/i18n";
import evenementielImg from "@/assets/evenementiel.webp.asset.json";

type GalleryVideo = { playbackId: string; title: string; aspectRatio?: string };
type GalleryPhoto = { src: string; alt: string };

const galleryVideos: GalleryVideo[] = [
  { playbackId: "8XHf2XZDmjQOb6QKfaVAmSMDmcxxXE3mqS53mseo1zw", title: "Événementiel — 1", aspectRatio: "16/9" },
  { playbackId: "NHSo7t2302a4MzyVdF8zn01tPGrJOun35xeuUMFEFBpEk", title: "Événementiel — 2", aspectRatio: "16/9" },
  { playbackId: "z01CPf6OmCc9bYkt83ve1GqM1Qkkvtjc3FkVnJW65bLc", title: "Événementiel — 3", aspectRatio: "16/9" },
  { playbackId: "xT5d02VWpMLyJIMF8oQH1Svcykga2U00uIOmAOOYqumxM", title: "Événementiel — 4", aspectRatio: "16/9" },
  { playbackId: "Kat3MDS9NGUJqDXbLHWhSdhrTAhET7bUw5ZyJh02ADKU", title: "Événementiel — 5", aspectRatio: "16/9" },
  { playbackId: "N4Kr67Fyxowzhwk1801dF01dD8KKYhoBNgpuM3yBj001ag", title: "Événementiel — 6", aspectRatio: "16/9" },
  { playbackId: "W3UVw6yc01fBcH4m01mD7XDF76dgG7Na2BXK4kxvzf00Jw", title: "Événementiel — 7", aspectRatio: "16/9" },
];

const galleryPhotos: GalleryPhoto[] = [];

export const Route = createFileRoute("/evenementiel")({
  head: () => ({
    meta: [
      { title: "Événementiel — Big Things Decoration" },
      { name: "description", content: "Communication événementielle hybride : conception, production et logistique pour vos salons, conférences et lancements." },
      { property: "og:title", content: "Événementiel — Big Things Decoration" },
      { property: "og:description", content: "Communication événementielle hybride : conception, production et logistique pour vos salons, conférences et lancements." },
      { property: "og:url", content: abs("/evenementiel") },
      { property: "og:type", content: "product" },
      { property: "og:image", content: evenementielImg.url },
      { name: "twitter:image", content: evenementielImg.url },
    ],
    links: [{ rel: "canonical", href: abs("/evenementiel") }],
  }),
  component: EvenementielPage,
});

function EvenementielPage() {
  const t = useT();
  const hasVideos = galleryVideos.length > 0;
  const hasPhotos = galleryPhotos.length > 0;

  return (
    <PageShell background="dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[color:var(--brand-orange)]"
        >
          {t("← Retour")}
        </Link>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img
              src={evenementielImg.url}
              alt={t("Événementiel")}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-orange)] uppercase tracking-tight">
              {t("Événementiel")}
            </h1>
            <p className="mt-3 text-white/80 uppercase tracking-widest text-xs font-semibold">
              {t("Conception, production et logistique événementielle.")}
            </p>

            <div className="mt-6 h-px w-16 bg-[color:var(--brand-orange)]" />

            <p className="mt-6 text-white/75 leading-relaxed">
              {t(
                "Nous accompagnons vos salons, conférences, lancements de produits et activations de marque de la conception à la production sur site. Stands, scénographies, habillages, signalétique, éclairage et supports audiovisuels : chaque événement est pensé sur mesure pour offrir une expérience mémorable à vos visiteurs.",
              )}
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] hover:text-white transition-colors"
            >
              {t("Obtenir un devis gratuit pour votre événement")}
            </Link>
          </div>
        </div>

        {hasVideos && (
          <section className="mt-20">
            <h2 className="mb-6 text-2xl font-semibold uppercase tracking-wider text-white">
              {t("Vidéos")}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {galleryVideos.map((v) => (
                <MuxVideoCard key={v.playbackId} video={v} />
              ))}
            </div>
          </section>
        )}

        {hasPhotos && (
          <section className="mt-16 pb-10">
            <h2 className="mb-6 text-2xl font-semibold uppercase tracking-wider text-white">
              {t("Photos")}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {galleryPhotos.map((p) => (
                <div key={p.src} className="aspect-square overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
