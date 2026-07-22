import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.avif.asset.json";
import { useT } from "@/lib/i18n";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/stands", label: "Stands d'exposition" },
  { to: "/evenementiel", label: "Événementiel" },
  { to: "/communication", label: "Publicité & Signalétique" },
  { to: "/creations", label: "Nos dernières créations" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useT();
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Big Things Decoration" width={120} height={48} fetchPriority="high" decoding="async" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium tracking-wide uppercase text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-orange)] transition-colors"
              activeProps={{ className: "text-[color:var(--brand-orange)]" }}
            >
              {t(n.label)}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[color:var(--brand-orange)] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[color:var(--brand-charcoal)] transition-colors"
        >
          {t("Devis gratuit")}
        </Link>
        <button
          className="lg:hidden p-2 text-[color:var(--brand-charcoal)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("Fermer le menu") : t("Ouvrir le menu")}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm font-medium uppercase tracking-wide text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-orange)]"
              >
                {t(n.label)}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-[color:var(--brand-orange)] text-white text-sm font-semibold uppercase tracking-wide"
            >
              {t("Devis gratuit")}
            </Link>
          </div>
        </div>
      )}
      <ClientsMarquee />
    </header>
  );
}
