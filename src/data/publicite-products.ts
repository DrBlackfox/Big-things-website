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
import i11 from "@/assets/impression-11.webp.asset.json";
import i12 from "@/assets/impression-12.webp.asset.json";
import i13 from "@/assets/impression-13.webp.asset.json";
import i14 from "@/assets/impression-14.webp.asset.json";
import i15 from "@/assets/impression-15.webp.asset.json";
import i16 from "@/assets/impression-16.webp.asset.json";
import i17 from "@/assets/impression-17.webp.asset.json";
import i18 from "@/assets/impression-18.webp.asset.json";
import i19 from "@/assets/impression-19.webp.asset.json";
import i20 from "@/assets/impression-20.webp.asset.json";
import i21 from "@/assets/impression-21.webp.asset.json";
import i22 from "@/assets/impression-22.webp.asset.json";
import i23 from "@/assets/impression-23.webp.asset.json";
import i24 from "@/assets/impression-24.webp.asset.json";
import oriMain from "@/assets/oriflamme-main.webp.asset.json";
import o1 from "@/assets/oriflamme-1.webp.asset.json";
import o2 from "@/assets/oriflamme-2.webp.asset.json";
import o3 from "@/assets/oriflamme-3.webp.asset.json";
import o4 from "@/assets/oriflamme-4.webp.asset.json";
import o5 from "@/assets/oriflamme-5.webp.asset.json";
import o6 from "@/assets/oriflamme-6.webp.asset.json";
import totemMain from "@/assets/totem-main.webp.asset.json";
import t1 from "@/assets/totem-1.webp.asset.json";
import t2 from "@/assets/totem-2.webp.asset.json";
import t3 from "@/assets/totem-3.webp.asset.json";
import t4 from "@/assets/totem-4.webp.asset.json";
import t5 from "@/assets/totem-5.webp.asset.json";
import t6 from "@/assets/totem-6.webp.asset.json";
import t7 from "@/assets/totem-7.webp.asset.json";

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
      i11.url, i12.url, i13.url, i14.url, i15.url, i16.url, i17.url,
      i18.url, i19.url, i20.url, i21.url, i22.url, i23.url, i24.url,
    ],
  },
  {
    slug: "oriflammes-drapeaux",
    title: "Oriflammes & Drapeaux",
    subtitle: "Oriflammes, beach flags et drapeaux publicitaires personnalisés.",
    image: oriMain.url,
    description:
      "Oriflammes, beach flags et drapeaux publicitaires imprimés sur tissu haute qualité pour une visibilité maximale en intérieur comme en extérieur. Formes variées (goutte, plume, rectangulaire), mâts robustes et socles adaptés à chaque environnement (sable, béton, gazon). Idéal pour événements, salons, points de vente et campagnes de communication.",
    gallery: [oriMain.url, o1.url, o2.url, o3.url, o4.url, o5.url, o6.url],
  },
  {
    slug: "totem-publicitaire",
    title: "Totem Publicitaire",
    subtitle: "Totems d'affichage et de signalétique sur mesure.",
    image: totemMain.url,
    description:
      "Totems publicitaires en aluminium, acier ou composite, éclairés ou non, pour l'affichage extérieur et intérieur. Solutions robustes et personnalisables pour orienter, informer et valoriser votre marque : stations-service, parkings, centres commerciaux, showrooms et parcs d'activités. Étude, fabrication et pose assurées par notre équipe.",
    gallery: [totemMain.url, t1.url, t2.url, t3.url, t4.url, t5.url, t6.url, t7.url],
  },
];
