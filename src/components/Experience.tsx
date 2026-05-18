"use client";

import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={ui.experience.eyebrow[lang]}
          title={ui.experience.title[lang]}
          description={ui.experience.description[lang]}
        />

        <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.period[lang]}`}
              className="relative"
            >
              <span
                className={`absolute -left-[33px] sm:-left-[41px] flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-brand-950 ${
                  exp.current
                    ? "bg-accent shadow-[0_0_10px_rgba(106,55,119,0.7)]"
                    : "bg-brand-400"
                }`}
                aria-hidden
              />

              <article className="surface surface-hover p-6">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role[lang]}
                  </h3>
                  <time className="font-mono text-xs text-white/50">
                    {exp.period[lang]}
                  </time>
                </div>
                <p className="mb-4 text-sm font-medium text-accent-light">
                  {exp.company}{" "}
                  <span className="text-white/40">· {exp.location}</span>
                </p>
                {exp.bullets && exp.bullets[lang].length > 0 && (
                  <ul className="space-y-2">
                    {exp.bullets[lang].map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-white/65"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
