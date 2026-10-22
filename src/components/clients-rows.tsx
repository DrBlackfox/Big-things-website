import { useT } from "@/lib/i18n";

const logos = [
  { src: "/client-logos/genesis.png", alt: "Genesis", size: "w-36 sm:w-40 max-h-20" },
  { src: "/client-logos/client-xpeng.png", alt: "XPENG", size: "w-28 sm:w-32 max-h-20" },
  { src: "/client-logos/hyundai.png", alt: "Hyundai", size: "w-28 sm:w-32 max-h-20" },
  { src: "/client-logos/iseki.png", alt: "Iseki", size: "w-36 sm:w-44 max-h-20" },
  { src: "/client-logos/attijari.png", alt: "Attijari Leasing", size: "w-24 sm:w-28 max-h-24" },
  { src: "/client-logos/client-xiaomi.png", alt: "Xiaomi", size: "w-32 sm:w-40 max-h-16" },
  { src: "/client-logos/bestevent.png", alt: "Best Event", size: "w-20 sm:w-24 max-h-24" },
  { src: "/client-logos/client-armee.png", alt: "Armée Tunisienne", size: "w-20 sm:w-24 max-h-24" },
  { src: "/client-logos/client-ladybug.png", alt: "Ladybug", size: "w-16 sm:w-20 max-h-20" },
  { src: "/client-logos/client-carrefour.png", alt: "Le Carrefour Agricole", size: "w-24 sm:w-28 max-h-28" },
  { src: "/client-logos/client-bosphore.png", alt: "Le Bosphore", size: "w-36 sm:w-44 max-h-20" },
  { src: "/client-logos/client-caverne.png", alt: "Espace La Caverne", size: "w-36 sm:w-44 max-h-20" },
  { src: "/client-logos/client-mabrouka.png", alt: "Mabrouka", size: "w-24 sm:w-28 max-h-28" },
  { src: "/client-logos/bomi.png", alt: "Bomi", size: "w-24 sm:w-28 max-h-20" },
  { src: "/client-logos/client-tulip.png", alt: "Tulip Rent A Car", size: "w-28 sm:w-32 max-h-20" },
  { src: "/client-logos/client-perla.png", alt: "Perla Group", size: "w-24 sm:w-28 max-h-20" },
  { src: "/client-logos/client-voltenergy.png", alt: "Voltenergy Solar Systems", size: "w-32 sm:w-36 max-h-20" },
  { src: "/client-logos/client-meublealoui.png", alt: "Meuble Aloui", size: "w-32 sm:w-36 max-h-20" },
  { src: "/client-logos/client-mediterranee.png", alt: "La Méditerranée Immobilière", size: "w-24 max-h-28" },
  { src: "/client-logos/sherbrooke.png", alt: "Académie Sherbrooke", size: "w-36 sm:w-40 max-h-20" },
  { src: "/client-logos/att.png", alt: "Agence Technique des Transports Terrestres", size: "w-36 sm:w-44 max-h-20" },
  { src: "/client-logos/ghs.png", alt: "GHS", size: "w-20 max-h-24" },
];

function LogoGrid() {
  return (
    <div className="grid min-w-[600px] grid-cols-6 items-center gap-x-3 gap-y-3 sm:min-w-0 sm:gap-x-5">
      {logos.map((l) => (
        <div key={l.src} className="flex items-center justify-center h-16 sm:h-20 min-w-0 px-1">
          <img
            src={l.src}
            alt={`${l.alt} - Big Things décoration Tunisie`}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className={`${l.size} h-auto object-contain max-w-[85%] !max-h-12 sm:!max-h-16`}
          />
        </div>
      ))}
    </div>
  );
}

export function ClientsRows() {
  const t = useT();
  return (
    <section
      dir="ltr"
      className="w-full bg-background border-t border-border py-5 sm:py-6"
      aria-label={t("Ils nous font confiance")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-5">
        <p className="text-center text-sm sm:text-base md:text-lg font-bold uppercase text-brand-orange">
          {t("Ils nous font confiance")}
        </p>
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={t("Ils nous font confiance")}>
          <LogoGrid />
        </div>
      </div>
    </section>
  );
}
