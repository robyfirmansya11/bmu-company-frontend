import { pageMetadata } from "@/lib/metadata";
import { richTextTags } from "@/lib/richTextTags";
import { getPageTranslations } from "@/lib/getDictionary";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default async function EksplorasiPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getPageTranslations((await params).locale, "eksplorasiPage");
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-35">
      <AnimateOnScroll direction="right" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">{t("mining_exploration_overview")}</h1>

        {/* Paragraf Pembuka */}
        <p className="text-lg leading-relaxed text-body-color mb-8">{t.rich("in_december_2022_pt_hebei_geologikal", richTextTags)}</p>

        {/* Pekerjaan Eksplorasi */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("exploration_areas_and_works")}</h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">{t("the_exploration_company_delineated_an_area")}</p>
          <p className="text-lg leading-relaxed text-body-color mb-4">{t("according_to_the_latest_2025_exploration")}</p>

          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>{t("at_an_average_nickel_grade_of")}</li>
            <li>{t("at_an_average_nickel_grade_of_57")}</li>
          </ul>
        </div>

        {/* Estimasi Sumber Daya */}
 {       <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">{t("nickel_resource_estimate_2022")}</h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">{t.rich("based_on_exploration_in_the_designated", richTextTags)}</p>
          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>{t.rich("controlled_resources_1_907_million_tons", richTextTags)}</li>
            <li>{t.rich("inferred_resources_0_819_million_tons", richTextTags)}</li>
          </ul>
        </div>

        /* Data Eksplorasi 2025}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Data Eksplorasi Terbaru (2025)
          </h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">
            Menurut data eksplorasi terbaru tahun 2025 di area seluas <strong>212,99 hektar</strong>:
          </p>
          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>
              Dengan kadar nikel rata-rata <strong>1.0%</strong>, 
              perkiraan cadangan bijih mencapai <strong>29,81 juta ton</strong>.
            </li>
            <li>
              Dengan kadar nikel rata-rata <strong>1.5%</strong>, 
              perkiraan cadangan bijih mencapai <strong>9,02 juta ton</strong>.
            </li>
          </ul> */}
          <p className="mt-4 text-body-color text-lg">{t("detailed_calculations_are_provided_below")}</p>
        </div>

        {/* Gambar Eksplorasi (opsional jika ingin menambahkan) */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-2xl overflow-hidden shadow-2xl mt-10">
          <Image
            src="/images/about/TabelSumberDayaCOG.png"
            alt={t("mining_exploration_illustration")}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
    
      </AnimateOnScroll>
    </section>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "exploration_overview");
}
