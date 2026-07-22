import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useT, useLang } from "@/lib/i18n";

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
  const { dir } = useLang();
  const loopedSlides = useMemo(
    () => [slides[count - 1], ...slides, slides[0]],
    [slides, count],
  );

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const pausedRef = useRef(false);
  const slidingRef = useRef(false);
  const slideUnlockTimeoutRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const moveTo = useCallback((nextIndex: number) => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setAnimate(true);
    setIndex(nextIndex);
    if (slideUnlockTimeoutRef.current !== null) {
      window.clearTimeout(slideUnlockTimeoutRef.current);
    }
    slideUnlockTimeoutRef.current = window.setTimeout(() => {
      slidingRef.current = false;
      slideUnlockTimeoutRef.current = null;
    }, 850);
  }, []);

  useEffect(() => {
    return () => {
      if (slideUnlockTimeoutRef.current !== null) {
        window.clearTimeout(slideUnlockTimeoutRef.current);
      }
    };
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
    if (event.propertyName !== "transform" && event.propertyName !== "-webkit-transform") return;
    if (slideUnlockTimeoutRef.current !== null) {
      window.clearTimeout(slideUnlockTimeoutRef.current);
      slideUnlockTimeoutRef.current = null;
    }
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

  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const dragPointerId = useRef<number | null>(null);
  const wheelLockedRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const go = useCallback((direction: number) => {
    moveTo(indexRef.current + direction);
  }, [moveTo]);

  const activeDot = ((index - 1) % count + count) % count;

  const finishDrag = () => {
    if (dragStartX.current === null) return;
    const delta = dragDelta.current;
    dragStartX.current = null;
    dragDelta.current = 0;
    dragPointerId.current = null;
    pausedRef.current = false;

    const threshold = 40;
    if (delta > threshold) go(-1);
    else if (delta < -threshold) go(1);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if ((e.target as HTMLElement).closest("[data-carousel-control='true'], a, button")) return;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    dragPointerId.current = e.pointerId;
    pausedRef.current = true;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    if (dragPointerId.current !== null && e.pointerId !== dragPointerId.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const onPointerEnd = (e: React.PointerEvent) => {
    if (dragPointerId.current !== null && e.pointerId !== dragPointerId.current) return;
    finishDrag();
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const scrollDelta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(scrollDelta) < 20 || wheelLockedRef.current) return;

      e.preventDefault();
      pausedRef.current = true;
      wheelLockedRef.current = true;
      moveTo(indexRef.current + (scrollDelta > 0 ? 1 : -1));

      window.setTimeout(() => {
        wheelLockedRef.current = false;
        pausedRef.current = false;
      }, 800);
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [moveTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    if ("PointerEvent" in window) return;
    if (e.touches.length !== 1) return;
    if ((e.target as HTMLElement).closest("[data-carousel-control='true']")) return;
    dragStartX.current = e.touches[0].clientX;
    dragDelta.current = 0;
    pausedRef.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if ("PointerEvent" in window) return;
    if (dragStartX.current === null || e.touches.length !== 1) return;
    dragDelta.current = e.touches[0].clientX - dragStartX.current;
  };

  const onTouchEnd = () => {
    if ("PointerEvent" in window) return;
    finishDrag();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      e.preventDefault();
      pausedRef.current = true;
      go(e.key === "ArrowLeft" ? -1 : 1);
      window.setTimeout(() => {
        pausedRef.current = false;
      }, 850);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  return (
    <section
      ref={sectionRef}
      dir="ltr"
      tabIndex={0}
      className="relative w-full h-full min-h-[380px] bg-[color:var(--brand-charcoal)] overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing focus:outline-none"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
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
            <div dir={dir} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <h1 className={`text-[color:var(--brand-orange)] font-bold ${dir === "rtl" ? "" : "tracking-[0.1em]"} text-3xl sm:text-5xl md:text-7xl leading-tight max-w-5xl`}>
                {t(s.title)}
              </h1>
              <p className={`mt-6 text-white ${dir === "rtl" ? "" : "uppercase tracking-widest"} text-sm sm:text-base md:text-lg font-medium max-w-2xl`}>
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

      <ArrowButton side="left" label={t("Précédent")} onClick={() => go(-1)}>
        <ChevronLeft />
      </ArrowButton>
      <ArrowButton side="right" label={t("Suivant")} onClick={() => go(1)}>
        <ChevronRight />
      </ArrowButton>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            type="button"
              data-carousel-control="true"
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

function ArrowButton({
  side,
  label,
  onClick,
  children,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      data-carousel-control="true"
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onPointerDown={() => setActive(true)}
      style={{ backgroundColor: active ? "#f05527" : "rgba(0,0,0,0.4)" }}
      className={`flex absolute ${side === "left" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
    >
      {children}
    </button>
  );
}
