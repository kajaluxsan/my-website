"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "de" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "de";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "de" ? "en" : "de");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export type L<T = string> = { de: T; en: T };

export function pick<T>(value: L<T>, lang: Lang): T {
  return value[lang];
}
