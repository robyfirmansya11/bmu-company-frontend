"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export default function Providers({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
