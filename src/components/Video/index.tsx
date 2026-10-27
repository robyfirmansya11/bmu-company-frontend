"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Play } from "lucide-react";
export default function Video() {
  const t = useTranslations("miningHome");
  const locale = useLocale();
  const activities = [
    {title: "exploreTitle", text: "exploreText", image: "AreaPertambangan2.jpeg", path: "eksplorasi"},
    {title: "mineTitle", text: "mineText", image: "Mining3.jpg", path: "operasi"},
    {title: "jettyTitle", text: "jettyText", image: "jettyarea1.jpg", path: "operasi"},
  ];
  return <section className="mine-operations"><div className="mine-shell mine-section">
    <p className="mine-eyebrow">{t("operationLabel")}</p>
    <div className="mine-section-head"><h2 className="mine-heading">{t("operationTitle")}</h2><p className="mine-body">{t("operationIntro")}</p></div>
    <div className="mine-operation-grid">
      {activities.map((item, index) => <Link key={item.title} href={`/${locale}/${item.path}`} className="mine-operation-card">
        <div className="mine-card-image"><Image src={`/images/about/${item.image}`} alt={t(item.title)} fill sizes="(max-width: 767px) 100vw, 33vw" /><span>0{index + 1}</span></div>
        <div className="mine-card-content"><h3>{t(item.title)}<ArrowUpRight size={22} /></h3><p>{t(item.text)}</p><span className="mine-card-link">{t("detail")}</span></div>
      </Link>)}
    </div>
    <div className="mine-commitment"><div><p className="mine-eyebrow">{t("commitLabel")}</p><h2>{t("commitTitle")}</h2><p className="mine-body">{t("commitText")}</p></div><a className="mine-video-link" href="https://youtu.be/LD-Jy2j5Pj0" target="_blank" rel="noopener noreferrer"><span className="mine-play"><Play size={22} /></span><span><strong>{t("video")}</strong><small>{t("videoNote")}</small></span><ArrowUpRight size={18} /></a></div>
  </div></section>;
}
