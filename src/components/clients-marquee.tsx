import sherbrooke from "@/assets/client-sherbrooke.png.asset.json";
import attijari from "@/assets/client-attijari.png.asset.json";
import att from "@/assets/client-att.png.asset.json";
import bestevent from "@/assets/client-bestevent.png.asset.json";
import bomi from "@/assets/client-bomi.png.asset.json";
import armee from "@/assets/client-armee.png.asset.json";
import genesis from "@/assets/client-genesis.png.asset.json";
import ghs from "@/assets/client-ghs.png.asset.json";
import hyundai from "@/assets/client-hyundai.png.asset.json";
import iseki from "@/assets/client-iseki.png.asset.json";
import { useT } from "@/lib/i18n";

const logos = [
  { src: sherbrooke.url, alt: "Académie Sherbrooke" },
  { src: attijari.url, alt: "Attijari Leasing" },
  { src: att.url, alt: "Agence Technique des Transports Terrestres" },
  { src: bestevent.url, alt: "Best Event" },
  { src: bomi.url, alt: "Bomi" },
  { src: armee.url, alt: "Armée Tunisienne" },
  { src: genesis.url, alt: "Genesis" },
  { src: ghs.url, alt: "GHS" },
  { src: hyundai.url, alt: "Hyundai" },
  { src: iseki.url, alt: "Iseki" },
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
              loading="lazy"
              decoding="async"
              className="max-h-11 max-w-[130px] w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
