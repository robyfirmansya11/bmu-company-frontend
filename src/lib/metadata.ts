import type { Metadata } from "next";
import { getDictionary } from "./getDictionary";
export async function pageMetadata(locale: string, key: string): Promise<Metadata> {
  const messages = await getDictionary(locale);
  const title = messages.navbar[key as keyof typeof messages.navbar] ?? "PT. Bumi Morowali Utama";
  return {title, description: messages.common.description};
}
