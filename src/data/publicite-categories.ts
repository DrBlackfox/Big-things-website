import signaletique from "@/assets/signaletique.webp.asset.json";
import publiciteCat from "@/assets/publicite-cat.webp.asset.json";
import alucobond from "@/assets/alucobond.webp.asset.json";
import alucobond1 from "@/assets/alucobond-1.webp.asset.json";
import alucobond2 from "@/assets/alucobond-2.webp.asset.json";
import alucobond3 from "@/assets/alucobond-3.webp.asset.json";
import alucobond4 from "@/assets/alucobond-4.webp.asset.json";
import alucobond5 from "@/assets/alucobond-5.webp.asset.json";
import alucobond6 from "@/assets/alucobond-6.webp.asset.json";
import alucobond7 from "@/assets/alucobond-7.webp.asset.json";
import alucobond8 from "@/assets/alucobond-8.webp.asset.json";
import alucobond9 from "@/assets/alucobond-9.webp.asset.json";
import alucobond10 from "@/assets/alucobond-10.webp.asset.json";
import alucobond11 from "@/assets/alucobond-11.webp.asset.json";
import alucobond12 from "@/assets/alucobond-12.webp.asset.json";
import alucobond13 from "@/assets/alucobond-13.webp.asset.json";


export type PubliciteCategory = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  products: string[];
  gallery?: string[];
};

export const publiciteCategories: PubliciteCategory[] = [
  {
    slug: "alucobond",
    title: "Revêtement en Alucobond",
    subtitle: "Panneaux composites aluminium pour façades et habillages.",
    image: alucobond.url,
    description:
      "Habillage de façades et surfaces en panneaux composites Alucobond : deux tôles d'aluminium liées à une âme en polyéthylène. Résistant aux intempéries, léger, plan et rigide. Finitions brossées, brillantes, mates ou effet miroir. Idéal pour enseignes, façades commerciales et rénovations architecturales.",
    products: [],
    gallery: [alucobond.url, alucobond1.url, alucobond2.url, alucobond3.url, alucobond4.url, alucobond5.url, alucobond6.url, alucobond7.url, alucobond8.url, alucobond9.url, alucobond10.url, alucobond11.url, alucobond12.url, alucobond13.url],
  },
  {
    slug: "signaletique",
    title: "Signalétique",
    subtitle: "Enseignes lumineuses, néons et affichage digital.",
    image: signaletique.url,
    description:
      "Solutions de signalétique intérieure et extérieure : éclairage LED, écrans numériques, lettres et néons lumineux, enseignes et caissons rétroéclairés. Fabrication sur mesure, intégration électrique complète et pose professionnelle pour vitrines, façades et espaces commerciaux.",
    products: [
      "Bulbs & Indoor Lighting",
      "Digital & Video Displays",
      "Luminous Letters (Lettres Lumineuses)",
      "Neon Signs (Néons)",
      "Luminous Signs & Lightboxes (Enseignes Lumineuses)",
    ],
  },
  {
    slug: "publicite",
    title: "Publicité",
    subtitle: "Bannières, drapeaux, affiches et impressions grand format.",
    image: publiciteCat.url,
    description:
      "Supports publicitaires imprimés grand format : bannières, drapeaux, affiches, kakémonos, covering véhicules et impressions sur tous supports. Encres résistantes aux UV, finitions professionnelles et pose adaptée à chaque environnement.",
    products: [
      "Bannières",
      "Drapeaux",
      "Affiches",
      "Impressions grand format",
      "Covering véhicules",
    ],
  },
];
