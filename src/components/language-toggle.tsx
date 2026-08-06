import { useLang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle, t } = useLang();
  const nextIsArabic = lang === "fr";
  const nextLabel = lang === "fr" ? "العربية" : "Français";
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2">
      <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-xl max-w-[400px] text-[10px] font-mono text-red-600 whitespace-pre-wrap overflow-auto max-h-[300px]">
        For the code present, I get the error below.

Please think step-by-step in order to resolve it.
{`
ZodError: [
  {
    "code": "too_small",
    "minimum": 10,
    "type": "string",
    "inclusive": true,
    "exact": false,
    "message": "String must contain at least 10 character(s)",
    "path": [
      "message"
    ]
  }
]

{
  "timestamp": 1785979755700,
  "error_type": "RUNTIME_ERROR",
  "filename": "...",
  "lineno": 0,
  "colno": 0,
  "stack": "ZodError: [...]"
}
`}
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
