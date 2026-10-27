"use client";

import LocaleLink from "./LocaleLink";
import type { Locale } from "@/lib/locales";
import { usePathname } from "next/navigation";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "/flags/US.png" },
  { code: "id", label: "Bahasa Indonesia", flag: "/flags/ID.png" },
  { code: "zh", label: "中文", flag: "/flags/CN.png" }
];

export default function LanguageSwitcher() {


  return (
    <ul className="space-y-2">
      {languages.map((lang) => (
        <li key={lang.code} className="flex items-center gap-2">
          <Image src={lang.flag} alt={lang.label} width={20} height={15} />
          <LocaleLink locale={lang.code as Locale} className="hover:text-primary">
            {lang.label}
          </LocaleLink>
        </li>
      ))}
    </ul>
  );
}
