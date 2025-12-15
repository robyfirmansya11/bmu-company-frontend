"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion, Variants } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// ✔ FIXED: ease diganti ke 'easeInOut' agar valid di Transition type
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <motion.p
      variants={fadeUp}
      className="text-body-color mb-1 flex items-center text-lg font-medium"
    >
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </motion.p>
  );

  return (
    <section
      id="about"
      className="pt-16 md:pt-20 lg:pt-14 w-full bg-white dark:bg-gray-dark"
    >
      <div className="w-full px-6 lg:px-10">
        {/* Judul & paragraf */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionTitle title="About Company." paragraph="" mb="20px" />
          <p className="text-body-color text-lg font-medium w-full mb-10 leading-relaxed">
            PT Bumi Morowali Utama was established in 2011 and has since been
            operating in Indonesia. The company provides a wide range of
            products and services across multiple industries, including
            automotive, agricultural machinery, petrochemicals, as well as
            maintenance and customer support.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-start justify-between">
          {/* KIRI */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <List text="Visi" />
            <motion.p variants={fadeUp} className="text-body-color mb-6 text-lg font-medium">
              To become a trusted strategic partner in the nickel mining
              industry, serving as a key supplier to the new energy and
              stainless steel sectors. Our vision is driven by sustainability,
              professionalism, and a commitment to advancing future energy
              development.
            </motion.p>

            <List text="Misi" />
            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="list-disc pl-5 text-body-color mb-6 text-lg font-medium space-y-2"
            >
              {[
                "Establish long-term, mutually beneficial partnerships with domestic and international companies.",
                "Continuously enhance nickel ore production capacity while ensuring the highest quality standards.",
                "Manage mining operations professionally with a focus on safety, efficiency, and sustainability.",
                "Actively contribute to the development of the mining industry by supporting training, education, and human resource development.",
                "Create added value for communities and the environment through responsible mining practices.",
              ].map((item, index) => (
                <motion.li key={index} variants={fadeUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* KANAN */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[1280px] aspect-[2/2] overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src="/images/about/Mining4.png"
                alt="Mining4"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
