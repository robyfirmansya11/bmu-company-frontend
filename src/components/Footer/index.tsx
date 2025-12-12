"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">

            {/* Left Section */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-3 max-w-[360px] lg:mb-8">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/BMU.PNG"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>

                <p className="mb-2 text-base leading-relaxed text-body-color dark:text-body-color-dark md:mb-6">
                  {t("company_desc")}
                </p>

                {/* Social Icons */}
                <div className="flex items-center">
                  {/* Icons tetap sama */}
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-2 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {t("useful_links")}
                </h2>
                <ul>
                  <li>
                    <Link href="/" className="footer-link">
                      {t("home")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="footer-link">
                      {t("news")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link">
                      {t("contact_us")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">
                      {t("about_us")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="footer-link">
                      {t("career")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Language Selector */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {t("choose_language")}
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/en" className="inline-flex items-center gap-2 footer-link">
                      <Image src="/flags/us.png" width={20} height={15} alt="" />
                      {t("english")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/id" className="inline-flex items-center gap-2 footer-link">
                      <Image src="/flags/id.png" width={20} height={15} alt="" />
                      {t("indonesian")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/zh" className="inline-flex items-center gap-2 footer-link">
                      <Image src="/flags/cn.png" width={20} height={15} alt="" />
                      {t("chinese")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* More Pages */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {t("more_pages")}
                </h2>
                <ul>
                  <li>
                    <Link href="/contact" className="footer-link">
                      {t("portfolio")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer-link">
                      {t("mining_overview")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">
                      {t("nickel_outlook")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">
                      {t("mining_operations")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/operasi" className="footer-link">
                      {t("licenses")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">
                      {t("conclusion")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              © {new Date().getFullYear()} Bumi Morowali Utama. {t("copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
