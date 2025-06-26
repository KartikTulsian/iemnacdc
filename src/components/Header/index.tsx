"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import menuData from "./menuData";

const Header = () => {

  const menuRef = useRef<HTMLUListElement>(null);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const toggleBarColor = pathname === "/" && !sticky ? "bg-[#fff]" : "bg-[#000]";

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleSubmenu = (index: number) => {
    // On desktop, allow toggling only
    if (!isMobile) {
      setOpenIndex((prev) => (prev === index ? -1 : index));
    } else {
      // On mobile, toggle the clicked submenu index
      setOpenIndex((prev) => (prev === index ? -1 : index));
    }
  };

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header
        className={`header z-40 w-full overflow-x-visible items-center transition-all duration-500 ease-in-out transform ${
          sticky
            ? "fixed top-0 translate-y-0 bg-opacity-100 shadow-md backdrop-blur-sm"
            : "fixed top-0 translate-y-0 bg-[#ffffff30]"
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between px-4 py-2 md:py-2 lg:flex-nowrap gap-y-2 min-w-0 overflow-hidden">
          {/* Left Logos with NACDC + IEM + UEM on small screens */}
          <div className="flex items-center gap-4 lg:gap-8 xl:gap-10 pr-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/nacdc_logo_bgr.png"
                alt="NACDC Logo"
                width={1500}
                height={1500}
                priority
                quality={100}
                className="h-[12vh] lg:h-[16vh] w-auto max-w-[11rem] md:max-w-[12rem] lg:max-w-[14rem] xl:max-w-[14rem] object-contain"
              />
            </Link>

            {/* Show IEM and UEM logos beside NACDC only on small screens */}
            {/* <div className="flex lg:hidden items-center gap-2">
              <Image
                src="/images/hero/iem-logo.png"
                alt="IEM Logo"
                width={1500}
                height={1003}
                priority
                quality={100}
                className="h-[7vh] w-auto object-contain"
              />
              <Image
                src="/images/hero/uem-logo.png"
                alt="UEM Logo"
                width={1500}
                height={1003}
                priority
                quality={100}
                className="h-[7vh] w-auto object-contain"
              />
            </div> */}
          </div>

          {/* Navbar toggle (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={navbarToggleHandler}
              className="block rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#4A6CF7]"
            >
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} my-1 transition-opacity ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />

            </button>
          </div>

          {/* Navigation */}
          <nav
            ref={navRef}
            className={`w-full transition-all duration-300 ease-in-out ${
              navbarOpen
                ? "block bg-gray-50 mt-4 p-4 rounded-md shadow-md lg:bg-transparent"
                : "hidden lg:block"
            } lg:w-auto lg:p-0`}
          >
            <ul 
              ref={menuRef}
              className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-2 xl:gap-4 lg:space-x-1"
            >
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`block py-2 px-4 text-lg font-medium transition text-center ${
                        pathname === menuItem.path
                          ? "text-[#4A6CF7]"
                          : pathname === "/" && !sticky && !navbarOpen
                          ? "text-[#fff] hover:text-[#4A6CF7]"
                          : "text-gray-700 hover:text-[#4A6CF7]"
                      }`}

                    >
                      <span className="break-words max-w-[7.5rem] text-center leading-snug">
                        {menuItem.title}
                      </span>

                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSubmenu(index)}
                        className={`flex w-full items-center justify-between py-2 px-4 text-base font-medium lg:w-auto transition ${
                          pathname === "/" && !sticky && !navbarOpen
                            ? "text-[#fff] hover:text-[#4A6CF7]"
                            : "text-gray-700 hover:text-[#4A6CF7]"
                        }`}
                      >
                        <span className="break-words max-w-[7.5rem] text-center leading-snug">
                          {menuItem.title}
                        </span>

                        <svg
                          className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 ${
                          isMobile
                            ? openIndex === index
                              ? "max-h-screen overflow-visible"
                              : "max-h-0 overflow-hidden"
                            : openIndex === index
                            ? "block"
                            : "hidden"
                          }  ${!isMobile && openIndex === index ? "lg:absolute lg:block" : ""} 
                            lg:top-full lg:left-0 lg:mt-2 lg:w-45 lg:rounded lg:bg-gray-50 lg:px-1 lg:py-2 lg:shadow-lg`}
                      >

                        <div className="flex flex-col lg:gap-2">
                          {menuItem.submenu?.map(
                            (submenuItem, subIndex) =>
                              submenuItem.path && (
                                <Link
                                  href={submenuItem.path}
                                  key={subIndex}
                                  onClick={() => {
                                    setOpenIndex(-1);
                                    setNavbarOpen(false);
                                  }}
                                  className="block py-2 px-4 text-md text-gray-700 hover:text-[#4A6CF7]"
                                >
                                  {submenuItem.title}
                                </Link>
                              )
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Logos */}
          
          {/* Right Logos on large screens – switch based on sticky */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3 pr-2 min-w-0 flex-shrink justify-end">
            {pathname === "/" && !sticky ? (
              <>
                <Image
                  src="/images/hero/iem-logo-bw.png"
                  alt="IEM Logo BW"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[6vh] sm:h-[6.5vh] md:h-[7vh] lg:h-[8vh] xl:h-[9vh] w-auto object-contain max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[8.5rem]"
                />
                <Image
                  src="/images/hero/uem-logo-bw.png"
                  alt="UEM Logo BW"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[6vh] sm:h-[6.5vh] md:h-[7vh] lg:h-[8vh] xl:h-[9vh] w-auto object-contain max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[8.5rem]"
                />
              </>
            ) : (
              <>
                <Image
                  src="/images/hero/iem-logo.png"
                  alt="IEM Logo"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[6vh] sm:h-[6.5vh] md:h-[7vh] lg:h-[8vh] xl:h-[9vh] w-auto object-contain max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[8.5rem]"
                />
                <Image
                  src="/images/hero/uem-logo.png"
                  alt="UEM Logo"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[6vh] sm:h-[6.5vh] md:h-[7vh] lg:h-[8vh] xl:h-[9vh] w-auto object-contain max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[8.5rem]"
                />
              </>
            )}
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
