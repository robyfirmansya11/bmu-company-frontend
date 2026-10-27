import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "licenses");
}
export default function Layout({children}: {children: React.ReactNode}) {
  return children;
}
