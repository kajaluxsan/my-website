import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Standort", value: "Pfungen, Schweiz" },
  { label: "Fokus", value: "AI · RAG · Backend" },
  { label: "Studium", value: "BSc CS @ ZHAW" },
  { label: "Sprachen", value: "DE · EN · TA" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About"
          title="Wer ich bin"
          description="Ein kurzer Überblick – was mich antreibt und wo ich arbeite."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="surface lg:col-span-2 p-8">
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Ich bin <span className="text-white">Kajaluxan</span> – ein
              Software Engineer, der gerne komplexe Probleme in saubere,
              skalierbare Systeme übersetzt. Aktuell arbeite ich bei{" "}
              <span className="text-accent-light">LogObject AG</span> an Software,
              die in Schweizer Gerichten produktiv im Einsatz ist, und schreibe
              parallel meine Bachelor-Thesis an der ZHAW im Bereich
              graph-basierter RAG-Systeme.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Mein Schwerpunkt liegt auf <span className="text-white">AI- und Retrieval-Systemen</span>{" "}
              (LangChain, Qdrant, Neo4J) sowie auf{" "}
              <span className="text-white">Backend-Engineering</span> mit Java
              Spring Boot, FastAPI und PostgreSQL. Aus meiner Zeit als
              gelernter Mechaniker bringe ich zudem ein gutes Auge für saubere
              Konstruktion und Liebe zum Detail mit.
            </p>
          </article>

          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {facts.map((f) => (
              <li
                key={f.label}
                className="surface surface-hover p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                  {f.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {f.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
