import { useLang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const nextLabel = lang === "fr" ? "العربية" : "Français";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "fr" ? "Passer en arabe" : "Switch to French"}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[color:var(--brand-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
      dir="ltr"
    >
      <Languages size={16} />
      <span>{nextLabel}</span>
    </button>
  );
}
