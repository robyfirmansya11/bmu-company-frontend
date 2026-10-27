"use client";
import { richTextTags } from "@/lib/richTextTags";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSectionTwo = () => {
  const t = useTranslations("profile");
  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-15"
    >
      <div className="w-full px-6 lg:px-10">
        <hr className="border-gray-300 dark:border-gray-700 mb-16" />
        <h1 className="text-center text-5xl md:text-5xl font-bold text-black dark:text-white mb-16">{t("company_profile")}</h1>

        {/* Layout dua kolom: kiri gambar - kanan teks */}
        <div className="flex flex-wrap items-start justify-between">
          {/* Kiri: Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <div className="relative w-full max-w-[640px] lg:max-w-[580px] aspect-[2/1] overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src="/images/about/bmu1.png"
                alt={t("bmu_company_site")}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
              />
            </div>
          </div>

          {/* Kanan: Konten */}
          <div className="w-full lg:w-1/2 max-w-[700px] lg:pl-10">
            {/* Profil Perusahaan */}
            <div className="mb-10">
              <div className="text-body-color text-lg leading-relaxed space-y-2">
                <p>{t.rich("company_name_pt_bumi_morowali_utama", richTextTags)}</p>
                <p>{t.rich("legal_entity_limited_liability_company_pt", richTextTags)}</p>
                <p>{t.rich("main_business_nickel_ore_mining_sales", richTextTags)}</p>
                <p>{t.rich("license_iup_operasi_produksi", richTextTags)}</p>
                <p>{t.rich("address_soho_podomoro_city_lantai_30", richTextTags)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Penutup - Full Width */}
        <div className="mt-16 max-w-[1000px] mx-auto">
          {/* Pengenalan */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{t("introduction_to_bmu_nickel_mining_company")}</h3>
            <p className="text-body-color text-lg leading-relaxed">{t("pt_bumi_morowali_utama_hereinafter_referred")}</p>
          </div>

          <p className="text-body-color text-lg leading-relaxed">{t("bmu_s_mining_resources_primarily_consist")}</p>
          <br />
            <hr className="border-gray-300 dark:border-gray-700 md:5a" />
        </div>
      </div>
    </section>
  );
};


export default AboutSectionTwo;
