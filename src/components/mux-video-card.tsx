import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import type { CreationVideo } from "@/data/creations";
import { useT } from "@/lib/i18n";

const MuxPlayer = lazy(() => import("@mux/mux-player-react/lazy"));

type PlayerEl = HTMLElement & {
  play: () => Promise<void>;
  pause: () => void;
  muted: boolean;
  currentTime: number;
  requestFullscreen?: () => Promise<void>;
};

export function MuxVideoCard({ video }: { video: CreationVideo }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false); // full playback (with sound)
  const t = useT();
  const poster = `https://image.mux.com/${video.playbackId}/thumbnail.webp?time=1`;
  const aspect = video.aspectRatio ?? "16/9";

  const getPlayer = () =>
    wrapRef.current?.querySelector("mux-player") as PlayerEl | null;

  // Mount the player lazily when the card scrolls near the viewport,
  // so hover-to-preview is instant.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleEnter = () => {
    if (playing) return;
    const p = getPlayer();
    if (!p) return;
    p.muted = true;
    p.play().catch(() => {});
  };

  const handleLeave = () => {
    if (playing) return;
    const p = getPlayer();
    if (!p) return;
    p.pause();
    p.currentTime = 0;
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const p = getPlayer();
    if (!p) return;
    p.muted = false;
    p.currentTime = 0;
    p.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div
      ref={wrapRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-lg bg-black shadow-lg"
      style={{ aspectRatio: aspect }}
    >
      {mounted ? (
        <Suspense
          fallback={
            <img
              src={poster}
              alt={video.title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          }
        >
          <MuxPlayer
            playbackId={video.playbackId}
            metadata={{ video_title: video.title }}
            streamType="on-demand"
            muted
            loop={!playing}
            playsInline
            poster={poster}
            style={{
              width: "100%",
              height: "100%",
              // Hide native controls until the user starts real playback
              ["--controls" as string]: playing ? undefined : "none",
            }}
            accentColor="#f59e0b"
            onPause={() => {
              // If the user pauses through the real controls, drop back to hover-preview mode
              if (playing) setPlaying(false);
            }}
          />
        </Suspense>
      ) : (
        <img
          src={poster}
          alt={video.title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Play button — visible on hover, hidden once real playback starts */}
      {!playing && (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label={`Lire la vidéo : ${video.title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand-orange)] text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}

      {!playing && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">{t(video.title)}</p>
        </div>
      )}
    </div>
  );
}
