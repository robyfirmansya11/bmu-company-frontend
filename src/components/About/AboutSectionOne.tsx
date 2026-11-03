"use client";
import { useTranslations } from "next-intl";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const t = useTranslations("about");
  const List = ({ text }: { text: string }) => (
    <p
      className="text-body-color mb-1 flex items-center text-lg font-medium"
    >
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="pt-16 md:pt-20 lg:pt-14 w-full bg-white dark:bg-gray-dark"
    >
      <div className="w-full px-6 lg:px-10">
        {/* Judul & paragraf */}
        <div
        >
          <SectionTitle title={t("about_the_company")} paragraph="" mb="20px" />
          <p className="text-body-color text-lg font-medium w-full mb-10 leading-relaxed">{t("pt_bumi_morowali_utama_was_established")}</p>
        </div>

        <div className="flex flex-wrap items-start justify-between">
          {/* KIRI */}
          <div
            className="w-full lg:w-1/2 lg:pr-10"
          >
            <List text={t("vision")} />
            <p className="text-body-color mb-6 text-lg font-medium">{t("to_become_a_trusted_strategic_partner")}</p>

            <List text={t("mission")} />
            <ul
              className="list-disc pl-5 text-body-color mb-6 text-lg font-medium space-y-2"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index}>
                  {t(`mission_${index}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* KANAN */}
          <div
            className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[1280px] aspect-[2/2] overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src="/images/about/Mining4.png"
                alt={t("bmu_mining_operations")}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
