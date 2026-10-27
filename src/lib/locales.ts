export const locales = ["id", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
export function localizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) segments.splice(1, 1);
  const suffix = segments.join("/").replace(/^\/+/, "");
  return "/" + locale + (suffix ? "/" + suffix : "");
}
