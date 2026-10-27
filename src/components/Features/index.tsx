"use client";
import { richTextTags } from "@/lib/richTextTags";
import { useTranslations } from "next-intl";

import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const TentangKami: FC = () => {
  const t = useTranslations("overview");
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row flex flex-wrap py-20">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-10 sm:mb-0 sm:px-12">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-6xl text-light-700 font-bold leading-tight mb-5">{t("about_us")}</h1>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">{t.rich("pt_bumi_morowali_utama_bmu_is", richTextTags)}</p>

          <br />

          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">{t.rich("company_name_pt_bumi_morowali_utama", richTextTags)}</p>

          <br />

          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">{t("bmu_s_mining_resources_primarily_consist")}</p>
        </Fade>
      </div>

<div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-5 sm:px-12 md:mt-5 mt-10">
  <Fade direction="up" triggerOnce>
    <div className="h-[650px] w-[600px] relative">
      <Image
        src="/images/bmu1.png"
        alt={t("about_us_9")}
        fill
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  </Fade>
</div>

    </section>
  );
};

export default TentangKami;
