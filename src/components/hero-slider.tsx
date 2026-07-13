import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

export type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
  to: LinkProps["to"];
};

/**
 * Auto-advancing hero carousel with infinite-loop transform.
 * - Pauses when the tab is hidden (visibilitychange).
 * - Pauses on hover.
 * - Honors `prefers-reduced-motion` (no auto-advance, no transition).
 */
export function HeroSlider({
  slides,
  intervalMs = 5500,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
}) {
  const count = slides.length;
  const t = useT();
  const loopedSlides = useMemo(
    () => [slides[count - 1], ...slides, slides[0]],
    [slides, count],
  );

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const pausedRef = useRef(false);
  const slidingRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const moveTo = useCallback((nextIndex: number) => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setAnimate(true);
    setIndex(nextIndex);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (pausedRef.current || slidingRef.current) return;
      slidingRef.current = true;
      setAnimate(true);
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, reducedMotion]);

  const onTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;
    slidingRef.current = false;
    if (index === count + 1) {
      setAnimate(false);
      setIndex(1);
    } else if (index === 0) {
      setAnimate(false);
      setIndex(count);
    }
  };

  useEffect(() => {
    if (!animate) {
      const t = requestAnimationFrame(() => {
        slidingRef.current = false;
        setAnimate(true);
      });
      return () => cancelAnimationFrame(t);
    }
  }, [animate]);

  const go = (dir: number) => moveTo(index + dir);
  const activeDot = ((index - 1) % count + count) % count;

  return (
    <section
      className="relative w-full h-[calc(100dvh-5rem)] min-h-[560px] bg-[color:var(--brand-charcoal)] overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      aria-roledescription="carousel"
      aria-label="Nos univers"
    >
      <div
        onTransitionEnd={onTransitionEnd}
        className={`flex h-full w-full ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {loopedSlides.map((s, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <img
              src={s.image}
              alt={s.title}
              loading={i <= 1 ? "eager" : "lazy"}
              fetchPriority={i === 1 ? "high" : "auto"}
              decoding={i === 1 ? "sync" : "async"}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[color:var(--brand-charcoal)]/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-[color:var(--brand-orange)] font-bold tracking-[0.1em] text-3xl sm:text-5xl md:text-7xl leading-tight max-w-5xl">
                {t(s.title)}
              </h1>
              <p className="mt-6 text-white uppercase tracking-widest text-sm sm:text-base md:text-lg font-medium max-w-2xl">
                {t(s.subtitle)}
              </p>
              <Link
                to={s.to}
                className="mt-10 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs sm:text-sm px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-orange)] focus-visible:ring-offset-2"
              >
                {t("Découvrir")}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={t("Précédent")}
        onClick={() => go(-1)}
        className="flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/40 hover:bg-[color:var(--brand-orange)] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label={t("Suivant")}
        onClick={() => go(1)}
        className="flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/40 hover:bg-[color:var(--brand-orange)] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === activeDot ? "true" : undefined}
            onClick={() => {
              slidingRef.current = false;
              setAnimate(true);
              setIndex(i + 1);
            }}
            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === activeDot ? "w-8 bg-[color:var(--brand-orange)]" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}
