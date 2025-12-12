"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Shape kiri */}
      <motion.img
        src="/images/hero/shape-02.svg"
        alt="shape-left"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 opacity-40 lg:block"
      />

      {/* Shape kanan */}
      <motion.img
        src="/images/hero/shape-01.svg"
        alt="shape-right"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-40 lg:block"
      />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto max-w-[800px] text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                PT. Bumi Morowali Utama
              </motion.h1>

              <motion.p
                className="mb-12 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Since its establishment, PT Bumi Morowali Utama has been a key contributor to the provision of mineral resources for national development. Leveraging our extensive experience, we have steadily evolved into a mining company committed to professionalism, technological advancement, and sustainable practices.
              </motion.p>

              <motion.div
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Link
                  href="/about"
                  className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Learn More
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
