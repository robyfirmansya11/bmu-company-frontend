import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT-BMU",
  description:
    "PT. Bumi Morowali Utama — mitra terpercaya dalam mendukung kemajuan industri.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <Contact />
    </>
  );
}
