import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Ikhtisar Eksplorasi Pertambangan | PT Bumi Morowali Utama",
  description:
    "Ikhtisar kegiatan eksplorasi geologi dan hasil survei sumber daya bijih nikel oleh PT Bumi Morowali Utama.",
};

export default function EksplorasiPage() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-35">
      <AnimateOnScroll direction="right" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          Mining Exploration Overview
        </h1>

        {/* Paragraf Pembuka */}
        <p className="text-lg leading-relaxed text-body-color mb-8">
          In December 2022, <strong>PT Hebei Geologikal Indonesia (HGI)</strong> 
          completed a geological survey and issued a report. The main findings are as follows:
        </p>

        {/* Pekerjaan Eksplorasi */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Exploration Areas and Works
          </h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">
            The exploration company delineated an area of 50 hectares for geological survey work, divided into two exploration zones (B4W and B1W-B2W). The primary works completed included: Topographic survey covering 0.95 km²; Profile survey totaling 17.86 km; Specialized geological survey covering 0.95 km²; Construction of 253 drill holes; Basic analysis of 4,973 samples; Measurement of 253 engineering points. Based on the exploration within the designated area, the estimated nickel ore resources (Ni ≥ 1.30%, controlled + inferred) amount to 2.726 million tons of ore, with an average grade of 1.49%. Controlled resources: 1.907 million tons, average grade 1.49%; Inferred resources: 0.819 million tons, average grade 1.49%.
          </p>
          <p className="text-lg leading-relaxed text-body-color mb-4">
            According to the latest 2025 exploration data, within an area of 212.99 hectares:
          </p>

          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>At an average nickel grade of 1.0%, the estimated reserves amount to 29.81 million tons of ore.</li>
            <li>At an average nickel grade of 1.5%, the estimated reserves amount to 9.02 million tons of ore.</li>
          </ul>
        </div>

        {/* Estimasi Sumber Daya */}
 {       <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Estimasi Sumber Daya Nikel (2022)
          </h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">
            Berdasarkan hasil eksplorasi di area yang ditentukan, 
            perkiraan sumber daya bijih nikel (<strong>Ni ≥ 1.30%</strong>, terkendali + terduga) 
            mencapai <strong>2,726 juta ton bijih</strong> dengan kadar rata-rata <strong>1.49%</strong>. 
            Rinciannya sebagai berikut:
          </p>
          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>Sumber daya terkendali: <strong>1,907 juta ton</strong>, kadar rata-rata <strong>1.49%</strong></li>
            <li>Sumber daya terduga: <strong>0,819 juta ton</strong>, kadar rata-rata <strong>1.49%</strong></li>
          </ul>
        </div>

        /* Data Eksplorasi 2025}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Data Eksplorasi Terbaru (2025)
          </h2>
          <p className="text-lg leading-relaxed text-body-color mb-4">
            Menurut data eksplorasi terbaru tahun 2025 di area seluas <strong>212,99 hektar</strong>:
          </p>
          <ul className="list-disc pl-6 text-body-color text-lg leading-relaxed space-y-2">
            <li>
              Dengan kadar nikel rata-rata <strong>1.0%</strong>, 
              perkiraan cadangan bijih mencapai <strong>29,81 juta ton</strong>.
            </li>
            <li>
              Dengan kadar nikel rata-rata <strong>1.5%</strong>, 
              perkiraan cadangan bijih mencapai <strong>9,02 juta ton</strong>.
            </li>
          </ul> */}
          <p className="mt-4 text-body-color text-lg">
            A detailed calculation is provided as follows :
          </p>
        </div>

        {/* Gambar Eksplorasi (opsional jika ingin menambahkan) */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-2xl overflow-hidden shadow-2xl mt-10">
          <Image
            src="/images/about/TabelSumberDayaCOG.png"
            alt="Ilustrasi Eksplorasi Tambang"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
    
      </AnimateOnScroll>
    </section>
  );
}
