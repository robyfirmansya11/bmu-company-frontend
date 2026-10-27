"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, MapPin, ArrowDown } from "lucide-react";
export default function Hero() {
  const t = useTranslations("miningHome");
  const locale = useLocale();
  return <section id="home" className="mine-hero-wrap"><div className="mine-shell">
    <div className="mine-hero">
      <Image src="/images/about/Mining3.jpg" alt={t("photo")} fill priority sizes="(max-width: 1400px) 100vw, 1320px" className="mine-hero-photo" />
      <div className="mine-hero-shade" />
      <div className="mine-hero-content">
        <p className="mine-eyebrow"><span className="mine-dot" />{t("eyebrow")}</p>
        <h1>{t("title")}<br /><span>{t("accent")}</span></h1>
        <p className="mine-hero-intro">{t("intro")}</p>
        <div className="mine-actions">
          <Link href={`/${locale}/about`} className="mine-button mine-button-primary">{t("profile")}<ArrowUpRight size={18} /></Link>
          <Link href={`/${locale}/operasi`} className="mine-hero-link">{t("operations")}<ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="mine-hero-foot"><span><MapPin size={15} />{t("location")}</span><a href="#company" aria-label={t("profile")}><ArrowDown size={18} /></a></div>
    </div>
    <div className="mine-facts">
      <div><p>{t("area")}</p><strong>{t("areaValue")} <small>{t("areaUnit")}</small></strong><span>{t("location")}</span></div>
      <div><p>{t("production")}</p><strong>{t("productionValue")} <small>{t("productionUnit")}</small></strong><span>{t("period")}</span></div>
      <div><p>{t("mineral")}</p><strong className="mine-resource">{t("mineralValue")}</strong><span>{t("mineralNote")}</span></div>
    </div>
  </div></section>;
}
