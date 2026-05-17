import type { L } from "@/i18n/LanguageProvider";

export type Skill = {
  name: string;
  level: number; // 1-5
};

export type SkillCategory = {
  title: string; // key into ui.skillCategories
  skills: Skill[];
};

export type Experience = {
  role: L;
  company: string;
  location: string;
  period: L;
  bullets?: L<string[]>;
  current?: boolean;
};

export type Education = {
  degree: L;
  school: string;
  location: string;
  period: string;
};

export type Project = {
  name: string;
  period: string;
  location: string;
  description: L;
  highlights: L<string[]>;
  tech: string[];
  metric?: string;
};

export type Achievement = {
  title: L;
  description: L;
};

export const profile = {
  name: "Kajaluxan Mathitharan",
  title: {
    de: "Software Engineer",
    en: "Software Engineer",
  } satisfies L,
  subtitle: {
    de: "BSc Computer Science ZHAW · AI & Machine Learning",
    en: "BSc Computer Science ZHAW · AI & Machine Learning",
  } satisfies L,
  motto: {
    de: "Neugier und Entschlossenheit führen mich zu neuen Herausforderungen.",
    en: "Curiosity and determination lead me to new challenges.",
  } satisfies L,
  about: {
    de: "Software Engineer mit Fokus auf KI, RAG-Systeme und Backend-Entwicklung. Ich studiere Computer Science an der ZHAW und arbeite parallel bei LogObject AG an Software für Schweizer Gerichte. Meine Leidenschaft gilt dem Bau von skalierbaren Systemen, die echten Mehrwert schaffen – von Datenbankmigrationen bis hin zu produktionsreifen RAG-Pipelines.",
    en: "Software engineer focused on AI, RAG systems and backend development. I study computer science at ZHAW and work in parallel at LogObject AG on software for Swiss courts. My passion is building scalable systems that deliver real value – from database migrations to production-ready RAG pipelines.",
  } satisfies L,
  // Datei ablegen unter: public/images/profile.jpg
  // Setze auf null, um stattdessen das KM-Monogramm anzuzeigen.
  image: "/images/profile.jpg" as string | null,
  contact: {
    email: "kajaluxan@mathitharan.ch",
    phone: "+41 77 467 01 32",
    address: "Schlieackerstrasse 10, 8422 Pfungen",
    linkedin: "https://www.linkedin.com/in/kajaluxan-mathitharan/",
    github: "https://github.com/kajaluxsan",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "Java", level: 5 },
      { name: "C", level: 4 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain / LangGraph", level: 5 },
      { name: "RAG / LLM Evaluation", level: 5 },
      { name: "Qdrant", level: 5 },
      { name: "Neo4J", level: 4 },
      { name: "Hybrid Search (RRF)", level: 5 },
      { name: "Embeddings & Vector Search", level: 5 },
      { name: "Ollama", level: 4 },
      { name: "Prompt Engineering", level: 4 },
      { name: "Docling", level: 4 },
      { name: "XQuAD / Benchmark Suites", level: 4 },
      { name: "Data Structures", level: 4 },
      { name: "Algorithms", level: 4 },
    ],
  },
  {
    title: "Backend & Engineering",
    skills: [
      { name: "Spring Boot", level: 5 },
      { name: "FastAPI", level: 5 },
      { name: "PostgreSQL", level: 5 },
      { name: "OracleSQL", level: 4 },
      { name: "MS SQL Server", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "Docker", level: 4 },
      { name: "MinIO / S3", level: 3 },
      { name: "Azure", level: 3 },
      { name: "Pulumi (IaC)", level: 3 },
      { name: "Git / GitHub", level: 5 },
      { name: "Linux", level: 4 },
      { name: "Windows Server", level: 4 },
      { name: "Scrum / Kanban / JIRA", level: 5 },
    ],
  },
  {
    title: "Full-Stack",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript / Next.js", level: 4 },
      { name: "HTML & CSS", level: 4 },
      { name: "React", level: 4 },
    ],
  },
  {
    title: "Basic Knowledge",
    skills: [
      { name: "Kotlin", level: 2 },
      { name: "Android SDK", level: 2 },
    ],
  },
];

export const languages: { name: L; level: number }[] = [
  { name: { de: "Englisch", en: "English" }, level: 5 },
  { name: { de: "Deutsch", en: "German" }, level: 5 },
  { name: { de: "Tamilisch", en: "Tamil" }, level: 5 },
];

