import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const BlogSidebar1 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            North American Conference on Computational Intelligence, Data Science, and Cloud Computing
          </h1>
          <div className="w-50 h-1 mx-auto bg-gradient-to-r from-[#4A6CF7] via-indigo-400 to-[#4A6CF7] rounded shadow-md" />
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Main Blog Content */}
          <div className="lg:w-8/12 space-y-8">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative aspect-[97/60] sm:aspect-[97/44] w-full">
                <Image
                  src="/images/blog/NACDC.png"
                  alt="NACDC"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              The North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026) is an international conference dedicated to bringing together leading academics,
              researchers, practitioners, and industry experts from across the globe. The conference will be held from January 14 to 16, 2026 in Canada.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              NACDC 2026 is poised to be a significant platform for the discussion, dissemination, and exchange of the latest trends, innovations, and future directions in Computational Intelligence, Artificial Intelligence (AI), Data Science, Big Data Analytics, Cloud Computing, and Emerging Technologies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              In an era where intelligent computing and data-driven technologies are rapidly reshaping industries, the conference offers a unique venue for bridging the gap between theoretical advancements and real-world applications.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10">Major Tracks and Topics</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>Computational Intelligence and Artificial Intelligence</li>
              <li>Data Science and Big Data</li>
              <li>Cloud Computing and Infrastructure</li>
              <li>Advanced and Emerging Technologies</li>
            </ul>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:w-4/12 space-y-8">
            {/* Explore More */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-5">
                Explore More
              </h2>
              <ul>
                <li
                  onClick={() => onSelect("blog2")}
                  className="border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="IEM Kolkata"
                    image="/images/hero/gurukul_image.png"
                    slug="#"
                  />
                </li>
                <li
                  onClick={() => onSelect("blog3")}
                  className="border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="IEM Kolkata"
                    image="/images/hero/gurukul_image.png"
                    slug="#"
                  />
                </li>
              </ul>
            </div>

            {/* Conference Quick Info */}
            <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-gray-200 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#4A6CF7]" />
                  <span>January 14–16, 2026</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#4A6CF7]" />
                  <span>Canada (Venue TBA)</span>
                </li>
                {/* <li className="flex items-center gap-3">
                  <FaClock className="text-[#4A6CF7]" />
                  <span>Starts at 9:00 AM</span>
                </li> */}
              </ul>
            </div>

            {/* Optional: Latest Update */}
            {/* <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Updates</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Paper submission deadline extended to October 15, 2025.</li>
                <li>Workshop list has been updated.</li>
              </ul>
            </div> */}

          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebar1;
