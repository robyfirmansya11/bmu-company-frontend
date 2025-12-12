import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import AnimateOnScroll from "../AnimateOnScroll";

const Brands = () => {
  return (
    <section className="pt-10 pb-10 lg:pt-20 lg:pb-5">
      <div className="container">
        {/* 🔹 Judul di atas logo */}
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Partner and Clients
        </h2>

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
  <div className="flex items-center justify-center p-4">
    <AnimateOnScroll>
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="flex items-center justify-center relative h-35 w-40 
                 opacity-100 transition hover:opacity-100 
                 dark:opacity-100 dark:hover:opacity-100"
    >
      <Image
        src={imageLight}
        alt={name}
        fill
        className="hidden dark:block object-contain"
      />
      <Image
        src={image}
        alt={name}
        fill
        className="block dark:hidden object-contain"
      />
    </a>
    </AnimateOnScroll>
  </div>
);
};

