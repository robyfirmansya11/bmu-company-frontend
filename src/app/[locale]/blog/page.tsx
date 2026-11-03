import { pageMetadata } from "@/lib/metadata";
import { getPageTranslations } from "@/lib/getDictionary";
import BlogList from "@/components/Blog/BlogList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllNews } from "@/lib/api/news";

export const dynamic = "force-dynamic"; // <-- tambah ini

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getPageTranslations((await params).locale, "blogPage");
  const { locale } = await params;
  const blogs = await getAllNews();

  return (
    <>
      <div>
        <Breadcrumb
          pageName={t("news_and_company_updates")}
          description={t("stay_updated_with_the_latest_company")}
        />
      </div>

      <div>
        <section className="pt-[5px] pb-[40px]">
          <div className="container">
            <BlogList blogs={blogs} locale={locale} />
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "news");
}
