"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "/flags/us.png" },
  { code: "id", label: "Bahasa Indonesia", flag: "/flags/id.png" },
  { code: "zh", label: "中文", flag: "/flags/cn.png" }
];

export default function LanguageSwitcher() {
  const path = usePathname();

  // pecah path berdasarkan "/"
  const segments = path.split("/");

  // ganti segment ke-1 (kode bahasa) jadi string kosong
  segments[1] = "";

  // gabungkan ulang path
  const cleanPath = segments.join("/");

  return (
    <ul className="space-y-2">
      {languages.map((lang) => (
        <li key={lang.code} className="flex items-center gap-2">
          <Image src={lang.flag} alt={lang.label} width={20} height={15} />
          <Link href={`/${lang.code}${cleanPath}`} className="hover:text-primary">
            {lang.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
