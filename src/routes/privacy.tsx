import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";
import { CONTACT, abs } from "@/data/site";
import { Shield, Lock, Eye, FileText, UserCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Big Things Decoration" },
      { name: "description", content: "Politique de confidentialité de Big Things Decoration. Protection de vos données personnelles." },
      { property: "og:title", content: "Politique de confidentialité — Big Things Decoration" },
      { property: "og:description", content: "Comment nous protégeons vos données personnelles chez Big Things Decoration." },
      { property: "og:url", content: abs("/privacy") },
    ],
    links: [{ rel: "canonical", href: abs("/privacy") }],
  }),
  component: Privacy,
});

function Privacy() {
  const t = useT();

  const sections = [
    {
      title: t("Introduction"),
      icon: <Shield className="text-[color:var(--brand-orange)]" />,
      content: t("Chez Big Things Decoration, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité détaille comment nous collectons, utilisons et protégeons vos informations dans le cadre de nos activités de conception de stands, signalétique et événementiel."),
    },
    {
      title: t("Collecte des données"),
      icon: <FileText className="text-[color:var(--brand-orange)]" />,
      content: t("Nous collectons les informations que vous nous fournissez directement via nos formulaires de contact ou lors de nos échanges commerciaux (nom, email, téléphone, détails du projet)."),
    },
    {
      title: t("Utilisation des données"),
      icon: <Eye className="text-[color:var(--brand-orange)]" />,
      content: t("Vos données sont utilisées exclusivement pour répondre à vos demandes de devis, gérer vos projets et assurer le suivi de nos prestations techniques et logistiques."),
    },
    {
      title: t("Protection des données"),
      icon: <Lock className="text-[color:var(--brand-orange)]" />,
      content: t("Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos informations contre tout accès non autorisé. Vos données ne sont jamais vendues à des tiers."),
    },
    {
      title: t("Vos droits"),
      icon: <UserCheck className="text-[color:var(--brand-orange)]" />,
      content: t("Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles."),
    },
  ];

  return (
    <PageShell>
      <section className="bg-[color:var(--brand-charcoal)] text-white py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold">{t("Politique de confidentialité")}</h1>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 mt-1">{s.icon}</div>
              <div>
                <h2 className="text-xl font-bold mb-3 text-[color:var(--brand-charcoal)]">{s.title}</h2>
                <p className="text-neutral-600 leading-relaxed">{s.content}</p>
              </div>
            </div>
          ))}

          <div className="bg-neutral-50 p-8 border-l-4 border-[color:var(--brand-orange)]">
            <div className="flex gap-6">
              <div className="shrink-0 mt-1"><Mail className="text-[color:var(--brand-orange)]" /></div>
              <div>
                <h2 className="text-xl font-bold mb-3 text-[color:var(--brand-charcoal)]">{t("Contactez-nous")}</h2>
                <p className="text-neutral-600">
                  {t("Pour toute question concernant vos données, vous pouvez nous contacter à")} :{" "}
                  <a href={CONTACT.emailHref} className="text-[color:var(--brand-orange)] font-semibold hover:underline">
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-center pb-10">
        <Link to="/" className="text-[color:var(--brand-orange)] font-semibold uppercase text-sm">
          {t("← Retour")}
        </Link>
      </div>
    </PageShell>
  );
}
