"use client";
import { richTextTags } from "@/lib/richTextTags";
import { useTranslations } from "next-intl";

import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const KesimpulanPage = () => {
  const t = useTranslations("kesimpulanPage");
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-34">
      <AnimateOnScroll direction="left" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-8">{t("conclusion")}</h1>

        {/* Paragraf Isi */}
        <div className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300 text-justify leading-relaxed space-y-2">
          <p>{t.rich("as_a_nickel_mining_company_based", richTextTags)}</p>

          <p>{t("bmu_remains_committed_to_strengthening_lawful")}</p>
        </div>

        {/* Gambar Pendukung (Opsional) */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/Mining4.png"
              alt={t("bmu_mine")}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
};

export default KesimpulanPage;
