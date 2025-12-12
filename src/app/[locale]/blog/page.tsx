import BlogList from "@/components/Blog/BlogList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getAllNews } from "@/lib/api/news";

export const dynamic = "force-dynamic"; // <-- tambah ini

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const blogs = await getAllNews();

  return (
    <>
      <AnimateOnScroll direction="up" delay={0.1}>
        <Breadcrumb
          pageName="News and Company Updates"
          description="Stay updated with the latest company information."
        />
      </AnimateOnScroll>

      <AnimateOnScroll direction="right" delay={0.1}>
        <section className="pt-[5px] pb-[40px]">
          <div className="container">
            <BlogList blogs={blogs} locale={locale} />
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
