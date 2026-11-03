"use client";

import { ArrowUpRight, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

const profile = "https://www.instagram.com/pt_bumimorowaliutama/";

export default function InstagramSection() {
  const t = useTranslations("instagram");
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="mine-shell mine-section mine-instagram">
      <div>
        <p className="mine-eyebrow"><Instagram size={18} aria-hidden="true" /> INSTAGRAM</p>
        <h2 id="instagram-title" className="mine-heading">{t("title")}</h2>
        <p className="mine-body">{t("intro")}</p>
        <a className="mine-button mine-button-primary" href={profile} target="_blank" rel="noopener noreferrer">
          @pt_bumimorowaliutama <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <iframe src={profile + "embed/"} title={t("embedTitle")} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
    </section>
  );
}
