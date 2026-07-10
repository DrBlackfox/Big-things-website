import multimedia from "@/assets/stand-multimedia.webp.asset.json";
import lightbox from "@/assets/stand-lightbox.webp.asset.json";
import menuiserie from "@/assets/stand-menuiserie.webp.asset.json";
import toile from "@/assets/stand-toile.webp.asset.json";
import parapluie from "@/assets/stand-parapluie.webp.asset.json";
import tubulaire from "@/assets/stand-tubulaire.jpeg.asset.json";
import card1 from "@/assets/business-card-1.png.asset.json";
import card2 from "@/assets/business-card-2.png.asset.json";

export type StandProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  gallery?: string[];
};

export const standProducts: StandProduct[] = [
  {
    slug: "multimedia",
    title: "Stand Multimédia",
    subtitle: "Structure intégrant écrans et supports numériques.",
    image: multimedia.url,
    description:
      "Stand intégrant des écrans haute définition et supports numériques dynamiques. Structure aluminium, habillage en tissu tendu rétroéclairé, câblage dissimulé et alimentation intégrée. Compatible avec diffusion vidéo, contenus interactifs et signalétique digitale.",
  },
  {
    slug: "lightbox",
    title: "Stand en Lightbox",
    subtitle: "Aluminium, tissu tendu et éclairage LED.",
    image: lightbox.url,
    description:
      "Structure modulaire en profilés aluminium, habillage en tissu polyester à impression sublimation, éclairage LED, néon ou ampoules intégré au cadre. Assemblage sans outils, transport à plat, remplacement des visuels sans démontage de la structure.",
  },
  {
    slug: "menuiserie",
    title: "Stand en Menuiserie",
    subtitle: "Bois, MDF et matériaux composites sur mesure.",
    image: menuiserie.url,
    description:
      "Fabrication sur mesure en bois massif, MDF, contreplaqué et panneaux composites. Finitions peinture, placage ou stratifié. Intégration de mobilier, comptoirs, vitrines et espaces de stockage. Adapté aux stands standalone de moyenne et grande surface.",
  },
  {
    slug: "toile-tendue",
    title: "Stand à Toile Tendue",
    subtitle: "Structure aluminium et impression textile grand format.",
    image: toile.url,
    description:
      "Cadre aluminium autoportant recevant une toile tendue en polyester imprimée par sublimation. Finition mate ou satinée, tension uniforme sans plis. Montage rapide, faible poids, idéal pour les grandes surfaces graphiques.",
  },
  {
    slug: "parapluie",
    title: "Stand Parapluie",
    subtitle: "Structure pop-up déployable à ouverture rapide.",
    image: parapluie.url,
    description:
      "Structure télescopique pliable à ouverture type parapluie. Panneaux magnétiques ou tissus imprimés fixés sur l'ossature. Montage en moins de cinq minutes sans outils, transport en housse rigide avec roulettes.",
    gallery: [card1.url, card2.url],
  },
  {
    slug: "tubulaire",
    title: "Stand Tubulaire",
    subtitle: "Ossature en tubes aluminium et habillage textile.",
    image: tubulaire.url,
    description:
      "Ossature en tubes aluminium de section ronde ou carrée, assemblés par raccords. Habillage en tissu tendu imprimé. Configurations droites, courbes ou angulaires. Structure légère, modulable et réutilisable.",
  },
];
