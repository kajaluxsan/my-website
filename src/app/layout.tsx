import type { ReactNode } from "react";
import "./globals.css";

// Root layout intentionally minimal — every concrete page lives under
// /[locale]/ and supplies its own <html lang="…"> via the locale layout.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
