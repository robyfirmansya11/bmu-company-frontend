import { getDictionary } from "@/lib/getDictionary";
import Providers from "@/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const messages = await getDictionary(locale);

  return (
    <Providers locale={locale} messages={messages}>
      <Header locale={locale} />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}
