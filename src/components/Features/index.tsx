"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Compass } from "lucide-react";
export default function Features() {
  const t = useTranslations("miningHome");
  const locale = useLocale();
  return <section id="company" className="mine-section mine-shell mine-about">
    <div className="mine-about-visual">
      <div className="mine-about-photo"><Image src="/images/about/AreaPertambangan2.jpeg" alt={t("aboutPhoto")} fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
      <p className="mine-photo-caption"><span>BMU / MOROWALI</span>{t("aboutCaption")}</p>
    </div>
    <div className="mine-about-copy">
      <p className="mine-eyebrow">{t("aboutLabel")}</p>
      <h2 className="mine-heading">{t("aboutTitle")}</h2>
      <p className="mine-body">{t("aboutText")}</p>
      <div className="mine-about-links">
        <Link href={`/${locale}/about`}><Compass size={23} /><span><strong>{t("vision")}</strong><small>{t("visionText")}</small></span><ArrowUpRight size={18} /></Link>
      </div>
    </div>
  </section>;
}
