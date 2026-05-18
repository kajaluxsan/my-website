"use client";

import Image from "next/image";
import { useEffect } from "react";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/translations";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileCard({ open, onClose }: Props) {
  const { lang } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const items = [
    {
      label: ui.contact.email[lang],
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      label: ui.contact.location[lang],
      value: profile.contact.location[lang],
      href: "https://maps.google.com/?q=Winterthur,+Zürich,+Switzerland",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "kajaluxan-mathitharan",
      href: profile.contact.linkedin,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={profile.name}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-brand-950/95"
      />

      <div
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-brand-900 to-brand-950 p-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 20px 60px -10px rgba(123,44,191,0.55)" }}
      >

        <button
          type="button"
          onClick={onClose}
          aria-label={ui.profileCard.close[lang]}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 ring-4 ring-accent/20">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900 text-3xl font-bold text-white/90">
              KM
            </div>
            {profile.image && (
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                sizes="112px"
                className="relative object-cover"
              />
            )}
          </div>

          <h2 className="mt-5 text-xl font-bold tracking-tight text-white">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-accent-light">
            {profile.title[lang]}
          </p>
          <p className="mt-1 text-xs text-white/55">{profile.subtitle[lang]}</p>

          <ul className="mt-6 w-full space-y-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left transition-all hover:border-accent/40 hover:bg-accent/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-light">
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${profile.contact.email}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-light"
          >
            {ui.profileCard.sendEmail[lang]}
          </a>
        </div>
      </div>
    </div>
  );
}
