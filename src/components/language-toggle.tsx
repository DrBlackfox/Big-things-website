import { useLang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle, t } = useLang();
  const nextIsArabic = lang === "fr";
  const nextLabel = lang === "fr" ? "العربية" : "Français";
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2">
      <div className="bg-white/90 backdrop-blur-sm text-[color:var(--brand-charcoal)] px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 max-w-[250px] text-center">
        {t("can you make the requests on the contact form get sent directly to the contact@bigthings.tn mail? or fo i need to use a third party to receive those requests??")}
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={lang === "fr" ? "Passer en arabe" : "Switch to French"}
        className={`inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[color:var(--brand-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors ${nextIsArabic ? "" : "uppercase tracking-wider"}`}
        dir={nextIsArabic ? "rtl" : "ltr"}
      >
        <Languages size={16} />
        <span>{nextLabel}</span>
      </button>
    </div>
  );
}
