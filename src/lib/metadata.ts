import type { Metadata } from "next";
import { getDictionary } from "./getDictionary";
import { isLocale, defaultLocale } from "./locales";
import { absoluteUrl, companyName, languageAlternates, seoRoutes } from "./seo";

export async function pageMetadata(locale: string, key: string): Promise<Metadata> {
  const lang = isLocale(locale) ? locale : defaultLocale;
  const messages = await getDictionary(lang);
  const label = messages.navbar[key as keyof typeof messages.navbar] ?? companyName;
  const title = key === "home" ? messages.seo.homeTitle : label;
  const description = messages.seo.descriptions[key as keyof typeof messages.seo.descriptions] ?? messages.common.description;
  const path = seoRoutes[key];
  const url = path === undefined ? undefined : absoluteUrl("/" + lang + path);
  return {
    title: key === "home" ? {absolute: title} : title,
    description,
    ...(url ? {alternates: {canonical: url, languages: languageAlternates(path)}} : {}),
    openGraph: {
      type: "website", siteName: companyName, title: key === "home" ? title : label + " | " + companyName,
      description, url, locale: {id: "id_ID", en: "en_US", zh: "zh_CN"}[lang],
      images: [{url: absoluteUrl("/images/about/Mining3.jpg"), alt: companyName + " (PT BMU)"}],
    },
    twitter: {card: "summary_large_image", title, description, images: [absoluteUrl("/images/about/Mining3.jpg")]},
  };
}
