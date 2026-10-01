import { useT } from "@/lib/i18n";

const row1 = [
  { src: "/client-logos/sherbrooke.png", alt: "Académie Sherbrooke" },
  { src: "/client-logos/attijari.png", alt: "Attijari Leasing" },
  { src: "/client-logos/att.png", alt: "Agence Technique des Transports Terrestres" },
  { src: "/client-logos/bestevent.png", alt: "Best Event" },
  { src: "/client-logos/bomi.png", alt: "Bomi" },
  { src: "/client-logos/client-armee.png", alt: "Armée Tunisienne" },
  { src: "/client-logos/genesis.png", alt: "Genesis" },
];

const row2 = [
  { src: "/client-logos/ghs.png", alt: "GHS" },
  { src: "/client-logos/hyundai.png", alt: "Hyundai" },
  { src: "/client-logos/iseki.png", alt: "Iseki" },
  { src: "/client-logos/client-caverne.png", alt: "Espace La Caverne" },
  { src: "/client-logos/client-bosphore.png", alt: "Le Bosphore" },
  { src: "/client-logos/client-carrefour.png", alt: "Le Carrefour Agricole" },
  { src: "/client-logos/client-ladybug.png", alt: "Ladybug" },
];

const row3 = [
  { src: "/client-logos/client-meublealoui.png", alt: "Meuble Aloui" },
  { src: "/client-logos/client-perla.png", alt: "Perla Group" },
  { src: "/client-logos/client-tulip.png", alt: "Tulip Rent A Car" },
  { src: "/client-logos/client-mabrouka.png", alt: "Mabrouka" },
  { src: "/client-logos/client-voltenergy.png", alt: "Voltenergy Solar Systems" },
  { src: "/client-logos/client-mediterranee.png", alt: "La Méditerranée Immobilière" },
  { src: "/client-logos/client-xiaomi.png", alt: "Xiaomi" },
  { src: "/client-logos/client-xpeng.png", alt: "XPENG" },
];

function Row({ logos, cols }: { logos: { src: string; alt: string }[]; cols: string }) {
  return (
    <div className={`grid ${cols} gap-3 sm:gap-5 items-center`}>
      {logos.map((l, i) => (
        <div key={i} className="flex items-center justify-center h-16 sm:h-20">
          <img
            src={l.src}
            alt={`${l.alt} - Big Things décoration Tunisie`}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="max-h-14 sm:max-h-16 max-w-full w-auto h-auto object-contain"
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
      className="w-full bg-white border-t border-neutral-200 py-3 sm:py-4"
      aria-label={t("Ils nous font confiance")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2 sm:gap-3">
        <p className="text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
          {t("Ils nous font confiance")}
        </p>
        <Row logos={row1} cols="grid-cols-7" />
        <Row logos={row2} cols="grid-cols-7" />
        <Row logos={row3} cols="grid-cols-8" />
      </div>
    </section>
  );
}
