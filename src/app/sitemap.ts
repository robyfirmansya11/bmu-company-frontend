import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";
import { absoluteUrl, languageAlternates, seoRoutes } from "@/lib/seo";

// Only existing public company pages; dynamic API content is discovered through its listing pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seoRoutes).flatMap(path => locales.map(locale => ({
    url: absoluteUrl("/" + locale + path),
    alternates: {languages: languageAlternates(path)},
  })));
}
