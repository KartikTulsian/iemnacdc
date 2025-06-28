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
        className={`header z-50 w-full items-center transition-all duration-500 ease-in-out transform ${
          sticky
            ? "fixed top-0 translate-y-0 bg-opacity-100 shadow-md backdrop-blur-sm"
            : "fixed top-0 translate-y-0 bg-[#ffffff30]"
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between lg:justify-around px-2 py-2 md:py-2 lg:flex-nowrap gap-y-2 min-w-0 overflow-visible relative">
          {/* Left Logos with NACDC + IEM + UEM on small screens */}
          <div className="flex items-center gap-2 lg:gap-8 xl:gap-10 pr-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={pathname === "/" && !sticky ? "/images/logo/nacdc_logo_bgr_white.png" : "/images/logo/nacdc_logo_bgr.png"}
                alt="NACDC Logo"
                width={1500}
                height={1500}
                priority
                quality={100}
                className="h-[11vh] lg:h-[13vh] w-auto max-w-[11rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem] object-contain"
              />
            </Link>

            {/* Show IEM and UEM logos beside NACDC on small and medium screens */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3 pl-1 flex-shrink-0">
              {pathname === "/" && !sticky ? (
                <>
                  <Image
                    src="/images/hero/iem-logo-bw.png"
                    alt="IEM Logo BW"
                    width={1500}
                    height={1003}
                    quality={100}
                    priority
                    className="h-[7vh] sm:h-[7vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
                  />
                  <Image
                    src="/images/hero/uem-logo-bw.png"
                    alt="UEM Logo BW"
                    width={1500}
                    height={1003}
                    quality={100}
                    priority
                    className="h-[7vh] sm:h-[7vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
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
                    className="h-[7vh] sm:h-[7vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
                  />
                  <Image
                    src="/images/hero/uem-logo.png"
                    alt="UEM Logo"
                    width={1500}
                    height={1003}
                    quality={100}
                    priority
                    className="h-[7vh] sm:h-[7vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
                  />
                </>
              )}
            </div>
          </div>

          {/* Navbar toggle (Mobile) */}
          <div className="lg:hidden ml-auto pl-2">
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
              className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-2 xl:gap-4 lg:space-x-1 lg:mr-2"
            >
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`block py-2 px-3 text-lg font-medium transition lg:text-center ${
                        pathname === menuItem.path
                          ? "text-[#4A6CF7]"
                          : pathname === "/" && !sticky && !navbarOpen
                          ? "text-[#fff] hover:text-[#4A6CF7]"
                          : "text-gray-700 hover:text-[#4A6CF7]"
                      }`}

                    >
                      {/* <span className="break-words max-w-[7.5rem] text-center leading-snug">
                        {menuItem.title}
                      </span> */}
                      {menuItem.title}

                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSubmenu(index)}
                        className={`flex w-full items-center justify-between py-2 px-3 text-base font-medium lg:w-auto transition ${
                          pathname === "/" && !sticky && !navbarOpen
                            ? "text-[#fff] hover:text-[#4A6CF7]"
                            : "text-gray-700 hover:text-[#4A6CF7]"
                        }`}
                      >
                        {/* <span className="break-words max-w-[7.5rem] text-center leading-snug">
                          {menuItem.title}
                        </span> */}
                        {menuItem.title}
                        <svg
                          className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
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
          <div className="hidden lg:flex items-center gap-1 xl:gap-3 min-w-0 flex-shrink justify-end">
            {pathname === "/" && !sticky ? (
              <>
                <Image
                  src="/images/hero/iem-logo-bw.png"
                  alt="IEM Logo BW"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[8vh] lg:h-[10vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[9rem]"
                />
                <Image
                  src="/images/hero/uem-logo-bw.png"
                  alt="UEM Logo BW"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[8vh] lg:h-[10vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[9rem]"
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
                  className="h-[8vh] lg:h-[10vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[9rem]"
                />
                <Image
                  src="/images/hero/uem-logo.png"
                  alt="UEM Logo"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[8vh] lg:h-[10vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[9rem]"
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


// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import menuData from "./menuData";

// const Header = () => {

//   const menuRef = useRef<HTMLUListElement>(null);

//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [openIndex, setOpenIndex] = useState(-1);
//   const pathname = usePathname();
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

//   const toggleBarColor = pathname === "/" && !sticky ? "bg-[#fff]" : "bg-[#000]";

//   const handleStickyNavbar = () => {
//     setSticky(window.scrollY >= 80);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//     return () => window.removeEventListener("scroll", handleStickyNavbar);
//   }, []);

//   const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
//   const handleSubmenu = (index: number) => {
//     // On desktop, allow toggling only
//     if (!isMobile) {
//       setOpenIndex((prev) => (prev === index ? -1 : index));
//     } else {
//       // On mobile, toggle the clicked submenu index
//       setOpenIndex((prev) => (prev === index ? -1 : index));
//     }
//   };

//   const navRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         navRef.current &&
//         !navRef.current.contains(event.target as Node)
//       ) {
//         setOpenIndex(-1);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       <header
//         className={`header z-40 w-full items-center transition-all duration-500 ease-in-out transform ${
//           sticky
//             ? "fixed top-0 translate-y-0 bg-opacity-100 shadow-md backdrop-blur-sm"
//             : "fixed top-0 translate-y-0 bg-[#ffffff30]"
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 py-1 flex-wrap lg:flex-nowrap gap-2 lg:gap-4">
//           {/* Left Logos with NACDC + IEM + UEM on small screens */}
//           <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 min-w-0">
//             <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-w-0 flex-shrink">
//               <Link href="/" className="flex items-center gap-2 min-w-0">
//                 <Image
//                   src="/images/logo/nacdc_logo_bgr.png"
//                   alt="NACDC Logo"
//                   width={1500}
//                   height={1500}
//                   className="h-[10vh] w-auto max-w-[8rem] sm:max-w-[9rem] md:max-w-[10rem] lg:max-w-[11rem] object-contain flex-shrink"
//                 />
//                 <div className="hidden lg:flex items-center gap-2 min-h-[10vh]">
//                   <Image
//                     src={pathname === "/" && !sticky ? "/images/hero/iem-logo-bw.png" : "/images/hero/iem-logo.png"}
//                     alt="IEM Logo"
//                     width={1500}
//                     height={1003}
//                     className="h-10 sm:h-11 md:h-12 lg:h-[9vh] w-auto max-w-[6rem] object-contain flex-shrink"
//                   />
//                   <Image
//                     src={pathname === "/" && !sticky ? "/images/hero/uem-logo-bw.png" : "/images/hero/uem-logo.png"}
//                     alt="UEM Logo"
//                     width={1500}
//                     height={1003}
//                     className="h-10 sm:h-11 md:h-12 lg:h-[9vh] w-auto max-w-[6rem] object-contain flex-shrink"
//                   />
//                 </div>
//               </Link>
//             </div>


//             {/* Show IEM and UEM logos beside NACDC only on small screens */}
//             {/* <div className="flex lg:hidden items-center gap-2">
//               <Image
//                 src="/images/hero/iem-logo.png"
//                 alt="IEM Logo"
//                 width={1500}
//                 height={1003}
//                 priority
//                 quality={100}
//                 className="h-[7vh] w-auto object-contain"
//               />
//               <Image
//                 src="/images/hero/uem-logo.png"
//                 alt="UEM Logo"
//                 width={1500}
//                 height={1003}
//                 priority
//                 quality={100}
//                 className="h-[7vh] w-auto object-contain"
//               />
//             </div> */}
//           </div>

//           {/* Navbar toggle (Mobile) */}
//           <div className="lg:hidden">
//             <button
//               onClick={navbarToggleHandler}
//               className="block rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#4A6CF7]"
//             >
//               <span
//                 className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${
//                   navbarOpen ? "rotate-45 translate-y-1.5" : ""
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-6 ${toggleBarColor} my-1 transition-opacity ${
//                   navbarOpen ? "opacity-0" : ""
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${
//                   navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
//                 }`}
//               />

//             </button>
//           </div>

//           {/* Navigation */}
//           <nav
//             ref={navRef}
//             className={`w-full transition-all duration-300 ease-in-out ${
//               navbarOpen
//                 ? "block bg-gray-50 mt-4 p-4 rounded-md shadow-md lg:bg-transparent"
//                 : "hidden lg:block"
//             } lg:w-auto lg:p-0`}
//           >
//             <ul 
//               ref={menuRef}
//               className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6 xl:gap-8 text-sm md:text-base whitespace-nowrap overflow-x-auto scrollbar-hide"
//             >
//               {menuData.map((menuItem, index) => (
//                 <li key={index} className="relative group">
//                   {menuItem.path ? (
//                     <Link
//                       href={menuItem.path}
//                       onClick={() => setNavbarOpen(false)}
//                       className={`block py-2 px-4 text-md font-medium transition whitespace-nowrap ${
//                         pathname === menuItem.path
//                           ? "text-[#4A6CF7]"
//                           : pathname === "/" && !sticky && !navbarOpen
//                           ? "text-[#fff] hover:text-[#4A6CF7]"
//                           : "text-gray-700 hover:text-[#4A6CF7]"
//                       }`}

//                     >
//                       {menuItem.title}
//                     </Link>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleSubmenu(index)}
//                         className={`flex w-full items-center justify-between py-2 px-4 text-base font-medium lg:w-auto transition ${
//                           pathname === "/" && !sticky && !navbarOpen
//                             ? "text-[#fff] hover:text-[#4A6CF7]"
//                             : "text-gray-700 hover:text-[#4A6CF7]"
//                         }`}
//                       >
//                         {menuItem.title}
//                         <svg
//                           className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
//                             openIndex === index ? "rotate-180" : ""
//                           }`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                       <div
//                         className={`transition-all duration-300 ${
//                           isMobile
//                             ? openIndex === index
//                               ? "max-h-screen overflow-visible"
//                               : "max-h-0 overflow-hidden"
//                             : openIndex === index
//                             ? "block"
//                             : "hidden"
//                           }  ${!isMobile && openIndex === index ? "lg:absolute lg:block" : ""} 
//                             lg:top-full lg:left-0 lg:mt-2 lg:w-45 lg:rounded lg:bg-gray-50 lg:px-1 lg:py-2 lg:shadow-lg`}
//                       >

//                         <div className="flex flex-col lg:gap-2">
//                           {menuItem.submenu?.map(
//                             (submenuItem, subIndex) =>
//                               submenuItem.path && (
//                                 <Link
//                                   href={submenuItem.path}
//                                   key={subIndex}
//                                   onClick={() => {
//                                     setOpenIndex(-1);
//                                     setNavbarOpen(false);
//                                   }}
//                                   className="block py-2 px-4 text-md text-gray-700 hover:text-[#4A6CF7]"
//                                 >
//                                   {submenuItem.title}
//                                 </Link>
//                               )
//                           )}
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Right Logos */}
          
//           {/* Right Logos on large screens – switch based on sticky */}
//           {/* <div className="hidden lg:flex items-center gap-2 min-h-[11vh]">
//             {pathname === "/" && !sticky ? (
//               <>
//                 <Image
//                   src="/images/hero/iem-logo-bw.png"
//                   alt="IEM Logo BW"
//                   width={1500}
//                   height={1003}
//                   quality={100}
//                   priority
//                   className="h-12 sm:h-14 md:h-16 lg:h-[11vh] w-auto object-contain"
//                 />
//                 <Image
//                   src="/images/hero/uem-logo-bw.png"
//                   alt="UEM Logo BW"
//                   width={1500}
//                   height={1003}
//                   quality={100}
//                   priority
//                   className="h-12 sm:h-14 md:h-16 lg:h-[11vh] w-auto object-contain"
//                 />
//               </>
//             ) : (
//               <>
//                 <Image
//                   src="/images/hero/iem-logo.png"
//                   alt="IEM Logo"
//                   width={1500}
//                   height={1003}
//                   quality={100}
//                   priority
//                   className="h-12 sm:h-14 md:h-16 lg:h-[11vh] w-auto object-contain"
//                 />
//                 <Image
//                   src="/images/hero/uem-logo.png"
//                   alt="UEM Logo"
//                   width={1500}
//                   height={1003}
//                   quality={100}
//                   priority
//                   className="h-12 sm:h-14 md:h-16 lg:h-[11vh] w-auto object-contain"
//                 />
//               </>
//             )}
//           </div> */}

//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
