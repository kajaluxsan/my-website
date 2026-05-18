"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

export type Lang = "de" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Persist the active locale in a cookie so middleware on the next visit
  // hits the right /de or /en redirect without flicker.
  useEffect(() => {
    document.documentElement.lang = initialLang;
    document.cookie = `lang=${initialLang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  }, [initialLang]);

  // Reset scroll on real refresh (not on locale switch).
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const setLang = useCallback(
    (l: Lang) => {
      if (l === initialLang) return;
      const next = pathname.replace(/^\/(de|en)(?=\/|$)/, `/${l}`);
      document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      router.push(next || `/${l}`);
    },
    [initialLang, pathname, router],
  );

  const toggleLang = useCallback(() => {
    setLang(initialLang === "de" ? "en" : "de");
  }, [initialLang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang: initialLang, setLang, toggleLang }}>
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
