import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-gray-dark py-16 md:py-20 lg:py-15"
    >
      <div className="w-full px-6 lg:px-10">
        <hr className="border-gray-300 dark:border-gray-700 mb-16" />
        <h1 className="text-center text-5xl md:text-5xl font-bold text-black dark:text-white mb-16">
          Profile Company
        </h1>

        {/* Layout dua kolom: kiri gambar - kanan teks */}
        <div className="flex flex-wrap items-start justify-between">
          {/* Kiri: Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <div className="relative w-full max-w-[640px] lg:max-w-[580px] aspect-[2/1] overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src="/images/about/bmu1.png"
                alt="bmu1"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
              />
            </div>
          </div>

          {/* Kanan: Konten */}
          <div className="w-full lg:w-1/2 max-w-[700px] lg:pl-10">
            {/* Profil Perusahaan */}
            <div className="mb-10">
              <div className="text-body-color text-lg leading-relaxed space-y-2">
                <p><strong>Company Name:</strong> PT Bumi Morowali Utama</p>
                <p><strong>Legal Entity:</strong> Perseroan Terbatas (PT)</p>
                <p><strong>Main Business:</strong> Nickel ore mining, sales, and supply chain cooperation</p>
                <p><strong>License:</strong> IUP Operasi Produksi</p>
                <p>
                  <strong>Address:</strong> Soho @Podomoro City Lantai 30 Unit 02, Jl. Letjen S. Parman Kav. 28,<br />
                  Kel. Tanjung Duren Selatan, Kec. Grogol Petamburan, Jakarta Barat 11470
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Penutup - Full Width */}
        <div className="mt-16 max-w-[1000px] mx-auto">
          {/* Pengenalan */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Introduction to BMU Nickel Mining Company
            </h3>
            <p className="text-body-color text-lg leading-relaxed">
              PT Bumi Morowali Utama (hereinafter referred to as BMU) is a limited liability company (Perseroan Terbatas) registered in Indonesia and headquartered in Jakarta. The company is primarily engaged in the exploration, mining, and sales of nickel ore resources. BMU’s mining concession is located in Morowali Regency, Central Sulawesi (Kabupaten Morowali, Sulawesi Tengah), covering an area of 1,963 hectares. This region is among the most resource-rich areas in Indonesia, known for its concentrated nickel reserves and active mining and smelting operations.
            </p>
          </div>

          <p className="text-body-color text-lg leading-relaxed">
            BMU’s mining resources primarily consist of laterite nickel ore, including both the limonite layer and the saprolite layer, with the majority of production supplied to domestic smelters in Indonesia.

          </p>
          <br />
            <hr className="border-gray-300 dark:border-gray-700 md:5a" />
        </div>
      </div>
    </section>
  );
};


export default AboutSectionTwo;
