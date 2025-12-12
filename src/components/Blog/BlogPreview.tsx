"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import SingleBlog from "./SingleBlog";
import AnimateOnScroll from "../AnimateOnScroll";
import { fetchNews } from "@/lib/api-client/news";

export default function BlogPreview() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setBlogs(data.slice(0, 3)); // hanya 3 berita untuk preview
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    loadNews();
  }, []);

  return (
    <section className="py-16 bg-gray-light dark:bg-bg-color-dark">
      <div className="container text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Latest news
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogs.map((blog) => (
              <SingleBlog key={blog.id} blog={blog} locale={locale} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`/${locale}/blog`}
              className="inline-block rounded bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition"
            >
              View All News →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
