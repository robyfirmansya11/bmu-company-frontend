import Breadcrumb from "@/components/Common/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore opportunities to grow your career with us.",
};

export default async function CareersPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <>
      {/* Breadcrumb */}
      <AnimateOnScroll direction="up" delay={0.1}>
        <Breadcrumb
          pageName="Career in Our Company"
          description="Discover who we are and the culture that drives our success."
        />
      </AnimateOnScroll>

      {/* Image Below Breadcrumb */}
      <AnimateOnScroll direction="up" delay={0.12}>
        <div className="container mt-8">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
<img
  src="/images/hero/5384286.jpg"
  alt="Career Illustration"
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
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                In our space, few companies are like us. We’re home to some of the
                smartest, most dedicated people in the world. We care deeply about
                people and the planet, create innovative solutions for the world’s
                toughest infrastructure challenges, and own our future as
                employee-owners.
                <br /><br />
                Our professionals act like the company belongs to them – because it
                does. Every decision we make reflects our commitment to safety, our
                values, and our people while driving progress for our clients and
                communities.
                <br /><br />
                At Black & Veatch, you’ll enjoy our hybrid work environment that
                allows you to work in ways that best support your personal and
                professional success. Here, you’ll be empowered to grow, explore new
                possibilities, and help create a sustainable future — all while owning
                your career journey.
              </p>

              <div className="text-center mt-10">
                <Link
                  href="https://career.bumimorowaliutama.com"
                  target="_blank"
                  className="inline-block bg-primary text-white py-3 px-8 rounded-lg shadow hover:shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Work With Us Section */}
      <AnimateOnScroll direction="up" delay={0.2}>
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-10">
              Why Work With Us
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">Employee-Owned Culture</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You have a voice. Every team member contributes to our shared success.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hybrid work options that support your personal and professional growth.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-dark border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">Make Global Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Help shape sustainable infrastructure that improves communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Bottom CTA */}
      <AnimateOnScroll direction="up" delay={0.25}>
        <section className="py-20 bg-gray-100 dark:bg-gray-800 rounded-xl mt-16 shadow-inner">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore opportunities that allow you to grow, make an impact, and build a meaningful career with us.
            </p>
            <Link
              href="https://career.bumimorowaliutama.com"
              target="_blank"
              className="inline-block bg-primary text-white py-3 px-8 rounded-lg shadow hover:shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
            >
              Explore Careers
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
