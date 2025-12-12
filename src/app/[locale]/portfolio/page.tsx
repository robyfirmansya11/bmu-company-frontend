import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Portofolio, Proyek & Bisnis | PT Bumi Morowali Utama",
  description: "Portofolio proyek, kerja sama, dan pencapaian PT Bumi Morowali Utama dalam industri pertambangan nikel.",
};

export default function PortfolioPage() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-24">
      <AnimateOnScroll direction="left" delay={0.5}>
        <div className="container mx-auto px-6 lg:px-12">
          {/* Judul Halaman */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white py-16">
            Projects and Business Portfolio
          </h1>

          {/* Bagian: Proyek Utama */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Projects
            </h2>
            <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
              <li>
                Nickel ore trading cooperation with Indonesia’s leading IPP company,{" "}
                <strong>PT Mineral Maju Sejahtera</strong>.
              </li>
              <li>
                Mining contracting cooperation with an experienced partner,{" "}
                <strong>PT Hebei Geologikal Indonesia</strong>.
              </li>
              <li>
                Nickel ore supply cooperation with a well-established smelter company,{" "}
                <strong>PT Obsidian Stainless Steel</strong>.
              </li>
            </ul>
          </div>

          {/* Gambar-gambar Proyek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining1.png"
                alt="Proyek 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining2.jpg"
                alt="Proyek 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining3.jpg"
                alt="Proyek 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bagian: Kasus dan Pencapaian */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Kasus dan Pencapaian
            </h2>
            <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
              <li>
                Nickel ore production of approximately{" "}
                <strong>±100,000 WMT per month</strong>
              </li>
              <li>
                <strong>Gold Sponsor</strong> in the{" "}
                <em>&quot;Miner Training&quot;</em> program in 2025.
              </li>
            </ul>
          </div>

          {/* Gambar Peta Lokasi */}
          <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/Peta_BMU_1.jpg"
              alt="Peta Lokasi Tambang BMU"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
