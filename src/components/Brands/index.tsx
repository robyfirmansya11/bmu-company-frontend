import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import AnimateOnScroll from "../AnimateOnScroll";

const Brands = () => {
  return (
    <section className="pt-10 pb-10 lg:pt-20 lg:pb-5">
      <div className="container">

        {/* Judul Section */}
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Partner and Clients
        </h2>

        {/* Grid Logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center p-2">
      <AnimateOnScroll>
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className="block w-full"
        >
          {/* Wajib: Container relative + ukuran tetap */}
          <div className="relative w-32 h-20 mx-auto">
            {/* Dark mode image */}
            <Image
              src={imageLight}
              alt={name}
              fill
              className="hidden dark:block object-contain"
              sizes="(max-width: 768px) 100vw, 150px"
            />
            {/* Light mode image */}
            <Image
              src={image}
              alt={name}
              fill
              className="block dark:hidden object-contain"
              sizes="(max-width: 768px) 100vw, 150px"
            />
          </div>
        </a>
      </AnimateOnScroll>
    </div>
  );
};