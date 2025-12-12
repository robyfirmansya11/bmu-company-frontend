import "server-only";

export async function getDictionary(locale: string) {
  return (await import(`../messages/${locale}.json`)).default;
}
