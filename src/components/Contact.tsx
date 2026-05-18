"use client";

import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

export default function Contact() {
  const { lang } = useLang();

  const items = [
    {
      label: ui.contact.email[lang],
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: ui.contact.location[lang],
      value: profile.contact.location[lang],
      href: "https://maps.google.com/?q=Winterthur,+Zürich,+Switzerland",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "kajaluxan-mathitharan",
      href: profile.contact.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(106,55,119,0.18), transparent 60%)",
      }}
    >

      <div className="container-narrow text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          {ui.contact.eyebrow[lang]}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {ui.contact.title[lang]}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          {ui.contact.description[lang]}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="surface surface-hover group flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-light transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {item.label}
              </p>
              <p className="break-all text-sm font-medium text-white">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/40"
          >
            {ui.contact.sendEmail[lang]}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
