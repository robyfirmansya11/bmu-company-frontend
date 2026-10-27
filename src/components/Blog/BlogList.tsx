"use client";
import { useTranslations } from "next-intl";

import { useState } from "react";
import SingleBlog from "./SingleBlog";
import Image from "next/image";

export default function BlogList({
  blogs,
  locale,
}: {
  blogs: any[];
  locale: string;
}) {
  const t = useTranslations("newsList");
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const currentItems = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center py-24">
        <Image
          src="/images/empty-state.png"
          alt={t("no_data")}
          width={180}
          height={180}
          className="mb-6 opacity-80"
        />
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{t("no_news_available_yet")}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">{t("we_have_not_published_any_news")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {currentItems.map((blog: any) => (
          <SingleBlog key={blog.id} blog={blog} locale={locale} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 text-sm border rounded disabled:opacity-40"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >{t("previous")}</button>

        <span className="px-4 py-2 text-sm font-medium">
          {t("pagination", {current: currentPage, total: totalPages})}
        </span>

        <button
          className="px-4 py-2 text-sm border rounded disabled:opacity-40"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >{t("next")}</button>
      </div>
    </div>
  );
}
