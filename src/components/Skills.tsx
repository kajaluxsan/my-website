import SectionHeading from "./SectionHeading";
import { languages, skillCategories } from "@/data/profile";

function LevelDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-label={`Level ${level} von 5`}>
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
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Tech Stack"
          description="Die Tools und Technologien, mit denen ich tagtäglich arbeite."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="surface surface-hover p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent-light">
                {cat.title}
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
          ))}

          <div className="surface surface-hover p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Languages
            </h3>
            <ul className="space-y-3">
              {languages.map((s) => (
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
        </div>
      </div>
    </section>
  );
}
