import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./lib/locales";

const handleLocale = createMiddleware({locales, defaultLocale, alternateLinks: false});
export default function middleware(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1];
  const headers = new Headers(request.headers);
  headers.set("x-site-locale", isLocale(segment) ? segment : defaultLocale);
  return handleLocale(new NextRequest(request, {headers}));
}
export const config = {matcher: ["/((?!api|_next|signin|signup|.*\\..*).*)"]};
