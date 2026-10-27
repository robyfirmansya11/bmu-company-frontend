"use client";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { localizedPath, type Locale } from "@/lib/locales";

export default function LocaleLink({locale, children, ...props}: Omit<ComponentProps<"a">, "href"> & {locale: Locale}) {
  const pathname = usePathname();
  return <a {...props} href={localizedPath(pathname, locale)} hrefLang={locale} onClick={(event) => {
    props.onClick?.(event);
    if (!event.defaultPrevented) {
      event.currentTarget.href = localizedPath(pathname, locale) + window.location.search + window.location.hash;
    }
  }}>{children}</a>;
}
