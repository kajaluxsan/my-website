import About from "@/components/About";
import Achievements from "@/components/Achievements";
import BlogTeaser from "@/components/BlogTeaser";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import type { Lang } from "@/i18n/LanguageProvider";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <BlogTeaser lang={lang} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