export const experiences: Experience[] = [
  {
    role: {
      de: "Project Manager / SPOC (80%) in Software Engineering",
      en: "Project Manager / SPOC (80%) in Software Engineering",
    },
    company: "LogObject AG",
    location: "Opfikon",
    period: { de: "02/2025 – heute", en: "02/2025 – present" },
    current: true,
    bullets: {
      de: [
        "Entwicklung und Customising von Java-Anwendungen (Spring Boot, REST APIs) für Court-Management-Software, die in Schweizer Gerichten eingesetzt wird",
        "Engineering einer kompletten Datenbankmigration (100+ Tabellen, MS SQL → PostgreSQL): Transformationslogik, Validierungspipelines und Rollback-Procedures",
        "Implementierung und Durchführung von User Acceptance Tests, Issue-Tracking und Client-Sign-off-Workflows",
        "Planung und Ausführung von 3 Production-Go-Lives inklusive vollständiger Datenmigration und Post-Deployment-Monitoring",
        "Administration von Linux- und Windows-Server-Umgebungen, Datenbankarbeit mit PostgreSQL und Oracle",
        "Anwendung agiler Methoden (Scrum/Kanban) zur Koordination von Engineering-, QA- und Client-Teams",
      ],
      en: [
        "Developed and customised Java applications (Spring Boot, REST APIs) for court management software used by Swiss courts",
        "Engineered a complete database migration (100+ tables, MS SQL → PostgreSQL): transformation logic, validation pipelines and rollback procedures",
        "Implemented and executed User Acceptance Test suites; managed issue tracking and client sign-off workflows",
        "Planned and executed 3 production go-lives including full data migration and post-deployment monitoring",
        "Administered Linux and Windows Server environments; database work with PostgreSQL and Oracle",
        "Applied agile methodologies (Scrum/Kanban) to coordinate engineering, QA and client teams across delivery cycles",
      ],
    },
  },
  {
    role: {
      de: "IT Support Specialist (80%)",
      en: "IT Support Specialist (80%)",
    },
    company: "Rehaklinik Bellikon",
    location: "Bellikon",
    period: { de: "10/2024 – 01/2025", en: "10/2024 – 01/2025" },
    bullets: {
      de: [
        "Vorbereitung und Installation von PC-Images",
        "Remote- und Telefon-Support für Anwender",
        "Hardware-Austausch und Wartung",
        "Netzwerk-Patching und -Wartung",
      ],
      en: [
        "Preparation and installation of PC images",
        "Remote and telephone support for users",
        "Hardware replacement and maintenance",
        "Network patching and maintenance",
      ],
    },
  },
  {
    role: {
      de: "Working Student – Process Design & Digitalisation",
      en: "Working Student – Process Design & Digitalisation",
    },
    company: "Kantonsspital Winterthur",
    location: "Winterthur",
    period: { de: "09/2023 – heute", en: "09/2023 – present" },
    current: true,
    bullets: {
      de: [
        "Analyse und Redesign klinischer IT-Workflows in Zusammenarbeit mit medizinischem und administrativem Personal",
        "Beitrag zu Digitalisierungsinitiativen: Tool-Evaluation, Anforderungsdokumentation und Koordination mit IT- und Business-Teams",
      ],
      en: [
        "Analysed and redesigned clinical IT workflows in collaboration with medical and administrative staff",
        "Contributed to digitalisation initiatives: evaluated tooling, documented requirements and coordinated implementation with IT and business teams",
      ],
    },
  },
  {
    role: {
      de: "Rollout Support Specialist",
      en: "Rollout Support Specialist",
    },
    company: "Coopers IET AG",
    location: "Zürich",
    period: { de: "08/2023 – 09/2023", en: "08/2023 – 09/2023" },
  },
  {
    role: {
      de: "Mechaniker",
      en: "Mechanical Technician",
    },
    company: "Karl Keller AG",
    location: "Region Zürich",
    period: { de: "10/2022 – 07/2023", en: "10/2022 – 07/2023" },
  },
  {
    role: {
      de: "Mechaniker EFZ (Lehre)",
      en: "Mechanical Technician EFZ (Apprenticeship)",
    },
    company: "Ausbildungszentrum Winterthur",
    location: "Winterthur",
    period: { de: "08/2018 – 07/2021", en: "08/2018 – 07/2021" },
  },
];

export const education: Education[] = [
  {
    degree: {
      de: "BSc Informatik",
      en: "BSc Computer Science",
    },
    school: "ZHAW School of Engineering",
    location: "Winterthur",
    period: "09/2022 – 07/2026",
  },
  {
    degree: {
      de: "Berufsmaturität – Technik, Architektur & Life Sciences",
      en: "Vocational Baccalaureate – Technology, Architecture & Life Sciences",
    },
    school: "BMS Winterthur",
    location: "Winterthur",
    period: "08/2021 – 07/2022",
  },
  {
    degree: {
      de: "Mechaniker EFZ (Eidgenössisches Fähigkeitszeugnis)",
      en: "Mechanical Technician (Federal Diploma)",
    },
    school: "Berufsschule Bülach",
    location: "Bülach",
    period: "08/2018 – 07/2021",
  },
];

