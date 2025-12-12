"use client";

import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const TentangKami: FC = () => {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row flex flex-wrap py-20">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-10 sm:mb-0 sm:px-12">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-6xl text-light-700 font-bold leading-tight mb-5">
            About Us
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">
            <b className="text-red-600">PT Bumi Morowali Utama (BMU)</b> is a limited liability company (Perseroan Terbatas) registered in Indonesia and headquartered in Jakarta. The company is primarily engaged in the exploration, mining, and sales of nickel ore resources. BMU’s mining concession is located in Morowali Regency, Central Sulawesi (Kabupaten Morowali, Sulawesi Tengah), covering an area of 1,963 hectares. This region is among the most resource-rich areas in Indonesia, known for its concentrated nickel reserves and active mining and smelting operations.
          </p>

          <br />

          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">
            Company Name:{" "}
            <b className="text-red-600">PT Bumi Morowali Utama</b>
            <br />
            Legal Entity: Limited Liability Company (Perseroan Terbatas)
            <br />
            Main Business: Nickel ore mining, sales, and supply chain cooperation
            <br />
            License: IUP Operasi Produksi
            <br />
            Address: Soho @Podomoro City Lantai 30 Unit 02, Jl. Letjen S. Parman Kav. 28,
            Jakarta Barat 11470
          </p>

          <br />

          <p className="font-light text-lg sm:text-xl text-light-700 leading-relaxed text-justify">
            BMU’s mining resources primarily consist of laterite nickel ore, including both the limonite layer and the saprolite layer, with the majority of production supplied to domestic smelters in Indonesia.
          </p>
        </Fade>
      </div>

<div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-5 sm:px-12 md:mt-5 mt-10">
  <Fade direction="up" triggerOnce>
    <div className="h-[650px] w-[600px] relative">
      <Image
        src="/images/bmu1.png"
        alt="Tentang Kami"
        fill
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  </Fade>
</div>

    </section>
  );
};

export default TentangKami;
