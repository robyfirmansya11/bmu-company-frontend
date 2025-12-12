import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Operasi Pertambangan | PT Bumi Morowali Utama",
  description:
    "Informasi kegiatan operasi pertambangan dan fasilitas dermaga PT Bumi Morowali Utama.",
};

export default function OperasiPage() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-34">
      <AnimateOnScroll direction="right" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-8">
          Mining Operations
        </h1>

        {/* Deskripsi */}
        <div className="text-lg text-body-color dark:text-gray-300 leading-relaxed space-y-6 mb-12">
          <p>

            In the years <strong>2023 and 2024</strong>, <strong>BMU</strong> mined and
            sold a total of <strong>820,000 tons of nickel ore</strong>. This ore has an average grade
            of about <strong>1.5%</strong> and a silica-magnesium ratio{" "}
            <strong>(Si/Mg) of about 1.8</strong>, classifying it as medium-grade nickel ore with a low Si/Mg ratio.
          </p>
          <p>
            <strong>BMU</strong> also has a dedicated jetty located on the coast.
            This facility allows barges to dock and efficiently load nickel ore for shipment.
          </p>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-12" />

        {/* Foto Area Tambang */}
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">
          Photos of the Mining Area
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {["AreaPertambangan1.jpeg", "AreaPertambangan2.jpeg", "AreaPertambangan3.jpeg", "AreaPertambangan4.jpeg"].map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/about/${img}`}
                alt={`Area Tambang ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

{/* Foto Area Dermaga */}
<h2 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">
  Photos of the Jetty Area
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {["jettyarea1.jpg", "jettyarea2.jpg", "jettyarea3.jpg", "jettyarea4.jpg"].map((img, i) => (
    <div
      key={i}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md"
    >
      <Image
        src={`/images/about/${img}`}
        alt={`Area Dermaga ${i + 1}`}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  ))}
</div>

      </div>
      </AnimateOnScroll>
    </section>
  );
}
