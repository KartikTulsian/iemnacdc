import React from "react";
import { Hourglass } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function ComingSoon() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-[#fff] to-blue-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 text-blue-700 p-4 rounded-full shadow-md animate-pulse">
            <Hourglass size={40} />
          </div>
        </div>

        <SectionTitle
          title="🚧 Will Be Updated Soon"
          paragraph="We’re working on this section to bring you the most relevant information. Please check back later!"
          center
        />
      </div>

      {/* Optional Background Decoration */}
      <div className="absolute -top-10 -right-10 opacity-20 z-[-1]">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="130" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
