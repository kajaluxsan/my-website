export type Skill = {
  name: string;
  level: number; // 1-5
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets?: string[];
  current?: boolean;
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export type Project = {
  name: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  metric?: string;
};

export type Achievement = {
  title: string;
  description: string;
};

export const profile = {
  name: "Kajaluxan Mathitharan",
  title: "Software Engineer",
  subtitle: "BSc Computer Science ZHAW · AI & Machine Learning",
  motto:
    "Curiosity and determination lead me to new challenges.",
  about:
    "Software Engineer mit Fokus auf KI, RAG-Systeme und Backend-Entwicklung. Ich studiere Computer Science an der ZHAW und arbeite parallel bei LogObject AG an Software für Schweizer Gerichte. Meine Leidenschaft gilt dem Bau von skalierbaren Systemen, die echten Mehrwert schaffen – von Datenbankmigrationen bis hin zu produktionsreifen RAG-Pipelines.",
  contact: {
    email: "kajaluxan@mathitharan.ch",
    phone: "+41 77 467 01 32",
    location: "Schlieackerstrasse 10, 8422 Pfungen",
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
      { name: "Git / GitHub", level: 5 },
      { name: "Linux", level: 4 },
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

export const languages: Skill[] = [
  { name: "English", level: 5 },
  { name: "German", level: 5 },
  { name: "Tamil", level: 5 },
];

export const experiences: Experience[] = [
  {
    role: "Project Manager / SPOC (80%) in Software Engineering",
    company: "LogObject AG",
    location: "Opfikon",
    period: "02/2025 – heute",
    current: true,
    bullets: [
      "Entwicklung und Customising von Java-Anwendungen (Spring Boot, REST APIs) für Court-Management-Software, die in Schweizer Gerichten eingesetzt wird",
      "Engineering einer kompletten Datenbankmigration (100+ Tabellen, MS SQL → PostgreSQL): Transformationslogik, Validierungspipelines und Rollback-Procedures",
      "Implementierung und Durchführung von User Acceptance Tests, Issue-Tracking und Client-Sign-off-Workflows",
      "Planung und Ausführung von 3 Production-Go-Lives inklusive vollständiger Datenmigration und Post-Deployment-Monitoring",
      "Administration von Linux- und Windows-Server-Umgebungen, Datenbankarbeit mit PostgreSQL und Oracle",
      "Anwendung agiler Methoden (Scrum/Kanban) zur Koordination von Engineering-, QA- und Client-Teams",
    ],
  },
  {
    role: "IT Support Specialist (80%)",
    company: "Rehaklinik Bellikon",
    location: "Bellikon",
    period: "10/2024 – 01/2025",
    bullets: [
      "Vorbereitung und Installation von PC-Images",
      "Remote- und Telefon-Support für Anwender",
      "Hardware-Austausch und Wartung",
      "Netzwerk-Patching und -Wartung",
    ],
  },
  {
    role: "Working Student – Process Design & Digitalisation",
    company: "Kantonsspital Winterthur",
    location: "Winterthur",
    period: "09/2023 – heute",
    current: true,
    bullets: [
      "Analyse und Redesign klinischer IT-Workflows in Zusammenarbeit mit medizinischem und administrativem Personal",
      "Beitrag zu Digitalisierungsinitiativen: Tool-Evaluation, Anforderungsdokumentation und Koordination mit IT- und Business-Teams",
    ],
  },
  {
    role: "Rollout Support Specialist",
    company: "Coopers IET AG",
    location: "Zürich",
    period: "08/2023 – 09/2023",
  },
  {
    role: "Mechanical Technician",
    company: "Karl Keller AG",
    location: "Region Zürich",
    period: "10/2022 – 07/2023",
  },
  {
    role: "Mechanical Technician EFZ (Apprenticeship)",
    company: "Ausbildungszentrum Winterthur",
    location: "Winterthur",
    period: "08/2018 – 07/2021",
  },
];

export const education: Education[] = [
  {
    degree: "BSc Computer Science",
    school: "ZHAW School of Engineering",
    location: "Winterthur",
    period: "09/2022 – 07/2026",
  },
  {
    degree: "Vocational Baccalaureate – Technology, Architecture & Life Sciences",
    school: "BMS Winterthur",
    location: "Winterthur",
    period: "08/2021 – 07/2022",
  },
  {
    degree: "Mechanical Technician (Federal Diploma)",
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
    description:
      "AI-powered Document-Analysis-Plattform für eine Anwaltskanzlei (300+ Anwälte) – RAG-basiertes Parsing, Chunking und Vorbereitung juristischer Dokumente mittels LLMs. 0→1 in einem cross-funktionalen Team gebaut.",
    highlights: [
      "Design und Implementierung des REST-API-Backends und der RAG-Pipeline: Chunking-Strategie, Embedding-Auswahl und Retrieval-Optimierung für juristische Q&A",
    ],
    tech: ["Python", "FastAPI", "LLM", "PostgreSQL", "Qdrant", "RAG", "TypeScript", "Next.js", "Azure", "Pulumi"],
  },
  {
    name: "ZHAW Project Work – On-Premise RAG System",
    period: "09/2025 – 02/2026",
    location: "LogObject AG, Opfikon",
    description:
      "Datenschutzkonformes RAG-System für die juristische Domäne (vollständig on-premise) mit hybrider Suche via Qdrant + PostgreSQL (RRF). End-to-end vom Research-Prototyp bis zum demoreifen System in Zusammenarbeit mit LogObject AG.",
    highlights: [
      "Definition eines Evaluation-Frameworks und Benchmark-Suite (N=742, XQuAD) zur Messung der Modellqualität",
      "Iteration auf der Retrieval-Pipeline basierend auf quantitativen Resultaten",
    ],
    metric: "MRR@5: 0.96 · Recall@5: 0.99 · Semantic quality: 87.2%",
    tech: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "Ollama", "Docling", "MinIO", "Docker"],
  },
  {
    name: "ZHAW Bachelor Thesis – VersionRAG",
    period: "02/2026 – 07/2026",
    location: "ZHAW School of Engineering, Winterthur",
    description:
      "Erweiterung von VersionRAG (Huwiler, Stockinger, Fürst – ZHAW): ein RAG-System, das Dokumentversionen aktiv erkennt, indexiert und bei der Response-Generierung einbezieht.",
    highlights: [
      "Design eines graph-basierten Version-Tracking-Layers mit Neo4J und Vector Search",
      "LLM-gesteuerte Versionserkennung und Context-Injection während der Response-Generierung",
    ],
    tech: ["Python", "RAG", "LLM", "Qdrant", "Neo4J", "Graph Database"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Full Database Migration",
    description:
      "Engineered eine komplette Datenbankmigration (100+ Tabellen, MS SQL → PostgreSQL) – deployed in Production über 3 Client-Umgebungen.",
  },
  {
    title: "AI Retrieval Evaluation Framework",
    description:
      "Designed ein Evaluation-Framework für ein AI-Retrieval-System mit MRR@5: 0.96 und Recall@5: 0.99.",
  },
  {
    title: "3 Enterprise Production Deployments",
    description:
      "End-to-end Delivery von 3 Enterprise-Deployments mit Datenmigration, Validation und Post-Deployment-Monitoring – zero critical incidents.",
  },
];

export const certificates = [
  {
    name: "Innosuisse Business Concept (Module 2)",
    issuer: "STARTUP CAMPUS Switzerland",
  },
];
