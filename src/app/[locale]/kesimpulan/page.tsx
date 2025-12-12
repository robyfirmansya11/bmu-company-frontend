"use client";

import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const KesimpulanPage = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-34">
      <AnimateOnScroll direction="left" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-8">
          Conclusion
        </h1>

        {/* Paragraf Isi */}
        <div className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300 text-justify leading-relaxed space-y-2">
          <p>
            As a nickel mining company based in Central Sulawesi, Indonesia,
            <strong> PT Bumi Morowali Utama (BMU) </strong> is well-positioned to benefit from the continued growth of the global new energy and stainless steel industries, thanks to its strategic location and abundant resources. 
          </p>

          <p>
           BMU remains committed to strengthening lawful and compliant mining operations, advancing exploration and mining technologies, and actively protecting the local environment. At the same time, the company strives to establish stable partnerships with downstream smelting and battery enterprises, ensuring long-term and sustainable development.
          </p>
        </div>

        {/* Gambar Pendukung (Opsional) */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/Mining4.png"
              alt="Tambang BMU"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
};

export default KesimpulanPage;
