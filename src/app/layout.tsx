import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kajaluxan Mathitharan – Software Engineer & AI / ML",
  description:
    "Software Engineer mit Fokus auf KI, RAG-Systeme und Backend-Entwicklung. BSc Computer Science ZHAW.",
  keywords: [
    "Kajaluxan Mathitharan",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "RAG",
    "ZHAW",
    "Switzerland",
    "Python",
    "Java",
    "Spring Boot",
    "FastAPI",
  ],
  authors: [{ name: "Kajaluxan Mathitharan" }],
  openGraph: {
    title: "Kajaluxan Mathitharan – Software Engineer & AI / ML",
    description:
      "Software Engineer mit Fokus auf KI, RAG-Systeme und Backend-Entwicklung.",
    type: "website",
    locale: "de_CH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
