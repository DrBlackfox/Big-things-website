import { useT } from "@/lib/i18n";

const logos = [
  { src: "/client-logos/sherbrooke.png", alt: "Académie Sherbrooke" },
  { src: "/client-logos/attijari.png", alt: "Attijari Leasing" },
  { src: "/client-logos/att.png", alt: "Agence Technique des Transports Terrestres" },
  { src: "/client-logos/bestevent.png", alt: "Best Event" },
  { src: "/client-logos/bomi.png", alt: "Bomi" },
  { src: "/client-logos/client-armee.png", alt: "Armée Tunisienne" },
  { src: "/client-logos/genesis.png", alt: "Genesis" },
  { src: "/client-logos/ghs.png", alt: "GHS" },
  { src: "/client-logos/hyundai.png", alt: "Hyundai" },
  { src: "/client-logos/iseki.png", alt: "Iseki" },
  { src: "/client-logos/client-caverne.png", alt: "Espace La Caverne" },
  { src: "/client-logos/client-bosphore.png", alt: "Le Bosphore" },
  { src: "/client-logos/client-carrefour.png", alt: "Le Carrefour Agricole" },
  { src: "/client-logos/client-ladybug.png", alt: "Ladybug" },
  { src: "/client-logos/client-meublealoui.png", alt: "Meuble Aloui" },
  { src: "/client-logos/client-perla.png", alt: "Perla Group" },
  { src: "/client-logos/client-tulip.png", alt: "Tulip Rent A Car" },
  { src: "/client-logos/client-mabrouka.png", alt: "Mabrouka" },
  { src: "/client-logos/client-voltenergy.png", alt: "Voltenergy Solar Systems" },
  { src: "/client-logos/client-mediterranee.png", alt: "La Méditerranée Immobilière" },
  { src: "/client-logos/client-xiaomi.png", alt: "Xiaomi" },
];


export function ClientsMarquee() {
  const t = useT();
  const strip = [...logos, ...logos];
  return (
    <div
      dir="ltr"
      className="w-full bg-white border-t border-neutral-200 overflow-hidden group"
      aria-label={t("Ils nous font confiance")}
    >
      <div className="flex items-center marquee-track" style={{ width: "max-content" }}>
        {strip.map((l, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-8 shrink-0"
            style={{ height: 64, width: 160 }}
          >
            <img
              src={l.src}
              alt={l.alt}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              width={130}
              height={44}
              className="max-h-11 max-w-[130px] w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>

  );
}
