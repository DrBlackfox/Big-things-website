import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { CreationVideo } from "@/data/creations";

// Lazy-load the Mux player only when a card is close to the viewport.
const MuxPlayer = lazy(() => import("@mux/mux-player-react/lazy"));

export function MuxVideoCard({ video }: { video: CreationVideo }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const poster = `https://image.mux.com/${video.playbackId}/thumbnail.webp?time=1`;
  const aspect = video.aspectRatio ?? "16/9";

  // Mount the player once the card scrolls near the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Play muted while in view, pause when scrolled away.
  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.4),
      { threshold: [0, 0.4, 0.75] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    const player = ref.current?.querySelector("mux-player") as
      | (HTMLElement & { play: () => Promise<void>; pause: () => void })
      | null;
    if (!player) return;
    if (inView) player.play?.().catch(() => {});
    else player.pause?.();
  }, [inView, visible]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-lg bg-black shadow-lg"
      style={{ aspectRatio: aspect }}
    >
      {visible ? (
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
            autoPlay={false}
            muted
            loop
            playsInline
            poster={poster}
            style={{ width: "100%", height: "100%", ["--controls" as string]: "none" }}
            accentColor="#f59e0b"
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-sm font-semibold text-white">{video.title}</p>
      </div>
    </div>
  );
}
