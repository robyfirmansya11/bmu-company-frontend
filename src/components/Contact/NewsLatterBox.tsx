"use client";

import { useTheme } from "next-themes";
import AnimateOnScroll from "../AnimateOnScroll";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <AnimateOnScroll direction="right" delay={0.3}>
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Our Location
      </h3>
      <p className="border-body-color/25 text-body-color mb-6 border-b pb-6 text-base leading-relaxed dark:border-white/25">
        Visit our location on the map below.
      </p>

      {/* Peta Google Maps */}
      <div className="relative w-full h-[400px] rounded-md overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.3215759497377!2d106.78739905357362!3d-6.174467647885911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f73add25d7ab%3A0x5c0265cf5e639bb5!2sSoho%20Capital!5e1!3m2!1sid!2sid!4v1762484186311!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </AnimateOnScroll>
    </div>
  );
};

export default NewsLatterBox;
