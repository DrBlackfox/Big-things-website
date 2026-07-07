import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import stands from "@/assets/stands.webp.asset.json";
import evenementiel from "@/assets/evenementiel.webp.asset.json";
import publicite from "@/assets/publicite.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const slides = [
  {
    kicker: "Stands d'exposition",
    title: "SUR MESURE",
    subtitle: "Création et réalisation de stands d'exposition",
    description:
      "Conception, fabrication et installation de stands qui captivent vos visiteurs et transforment votre présence en résultats.",
    image: stands.url,
    to: "/stands" as const,
  },
  {
    kicker: "Événementiel",
    title: "HYBRIDE",
    subtitle: "Communication événementielle hybride",
    description:
      "Des expériences fluides qui connectent le public sur place et en ligne, avec design créatif et production premium.",
    image: evenementiel.url,
    to: "/evenementiel" as const,
  },
  {
    kicker: "Publicité & Signalétique",
    title: "LUMINEUX",
    subtitle: "Enseignes, caissons lumineux & affichage éclairé",
    description:
      "Enseignes, lettrages, affichage extérieur et signalétique haute visibilité pour marquer votre présence.",
    image: publicite.url,
    to: "/publicite" as const,
  },
];

function Index() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  // Sync scroll position to active index (for touch swipe support).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

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
          ref={trackRef}
          onScroll={onScroll}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s) => (
            <div
              key={s.title}
              className="relative flex-shrink-0 w-full h-full snap-center"
            >
              <img
                src={s.image}
                alt={s.kicker}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[color:var(--brand-charcoal)]/55" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <span className="text-[color:var(--brand-orange)] text-xs sm:text-sm font-semibold uppercase tracking-[0.35em]">
                  {s.kicker}
                </span>
                <h1 className="mt-6 text-white font-light tracking-[0.15em] sm:tracking-[0.25em] text-4xl sm:text-6xl md:text-8xl leading-none">
                  {s.title}
                </h1>
                <div className="mt-8 w-full max-w-2xl bg-black/35 backdrop-blur-sm py-6 px-6">
                  <h2 className="text-white uppercase tracking-widest text-sm sm:text-base font-semibold">
                    {s.subtitle}
                  </h2>
                  <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <Link
                  to={s.to}
                  className="mt-8 inline-flex items-center border border-white text-white uppercase tracking-[0.3em] text-xs sm:text-sm px-10 py-4 hover:bg-[color:var(--brand-orange)] hover:border-[color:var(--brand-orange)] transition-colors"
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
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/30 hover:bg-[color:var(--brand-orange)] text-white transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => go(1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/30 hover:bg-[color:var(--brand-orange)] text-white transition-colors"
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
                i === index ? "w-8 bg-[color:var(--brand-orange)]" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.3em]">
            Big Things Decoration
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] leading-tight">
            Vos idées, <span className="text-[color:var(--brand-orange)]">grandeur nature.</span>
          </h2>
          <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Nous conjuguons design créatif, production premium et intégration digitale pour
            livrer des stands, des événements et des espaces qui amplifient votre marque et
            laissent une empreinte durable.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
