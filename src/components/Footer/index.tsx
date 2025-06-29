"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#f5f3ff] z-[-10]">
      <footer className="relative z-10 pt-10 md:pt-12 lg:pt-10 border-t border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
          
          {/* Row 1: Logo */}
          <div className="flex justify-start">
            <Image
              src="/images/logo/nacdc_logo_bgr.png"
              alt="NACDC Logo"
              width={1500}
              height={1500}
              priority
              quality={100}
              className="h-[16vh] w-auto object-contain"
            />
          </div>

          {/* Row 2: Details & Links */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            
            {/* Column 1: NACDC Details */}
            <div className="lg:w-1/3">
              <div className="text-2xl font-bold text-[#000] mb-3">NACDC 2026</div>
              <p className="text-base text-body-color mb-4">
                For detailed registration guidelines, submission deadlines, and travel information, please visit the official website.
              </p>
              <p className="text-base text-body-color">
                📅 January 14 – 16, 2026<br /><br />
                📍 Canada
              </p>
            </div>

            {/* Column 2: Useful Links + Contact */}
            <div className="lg:w-2/3 flex flex-col sm:flex-row lg:justify-around md:justify-start gap-8 md:gap-25 lg:border-l border-gray-200 lg:pl-20">
              
              {/* Useful Links */}
              <div>
                <h2 className="text-xl font-bold text-[#000] mb-5">Useful Links</h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/registration"
                      className="text-base text-body-color hover:text-[#4A6CF7] transition-colors"
                    >
                      ➤ Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/callForPapers"
                      className="text-base text-body-color hover:text-[#4A6CF7] transition-colors"
                    >
                      ➤ Tracks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-body-color hover:text-[#4A6CF7] transition-colors"
                    >
                      ➤ About
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-bold text-[#000] mb-5">Contact</h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://nacdc.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-[#4A6CF7] hover:text-purple-700 transition-colors"
                    >
                      🌐 Website: nacdc.in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:nacdc@iem.edu.in"
                      className="text-base font-medium text-[#4A6CF7] hover:text-purple-700 transition-colors"
                    >
                      📧 Email: nacdc@iem.edu.in
                    </Link>
                  </li>
                  <li className="text-base font-medium text-[#4A6CF7]">
                    📞 +91 9674032480
                  </li>
                  <li className="text-base font-medium text-[#4A6CF7]">
                    📞 +91 9433495413
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Divider with no extra bottom margin */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a6aab0] to-transparent" />

          {/* Bottom Note (tight spacing) */}
          <div className="pt-4 pb-8 text-center ">
            <p className="text-base text-gray-600 ">
              Developed By <span className="font-semibold text-[#4A6CF7]">NACDC 2025 Digital Team</span>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
