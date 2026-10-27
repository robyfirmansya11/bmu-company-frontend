import { pageMetadata } from "@/lib/metadata";
import { richTextTags } from "@/lib/richTextTags";
import { getPageTranslations } from "@/lib/getDictionary";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default async function ProspekPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getPageTranslations((await params).locale, "prospekPage");
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-35">
      <AnimateOnScroll direction="left" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">{t("outlook_for_indonesia_s_nickel_industry")}</h1>

        {/* 1. Pendorong Permintaan Global */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("1_global_demand_drivers")}</h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>{t.rich("new_energy_batteries_nickel_is_a", richTextTags)}</li>
            <li>{t.rich("stainless_steel_industry_currently_around_70", richTextTags)}</li>
          </ul>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* 2. Keunggulan Kebijakan Indonesia */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("2_indonesia_s_policy_advantages")}</h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>{t.rich("indonesia_holds_the_world_s_largest", richTextTags)}</li>
            <li>{t.rich("the_government_has_implemented_a_nickel", richTextTags)}</li>
            <li>{t.rich("significant_investment_by_chinese_enterprises_in", richTextTags)}</li>
          </ul>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* 3. Peluang Investasi dan Pasar */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("3_investment_and_market_opportunities")}</h2>
          <ul className="list-disc pl-6 text-lg text-body-color leading-relaxed space-y-3">
            <li>{t.rich("new_energy_wave_with_the_rising", richTextTags)}</li>
            <li>{t.rich("industrial_clustering_sulawesi_and_maluku_are", richTextTags)}</li>
            <li>{t.rich("capital_inflows_major_companies_from_china", richTextTags)}</li>
          </ul>
        </div>

        {/* Gambar ilustrasi */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] rounded-2xl overflow-hidden shadow-2xl mt-10">
          <Image
            src="/images/about/Mining3.jpg"
            alt={t("indonesian_nickel_industry_outlook")}
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
  return pageMetadata((await params).locale, "nickel_outlook");
}
