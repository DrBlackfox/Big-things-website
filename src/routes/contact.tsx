import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Big Things Decoration" }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[color:var(--brand-charcoal)] text-white py-10 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-[color:var(--brand-orange)] text-sm font-semibold uppercase tracking-[0.25em]">Contact</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold">Parlons de votre <span className="text-[color:var(--brand-orange)]">projet</span></h1>
          </div>
        </section>
        <section className="py-10 md:py-20">
          <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse gap-12 md:grid md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--brand-orange)]">Adresse</h3><p className="text-neutral-600">10 Rue Ammar Ben Yesser, Radès, Tunisie</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--brand-orange)]">Téléphone</h3><p className="text-neutral-600">+216 20 771 990</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[color:var(--brand-orange)] mt-1 shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--brand-orange)]">Email</h3><p className="text-neutral-600 break-all">darhoumi.w@bigthings.tn<br/>bigthingsdecoration@gmail.com</p></div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[color:var(--brand-orange)] mt-1 font-bold">@</span>
                <div><h3 className="font-semibold text-[color:var(--brand-orange)]">Manager</h3><p className="text-neutral-600">Walid Darhoumi</p></div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input required placeholder="Nom" className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              <input required type="email" placeholder="Email" className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              <input placeholder="Téléphone" className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              <textarea required rows={5} placeholder="Votre message" className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              <button type="submit" className="w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-charcoal)] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition-colors">Envoyer</button>
            </form>
          </div>
        </section>
        <div className="text-center pb-10"><Link to="/" className="text-[color:var(--brand-orange)] font-semibold uppercase text-sm">← Retour</Link></div>
      </main>
      <SiteFooter />
    </div>
  );
}
