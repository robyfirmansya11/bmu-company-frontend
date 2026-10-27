import { pageMetadata } from "@/lib/metadata";
import { getPageTranslations } from "@/lib/getDictionary";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const AboutPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getPageTranslations((await params).locale, "aboutPage");
  return (
    <main className="w-full max-w-none mx-0 px-0">
      <AnimateOnScroll direction="up" delay={0.1}>
      {/* Breadcrumb di paling atas full width */}
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <Breadcrumb
          pageName={t("about_us")}
          description={t("pt_bumi_morowali_utama_is_committed")}
        />
      </div>
            </AnimateOnScroll>

      {/* Konten tentang perusahaan */}
      <AnimateOnScroll direction="right" delay={0.5}>
      <AboutSectionOne />
      </AnimateOnScroll>

      <AnimateOnScroll direction="left" delay={0.5}>
      <AboutSectionTwo />
      </AnimateOnScroll>

    </main>
  );
};

export default AboutPage;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "about_us");
}
