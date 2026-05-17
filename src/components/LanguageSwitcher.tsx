"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: Props) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={ui.langSwitch.label[lang]}
      className={`inline-flex items-center rounded-full border border-white/15 bg-brand-900/60 p-0.5 text-xs font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "de"
            ? "bg-accent text-white shadow-sm shadow-accent/30"
            : "text-white/60 hover:text-white"
        }`}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-accent text-white shadow-sm shadow-accent/30"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
