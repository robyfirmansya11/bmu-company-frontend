import { locales } from "./locales";

export const siteUrl = new URL(process.env.SITE_URL || "https://bumimorowaliutama.com").origin;
export const companyName = "PT Bumi Morowali Utama";
export const seoRoutes: Record<string, string> = {
  home: "", about_us: "/about", contact_us: "/contact", careers: "/careers",
  news: "/blog", portfolio: "/portfolio", exploration_overview: "/eksplorasi",
  nickel_outlook: "/prospek", operations: "/operasi", conclusion: "/kesimpulan",
};
export function absoluteUrl(path: string) { return new URL(path, siteUrl).href; }
export function languageAlternates(path: string) {
  return Object.fromEntries([
    ...locales.map(locale => [locale === "zh" ? "zh-Hans" : locale, absoluteUrl("/" + locale + path)]),
    ["x-default", absoluteUrl("/id" + path)],
  ]);
}
export function companyStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": siteUrl + "/#organization",
        name: companyName, legalName: companyName,
        alternateName: ["PT BMU", "Bumi Morowali Utama", "BMU"],
        url: siteUrl, logo: absoluteUrl("/images/logo/BMU.PNG") },
      { "@type": "WebSite", "@id": siteUrl + "/#website",
        name: companyName, alternateName: ["PT BMU", "Bumi Morowali Utama"],
        url: siteUrl, inLanguage: ["id", "en", "zh-Hans"],
        publisher: { "@id": siteUrl + "/#organization" } },
    ],
  };
}
