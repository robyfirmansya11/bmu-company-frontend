import { pageMetadata } from "@/lib/metadata";
import { getPageTranslations } from "@/lib/getDictionary";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

const ContactPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getPageTranslations((await params).locale, "contactPage");
  return (
    <>
        <Breadcrumb
          pageName={t("contact_us")}
          description={t("we_are_ready_to_assist_you")}
        />
        <Contact />
    </>
  );
};

export default ContactPage;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale, "contact_us");
}
