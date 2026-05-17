import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <a
          href={`mailto:${profile.contact.email}`}
          className="transition-colors hover:text-accent-light"
        >
          {profile.contact.email}
        </a>
      </div>
    </footer>
  );
}
