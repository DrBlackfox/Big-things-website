import facadeMain from "@/assets/facade-main.webp.asset.json";
import f1 from "@/assets/facade-1.webp.asset.json";
import f2 from "@/assets/facade-2.webp.asset.json";
import f3 from "@/assets/facade-3.webp.asset.json";
import f4 from "@/assets/facade-4.webp.asset.json";
import f5 from "@/assets/facade-5.webp.asset.json";
import f6 from "@/assets/facade-6.webp.asset.json";
import f7 from "@/assets/facade-7.webp.asset.json";
import f8 from "@/assets/facade-8.webp.asset.json";
import f9 from "@/assets/facade-9.webp.asset.json";
import f10 from "@/assets/facade-10.webp.asset.json";
import f11 from "@/assets/facade-11.webp.asset.json";
import f12 from "@/assets/facade-12.webp.asset.json";
import f13 from "@/assets/facade-13.webp.asset.json";
import f14 from "@/assets/facade-14.webp.asset.json";
import impMain from "@/assets/impression-main.webp.asset.json";
import i1 from "@/assets/impression-1.webp.asset.json";
import i2 from "@/assets/impression-2.webp.asset.json";
import i3 from "@/assets/impression-3.webp.asset.json";
import i4 from "@/assets/impression-4.webp.asset.json";
import i5 from "@/assets/impression-5.webp.asset.json";
import i6 from "@/assets/impression-6.webp.asset.json";
import i7 from "@/assets/impression-7.webp.asset.json";
import i8 from "@/assets/impression-8.webp.asset.json";
import i9 from "@/assets/impression-9.webp.asset.json";
import i10 from "@/assets/impression-10.webp.asset.json";

export type PubliciteProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  gallery: string[];
};

export const publiciteProducts: PubliciteProduct[] = [
  {
    slug: "habillage-facade",
    title: "Habillage de Façade",
    subtitle: "Rénovation et habillage complet de façades commerciales.",
    image: facadeMain.url,
    description:
      "Habillage et rénovation de façades pour commerces, showrooms et bâtiments professionnels : conception sur mesure, structures aluminium, panneaux composites, éclairage intégré et enseignes. Étude technique, fabrication en atelier et pose par notre équipe pour un rendu durable et à l'image de votre marque.",
    gallery: [
      facadeMain.url,
      f1.url, f2.url, f3.url, f4.url, f5.url, f6.url, f7.url,
      f8.url, f9.url, f10.url, f11.url, f12.url, f13.url, f14.url,
    ],
  },
  {
    slug: "impression-grand-format",
    title: "Impression Grand Format",
    subtitle: "Impressions haute résolution sur tous supports grand format.",
    image: impMain.url,
    description:
      "Impression numérique grand format sur bâche, vinyle, papier affiche, toile et supports rigides. Idéal pour bannières, panneaux publicitaires, décors événementiels, vitrines et signalétique extérieure. Encres résistantes aux UV, couleurs fidèles et finitions professionnelles (œillets, ourlets, laminage) adaptées à chaque projet.",
    gallery: [
      impMain.url,
      i1.url, i2.url, i3.url, i4.url, i5.url,
      i6.url, i7.url, i8.url, i9.url, i10.url,
    ],
  },
];
