import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Lang = "fr" | "ar";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (s: string) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

// French → Arabic dictionary. Any string not present falls back to the French original.
const AR: Record<string, string> = {
  // Header / nav
  "Accueil": "الرئيسية",
  "Stands d'exposition": "أجنحة العرض",
  "Événementiel": "الفعاليات",
  "Publicité & Signalétique": "الإعلان واللافتات",
  "Nos dernières créations": "أحدث إبداعاتنا",
  "Contact": "اتصل بنا",
  "Devis gratuit": "طلب عرض سعر",
  "Ils nous font confiance": "يثقون بنا",
  "Ouvrir le menu": "فتح القائمة",
  "Fermer le menu": "إغلاق القائمة",

  // Footer
  "Nos services": "خدماتنا",
  "COMMUNICATION ÉVÉNEMENTIEL HYBRIDE": "تواصل حدثي هجين",
  "PUBLICITÉ & SIGNALÉTIQUE": "الإعلان واللافتات",
  "STANDS D'EXPOSITION": "أجنحة العرض",
  "Tous droits réservés.": "جميع الحقوق محفوظة.",

  // Common
  "Découvrir": "اكتشف",
  "← Retour": "← رجوع",
  "← Retour aux stands": "← العودة إلى الأجنحة",
  "← Retour à la publicité": "← العودة إلى الإعلان",
  "← Retour à la signalétique": "← العودة إلى اللافتات",
  "← Stands d'exposition": "← أجنحة العرض",
  "← Publicité & Signalétique": "← الإعلان واللافتات",
  "← Publicité": "← الإعلان",
  "← Signalétique": "← اللافتات",
  "Obtenir un devis gratuit": "احصل على عرض سعر مجاني",
  "Galerie": "المعرض",
  "Produits": "المنتجات",
  "Produit introuvable": "المنتج غير موجود",
  "Catégorie introuvable": "الفئة غير موجودة",
  "Page en cours de préparation — les produits arrivent bientôt.": "الصفحة قيد التحضير — المنتجات قادمة قريبا.",
  "Précédent": "السابق",
  "Suivant": "التالي",

  // Home slides
  "Enseignes, caissons lumineux & affichage éclairé.": "لافتات وصناديق مضيئة وعرض مضاء.",
  "Création et réalisation de stand d'exposition sur mesure.": "تصميم وتنفيذ أجنحة عرض حسب الطلب.",
  "Communication événementielle hybride.": "تواصل حدثي هجين.",
  "ÉVÉNEMENTIEL": "الفعاليات",
  "Sélection de nos réalisations récentes : photos et vidéos.": "مختارات من إنجازاتنا الأخيرة: صور وفيديوهات.",
  "NOS DERNIÈRES CRÉATIONS": "أحدث إبداعاتنا",

  // Creations page
  "Un aperçu de nos projets récents : stands, enseignes lumineuses, habillages et productions événementielles.":
    "لمحة عن مشاريعنا الأخيرة: أجنحة، لافتات مضيئة، تغليف وإنتاج حدثي.",
  "Vidéos": "فيديوهات",
  "Photos": "صور",
  "Le contenu arrive bientôt — ajoutez vos Playback IDs Mux et vos photos dans": "المحتوى قادم قريبا — أضف معرفات Mux والصور في",

  // Contact
  "Parlons de votre": "لنتحدث عن",
  "projet": "مشروعك",
  "Adresse": "العنوان",
  "Téléphone": "الهاتف",
  "Email": "البريد الإلكتروني",
  "Manager": "المدير",
  "Nom": "الاسم",
  "Votre message": "رسالتك",
  "Envoyer": "إرسال",

  // Événementiel
  "Événe": "الفعا",
  "mentiel": "ليات",
  "Conception, production et logistique événementielle.": "تصميم وإنتاج ولوجستيك حدثي.",
  "Obtenir un devis gratuit pour votre événement": "احصل على عرض سعر مجاني لحدثك",
  "Nous accompagnons vos salons, conférences, lancements de produits et activations de marque de la conception à la production sur site. Stands, scénographies, habillages, signalétique, éclairage et supports audiovisuels : chaque événement est pensé sur mesure pour offrir une expérience mémorable à vos visiteurs.":
    "نرافقكم في معارضكم ومؤتمراتكم وإطلاق منتجاتكم وتفعيل علامتكم التجارية من التصميم إلى الإنتاج في الموقع. أجنحة، سينوغرافيا، تغليفات، لافتات، إضاءة ودعائم سمعية بصرية: كل حدث مصمم خصيصًا لتقديم تجربة لا تُنسى لزوّاركم.",
  "Vidéos": "فيديوهات",
  "Photos": "صور",


  // Stands index
  "Six gammes de stands sur mesure pour vos salons, showrooms et événements.":
    "ست مجموعات من الأجنحة حسب الطلب لمعارضك وصالات العرض والفعاليات.",

  // Publicité index
  "Trois pôles d'expertise pour rendre votre marque visible.": "ثلاثة مجالات خبرة لجعل علامتك التجارية مرئية.",
  "PUBLICITÉ": "الإعلان",
  "SIGNALÉTIQUE": "اللافتات",
  "Supports publicitaires et habillages sur mesure pour votre marque.":
    "دعامات إعلانية وتغليف حسب الطلب لعلامتك التجارية.",
  "Enseignes, néons et lettres lumineuses conçus et fabriqués sur mesure.":
    "لافتات ونيون وحروف مضيئة مصممة ومصنعة حسب الطلب.",

  // Publicité categories
  "Signalétique": "اللافتات",
  "Enseignes lumineuses, néons et affichage digital.": "لافتات مضيئة، نيون وعرض رقمي.",
  "Publicité": "الإعلان",
  "Bannières, drapeaux, affiches et impressions grand format.": "لافتات، أعلام، ملصقات وطباعة كبيرة الحجم.",
  "Revêtement en Alucobond": "تغليف بالألوكوبوند",
  "Panneaux composites aluminium pour façades et habillages.": "ألواح ألمنيوم مركبة للواجهات والتغليف.",
  "Solutions de signalétique intérieure et extérieure : éclairage LED, écrans numériques, lettres et néons lumineux, enseignes et caissons rétroéclairés. Fabrication sur mesure, intégration électrique complète et pose professionnelle pour vitrines, façades et espaces commerciaux.":
    "حلول لافتات داخلية وخارجية: إضاءة LED، شاشات رقمية، حروف ونيون مضيء، لافتات وصناديق مضاءة من الخلف. تصنيع حسب الطلب، تركيب كهربائي كامل وتركيب احترافي للواجهات والفضاءات التجارية.",
  "Supports publicitaires imprimés grand format : bannières, drapeaux, affiches, kakémonos, covering véhicules et impressions sur tous supports. Encres résistantes aux UV, finitions professionnelles et pose adaptée à chaque environnement.":
    "دعامات إعلانية مطبوعة كبيرة الحجم: لافتات، أعلام، ملصقات، كاكيمونو، تغليف مركبات وطباعة على جميع الدعامات. أحبار مقاومة للأشعة فوق البنفسجية، تشطيبات احترافية وتركيب مناسب لكل بيئة.",
  "Habillage de façades et surfaces en panneaux composites Alucobond : deux tôles d'aluminium liées à une âme en polyéthylène. Résistant aux intempéries, léger, plan et rigide. Finitions brossées, brillantes, mates ou effet miroir. Idéal pour enseignes, façades commerciales et rénovations architecturales.":
    "تغليف الواجهات والأسطح بألواح ألوكوبوند المركبة: صفيحتان من الألمنيوم مرتبطتان بقلب من البولي إيثيلين. مقاوم للعوامل الجوية، خفيف، مستوٍ وصلب. تشطيبات مصقولة، لامعة، مطفأة أو بتأثير المرآة. مثالي للافتات والواجهات التجارية والتجديدات المعمارية.",

  // Publicité products
  "Habillage de Façade": "تغليف الواجهة",
  "Rénovation et habillage complet de façades commerciales.": "تجديد وتغليف كامل للواجهات التجارية.",
  "Habillage et rénovation de façades pour commerces, showrooms et bâtiments professionnels : conception sur mesure, structures aluminium, panneaux composites, éclairage intégré et enseignes. Étude technique, fabrication en atelier et pose par notre équipe pour un rendu durable et à l'image de votre marque.":
    "تغليف وتجديد الواجهات للمحلات وصالات العرض والمباني المهنية: تصميم حسب الطلب، هياكل ألمنيوم، ألواح مركبة، إضاءة مدمجة ولافتات. دراسة تقنية، تصنيع في الورشة وتركيب من قبل فريقنا لنتيجة دائمة تعكس صورة علامتك.",
  "Impression Grand Format": "الطباعة الكبيرة الحجم",
  "Impressions haute résolution sur tous supports grand format.": "طباعة عالية الدقة على جميع الدعامات الكبيرة.",
  "Impression numérique grand format sur bâche, vinyle, papier affiche, toile et supports rigides. Idéal pour bannières, panneaux publicitaires, décors événementiels, vitrines et signalétique extérieure. Encres résistantes aux UV, couleurs fidèles et finitions professionnelles (œillets, ourlets, laminage) adaptées à chaque projet.":
    "طباعة رقمية كبيرة الحجم على القماش المشمع، الفينيل، ورق الملصقات، القماش والدعامات الصلبة. مثالية للافتات واللوحات الإعلانية والديكورات الحدثية والواجهات واللافتات الخارجية. أحبار مقاومة للأشعة فوق البنفسجية، ألوان دقيقة وتشطيبات احترافية.",
  "Oriflammes & Drapeaux": "أعلام وبيارق",
  "Oriflammes, beach flags et drapeaux publicitaires personnalisés.": "أعلام وبيرق شاطئ وأعلام إعلانية مخصصة.",
  "Oriflammes, beach flags et drapeaux publicitaires imprimés sur tissu haute qualité pour une visibilité maximale en intérieur comme en extérieur. Formes variées (goutte, plume, rectangulaire), mâts robustes et socles adaptés à chaque environnement (sable, béton, gazon). Idéal pour événements, salons, points de vente et campagnes de communication.":
    "أعلام وبيارق شاطئ وأعلام إعلانية مطبوعة على قماش عالي الجودة لأقصى قدر من الظهور داخل وخارج. أشكال متنوعة، صواري متينة وقواعد مناسبة لكل بيئة. مثالية للفعاليات والمعارض ونقاط البيع وحملات التواصل.",
  "Totem Publicitaire": "طوطم إعلاني",
  "Totems d'affichage et de signalétique sur mesure.": "طواطم عرض ولافتات حسب الطلب.",
  "Totems publicitaires en aluminium, acier ou composite, éclairés ou non, pour l'affichage extérieur et intérieur. Solutions robustes et personnalisables pour orienter, informer et valoriser votre marque : stations-service, parkings, centres commerciaux, showrooms et parcs d'activités. Étude, fabrication et pose assurées par notre équipe.":
    "طواطم إعلانية من الألمنيوم أو الفولاذ أو المركب، مضاءة أو غير مضاءة، للعرض الخارجي والداخلي. حلول متينة وقابلة للتخصيص لتوجيه وإعلام وتثمين علامتك. الدراسة والتصنيع والتركيب تضمنها فرقنا.",
  "Habillage de Véhicule": "تغليف المركبات",
  "Covering et marquage publicitaire pour véhicules professionnels.": "تغليف ووسم إعلاني للمركبات المهنية.",
  "Habillage complet ou partiel de véhicules (utilitaires, voitures, camions, food-trucks) en vinyle adhésif haute performance. Conception graphique sur mesure, découpe de précision et pose professionnelle pour transformer votre flotte en support publicitaire mobile durable, résistant aux intempéries et aux lavages.":
    "تغليف كامل أو جزئي للمركبات (نفعية، سيارات، شاحنات، فود ترك) بالفينيل اللاصق عالي الأداء. تصميم غرافيكي حسب الطلب، قص دقيق وتركيب احترافي لتحويل أسطولك إلى دعامة إعلانية متنقلة دائمة.",
  "Divers Produits Sur Mesure": "منتجات متنوعة حسب الطلب",
  "Réalisations spécifiques et projets sur mesure pour toutes vos idées.": "إنجازات خاصة ومشاريع حسب الطلب لكل أفكارك.",
  "Conception et fabrication de produits publicitaires et décoratifs sur mesure : présentoirs, PLV, découpes spéciales, objets promotionnels, décors sur mesure et solutions hybrides pour vos besoins uniques. Notre atelier associe savoir-faire artisanal et technologies modernes pour donner vie à vos projets les plus originaux.":
    "تصميم وتصنيع منتجات إعلانية وزخرفية حسب الطلب: عارضات، مواد ترويجية، قصات خاصة، أدوات ترويجية، ديكورات حسب الطلب وحلول هجينة لاحتياجاتك الفريدة.",

  // Signalétique products
  "Enseignes Lumineuses": "لافتات مضيئة",
  "Caissons et enseignes rétroéclairées sur mesure.": "صناديق ولافتات مضاءة من الخلف حسب الطلب.",
  "Enseignes lumineuses fabriquées sur mesure pour vitrines, façades et espaces commerciaux : caissons rétroéclairés LED, faces en plexiglas imprimé, structures aluminium résistantes aux intempéries. Étude, fabrication, intégration électrique et pose professionnelle assurées par notre atelier.":
    "لافتات مضيئة مصنوعة حسب الطلب للواجهات والفضاءات التجارية: صناديق مضاءة من الخلف بـ LED، وجوه من البلكسي المطبوع، هياكل ألمنيوم مقاومة للعوامل الجوية. الدراسة والتصنيع والتركيب الكهربائي والتركيب الاحترافي تضمنها ورشتنا.",
  "Néons": "نيون",
  "Néons LED flexibles pour ambiances lumineuses.": "نيون LED مرن لأجواء مضيئة.",
  "Néons LED flexibles, personnalisables en forme, couleur et taille. Idéals pour la décoration intérieure, la signalétique de bar, restaurant, showroom ou événementiel. Basse consommation, longue durée de vie et installation simple.":
    "نيون LED مرن قابل للتخصيص في الشكل واللون والحجم. مثالي للديكور الداخلي ولافتات البارات والمطاعم وصالات العرض والفعاليات. استهلاك منخفض وعمر طويل وتركيب سهل.",
  "Lettres Lumineuses": "حروف مضيئة",
  "Lettres découpées et rétroéclairées en LED.": "حروف مقصوصة ومضاءة من الخلف بـ LED.",
  "Lettres lumineuses en relief, découpées sur mesure et rétroéclairées en LED. Aluminium, PVC ou plexiglas, finitions peinture, brossé ou miroir. Un rendu haut de gamme pour enseignes de façade, réceptions d'entreprise et signalétique événementielle.":
    "حروف مضيئة بارزة، مقصوصة حسب الطلب ومضاءة من الخلف بـ LED. ألمنيوم، PVC أو بلكسي، تشطيبات دهان، مصقولة أو مرآة. نتيجة راقية للافتات الواجهات والاستقبال والفعاليات.",
  "Ampoules & Éclairage d'Intérieur": "مصابيح وإضاءة داخلية",
  "Solutions d'éclairage intérieur décoratif et fonctionnel.": "حلول إضاءة داخلية زخرفية ووظيفية.",
  "Ampoules décoratives et solutions d'éclairage d'intérieur pour boutiques, restaurants, bureaux et espaces résidentiels. Ampoules Edison vintage, suspensions design, spots LED encastrés et rubans lumineux : conception, fourniture et installation par notre équipe.":
    "مصابيح زخرفية وحلول إضاءة داخلية للمحلات والمطاعم والمكاتب والفضاءات السكنية. مصابيح إديسون كلاسيكية، تعليقات تصميم، سبوت LED مدمج وأشرطة مضيئة: التصميم والتوفير والتركيب من قبل فريقنا.",

  // Stands products
  "Stand Multimédia": "جناح متعدد الوسائط",
  "Structure intégrant écrans et supports numériques.": "هيكل يدمج شاشات ودعامات رقمية.",
  "Stand intégrant des écrans haute définition et supports numériques dynamiques. Structure aluminium, habillage en tissu tendu rétroéclairé, câblage dissimulé et alimentation intégrée. Compatible avec diffusion vidéo, contenus interactifs et signalétique digitale.":
    "جناح يدمج شاشات عالية الدقة ودعامات رقمية ديناميكية. هيكل ألمنيوم، تغليف بقماش مشدود مضاء من الخلف، أسلاك مخفية وتغذية مدمجة. متوافق مع بث الفيديو والمحتوى التفاعلي واللافتات الرقمية.",
  "Stand en Lightbox": "جناح لايت بوكس",
  "Aluminium, tissu tendu et éclairage LED.": "ألمنيوم، قماش مشدود وإضاءة LED.",
  "Structure modulaire en profilés aluminium, habillage en tissu polyester à impression sublimation, éclairage LED, néon ou ampoules intégré au cadre. Assemblage sans outils, transport à plat, remplacement des visuels sans démontage de la structure.":
    "هيكل معياري من قطاعات الألمنيوم، تغليف بقماش بوليستر بطباعة تسامي، إضاءة LED أو نيون أو مصابيح مدمجة في الإطار. تجميع دون أدوات، نقل مسطح، استبدال الصور دون تفكيك الهيكل.",
  "Stand en Menuiserie": "جناح نجارة",
  "Bois, MDF et matériaux composites sur mesure.": "خشب، MDF ومواد مركبة حسب الطلب.",
  "Fabrication sur mesure en bois massif, MDF, contreplaqué et panneaux composites. Finitions peinture, placage ou stratifié. Intégration de mobilier, comptoirs, vitrines et espaces de stockage. Adapté aux stands standalone de moyenne et grande surface.":
    "تصنيع حسب الطلب من الخشب الصلب و MDF والخشب الرقائقي والألواح المركبة. تشطيبات دهان أو تغليف أو صفائح. دمج الأثاث والكاونترات والواجهات ومساحات التخزين. مناسب للأجنحة المستقلة متوسطة وكبيرة المساحة.",
  "Stand à Toile Tendue": "جناح قماش مشدود",
  "Structure aluminium et impression textile grand format.": "هيكل ألمنيوم وطباعة نسيج كبيرة الحجم.",
  "Cadre aluminium autoportant recevant une toile tendue en polyester imprimée par sublimation. Finition mate ou satinée, tension uniforme sans plis. Montage rapide, faible poids, idéal pour les grandes surfaces graphiques.":
    "إطار ألمنيوم مستقل يستقبل قماش بوليستر مشدود مطبوع بالتسامي. تشطيب مطفأ أو ساتان، شد موحد دون تجاعيد. تركيب سريع، وزن خفيف، مثالي للمساحات الغرافيكية الكبيرة.",
  "Stand Parapluie": "جناح مظلة",
  "Structure pop-up déployable à ouverture rapide.": "هيكل بوب أب قابل للنشر بفتح سريع.",
  "Structure télescopique pliable à ouverture type parapluie. Panneaux magnétiques ou tissus imprimés fixés sur l'ossature. Montage en moins de cinq minutes sans outils, transport en housse rigide avec roulettes.":
    "هيكل تلسكوبي قابل للطي بفتح من نوع المظلة. ألواح مغناطيسية أو أقمشة مطبوعة مثبتة على الهيكل. تركيب في أقل من خمس دقائق دون أدوات، نقل في حقيبة صلبة بعجلات.",
  "Stand Tubulaire": "جناح أنبوبي",
  "Ossature en tubes aluminium et habillage textile.": "هيكل من أنابيب الألمنيوم وتغليف نسيجي.",
  "Ossature en tubes aluminium de section ronde ou carrée, assemblés par raccords. Habillage en tissu tendu imprimé. Configurations droites, courbes ou angulaires. Structure légère, modulable et réutilisable.":
    "هيكل من أنابيب ألمنيوم دائرية أو مربعة، مجمعة بوصلات. تغليف بقماش مشدود مطبوع. تكوينات مستقيمة أو منحنية أو زاوية. هيكل خفيف ومعياري وقابل لإعادة الاستخدام.",

  // Language toggle
  "Passer en arabe": "التبديل إلى الفرنسية",
  "العربية": "Français",
};

function detectInitial(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem("btd_lang");
  return stored === "ar" ? "ar" : "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "fr");
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      window.localStorage.setItem("btd_lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "fr" ? "ar" : "fr")), []);

  const t = useCallback(
    (s: string) => {
      if (lang === "fr") return s;
      return AR[s] ?? s;
    },
    [lang],
  );

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, toggle, t, dir: lang === "ar" ? "rtl" : "ltr" }),
    [lang, setLang, toggle, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so SSR / rare early renders don't crash.
    return {
      lang: "fr",
      setLang: () => {},
      toggle: () => {},
      t: (s: string) => s,
      dir: "ltr",
    };
  }
  return ctx;
}

export function useT() {
  return useLang().t;
}
