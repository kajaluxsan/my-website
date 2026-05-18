import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["de", "en"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "de";

function detectLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get("lang")?.value;
  if (cookie === "de" || cookie === "en") return cookie;
  const accept = req.headers.get("accept-language") ?? "";
  return accept.toLowerCase().startsWith("en") ? "en" : DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\..*).*)"],
};
