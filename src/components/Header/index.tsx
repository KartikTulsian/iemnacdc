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
    <header
      className={`header z-40 w-full items-center transition-all duration-500 ease-in-out transform ${
        sticky
          ? "fixed top-0 translate-y-0 bg-opacity-100 shadow-md backdrop-blur-sm"
          : "absolute top-0 translate-y-[-100%] lg:translate-y-0 bg-[#ffffff30]"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3 md:py-4 lg:flex-nowrap">
        {/* Left Logos with NACDC + IEM + UEM on small screens */}
        <div className="flex items-center gap-2 lg:gap-5 min-h-[11vh] pl-4 lg:pl-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/nacdc_logo_bgr.png"
              alt="NACDC Logo"
              width={1500}
              height={1500}
              priority
              quality={100}
              className="h-[13vh] w-auto object-contain"
            />
          </Link>

          {/* Show IEM and UEM logos beside NACDC only on small screens */}
          <div className="flex lg:hidden items-center gap-2">
            <Image
              src="/images/hero/iem-logo.png"
              alt="IEM Logo"
              width={1500}
              height={1003}
              priority
              quality={100}
              className="h-[10vh] w-auto object-contain"
            />
            <Image
              src="/images/hero/uem-logo.png"
              alt="UEM Logo"
              width={1500}
              height={1003}
              priority
              quality={100}
              className="h-[10vh] w-auto object-contain"
            />
          </div>
        </div>

        {/* Navbar toggle (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={navbarToggleHandler}
            className="block rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#4A6CF7]"
          >
            <span
              className={`block h-0.5 w-6 bg-[#000] transition-transform ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#000] my-1 transition-opacity ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#000] transition-transform ${
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
            className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
            {menuData.map((menuItem, index) => (
              <li key={index} className="relative group">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    onClick={() => setNavbarOpen(false)}
                    className={`block py-2 px-4 text-lg font-medium transition ${
                      pathname === menuItem.path
                        ? "text-[#4A6CF7]"
                        : pathname === "/" && !sticky
                        ? "text-[#fff] hover:text-[#4A6CF7]"
                        : "text-gray-700 hover:text-[#4A6CF7]"
                    }`}

                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className={`flex w-full items-center justify-between py-2 px-4 text-base font-medium lg:w-auto transition ${
                        pathname === "/" && !sticky
                          ? "text-[#fff] hover:text-[#4A6CF7]"
                          : "text-gray-700 hover:text-[#4A6CF7]"
                      }`}
                    >
                      {menuItem.title}
                      <svg
                        className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
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
                      } lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-45 lg:rounded lg:bg-gray-50 lg:px-1 lg:py-2 lg:shadow-lg`}
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
        <div className="hidden lg:flex items-center gap-2 min-h-[11vh]">
          {pathname === "/" && !sticky ? (
            <>
              <Image
                src="/images/hero/iem-logo-bw.png"
                alt="IEM Logo BW"
                width={1500}
                height={1003}
                quality={100}
                priority
                className="h-[12vh] w-auto object-contain"
              />
              <Image
                src="/images/hero/uem-logo-bw.png"
                alt="UEM Logo BW"
                width={1500}
                height={1003}
                quality={100}
                priority
                className="h-[12vh] w-auto object-contain"
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
                className="h-[12vh] w-auto object-contain"
              />
              <Image
                src="/images/hero/uem-logo.png"
                alt="UEM Logo"
                width={1500}
                height={1003}
                quality={100}
                priority
                className="h-[12vh] w-auto object-contain"
              />
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
