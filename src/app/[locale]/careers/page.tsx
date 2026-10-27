import { pageMetadata } from "@/lib/metadata";
import { richTextTags } from "@/lib/richTextTags";
import { getPageTranslations } from "@/lib/getDictionary";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { Metadata } from "next";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getPageTranslations((await params).locale, "careersPage");
  const { locale } = await params;

  return (
    <>
      {/* Breadcrumb */}
      <AnimateOnScroll direction="up" delay={0.1}>
        <Breadcrumb
          pageName={t("career_in_our_company")}
          description={t("discover_who_we_are_and_the")}
        />
      </AnimateOnScroll>

      {/* Image Below Breadcrumb */}
      <AnimateOnScroll direction="up" delay={0.12}>
        <div className="container mt-8">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
<img
  src="/images/hero/5384286.jpg"
  alt={t("career_illustration")}
  className="w-full h-auto rounded-2xl"
 />
          </div>
        </div>
      </AnimateOnScroll>

      {/* Main Information Section */}
      <AnimateOnScroll direction="right" delay={0.15}>
        <section className="pt-10 pb-16">
          <div className="container">
            <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{t.rich("in_our_space_few_companies_are", richTextTags)}</p>

              <div className="text-center mt-10">
                <Link
                  href="https://career.bumimorowaliutama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white py-3 px-8 rounded-lg shadow hover:shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
                >{t("join_us")}</Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Work With Us Section */}
      <AnimateOnScroll direction="up" delay={0.2}>
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-10">{t("why_work_with_us")}</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">{t("employee_owned_culture")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("you_have_a_voice_every_team")}</p>
              </div>

              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">{t("work_life_balance")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("hybrid_work_options_that_support_your")}</p>
              </div>

              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">{t("make_global_impact")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("help_shape_sustainable_infrastructure_that_improves")}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Bottom CTA */}
      <AnimateOnScroll direction="up" delay={0.25}>
        <section className="py-20 bg-gray-100 dark:bg-gray-800 rounded-xl mt-16 shadow-inner">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">{t("ready_to_start_your_journey")}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">{t("explore_opportunities_that_allow_you_to")}</p>
            <Link
              href="https://career.bumimorowaliutama.com"
              target="_blank"
                  rel="noopener noreferrer"
              className="inline-block bg-primary text-white py-3 px-8 rounded-lg shadow hover:shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
            >{t("explore_careers")}</Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "careers");
}
