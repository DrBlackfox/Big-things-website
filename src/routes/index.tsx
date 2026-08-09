import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HeroSlider, type HeroSlide } from "@/components/hero-slider";
import { ClientsRows } from "@/components/clients-rows";
import { SITE, abs } from "@/data/site";
import { SEOHead } from "@/components/seo-head";
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
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Big Things Decoration",
    "description": "Custom exhibition stands, event management, and signage.",
    "telephone": "+216 20 771 990",
    "email": "contact@bigthings.tn",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Rue Ammar Ben Yesser",
      "postalCode": "2040",
      "addressLocality": "Radès",
      "addressRegion": "Ben Arous",
      "addressCountry": "TN"
    },
    "url": SITE.baseUrl
  };

  return (
    <PageShell>
      <SEOHead 
        title="Big Things Decoration | Stands d'Exposition, تصميم المعارض, Exhibition Booths" 
        description="Agence experte en aménagement d'espaces, création de stands d'exposition, et enseignes lumineuses 3D en Tunisie. تصميم وتجهيز أجنحة المعارض والفعاليات. Premium custom trade show booths and corporate event production serving Tunisia and Europe."
        keywords="création stands d'exposition Tunisie, aménagement d'espaces, agencement sur mesure, fabrication de stands, signalétique d'entreprise, impression numérique, enseignes lumineuses 3D, organisation événements corporate, décoration événementielle, تصميم أجنحة المعارض تونس, تنفيذ ديكورات المعارض, شركات تنظيم الفعاليات, لافتات مضيئة, طباعة وتصميم, تجهيز مساحات العرض, custom exhibition stand builders Tunisia, corporate event management, 3D luminous signage, trade show booth design, event production, LED signs Europe"
        canonical={abs("/")}
        schema={homeSchema}
      />
      <HeroSlider slides={slides} />
      <ClientsRows />
    </PageShell>
  );
}
