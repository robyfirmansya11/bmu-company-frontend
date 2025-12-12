"use client";
import NewsLatterBox from "./NewsLatterBox";
import AnimateOnScroll from "../AnimateOnScroll";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";   // <<-- tambahan

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-1">
      <div className="container">
        <AnimateOnScroll>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Contact Us
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  We are ready to connect with you. Please fill out the form below to send questions, suggestions, or requests for more information to our team.
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const name = (document.getElementById("name") as HTMLInputElement).value;
                    const email = (document.getElementById("email") as HTMLInputElement).value;
                    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

                    const templateParams = {
                      name,
                      email,
                      message,
                      title: "New Contact Message",
                    };

                    try {
                      const response = await emailjs.send(
                        "service_g64312m",
                        "template_lgy9qxm",
                        templateParams,
                        "HHsJvPV-70sYKncET"
                      );

                      Swal.fire({
                        title: "Success!",
                        text: "Your message has been sent successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                      });

                      console.log("SUCCESS:", response.status, response.text);

                    } catch (err) {
                      console.error("FAILED:", err);

                      Swal.fire({
                        title: "Failed",
                        text: "Failed to send message. Please try again later.",
                        icon: "error",
                        confirmButtonColor: "#d33",
                      });
                    }
                  }}
                >
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Input your full name"
                          required
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Input your email address"
                          required
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Write your message here..."
                          required
                          className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

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
