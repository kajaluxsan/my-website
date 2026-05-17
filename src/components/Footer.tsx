"use client";

import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
        <p>
          © {year} {profile.name}. {ui.footer.builtWith[lang]}.
        </p>
        <a
          href={`mailto:${profile.contact.email}`}
          className="transition-colors hover:text-accent-light"
        >
          {profile.contact.email}
        </a>
      </div>
    </footer>
  );
}
