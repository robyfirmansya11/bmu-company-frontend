"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Video() {
  const titleAnim = useScrollFadeIn("up", 0);
  const descAnim = useScrollFadeIn("up", 0.2);
  const buttonAnim = useScrollFadeIn("up", 0.4);
  const videoAnim = useScrollFadeIn("up", 0.6);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-10 overflow-hidden">
      <div className="container">
        {/* Judul */}
        <motion.div
          ref={titleAnim.ref}
          initial="hidden"
          animate={titleAnim.controls}
          variants={titleAnim.variants}
        >
         <SectionTitle
  title="Vision and Mission"
  paragraph=""
  center
  mb="5px"
/>

        </motion.div>

        {/* Deskripsi */}
        <motion.p
          ref={descAnim.ref}
          initial="hidden"
          animate={descAnim.controls}
          variants={descAnim.variants}
          className="text-center max-w-7xl mx-auto text-base md:text-lg text-light-700"
        >
          PT Bumi Morowali Utama was established in 2020 and has since been operating in Indonesia.. The company provides a wide range of products and services across multiple industries, including automotive, agricultural machinery, petrochemicals, as well as maintenance and customer support.
        </motion.p>
      </div>

      <br />

      {/* Tombol Selengkapnya */}
      <motion.div
        ref={buttonAnim.ref}
        initial="hidden"
        animate={buttonAnim.controls}
        variants={buttonAnim.variants}
        className="container text-center"
      >
        <Link
          href="/about"
          className="inline-block rounded bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
        >
          More About Us
        </Link>
      </motion.div>

      {/* Gambar Video */}
      <motion.div
        ref={videoAnim.ref}
        initial="hidden"
        animate={videoAnim.controls}
        variants={videoAnim.variants}
        className="relative overflow-hidden mt-10"
      >
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md shadow-lg">
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/jalan-hauling.jpg"
                  alt="video image"
                  className="object-cover"
                  fill
                />
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                  <motion.button
                    aria-label="video play button"
                    onClick={() =>
                      window.open("https://youtu.be/LD-Jy2j5Pj0", "_blank")
                    }
                    className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
      </motion.div>
    </section>
  );
}
