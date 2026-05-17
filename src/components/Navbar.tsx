"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ProfileCard from "./ProfileCard";

export default function Navbar() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems = [
    { href: "#about", label: ui.nav.about[lang] },
    { href: "#experience", label: ui.nav.experience[lang] },
    { href: "#projects", label: ui.nav.projects[lang] },
    { href: "#skills", label: ui.nav.skills[lang] },
    { href: "#education", label: ui.nav.education[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-brand-950/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex h-16 items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setProfileOpen(true)}
            aria-label={ui.profileCard.openLabel[lang]}
            className="group relative flex items-center gap-2 rounded-full p-1 pr-3 transition-all hover:bg-white/[0.06]"
          >
            <span className="relative block h-9 w-9 overflow-hidden rounded-full border border-white/20 ring-2 ring-accent/0 transition-all group-hover:ring-accent/40">
              <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900 text-[10px] font-bold text-white/90">
                KM
              </span>
              {profile.image && (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  sizes="36px"
                  className="relative object-cover"
                  priority
                />
              )}
            </span>
            <span className="hidden text-xs font-semibold tracking-wide text-white sm:inline">
              Kajaluxan<span className="text-accent">.</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-accent/30 md:inline-block"
            >
              {ui.nav.cta[lang]}
            </a>

            <button
              type="button"
              aria-label={ui.nav.menu[lang]}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-brand-950/95 backdrop-blur-md lg:hidden">
            <ul className="container-wide flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white"
                >
                  {ui.nav.cta[lang]}
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <ProfileCard open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
