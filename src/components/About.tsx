"use client";

import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

function renderRich(text: string) {
  // Replace <name>...</name>, <accent>...</accent>, <strong>...</strong> markers with span elements.
  const parts: Array<{ type: "name" | "accent" | "strong" | "plain"; text: string }> = [];
  const regex = /<(name|accent|strong)>(.*?)<\/\1>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "plain", text: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: match[1] as "name" | "accent" | "strong", text: match[2] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ type: "plain", text: text.slice(lastIndex) });
  }
  return parts.map((p, i) => {
    if (p.type === "name") return <span key={i} className="text-white">{p.text}</span>;
    if (p.type === "accent") return <span key={i} className="text-accent-light">{p.text}</span>;
    if (p.type === "strong") return <span key={i} className="text-white">{p.text}</span>;
    return <span key={i}>{p.text}</span>;
  });
}

export default function About() {
  const { lang } = useLang();

  const facts = [
    { label: ui.about.facts.location[lang], value: ui.about.factValues.location[lang] },
    { label: ui.about.facts.focus[lang], value: ui.about.factValues.focus[lang] },
    { label: ui.about.facts.studies[lang], value: ui.about.factValues.studies[lang] },
    { label: ui.about.facts.languages[lang], value: ui.about.factValues.languages[lang] },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={ui.about.eyebrow[lang]}
          title={ui.about.title[lang]}
          description={ui.about.description[lang]}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="surface lg:col-span-2 p-8">
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              {renderRich(ui.about.para1[lang])}
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              {renderRich(ui.about.para2[lang])}
            </p>
          </article>

          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {facts.map((f) => (
              <li key={f.label} className="surface surface-hover p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                  {f.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{f.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
