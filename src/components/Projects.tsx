"use client";

import SectionHeading from "./SectionHeading";
import { projects } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Projects() {
  const { lang } = useLang();

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container-wide">
        <SectionHeading
          eyebrow={ui.projects.eyebrow[lang]}
          title={ui.projects.title[lang]}
          description={ui.projects.description[lang]}
        />

        <div className="grid gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="surface surface-hover group relative overflow-hidden p-6 sm:p-8"
            >
              <div>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="text-xs text-white/50">{p.location}</p>
                  </div>
                  <time className="font-mono text-xs text-white/50">
                    {p.period}
                  </time>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-white/70 sm:text-base">
                  {p.description[lang]}
                </p>

                {p.highlights[lang].length > 0 && (
                  <ul className="mb-5 space-y-2">
                    {p.highlights[lang].map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-white/65"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mt-1 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {p.metric && (
                  <div className="mb-5 inline-block rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 font-mono text-xs text-accent-light sm:text-sm">
                    {p.metric}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
