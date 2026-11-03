import { pageMetadata } from "@/lib/metadata";
import { getPageTranslations } from "@/lib/getDictionary";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const AboutPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getPageTranslations((await params).locale, "aboutPage");
  return (
    <main className="w-full max-w-none mx-0 px-0">
      <div>
      {/* Breadcrumb di paling atas full width */}
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <Breadcrumb
          pageName={t("about_us")}
          description={t("pt_bumi_morowali_utama_is_committed")}
        />
      </div>
            </div>

      {/* Konten tentang perusahaan */}
      <div>
      <AboutSectionOne />
      </div>

      <div>
      <AboutSectionTwo />
      </div>

    </main>
  );
};

export default AboutPage;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "about_us");
}
