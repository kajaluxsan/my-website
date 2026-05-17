"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "Über mich" },
  { href: "#experience", label: "Erfahrung" },
  { href: "#projects", label: "Projekte" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Ausbildung" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-white hover:text-accent-light transition-colors"
        >
          KM<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-accent/30 md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-950/95 backdrop-blur-md md:hidden">
          <ul className="container-wide flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
