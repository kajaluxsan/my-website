"use client";

import SectionHeading from "./SectionHeading";
import { languages, skillCategories } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

function LevelDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-label={`Level ${level} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-accent" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={ui.skills.eyebrow[lang]}
          title={ui.skills.title[lang]}
          description={ui.skills.description[lang]}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const titleL = ui.skillCategories[cat.title];
            const title = titleL ? titleL[lang] : cat.title;
            return (
              <div key={cat.title} className="surface surface-hover p-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent-light">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-white/85">{s.name}</span>
                      <LevelDots level={s.level} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="surface surface-hover p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent-light">
              {ui.skills.languagesTitle[lang]}
            </h3>
            <ul className="space-y-3">
              {languages.map((s) => (
                <li
                  key={s.name.en}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-sm text-white/85">{s.name[lang]}</span>
                  <LevelDots level={s.level} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
