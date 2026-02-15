import { Speaker } from "@/types/speaker";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const SingleSpeaker = ({ speaker }: { speaker: Speaker }) => {
  const { name, image, designation, linkedIn } = speaker;

  return (
    <div className="flex flex-col h-full w-full max-w-[300px] group bg-[#FBFBFF] rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 border border-[#E0E0E0] overflow-hidden text-center">
      {/* Image Container */}
      <div className="relative pt-8 px-5 flex justify-center">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-45 md:h-45 overflow-hidden rounded-full ring-[12px] ring-[#E0E0E0] group-hover:ring-[#96d8fc5c] transition-all duration-500 shadow-inner">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" /> */}

        {/* Subtle LinkedIn Badge - Top Right */}
        {linkedIn && (
          <Link
            href={linkedIn}
            target="_blank"
            aria-label={`${name}'s LinkedIn`}
            className="absolute bottom-5 right-[18%] sm:right-[22%] bg-[#0077B5] text-[#fff] w-9 h-9 flex items-center justify-center rounded-full shadow-lg z-20 
                       transition-all duration-300 transform 
                       scale-100 lg:scale-0 lg:group-hover:scale-100 hover:scale-110"
          >
            <FaLinkedinIn size={14} />
          </Link>
        )}
      </div>

      {/* Content - Bottom */}
      <div className="flex flex-col flex-grow p-6 pt-4 items-center">
        <h3 className="text-lg md:text-xl font-bold text-[#1D2144] mb-2 leading-tight transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </h3>

        {/* Modern Accent Line */}
        <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-5 transform origin-center group-hover:w-13 group-hover:scale-x-150 transition-all duration-500" />

        <p className="text-xs md:text-sm leading-relaxed text-[#555555] font-medium italic">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default SingleSpeaker;