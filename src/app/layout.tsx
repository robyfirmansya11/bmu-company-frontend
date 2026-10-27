import { siteUrl } from "@/lib/seo";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/locales";
// layout.tsx hanya untuk layout global (header, footer, dsb)
import { Inter } from "next/font/google";
import "./index.css";


const inter = Inter({ subsets: ["latin"] });

// ✅ Metadata diizinkan di layout server component
export const metadata = {
  metadataBase: new URL(siteUrl),
  verification: {google: process.env.GOOGLE_SITE_VERIFICATION || undefined},
  title: {
    default: "PT. Bumi Morowali Utama",
    template: "%s | PT. Bumi Morowali Utama",
  },
  description:
    "Website resmi PT. Bumi Morowali Utama.",
  icons: {
    icon: "/BMU.PNG", // ubah ke favicon kamu
  },
};

export default async function RootLayout({ children }) {
  const requestedLocale = (await headers()).get("x-site-locale") ?? defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  );
}