import { companyStructuredData } from "@/lib/seo";
import { pageMetadata } from "@/lib/metadata";
import InstagramSection from "@/components/InstagramSection";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import "@/styles/mining-home.css";

export default function Home() {
  return (
    <main className="mining-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(companyStructuredData()).replace(/</g, "\\u003c")}} />
      <ScrollUp />
      <div><Hero /></div>
      <div><Features /></div>
      <div><Video /></div>
      <Brands />
      <div><InstagramSection /></div>
      <Contact />
    </main>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "home");
}
