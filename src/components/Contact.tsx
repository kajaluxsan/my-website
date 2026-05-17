import { profile } from "@/data/profile";

const items = [
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Standort",
    value: profile.contact.location,
    href: "https://maps.google.com/?q=Schlieackerstrasse+10,+8422+Pfungen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="container-narrow text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Get in touch
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Lass uns reden.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Du arbeitest an einem spannenden Projekt im Bereich AI, RAG oder
          Backend? Schreib mir – ich freue mich auf dein Anliegen.
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
            E-Mail senden
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
