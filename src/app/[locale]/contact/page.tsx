import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PT Bumi Morowali Utama",
  description:
    "Contact PT Bumi Morowali Utama for more information about services, partnerships, or questions related to our company.",
};

const ContactPage = () => {
  return (
    <>
        <Breadcrumb
          pageName="Contact Us"
          description="We are ready to assist you in obtaining more information about services, partnerships, or questions related to our company."
        />
        <Contact />
    </>
  );
};

export default ContactPage;
