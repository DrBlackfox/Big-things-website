import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MuxVideoCard } from "@/components/mux-video-card";
import { creationPhotos, creationVideos } from "@/data/creations";
import { abs } from "@/data/site";

export const Route = createFileRoute("/creations")({
  head: () => ({
    meta: [
      { title: "Nos dernières créations — Big Things Decoration" },
      { name: "description", content: "Photos et vidéos de nos dernières réalisations : stands, enseignes lumineuses et projets événementiels." },
      { property: "og:title", content: "Nos dernières créations — Big Things Decoration" },
      { property: "og:description", content: "Photos et vidéos de nos dernières réalisations : stands, enseignes lumineuses et projets événementiels." },
      { property: "og:url", content: abs("/creations") },
    ],
    links: [{ rel: "canonical", href: abs("/creations") }],
  }),
  component: CreationsPage,
});

function CreationsPage() {
  const hasVideos = creationVideos.length > 0;
  const hasPhotos = creationPhotos.length > 0;
  const empty = !hasVideos && !hasPhotos;

  return (
    <PageShell background="dark">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-[color:var(--brand-orange)]">
          Nos dernières créations
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-300">
          Un aperçu de nos projets récents : stands, enseignes lumineuses, habillages et
          productions événementielles.
        </p>
      </section>

      {hasVideos && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="mb-6 text-2xl font-semibold text-[color:var(--brand-charcoal)]">Vidéos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {creationVideos.map((v) => (
              <MuxVideoCard key={v.playbackId} video={v} />
            ))}
          </div>
        </section>
      )}

      {hasPhotos && (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-6 text-2xl font-semibold text-[color:var(--brand-charcoal)]">Photos</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {creationPhotos.map((p) => (
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

      {empty && (
        <section className="mx-auto max-w-2xl px-6 pb-24 text-center text-neutral-600">
          <p>Le contenu arrive bientôt — ajoutez vos Playback IDs Mux et vos photos dans <code>src/data/creations.ts</code>.</p>
        </section>
      )}
    </PageShell>
  );
}
