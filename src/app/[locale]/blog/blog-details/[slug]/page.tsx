import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { getNewsBySlug } from "@/lib/api/news";

export const dynamic = "force-dynamic"; // <-- tambah ini

export default async function Page({ params }: { params: { locale: string; slug: string } }) {
  const { slug } = params;

  const post = await getNewsBySlug(slug);

  if (!post) {
    return (
      <div className="pt-[150px] pb-[120px] text-center">
        <h2 className="text-3xl font-bold">Post not found</h2>
      </div>
    );
  }

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
              {post.title}
            </h2>

            <div className="mb-6 text-sm text-gray-500">
              By {post.author ?? "Admin"} • {post.publishDate}
            </div>

            <div className="mb-10 relative aspect-video rounded-md overflow-hidden">
              <Image
                src={post.image_url || "/images/default.jpg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="prose dark:prose-invert max-w-none mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.tags?.length > 0 && (
              <div className="mb-10">
                <h4 className="text-body-color mb-3 text-sm font-medium">Tags:</h4>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((t: string) => (
                    <TagButton text={t} key={t} />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-5">
              <h5 className="text-body-color mb-3 text-sm font-medium">
                Share this post:
              </h5>
              <SharePost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
