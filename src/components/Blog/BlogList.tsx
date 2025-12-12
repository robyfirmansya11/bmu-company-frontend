"use client";

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
          alt="No data"
          width={180}
          height={180}
          className="mb-6 opacity-80"
        />
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Belum ada berita tersedia
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
          Kami belum mempublikasikan berita terbaru. Silakan kembali lagi nanti.
        </p>
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
        >
          ← Prev
        </button>

        <span className="px-4 py-2 text-sm font-medium">
          Page {currentPage} / {totalPages}
        </span>

        <button
          className="px-4 py-2 text-sm border rounded disabled:opacity-40"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
