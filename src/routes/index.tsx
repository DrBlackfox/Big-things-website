import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import stands from "@/assets/stands.webp.asset.json";
import evenementiel from "@/assets/evenementiel.webp.asset.json";
import publicite from "@/assets/publicite.webp.asset.json";
import creations from "@/assets/creations.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const slides = [
  {
    title: "PUBLICITÉ & SIGNALÉTIQUE",
    subtitle: "Enseignes, caissons lumineux & affichage éclairé.",
    image: publicite.url,
    to: "/publicite" as const,
  },
  {
    title: "STANDS D'EXPOSITION",
    subtitle: "Création et réalisation de stand d'exposition sur mesure.",
    image: stands.url,
    to: "/stands" as const,
  },
  {
    title: "ÉVÉNEMENTIEL",
    subtitle: "Communication événementielle hybride.",
    image: evenementiel.url,
    to: "/evenementiel" as const,
  },
  {
    title: "NOS DERNIÈRES CRÉATIONS",
    subtitle: "Sélection de nos réalisations récentes : photos et vidéos.",
    image: creations.url,
    to: "/creations" as const,
  },
];


function Index() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pausedRef = useRef(false);
  const count = slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => i + 1);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  // Seamless loop: when we land on the cloned slide (index === count), snap back to 0 without animation.
  const onTransitionEnd = () => {
    if (index === count) {
      setAnimate(false);
      setIndex(0);
    } else if (index === -1) {
      setAnimate(false);
      setIndex(count - 1);
    }
  };

  useEffect(() => {
    if (!animate) {
      const t = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(t);
    }
  }, [animate]);

  const go = (dir: number) => setIndex((i) => i + dir);
  const activeDot = ((index % count) + count) % count;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      {/* HERO SLIDER */}
      <section
        className="relative w-full h-[calc(100vh-5rem)] min-h-[560px] bg-[color:var(--brand-charcoal)] overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div
          onTransitionEnd={onTransitionEnd}
          className={`flex h-full w-full ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {[...slides, slides[0]].map((s, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-full h-full"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[color:var(--brand-charcoal)]/60" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-[color:var(--brand-orange)] font-bold tracking-[0.1em] text-3xl sm:text-5xl md:text-7xl leading-tight max-w-5xl">
                  {s.title}
                </h1>
                <p className="mt-6 text-white uppercase tracking-widest text-sm sm:text-base md:text-lg font-medium max-w-2xl">
                  {s.subtitle}
                </p>
                <Link
                  to={s.to}
                  className="mt-10 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs sm:text-sm px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <button
          aria-label="Précédent"
          onClick={() => go(-1)}
          className="flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/40 hover:bg-[color:var(--brand-orange)] text-white transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => go(1)}
          className="flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/40 hover:bg-[color:var(--brand-orange)] text-white transition-colors"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeDot ? "w-8 bg-[color:var(--brand-orange)]" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

