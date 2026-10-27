import { pageMetadata } from "@/lib/metadata";
import { richTextTags } from "@/lib/richTextTags";
import { getPageTranslations } from "@/lib/getDictionary";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getPageTranslations((await params).locale, "portfolioPage");
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-24">
      <AnimateOnScroll direction="left" delay={0.5}>
        <div className="container mx-auto px-6 lg:px-12">
          {/* Judul Halaman */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white py-16">{t("projects_and_business_portfolio")}</h1>

          {/* Bagian: Proyek Utama */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("key_projects")}</h2>
            <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
              <li>{t.rich("nickel_ore_trading_cooperation_with_indonesia", richTextTags)}</li>
              <li>{t.rich("mining_contracting_cooperation_with_an_experienced", richTextTags)}</li>
              <li>{t.rich("nickel_ore_supply_cooperation_with_a", richTextTags)}</li>
            </ul>
          </div>

          {/* Gambar-gambar Proyek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining1.png"
                alt={t("project_1")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining2.jpg"
                alt={t("project_2")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/Mining3.jpg"
                alt={t("project_3")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bagian: Kasus dan Pencapaian */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("milestones_and_achievements")}</h2>
            <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
              <li>{t.rich("nickel_ore_production_of_approximately_100", richTextTags)}</li>
              <li>{t.rich("gold_sponsor_in_the_miner_training", richTextTags)}</li>
            </ul>
          </div>

          {/* Gambar Peta Lokasi */}
          <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/Peta_BMU_1.jpg"
              alt={t("bmu_mine_location_map")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "portfolio");
}
