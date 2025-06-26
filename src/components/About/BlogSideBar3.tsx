import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

const BlogSidebar3 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            The University of British Columbia, Vancouver, Canada
          </h1>
          <div className="w-50 h-1 mx-auto bg-gradient-to-r from-[#4A6CF7] via-indigo-400 to-[#4A6CF7] rounded shadow-md" />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <div className="lg:w-8/12 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The University of British Columbia (UBC) is a global centre for teaching, learning and research, consistently ranked among the top public universities in the world.
            </p>

            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative aspect-[97/60] sm:aspect-[97/44] w-full">
                <Image
                  src="/images/hero/hero_image7.png"
                  alt="UBC Campus"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Since 1915, UBC has been opening doors of opportunity for those with the curiosity, drive, and vision to shape a better world. UBC transforms initiative into innovation and ideas into impact.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Its strategic plan outlines a bold path forward, encouraging action and inspiring students, faculty, and global partners to collaborate on impactful change.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10">UBC Campuses</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>Main campuses located in Vancouver and Kelowna (Okanagan Valley)</li>
              <li>Robson Square, UBC Learning Exchange, and Centre for Digital Media in Vancouver</li>
              <li>Clinical education through 80+ Faculty of Medicine training sites across BC</li>
              <li>Regional hubs in Hong Kong and India for research and collaboration</li>
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-4/12 space-y-8">

            {/* Explore More */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-5">
                Explore More
              </h2>
              <ul>
                <li
                  onClick={() => onSelect("blog1")}
                  className="mb-6 pb-6 border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="NACDC 2026"
                    image="/images/blog/NACDC.png"
                    slug="#"
                  />
                </li>
                <li
                  onClick={() => onSelect("blog2")}
                  className="mb-6 pb-6 border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="IEM Kolkata"
                    image="/images/hero/gurukul_image.png"
                    slug="#"
                  />
                </li>
              </ul>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-gray-200 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaUniversity className="text-[#4A6CF7]" />
                  <span>Founded in 1908</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#4A6CF7]" />
                  <span>Vancouver & Kelowna, Canada</span>
                </li>
              </ul>
            </div>

            {/* Reference */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Reference</h3>
              <ul className="list-disc list-inside text-blue-600 text-sm space-y-2">
                <li>
                  <Link
                    href="https://www.ubc.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of British Columbia Official Website
                  </Link>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebar3;
