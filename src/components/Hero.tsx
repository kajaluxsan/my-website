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
      style={{
        background:
          "radial-gradient(ellipse 800px 500px at 50% 0%, rgba(106,55,119,0.35), transparent 60%), radial-gradient(ellipse 600px 400px at 90% 40%, rgba(156,95,176,0.12), transparent 60%), linear-gradient(180deg, #0c0610 0%, #160a1c 50%, #0c0610 100%)",
      }}
    >

      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-900/60 px-4 py-1.5 text-xs font-medium text-white/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            {ui.hero.available[lang]}
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            {profile.name}
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-brand-900/60 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-brand-900/80"
            >
              {ui.hero.getInTouch[lang]}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          {profile.image ? (
            <Image
              src={profile.image}
              alt={profile.name}
              width={288}
              height={288}
              priority
              fetchPriority="high"
              className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
            />
          ) : (
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-7xl font-bold text-white/90 sm:h-72 sm:w-72 sm:text-8xl">
              KM
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
