export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { notFound } from "next/navigation";
import { getCareerBySlug, getAllCareers } from "@/lib/api/careers";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

export default async function CareerDetail({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const career = await getCareerBySlug(params.slug);
  if (!career) return notFound();

  return (
    <>
      <Breadcrumb
        pageName={career.title}
        description="Detail lowongan pekerjaan"
      />

      <section className="pt-[120px] pb-[120px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">

            {/* IMAGE */}
{career.image && (
  <div className="relative w-full h-[350px] mb-10">
    <Image
      src={career.image}
      alt={career.title}
      fill
      className="object-cover rounded-xl shadow-lg"
    />
  </div>
)}

            {/* MAIN TITLE */}
            <h1 className="text-4xl font-bold mb-8 dark:text-white">
              {career.title}
            </h1>

            {/* DETAILS WITH TITLES */}
            <div className="space-y-6 mb-12">

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  📍 Location
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {career.location || "-"}
                </p>
              </div>

              {/* Type */}
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  💼 Job Type
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {career.type || "-"}
                </p>
              </div>

              {/* Published At */}
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  🗓 Published At
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {career.published_at
                    ? new Date(career.published_at).toLocaleDateString()
                    : "-"}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="font-bold text-2xl">Job Description</h2>
              <p className="mb-6">{career.description}</p>

              {/* REQUIREMENTS */}
              {career.requirements && career.requirements.length > 0 && (
                <>
                  <h2 className="font-bold text-2xl mt-10">Requirements</h2>
                  <ul>
                    {career.requirements
                      .filter((req: any) => req.item)
                      .map((req: any, index: number) => (
                        <li key={index}>{req.item}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>

            {/* APPLY BUTTON */}
            <div className="mt-12">
              <a
                href="mailto:hrd@yourcompany.com?subject=Lamaran%20Kerja"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
