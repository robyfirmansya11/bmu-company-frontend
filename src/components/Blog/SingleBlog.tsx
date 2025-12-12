"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog, locale }: { blog: Blog; locale: string }) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const imageUrl = blog.image_url
    ? blog.image_url.startsWith("http")
      ? blog.image_url
      : `${baseUrl}${blog.image_url}`
    : blog.image;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-md bg-white duration-300">

      {/* Thumbnail image → menuju detail */}
      <Link
        href={`/${locale}/blog/blog-details/${blog.slug}`}
        className="relative block aspect-[16/9] w-full"
      >
        <Image src={imageUrl} alt={blog.title} fill className="object-cover" />
      </Link>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white group-hover:text-primary">
          {/* Title → menuju detail */}
          <Link href={`/${locale}/blog/blog-details/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>

        <p className="mb-4 border-b pb-4 text-sm text-body-color dark:border-white/10">
          {(blog?.content ?? blog.paragraph ?? "")
            .replace(/<[^>]+>/g, "")
            .substring(0, 80)}
          ...
        </p>

        <p className="text-xs text-gray-500">📅 {blog.publishDate}</p>
      </div>

    </div>
  );
};

export default SingleBlog;
