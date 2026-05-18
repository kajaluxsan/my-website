import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider, type Lang } from "@/i18n/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SUPPORTED: Lang[] = ["de", "en"];

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Kajaluxan Mathitharan – Software Engineer & AI / ML"
    : "Kajaluxan Mathitharan – Software Engineer & KI / ML";
  const description = isEn
    ? "Software engineer focused on AI, RAG systems and backend engineering. BSc Computer Science ZHAW."
    : "Software Engineer mit Fokus auf KI, RAG-Systeme und Backend-Engineering. BSc Informatik ZHAW.";

  const url = `https://kajaluxan.mathitharan.ch/${locale}`;

  return {
    metadataBase: new URL("https://kajaluxan.mathitharan.ch"),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        de: "https://kajaluxan.mathitharan.ch/de",
        en: "https://kajaluxan.mathitharan.ch/en",
        "x-default": "https://kajaluxan.mathitharan.ch/de",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kajaluxan Mathitharan",
      locale: isEn ? "en_US" : "de_CH",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED.includes(locale as Lang)) notFound();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider initialLang={locale as Lang}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