export const projects: Project[] = [
  {
    name: "Legatiq",
    period: "02/2025 – 06/2025",
    location: "Zürich",
    description: {
      de: "AI-powered Document-Analysis-Plattform für eine Anwaltskanzlei (300+ Anwälte) – RAG-basiertes Parsing, Chunking und Vorbereitung juristischer Dokumente mittels LLMs. 0→1 in einem cross-funktionalen Team gebaut.",
      en: "AI-powered document analysis platform for a law firm (300+ lawyers) – RAG-based parsing, chunking and preparation of legal documents using LLMs. Built 0→1 in a cross-functional team.",
    },
    highlights: {
      de: [
        "Design und Implementierung des REST-API-Backends und der RAG-Pipeline: Chunking-Strategie, Embedding-Auswahl und Retrieval-Optimierung für juristische Q&A",
      ],
      en: [
        "Designed and implemented the REST API backend and RAG pipeline: chunking strategy, embedding selection and retrieval optimisation for legal document Q&A",
      ],
    },
    tech: [
      "Python",
      "FastAPI",
      "LLM",
      "PostgreSQL",
      "Qdrant",
      "RAG",
      "TypeScript",
      "Next.js",
      "Azure",
      "Pulumi",
    ],
  },
  {
    name: "ZHAW Project Work – On-Premise RAG System",
    period: "09/2025 – 02/2026",
    location: "LogObject AG, Opfikon",
    description: {
      de: "Datenschutzkonformes RAG-System für die juristische Domäne (vollständig on-premise) mit hybrider Suche via Qdrant + PostgreSQL (RRF). End-to-end vom Research-Prototyp bis zum demoreifen System in Zusammenarbeit mit LogObject AG.",
      en: "Privacy-compliant RAG system for the legal domain (fully on-premise) with hybrid search via Qdrant + PostgreSQL (RRF). End-to-end from research prototype to demo-ready system in collaboration with LogObject AG.",
    },
    highlights: {
      de: [
        "Definition eines Evaluation-Frameworks und Benchmark-Suite (N=742, XQuAD) zur Messung der Modellqualität",
        "Iteration auf der Retrieval-Pipeline basierend auf quantitativen Resultaten",
      ],
      en: [
        "Defined an evaluation framework and benchmark suite (N=742, XQuAD) to measure model quality",
        "Iterated on the retrieval pipeline based on quantitative results",
      ],
    },
    metric: "MRR@5: 0.96 · Recall@5: 0.99 · Semantic quality: 87.2%",
    tech: [
      "Python",
      "FastAPI",
      "Qdrant",
      "PostgreSQL",
      "Ollama",
      "Docling",
      "MinIO",
      "Docker",
    ],
  },
  {
    name: "ZHAW Bachelor Thesis – VersionRAG",
    period: "02/2026 – 07/2026",
    location: "ZHAW School of Engineering, Winterthur",
    description: {
      de: "Erweiterung von VersionRAG (Huwiler, Stockinger, Fürst – ZHAW): ein RAG-System, das Dokumentversionen aktiv erkennt, indexiert und bei der Response-Generierung einbezieht.",
      en: "Extension of VersionRAG (Huwiler, Stockinger, Fürst – ZHAW): a RAG system that actively detects, indexes and incorporates document versions during response generation.",
    },
    highlights: {
      de: [
        "Design eines graph-basierten Version-Tracking-Layers mit Neo4J und Vector Search",
        "LLM-gesteuerte Versionserkennung und Context-Injection während der Response-Generierung",
      ],
      en: [
        "Designed a graph-based version tracking layer with Neo4J and vector search",
        "LLM-driven version detection and context injection during response generation",
      ],
    },
    tech: ["Python", "RAG", "LLM", "Qdrant", "Neo4J", "Graph Database"],
  },
];

export const achievements: Achievement[] = [
  {
    title: {
      de: "Komplette Datenbankmigration",
      en: "Full Database Migration",
    },
    description: {
      de: "Engineered eine komplette Datenbankmigration (100+ Tabellen, MS SQL → PostgreSQL) – deployed in Production über 3 Client-Umgebungen.",
      en: "Engineered a complete database migration (100+ tables, MS SQL → PostgreSQL) – deployed to production across 3 client environments.",
    },
  },
  {
    title: {
      de: "AI-Retrieval Evaluation Framework",
      en: "AI Retrieval Evaluation Framework",
    },
    description: {
      de: "Designed ein Evaluation-Framework für ein AI-Retrieval-System mit MRR@5: 0.96 und Recall@5: 0.99.",
      en: "Designed an evaluation framework for an AI retrieval system with MRR@5: 0.96 and Recall@5: 0.99.",
    },
  },
  {
    title: {
      de: "3 Enterprise Production Deployments",
      en: "3 Enterprise Production Deployments",
    },
    description: {
      de: "End-to-end Delivery von 3 Enterprise-Deployments mit Datenmigration, Validation und Post-Deployment-Monitoring – zero critical incidents.",
      en: "End-to-end delivery of 3 enterprise deployments with data migration, validation and post-deployment monitoring – zero critical incidents.",
    },
  },
];

export const certificates: { name: L; issuer: string }[] = [
  {
    name: {
      de: "Innosuisse Business Concept (Modul 2)",
      en: "Innosuisse Business Concept (Module 2)",
    },
    issuer: "STARTUP CAMPUS Switzerland",
  },
];
