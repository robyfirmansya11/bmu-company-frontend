import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  
  title: "About Us | PT. Bumi Morowali Utama",
  description:
    "The About Us page of PT. Bumi Morowali Utama showcases the company's profile, values, vision, mission, and our commitment to supporting industrial growth and sustainable development.",
};

const AboutPage = () => {
  return (
    <main className="w-full max-w-none mx-0 px-0">
      <AnimateOnScroll direction="up" delay={0.1}>
      {/* Breadcrumb di paling atas full width */}
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <Breadcrumb
          pageName="About Us"
          description="PT. Bumi Morowali Utama is committed to becoming a trusted partner in supporting industrial advancement through innovation, professionalism, and strong dedication. We continue to grow by prioritizing quality, workplace safety, and responsibility toward the environment and surrounding communities."
        />
      </div>
            </AnimateOnScroll>

      {/* Konten tentang perusahaan */}
      <AnimateOnScroll direction="right" delay={0.5}>
      <AboutSectionOne />
      </AnimateOnScroll>

      <AnimateOnScroll direction="left" delay={0.5}>
      <AboutSectionTwo />
      </AnimateOnScroll>

    </main>
  );
};

export default AboutPage;
