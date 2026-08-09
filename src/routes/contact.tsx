import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CONTACT, abs } from "@/data/site";
import { useT } from "@/lib/i18n";
import { SEOHead } from "@/components/seo-head";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactForm } from "@/lib/contact.functions";
import { toast } from "sonner";

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
  const submit = useServerFn(submitContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };
    
    try {
      // Use standard form submission for Web3Forms as requested
      const formDataObj = new FormData();
      formDataObj.append("access_key", "e43377d9-fadd-412b-b588-952a0dab171e");
      formDataObj.append("name", data.name);
      formDataObj.append("email", data.email);
      formDataObj.append("phone", data.phone);
      formDataObj.append("message", data.message);
      formDataObj.append("subject", `Nouveau message de contact de ${data.name}`);
      formDataObj.append("from_name", "Big Things Website");

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const web3Result = await web3Response.json();
      
      if (web3Result.success) {
        // Also save to our database via server function for records
        await submit({ data });
        setIsSuccess(true);
        toast.success(t("Message envoyé avec succès !"));
      } else {
        console.error("Web3Forms error:", web3Result);
        toast.error(web3Result.message || t("Une erreur est survenue."));
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(t("Une erreur est survenue. Veuillez réessayer."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <SEOHead 
        title={t("Contact — Big Things Decoration")} 
        description={t("Contactez Big Things Decoration à Radès pour vos stands, enseignes lumineuses et projets événementiels. Devis gratuit.")} 
        canonical={abs("/contact")}
      />
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
                <a href={CONTACT.phoneHref} className="text-neutral-600 hover:text-[color:var(--brand-orange)]" dir="ltr">{CONTACT.phone}</a>
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
          
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 p-8 text-center space-y-4">
              <CheckCircle2 className="mx-auto text-green-500 w-16 h-16" />
              <h3 className="text-xl font-bold text-green-800">{t("Merci !")}</h3>
              <p className="text-green-700">{t("Votre message a été envoyé avec succès. Nous vous contacterons sous peu.")}</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-[color:var(--brand-orange)] font-semibold uppercase text-sm hover:underline"
              >
                {t("Envoyer un autre message")}
              </button>
            </div>
          ) : (
            <form 
              className="space-y-4" 
              action="https://api.web3forms.com/submit" 
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="e43377d9-fadd-412b-b588-952a0dab171e" />
              <input type="hidden" name="subject" value="Nouveau message de contact - Big Things" />
              <input type="hidden" name="from_name" value="Big Things Website" />
              {/* Optional: Redirect after submission if JS fails, but we handle it in handleSubmit */}
              {/* <input type="hidden" name="redirect" value="https://web3forms.com/success"> */}

              <label className="block">
                <span className="sr-only">{t("Nom")}</span>
                <input name="name" required placeholder={t("Nom")} aria-label={t("Nom")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              </label>
              <label className="block">
                <span className="sr-only">{t("Email")}</span>
                <input name="email" required type="email" placeholder={t("Email")} aria-label={t("Email")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              </label>
              <label className="block">
                <span className="sr-only">{t("Téléphone")}</span>
                <input name="phone" placeholder={t("Téléphone")} aria-label={t("Téléphone")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              </label>
              <label className="block">
                <span className="sr-only">{t("Votre message")}</span>
                <textarea name="message" required rows={5} placeholder={t("Votre message")} aria-label={t("Votre message")} className="w-full border border-neutral-300 px-4 py-3 focus:border-[color:var(--brand-orange)] outline-none" />
              </label>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-charcoal)] disabled:bg-neutral-400 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="animate-spin w-4 h-4" />}
                {t("Envoyer")}
              </button>
            </form>
          )}
        </div>
      </section>
      <div className="text-center pb-10"><Link to="/" className="text-[color:var(--brand-orange)] font-semibold uppercase text-sm">{t("← Retour")}</Link></div>
    </PageShell>
  );
}
