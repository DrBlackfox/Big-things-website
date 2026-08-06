import { useLang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle, t } = useLang();
  const nextIsArabic = lang === "fr";
  const nextLabel = lang === "fr" ? "العربية" : "Français";
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2">
      <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-xl max-w-[250px] text-xs font-bold text-red-600 animate-pulse text-center">
        NOPE? STILL NOT WORKING? IT DOESN'T SEND TO NEITHER WEB3 FORMS OR THE MAIL , TAKE YOUR TIME TO FIGURE OUT HOW TO DO IT CORRECTLY
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
