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
import caverne from "@/assets/client-caverne.png.asset.json";
import bosphore from "@/assets/client-bosphore.png.asset.json";
import carrefour from "@/assets/client-carrefour.png.asset.json";
import ladybug from "@/assets/client-ladybug.png.asset.json";
import meublealoui from "@/assets/client-meublealoui.png.asset.json";
import perla from "@/assets/client-perla.png.asset.json";
import tulip from "@/assets/client-tulip.png.asset.json";
import mabrouka from "@/assets/client-mabrouka.png.asset.json";
import voltenergy from "@/assets/client-voltenergy.png.asset.json";
import mediterranee from "@/assets/client-mediterranee.png.asset.json";
import xiaomi from "@/assets/client-xiaomi.png.asset.json";

import { useT } from "@/lib/i18n";

const row1 = [
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
  { src: caverne.url, alt: "Espace La Caverne" },
];

const row2 = [
  { src: bosphore.url, alt: "Le Bosphore" },
  { src: carrefour.url, alt: "Le Carrefour Agricole" },
  { src: ladybug.url, alt: "Ladybug" },
  { src: meublealoui.url, alt: "Meuble Aloui" },
  { src: perla.url, alt: "Perla Group" },
  { src: tulip.url, alt: "Tulip Rent A Car" },
  { src: mabrouka.url, alt: "Mabrouka" },
  { src: voltenergy.url, alt: "Voltenergy Solar Systems" },
  { src: mediterranee.url, alt: "La Méditerranée Immobilière" },
  { src: xiaomi.url, alt: "Xiaomi" },
  { src: perla.url, alt: "Perla Group" },
];

function Row({ logos }: { logos: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-11 gap-2 sm:gap-4 items-center">
      {logos.map((l, i) => (
        <div key={i} className="flex items-center justify-center h-14 sm:h-16">
          <img
            src={l.src}
            alt={l.alt}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="max-h-10 sm:max-h-12 max-w-full w-auto h-auto object-contain"
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
        <Row logos={row1} />
        <Row logos={row2} />
      </div>
    </section>
  );
}
