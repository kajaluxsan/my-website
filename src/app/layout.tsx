import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kajaluxan Mathitharan – Software Engineer & AI / ML",
  description:
    "Software Engineer focused on AI, RAG systems and backend engineering. BSc Computer Science ZHAW.",
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
      "Software Engineer focused on AI, RAG systems and backend engineering.",
    type: "website",
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
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
