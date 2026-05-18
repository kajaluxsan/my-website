import type { L } from "./LanguageProvider";

export const ui = {
  nav: {
    about: { de: "Über mich", en: "About" } satisfies L,
    experience: { de: "Erfahrung", en: "Experience" } satisfies L,
    projects: { de: "Projekte", en: "Projects" } satisfies L,
    skills: { de: "Skills", en: "Skills" } satisfies L,
    education: { de: "Ausbildung", en: "Education" } satisfies L,
    contact: { de: "Kontakt", en: "Contact" } satisfies L,
    cta: { de: "Lass uns reden", en: "Let's talk" } satisfies L,
    menu: { de: "Menü öffnen", en: "Open menu" } satisfies L,
  },
  hero: {
    available: {
      de: "Offen für neue Herausforderungen",
      en: "Open to new challenges",
    } satisfies L,
    viewProjects: {
      de: "Projekte ansehen",
      en: "View projects",
    } satisfies L,
    getInTouch: {
      de: "Kontakt aufnehmen",
      en: "Get in touch",
    } satisfies L,
  },
  about: {
    eyebrow: { de: "Über mich", en: "About" } satisfies L,
    title: { de: "Wer ich bin", en: "Who I am" } satisfies L,
    description: {
      de: "Ein kurzer Überblick – was mich antreibt und wo ich arbeite.",
      en: "A short intro – what drives me and where I work.",
    } satisfies L,
    facts: {
      location: { de: "Standort", en: "Location" } satisfies L,
      focus: { de: "Fokus", en: "Focus" } satisfies L,
      studies: { de: "Studium", en: "Studies" } satisfies L,
      languages: { de: "Sprachen", en: "Languages" } satisfies L,
    },
    factValues: {
      location: { de: "Winterthur, Zürich, Schweiz", en: "Winterthur, Zürich, Switzerland" } satisfies L,
      focus: { de: "KI · RAG · Backend", en: "AI · RAG · Backend" } satisfies L,
      studies: { de: "BSc Informatik @ ZHAW", en: "BSc CS @ ZHAW" } satisfies L,
      languages: { de: "DE · EN · TA", en: "DE · EN · TA" } satisfies L,
    },
    para1: {
      de: 'Ich bin <name>Kajaluxan</name> – ein Software Engineer, der gerne komplexe Probleme in saubere, skalierbare Systeme übersetzt. Aktuell arbeite ich bei <accent>LogObject AG</accent> an Software, die in Schweizer Gerichten produktiv im Einsatz ist, und schreibe parallel meine Bachelorarbeit an der ZHAW im Bereich graph-basierter RAG-Systeme.',
      en: "I'm <name>Kajaluxan</name> – a software engineer who enjoys turning complex problems into clean, scalable systems. I currently work at <accent>LogObject AG</accent> on software running in production in Swiss courts, while writing my bachelor thesis at ZHAW on graph-based RAG systems.",
    } satisfies L,
    para2: {
      de: "Mein Schwerpunkt liegt auf <strong>KI- und Retrieval-Systemen</strong> (LangChain, Qdrant, Neo4J) sowie auf <strong>Backend-Entwicklung</strong> mit Java Spring Boot, FastAPI und PostgreSQL. Aus meiner Zeit als gelernter Mechaniker bringe ich zudem ein gutes Auge für saubere Konstruktion und Liebe zum Detail mit.",
      en: "My focus is on <strong>AI and retrieval systems</strong> (LangChain, Qdrant, Neo4J) and on <strong>backend engineering</strong> with Java Spring Boot, FastAPI and PostgreSQL. From my time as a trained mechanic I bring a sharp eye for clean construction and attention to detail.",
    } satisfies L,
  },
  achievements: {
    eyebrow: {
      de: "Wichtige Erfolge",
      en: "Key Achievements",
    } satisfies L,
    title: {
      de: "Was ich geliefert habe",
      en: "What I've delivered",
    } satisfies L,
    description: {
      de: "Konkrete Resultate aus den letzten Projekten – von der Datenbankmigration bis zur KI-Evaluation.",
      en: "Concrete results from recent projects – from database migrations to AI evaluation.",
    } satisfies L,
  },
  experience: {
    eyebrow: {
      de: "Berufserfahrung",
      en: "Professional Experience",
    } satisfies L,
    title: { de: "Werdegang", en: "Career" } satisfies L,
    description: {
      de: "Vom Mechaniker EFZ über IT-Support bis zum Software-Engineering bei LogObject AG.",
      en: "From mechanical apprenticeship via IT support to software engineering at LogObject AG.",
    } satisfies L,
  },
  projects: {
    eyebrow: {
      de: "Ausgewählte Projekte",
      en: "Selected Projects",
    } satisfies L,
    title: {
      de: "Projekte & Forschung",
      en: "Projects & Research",
    } satisfies L,
    description: {
      de: "Ausgewählte Arbeiten im Bereich RAG, LLMs und Backend-Entwicklung.",
      en: "Selected work on RAG, LLMs and backend engineering.",
    } satisfies L,
  },
  skills: {
    eyebrow: {
      de: "Skills & Technologien",
      en: "Skills & Technologies",
    } satisfies L,
    title: { de: "Tech-Stack", en: "Tech Stack" } satisfies L,
    description: {
      de: "Die Tools und Technologien, mit denen ich tagtäglich arbeite.",
      en: "The tools and technologies I work with every day.",
    } satisfies L,
    languagesTitle: { de: "Sprachen", en: "Languages" } satisfies L,
  },
  skillCategories: {
    Languages: { de: "Programmiersprachen", en: "Languages" } satisfies L,
    "AI & Machine Learning": {
      de: "KI & Machine Learning",
      en: "AI & Machine Learning",
    } satisfies L,
    "Backend & Engineering": {
      de: "Backend & Engineering",
      en: "Backend & Engineering",
    } satisfies L,
    "Full-Stack": { de: "Full-Stack", en: "Full-Stack" } satisfies L,
    "Basic Knowledge": {
      de: "Grundkenntnisse",
      en: "Basic Knowledge",
    } satisfies L,
  } as Record<string, L>,
  education: {
    eyebrow: {
      de: "Ausbildung & Zertifikate",
      en: "Education & Certificates",
    } satisfies L,
    title: { de: "Ausbildung", en: "Education" } satisfies L,
    certificates: { de: "Zertifikate", en: "Certificates" } satisfies L,
  },
  contact: {
    eyebrow: { de: "Kontakt aufnehmen", en: "Get in touch" } satisfies L,
    title: { de: "Lass uns reden.", en: "Let's talk." } satisfies L,
    description: {
      de: "Du arbeitest an einem spannenden Projekt im Bereich KI, RAG oder Backend? Schreib mir – ich freue mich auf dein Anliegen.",
      en: "Working on something interesting in AI, RAG or backend? Drop me a line – I'd love to hear about it.",
    } satisfies L,
    sendEmail: { de: "E-Mail senden", en: "Send email" } satisfies L,
    email: { de: "E-Mail", en: "Email" } satisfies L,
    phone: { de: "Telefon", en: "Phone" } satisfies L,
    location: { de: "Standort", en: "Location" } satisfies L,
  },
  footer: {
    builtWith: {
      de: "Gebaut mit Next.js & Tailwind CSS",
      en: "Built with Next.js & Tailwind CSS",
    } satisfies L,
  },
  langSwitch: {
    label: { de: "Sprache wechseln", en: "Switch language" } satisfies L,
  },
  profileCard: {
    openLabel: { de: "Profil öffnen", en: "Open profile" } satisfies L,
    close: { de: "Schliessen", en: "Close" } satisfies L,
    contact: { de: "Kontakt", en: "Contact" } satisfies L,
    sendEmail: { de: "E-Mail senden", en: "Send email" } satisfies L,
  },
} as const;
