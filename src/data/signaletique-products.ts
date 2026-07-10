import enseignesThumb from "@/assets/sig-enseignes-thumb.jpg.asset.json";
import e1 from "@/assets/sig-e1.webp.asset.json";
import e2 from "@/assets/sig-e2.webp.asset.json";
import e3 from "@/assets/sig-e3.webp.asset.json";
import e4 from "@/assets/sig-e4.webp.asset.json";
import e5 from "@/assets/sig-e5.webp.asset.json";
import e6 from "@/assets/sig-e6.webp.asset.json";
import e7 from "@/assets/sig-e7.webp.asset.json";
import e8 from "@/assets/sig-e8.webp.asset.json";
import e9 from "@/assets/sig-e9.webp.asset.json";
import e10 from "@/assets/sig-e10.jpg.asset.json";
import neonMain from "@/assets/sig-neon-main.webp.asset.json";
import neonHhh from "@/assets/sig-neon-hhh.webp.asset.json";
import lettresMain from "@/assets/sig-lettres-main.webp.asset.json";
import lettres6 from "@/assets/sig-lettres-6.webp.asset.json";

export type SignaletiqueProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  gallery: string[];
};

export const signaletiqueProducts: SignaletiqueProduct[] = [
  {
    slug: "enseignes-lumineuses",
    title: "Enseignes Lumineuses",
    subtitle: "Caissons et enseignes rétroéclairées sur mesure.",
    image: enseignesThumb.url,
    description:
      "Enseignes lumineuses fabriquées sur mesure pour vitrines, façades et espaces commerciaux : caissons rétroéclairés LED, faces en plexiglas imprimé, structures aluminium résistantes aux intempéries. Étude, fabrication, intégration électrique et pose professionnelle assurées par notre atelier.",
    gallery: [
      e1.url,
      e2.url,
      e3.url,
      e4.url,
      e5.url,
      e6.url,
      e7.url,
      e8.url,
      e9.url,
      e10.url,
    ],
  },
  {
    slug: "neons",
    title: "Néons",
    subtitle: "Néons LED flexibles pour ambiances lumineuses.",
    image: neonMain.url,
    description:
      "Néons LED flexibles, personnalisables en forme, couleur et taille. Idéals pour la décoration intérieure, la signalétique de bar, restaurant, showroom ou événementiel. Basse consommation, longue durée de vie et installation simple.",
    gallery: [neonMain.url, neonHhh.url],
  },
  {
    slug: "lettres-lumineuses",
    title: "Lettres Lumineuses",
    subtitle: "Lettres découpées et rétroéclairées en LED.",
    image: lettresMain.url,
    description:
      "Lettres lumineuses en relief, découpées sur mesure et rétroéclairées en LED. Aluminium, PVC ou plexiglas, finitions peinture, brossé ou miroir. Un rendu haut de gamme pour enseignes de façade, réceptions d'entreprise et signalétique événementielle.",
    gallery: [lettresMain.url, lettres6.url],
  },
];
