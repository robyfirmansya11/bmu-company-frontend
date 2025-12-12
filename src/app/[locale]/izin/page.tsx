"use client";

import React, { useState } from "react";
import { FileText, X } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const IzinPage = () => {
  const pdfFiles = [
    "1. Akta Pendirian.pdf",
    "2. SKMENKEH (AKTA PENDIRIAN NO 23).pdf",
    "3. NIB.pdf",
    "4. Akta - Pernyataan Keputusan Rapat Umum Pemegang Saham Luar Biasa.pdf",
    "5. SK AHU - Penerimaan Pemberitahuan Perubahan Data Perseroan.pdf",
    "6. IUP Operasi Produksi.pdf",
    "7. Izin Pinjam Pakai.pdf",
    "8. NPWP.pdf",
    "9. SKT.pdf",
  ];

  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPdf = (file: string) => {
    setSelectedPdf(`/images/about/sertifikasi/${encodeURIComponent(file)}`);
    setSelectedTitle(file.replace(".pdf", ""));
    setTimeout(() => setIsVisible(true), 50);
  };

  const closePdf = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedPdf(null);
      setSelectedTitle(null);
    }, 300);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 md:py-20 lg:py-34">
      <AnimateOnScroll direction="right" delay={0.20}>
      <div className="container mx-auto px-6 lg:px-16">
        {/* Judul Halaman */}
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Company Key Licenses and Certifications
        </h1>

        {/* Deskripsi */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Attached are the company’s principal licenses and certifications, including IUPOP, IPPKH, RKAB, and others.
        </p>

        {/* Grid File PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfFiles.map((file, i) => (
            <button
              key={i}
              onClick={() => openPdf(file)}
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition w-full text-left"
            >
              <FileText className="text-red-600" size={20} />
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                {file.replace(".pdf", "")}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Preview PDF */}
        {selectedPdf && (
          <div
            className={`fixed inset-0 flex items-center justify-center 
              bg-black/60 backdrop-blur-sm transition-all duration-300 z-[9999]
              ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl 
                w-[90%] h-[90%] overflow-hidden 
                transform transition-transform duration-300 
                ${isVisible ? "scale-100" : "scale-95"}`}
            >
              {/* Tombol Close */}
              <button
                onClick={closePdf}
                className="absolute top-3 right-3 z-[10000] 
                  text-gray-600 hover:text-red-600 dark:text-gray-300 transition-colors"
              >
                <X size={26} />
              </button>

              {/* Judul Dokumen */}
              <div className="absolute top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center py-4 text-sm font-medium border-b border-gray-200 dark:border-gray-700 z-[9999]">
                📄 {selectedTitle}
              </div>

              {/* Viewer PDF */}
              <iframe
                src={selectedPdf}
                className="w-full h-full pt-10 rounded-lg"
                title="PDF Viewer"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      </AnimateOnScroll>
    </section>
  );
};

export default IzinPage;
