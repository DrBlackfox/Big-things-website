import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.avif.asset.json";
import { CONTACT, SOCIAL_LINKS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

const socialIcons = { Instagram, Facebook, LinkedIn: Linkedin };

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Big Things Decoration" width={140} height={56} loading="lazy" decoding="async" className="h-14 w-auto bg-white p-2 rounded" />
          <p className="mt-5 text-sm leading-relaxed max-w-md uppercase tracking-wide space-y-1">
            <span className="block">{t("COMMUNICATION ÉVÉNEMENTIEL HYBRIDE")}</span>
            <span className="block">{t("PUBLICITÉ & SIGNALÉTIQUE")}</span>
            <span className="block">{t("STANDS D'EXPOSITION")}</span>
          </p>
          <div className="mt-5 flex items-center gap-2">
            {SOCIAL_LINKS.map(({ name, href }) => {
              const Icon = socialIcons[name];
              return (
                <Button key={name} asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-background/10 hover:text-brand-orange">
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                    <Icon aria-hidden="true" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">{t("Nos services")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/stands" className="hover:text-[color:var(--brand-orange)]">{t("Stands d'exposition")}</Link></li>
            <li><Link to="/evenementiel" className="hover:text-[color:var(--brand-orange)]">{t("Événementiel")}</Link></li>
            <li><Link to="/communication" className="hover:text-[color:var(--brand-orange)]">{t("Publicité & Signalétique")}</Link></li>
            <li><Link to="/creations" className="hover:text-[color:var(--brand-orange)]">{t("Nos dernières créations")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">{t("Contact")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> {CONTACT.address}</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> <a href={CONTACT.phoneHref} className="hover:text-[color:var(--brand-orange)]" dir="ltr">{CONTACT.phone}</a></li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> <a href={CONTACT.emailHref} className="hover:text-[color:var(--brand-orange)] break-all">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Big Things Decoration. {t("Tous droits réservés.")}</p>
            <Link to="/privacy" className="hover:text-[color:var(--brand-orange)] transition-colors">{t("Politique de confidentialité")}</Link>
          </div>
          <p className="text-right uppercase tracking-wide space-y-1">
            <span className="block">{t("COMMUNICATION ÉVÉNEMENTIEL HYBRIDE")}</span>
            <span className="block">{t("PUBLICITÉ & SIGNALÉTIQUE")}</span>
            <span className="block">{t("STANDS D'EXPOSITION")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
