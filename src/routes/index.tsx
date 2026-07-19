import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HeroSlider, type HeroSlide } from "@/components/hero-slider";
import { SITE, abs } from "@/data/site";
import stands from "@/assets/stands.webp.asset.json";
import evenementiel from "@/assets/evenementiel.webp.asset.json";
import publicite from "@/assets/publicite-home.webp.asset.json";
import creations from "@/assets/creations.webp.asset.json";

const slides: HeroSlide[] = [
  {
    title: "PUBLICITÉ & SIGNALÉTIQUE",
    subtitle: "Enseignes, caissons lumineux & affichage éclairé.",
    image: publicite.url,
    to: "/publicite",
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          url: SITE.baseUrl,
          description: SITE.description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "10 Rue Ammar Ben Yesser",
            addressLocality: "Radès",
            addressCountry: "TN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+21620771990",
            email: "bigthingsdecoration@gmail.com",
            contactType: "sales",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <HeroSlider slides={slides} />
    </PageShell>
  );
}
