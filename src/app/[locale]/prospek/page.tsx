import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Prospek Industri Nikel di Indonesia | PT Bumi Morowali Utama",
  description:
    "Analisis prospek industri nikel di Indonesia, meliputi pendorong permintaan global, kebijakan nasional, dan peluang investasi.",
};

export default function ProspekPage() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-35">
      <AnimateOnScroll direction="left" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          Outlook for Indonesia’s Nickel Industry
        </h1>

        {/* 1. Pendorong Permintaan Global */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            1. Global Demand Drivers
          </h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>
              <strong>New Energy Batteries:</strong> Nickel is a core raw material in ternary lithium batteries (NCM/NCA). With the rapid growth of electric vehicles (EVs), global demand for high-nickel cathode materials continues to rise.
            </li>
            <li>
              <strong>Stainless Steel Industry:</strong> Currently, around 70% of global nickel consumption is used in stainless steel production, which remains the primary demand driver. As the world’s largest stainless steel producer, China has a high dependency on Indonesian nickel ore.
            </li>
          </ul>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* 2. Keunggulan Kebijakan Indonesia */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            2. Indonesia’s Policy Advantages
          </h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>
             Indonesia holds the world’s largest nickel reserves and production, accounting for more than <strong>22% of global reserves.</strong>.
            </li>
            <li>
              The government has implemented  <strong>a nickel ore export ban</strong>{" "}
             encouraging domestic smelting and fostering the development of nickel pig iron (NPI), stainless steel, and new energy battery industries.
            </li>
            <li>
              Significant investment by Chinese enterprises in smelting and battery plants has created a strong industrial cluster effect (notable examples include the  <strong>IMIP</strong> dan{" "}
              <strong>Weda Bay Industrial Parks</strong>).
            </li>
          </ul>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* 3. Peluang Investasi dan Pasar */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            3. Investment and Market Opportunities
          </h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>
              <strong>New Energy Wave:</strong> With the rising penetration of electric vehicles worldwide, demand for nickel used in power batteries is projected to increase by 3–4 times by 2030 compared to 2020.
            </li>
            <li>
              <strong>Industrial Clustering: </strong>Sulawesi and Maluku are developing a complete nickel industry chain. strategic location {" "}
              <strong>BMU</strong> in the heart of this region provides it with a significant geographical advantage.
            </li>
            <li>
              <strong>Capital Inflows:</strong> Major companies from China (Tsingshan, Huayou), South Korea (LG), and Europe (BASF) have already invested in Indonesia, signaling strong and growing demand for nickel ore supply.
            </li>
          </ul>
        </div>

        {/* Gambar ilustrasi */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] rounded-2xl overflow-hidden shadow-2xl mt-10">
          <Image
            src="/images/about/Mining3.jpg"
            alt="Prospek Industri Nikel Indonesia"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
