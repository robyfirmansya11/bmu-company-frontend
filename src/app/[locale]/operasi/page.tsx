import { pageMetadata } from "@/lib/metadata";
import { richTextTags } from "@/lib/richTextTags";
import { getPageTranslations } from "@/lib/getDictionary";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default async function OperasiPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getPageTranslations((await params).locale, "operasiPage");
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-34">
      <AnimateOnScroll direction="right" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-8">{t("mining_operations")}</h1>

        {/* Deskripsi */}
        <div className="text-lg text-body-color dark:text-gray-300 leading-relaxed space-y-6 mb-12">
          <p>{t.rich("in_the_years_2023_and_2024", richTextTags)}</p>
          <p>{t.rich("bmu_also_has_a_dedicated_jetty", richTextTags)}</p>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* Foto Area Tambang */}
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">{t("photos_of_the_mining_area")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {["AreaPertambangan1.jpeg", "AreaPertambangan2.jpeg", "AreaPertambangan3.jpeg", "AreaPertambangan4.jpeg"].map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/about/${img}`}
                alt={t("mining_image", {number: i + 1})}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

{/* Foto Area Dermaga */}
<h2 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">{t("photos_of_the_jetty_area")}</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {["jettyarea1.jpg", "jettyarea2.jpg", "jettyarea3.jpg", "jettyarea4.jpg"].map((img, i) => (
    <div
      key={i}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md"
    >
      <Image
        src={`/images/about/${img}`}
        alt={t("jetty_image", {number: i + 1})}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  ))}
</div>

      </div>
      </AnimateOnScroll>
    </section>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "operations");
}
