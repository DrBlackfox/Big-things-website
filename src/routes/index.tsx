import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Award, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import stands from "@/assets/stands.webp.asset.json";
import evenementiel from "@/assets/evenementiel.webp.asset.json";
import publicite from "@/assets/publicite.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    title: "Stands d'exposition",
    subtitle: "Création et réalisation de stands sur mesure",
    description:
      "Conception, fabrication et installation de stands d'exposition qui captivent et transforment vos visiteurs en clients.",
    image: stands.url,
    to: "/stands" as const,
  },
  {
    title: "Événementiel",
    subtitle: "Communication événementielle hybride",
    description:
      "Des expériences fluides qui connectent le public sur place et en ligne, avec un design créatif et une production premium.",
    image: evenementiel.url,
    to: "/evenementiel" as const,
  },
  {
    title: "Publicité & Signalétique",
    subtitle: "Enseignes, caissons lumineux & affichage éclairé",
    description:
      "Enseignes lumineuses, lettrages, affichage extérieur et signalétique haute visibilité pour marquer votre présence.",
    image: publicite.url,
    to: "/publicite" as const,
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Années d'expérience" },
  { icon: Users, value: "500+", label: "Clients satisfaits" },
  { icon: Sparkles, value: "1 200+", label: "Projets livrés" },
  { icon: Wrench, value: "24/7", label: "Support & installation" },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--brand-charcoal)] text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${stands.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-charcoal)] via-[color:var(--brand-charcoal)]/85 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-block text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              Big Things Decoration
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Vos idées,{" "}
              <span className="text-[color:var(--brand-orange)]">grandeur nature.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed max-w-xl">
              Stands d'exposition, événementiel hybride, enseignes et signalétique lumineuse.
              Nous transformons vos concepts en expériences visuelles impactantes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[color:var(--brand-orange)] hover:bg-white hover:text-[color:var(--brand-charcoal)] text-white px-8 py-4 font-semibold uppercase tracking-wide text-sm transition-colors"
              >
                Demander un devis <ArrowRight size={18} />
              </Link>
              <Link
                to="/stands"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-[color:var(--brand-orange)] hover:text-[color:var(--brand-orange)] px-8 py-4 font-semibold uppercase tracking-wide text-sm transition-colors"
              >
                Nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <span className="text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.25em]">
              Qui sommes-nous
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] leading-tight">
              L'agence qui donne <span className="text-[color:var(--brand-orange)]">vie</span> à vos marques.
            </h2>
          </div>
          <div className="text-neutral-700 leading-relaxed space-y-4">
            <p>
              Chez Big Things Decoration, nous conjuguons design créatif, production premium et
              intégration digitale pour livrer des événements et des espaces qui amplifient votre
              marque et laissent une empreinte durable.
            </p>
            <p>
              De la conception 3D à l'installation finale, notre équipe pilote chaque étape avec
              une exigence de qualité, de sécurité et de délais.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.25em]">
              Nos services
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] leading-tight">
              Trois expertises. Un seul <span className="text-[color:var(--brand-orange)]">savoir-faire.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group bg-white overflow-hidden border border-neutral-200 hover:border-[color:var(--brand-orange)] transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[color:var(--brand-charcoal)] uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--brand-orange)] font-medium">
                    {s.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{s.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-orange)]">
                    En savoir plus <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[color:var(--brand-charcoal)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto text-[color:var(--brand-orange)]" size={36} />
              <div className="mt-4 text-4xl md:text-5xl font-bold">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--brand-charcoal)] leading-tight">
            Prêt à faire <span className="text-[color:var(--brand-orange)]">grande impression</span> ?
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Parlez-nous de votre projet. Notre équipe vous accompagne du premier croquis à
            l'installation finale.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-charcoal)] text-white px-10 py-4 font-semibold uppercase tracking-wide text-sm transition-colors"
          >
            Contactez-nous <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
