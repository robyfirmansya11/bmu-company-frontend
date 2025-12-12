"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { menuKeys } from "./menuData";
import { useTranslations } from "next-intl";

const Header = ({ locale }) => {
  const t = useTranslations("navbar");   // ← AMBIL TRANSLASI NAVBAR

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const pathname = usePathname();
  const closeNavbar = () => setNavbarOpen(false);

  const menus = menuKeys(locale);

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/BMU.PNG"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/BMU.PNG"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Mobile Button */}
              <button
                onClick={navbarToggleHandler}
                className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* NAV */}
              <nav
                className={`navbar absolute right-0 z-30 w-[250px] rounded border bg-white px-6 py-4 duration-300 lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0 lg:visible lg:opacity-100"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menus.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          onClick={closeNavbar}
                          className={`flex py-2 text-base lg:px-0 lg:py-6 ${
                            pathname === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {t(menuItem.key)}
                        </Link>
                      ) : (
                        <>
                          {/* Parent menu */}
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:px-0 lg:py-6"
                          >
                            {t(menuItem.key)}
                            <span className="pl-3">...</span>
                          </p>

                          {/* Submenu */}
                          <div
                            className={`submenu lg:absolute lg:top-[110%] lg:w-[250px] lg:p-4 lg:shadow-lg dark:bg-dark rounded-sm bg-white transition-all ${
                              openIndex === index ? "block" : "hidden"
                            } lg:group-hover:block`}
                          >
                            {menuItem.submenu?.map((submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={subIndex}
                                onClick={closeNavbar}
                                className="block rounded-sm py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                {t(submenuItem.key)}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4 lg:static absolute right-20 top-1/2 -translate-y-1/2">
              {/* Language Selector */}
  <div className="flex items-center gap-3">
    <Link
      href={`/en${pathname.replace(`/${locale}`, "")}`}
      className={`text-sm font-medium ${
        locale === "en"
          ? "text-primary dark:text-white"
          : "text-dark dark:text-white/70 hover:text-primary"
      }`}
    >
      EN
    </Link>

    <span className="text-gray-400 dark:text-gray-500">|</span>

    <Link
      href={`/id${pathname.replace(`/${locale}`, "")}`}
      className={`text-sm font-medium ${
        locale === "id"
          ? "text-primary dark:text-white"
          : "text-dark dark:text-white/70 hover:text-primary"
      }`}
    >
      ID
    </Link>

    <span className="text-gray-400 dark:text-gray-500">|</span>

    <Link
      href={`/zh${pathname.replace(`/${locale}`, "")}`}
      className={`text-sm font-medium ${
        locale === "zh"
          ? "text-primary dark:text-white"
          : "text-dark dark:text-white/70 hover:text-primary"
      }`}
    >
      ZH
    </Link>
  </div>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
