"use client";
import { useTranslations } from "next-intl";

import AnimateOnScroll from "../AnimateOnScroll";
import NewsLatterBox from "./NewsLatterBox";
import Swal from "sweetalert2";

const Contact = () => {
  const t = useTranslations("contact");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-us`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: t("subject"),
            message: formData.get("message"),
          }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(t("failure"));
      }

      Swal.fire({
        title: t("success"),
        text: t("sent"),
        confirmButtonText: t("ok"),
        icon: "success",
      });

      form.reset();
    } catch (error: any) {
      Swal.fire({
        title: t("failed"),
        text: t("failure"),
        confirmButtonText: t("ok"),
        icon: "error",
      });
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-1">
      <div className="container">
        <AnimateOnScroll>
          <div className="-mx-4 flex flex-wrap">
            {/* FORM */}
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px]">
                <h2 className="mb-3 text-2xl font-bold dark:text-white">{t("contact_us")}</h2>

                <form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    placeholder={t("full_name")}
                    aria-label={t("full_name")}
                    required
                    className="mb-4 w-full rounded border p-3"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    aria-label={t("email")}
                    required
                    className="mb-4 w-full rounded border p-3"
                  />

                  <textarea
                    name="message"
                    placeholder={t("message")}
                    aria-label={t("message")}
                    rows={5}
                    required
                    className="mb-6 w-full rounded border p-3"
                  />

                  <button className="bg-primary px-6 py-3 text-white rounded">{t("send_message")}</button>
                </form>
              </div>
            </div>

            {/* MAP */}
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
