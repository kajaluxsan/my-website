"use client";

import SectionHeading from "./SectionHeading";
import { certificates, education } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={ui.education.eyebrow[lang]}
          title={ui.education.title[lang]}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {education.map((e) => (
              <article
                key={e.degree.en}
                className="surface surface-hover p-6"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {e.degree[lang]}
                  </h3>
                  <time className="font-mono text-xs text-white/50">
                    {e.period}
                  </time>
                </div>
                <p className="text-sm text-accent-light">
                  {e.school}{" "}
                  <span className="text-white/40">· {e.location}</span>
                </p>
              </article>
            ))}
          </div>

          <div>
            <div className="surface surface-hover p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
                {ui.education.certificates[lang]}
              </h3>
              <ul className="space-y-4">
                {certificates.map((c) => (
                  <li key={c.name.en}>
                    <p className="text-sm font-semibold text-white">
                      {c.name[lang]}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
