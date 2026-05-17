"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-brand-400/10 blur-[100px]"
      />

      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {ui.hero.available[lang]}
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-accent-light sm:text-xl">
            {profile.title[lang]}{" "}
            <span className="text-white/40">·</span>{" "}
            <span className="text-white/70">{profile.subtitle[lang]}</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {profile.about[lang]}
          </p>

          <p className="mt-6 max-w-2xl border-l-2 border-accent/60 pl-4 text-sm italic text-white/60 sm:text-base">
            «{profile.motto[lang]}»
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              {ui.hero.viewProjects[lang]}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.07]"
            >
              {ui.hero.getInTouch[lang]}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/40 via-brand-400/30 to-transparent opacity-70 blur-2xl"
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-brand-700 to-brand-900 shadow-2xl sm:h-72 sm:w-72">
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/90 sm:text-8xl">
                KM
              </div>
              {profile.image && (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 640px) 18rem, 14rem"
                  className="relative object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
