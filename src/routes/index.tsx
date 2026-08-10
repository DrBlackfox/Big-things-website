import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HeroSlider, type HeroSlide } from "@/components/hero-slider";
import { ClientsRows } from "@/components/clients-rows";
import { SITE, abs } from "@/data/site";
import { SEOHead } from "@/components/seo-head";
import { useT } from "@/lib/i18n";
import stands from "@/assets/stands.webp.asset.json";
import evenementiel from "@/assets/evenementiel.webp.asset.json";
import publicite from "@/assets/publicite-home.webp.asset.json";
import creations from "@/assets/creations.webp.asset.json";

const slides: HeroSlide[] = [
  {
    title: "PUBLICITÉ & SIGNALÉTIQUE",
    subtitle: "Enseignes, caissons lumineux & affichage éclairé.",
    image: publicite.url,
    to: "/communication",
  },
  {
    title: "STANDS D'EXPOSITION",
    subtitle: "Création et réalisation de stand d'exposition sur mesure.",
    image: stands.url,
    to: "/stands",
  },
  {
    title: "ÉVÉNEMENTIEL",
    subtitle: "Communication événementielle hybride.",
    image: evenementiel.url,
    to: "/evenementiel",
  },
  {
    title: "NOS DERNIÈRES CRÉATIONS",
    subtitle: "Sélection de nos réalisations récentes : photos et vidéos.",
    image: creations.url,
    to: "/creations",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: abs("/") },
    ],
    links: [
      { rel: "preload", as: "image", href: publicite.url, fetchPriority: "high" },
      { rel: "canonical", href: abs("/") },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Big Things",
    "description": "Big Things, votre expert en décoration et événementiel en Tunisie. Basés à Ben Arous, nous créons des expériences uniques pour vos événements.",
    "telephone": "+216 20 771 990",
    "email": "bigthingsdecoration@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ben Arous",
      "addressCountry": "TN"
    },
    "url": "https://www.bigthings.tn"
  };

  return (
    <PageShell>
      <SEOHead 
        title="Big Things | Décoration & Événementiel en Tunisie" 
        description="Big Things, votre expert en décoration et événementiel en Tunisie. Basés à Ben Arous, nous créons des expériences uniques pour vos événements."
        keywords="Big Things Tunisie, décoration Tunisie, Big Things décoration, création stands d'exposition Tunisie, aménagement d'espaces, agencement sur mesure, fabrication de stands, signalétique d'entreprise, impression numérique, enseignes lumineuses 3D, organisation événements corporate, décoration événementielle"
        canonical={abs("/")}
        schema={homeSchema}
      />
      
      {/* Invisible H1 for SEO */}
      <h1 className="sr-only">Big Things décoration Tunisie</h1>
      
      <HeroSlider slides={slides} />
      
      <section className="bg-white py-12 px-6 text-center border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--brand-charcoal)] mb-4">
            Big Things Tunisie
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Spécialiste de la <span className="font-semibold">décoration Tunisie</span> et de l'événementiel sur mesure. 
            Chez <span className="font-semibold text-[color:var(--brand-orange)]">Big Things décoration</span>, nous transformons vos idées en réalités visuelles percutantes, 
            de la conception de stands d'exposition à la signalétique lumineuse.
          </p>
        </div>
      </section>

      <ClientsRows />
    </PageShell>
  );
}
