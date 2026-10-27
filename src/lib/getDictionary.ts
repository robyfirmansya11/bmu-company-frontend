import "server-only";
import { createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import { isLocale } from "./locales";

const dictionaries = {
  id: () => import("../messages/id.json").then(m => m.default),
  en: () => import("../messages/en.json").then(m => m.default),
  zh: () => import("../messages/zh.json").then(m => m.default),
};

export async function getDictionary(locale: string) {
  if (!isLocale(locale)) notFound();
  return dictionaries[locale]();
}

export async function getPageTranslations(locale: string, namespace: keyof Awaited<ReturnType<typeof getDictionary>>) {
  const messages = await getDictionary(locale);
  return createTranslator({locale, messages, namespace});
}
