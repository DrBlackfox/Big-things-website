import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CONTACT, abs } from "@/data/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Big Things Decoration" },
      { name: "description", content: "Contactez Big Things Decoration à Radès pour vos stands, enseignes lumineuses et projets événementiels. Devis gratuit." },
      { property: "og:title", content: "Contact — Big Things Decoration" },
      { property: "og:description", content: "Contactez Big Things Decoration à Radès pour vos stands, enseignes lumineuses et projets événementiels. Devis gratuit." },
      { property: "og:url", content: abs("/contact") },
    ],
    links: [{ rel: "canonical", href: abs("/contact") }],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();
  return (
    <PageShell>
      <section className="bg-[color:var(--brand-charcoal)] text-white py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.25em]">{t("Contact")}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold">{t("Parlons de votre")} <span className="text-[color:var(--brand-orange)]">{t("projet")}</span></h1>
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse gap-12 md:grid md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
              <div>
                <h2 className="font-semibold text-[color:var(--brand-orange)]">{t("Adresse")}</h2>
                <p className="text-neutral-600">{CONTACT.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
              <div>
                <h2 className="font-semibold text-[color:var(--brand-orange)]">{t("Téléphone")}</h2>
                <a href={CONTACT.phoneHref} className="text-neutral-600 hover:text-[color:var(--brand-orange)]">{CONTACT.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
              <div>
                <h2 className="font-semibold text-[color:var(--brand-orange)]">{t("Email")}</h2>
                <a href={CONTACT.emailHref} className="text-neutral-600 break-all hover:text-[color:var(--brand-orange)]">{CONTACT.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[color:var(--brand-orange)] mt-1 font-bold" aria-hidden>@</span>
              <div>
                <h2 className="font-semibold text-[color:var(--brand-orange)]">{t("Manager")}</h2>
                <p className="text-neutral-600">{CONTACT.manager}</p>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="sr-only">{t("Nom")}</span>
              <input required placeholder={t("Nom")} aria-label={t("Nom")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
            </label>
            <label className="block">
              <span className="sr-only">{t("Email")}</span>
              <input required type="email" placeholder={t("Email")} aria-label={t("Email")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
            </label>
            <label className="block">
              <span className="sr-only">{t("Téléphone")}</span>
              <input placeholder={t("Téléphone")} aria-label={t("Téléphone")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
            </label>
            <label className="block">
              <span className="sr-only">{t("Votre message")}</span>
              <textarea required rows={5} placeholder={t("Votre message")} aria-label={t("Votre message")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
            </label>
            <button type="submit" className="w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-charcoal)] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition-colors">{t("Envoyer")}</button>
          </form>
        </div>
      </section>
      <div className="text-center pb-10"><Link to="/" className="text-[color:var(--brand-orange)] font-semibold uppercase text-sm">{t("← Retour")}</Link></div>
    </PageShell>
  );
}
