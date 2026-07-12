import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.avif.asset.json";
import { CONTACT } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Big Things Decoration" width={140} height={56} loading="lazy" decoding="async" className="h-14 w-auto bg-white p-2 rounded" />
          <p className="mt-5 text-sm leading-relaxed max-w-md uppercase tracking-wide space-y-1">
            <span className="block">COMMUNICATION ÉVÉNEMENTIEL HYBRIDE</span>
            <span className="block">PUBLICITÉ & SIGNALÉTIQUE</span>
            <span className="block">STANDS D'EXPOSITION</span>
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Nos services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/stands" className="hover:text-[color:var(--brand-orange)]">Stands d'exposition</Link></li>
            <li><Link to="/evenementiel" className="hover:text-[color:var(--brand-orange)]">Événementiel</Link></li>
            <li><Link to="/publicite" className="hover:text-[color:var(--brand-orange)]">Publicité & Signalétique</Link></li>
            <li><Link to="/creations" className="hover:text-[color:var(--brand-orange)]">Nos dernières créations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> {CONTACT.address}</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> <a href={CONTACT.phoneHref} className="hover:text-[color:var(--brand-orange)]">{CONTACT.phone}</a></li>

            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-[color:var(--brand-orange)]" /> <a href={CONTACT.emailHref} className="hover:text-[color:var(--brand-orange)] break-all">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Big Things Decoration. Tous droits réservés.</p>
          <p className="text-right uppercase tracking-wide space-y-1">
            <span className="block">COMMUNICATION ÉVÉNEMENTIEL HYBRIDE</span>
            <span className="block">PUBLICITÉ & SIGNALÉTIQUE</span>
            <span className="block">STANDS D'EXPOSITION</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
