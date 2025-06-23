import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaBehance } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, designation, linkedIn, gScholar } = testimonial;

  return (
    <div className="w-[280px]">
      <div className="group relative overflow-hidden rounded-xl shadow-md bg-[#fff] border border-gray-200 transition-all duration-300 hover:shadow-xl">
        {/* Image */}
        <div className="relative w-full h-[320px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Black overlay on hover */}
          <div className="absolute inset-0 bg-[#000]/0 group-hover:bg-[#000]/20 transition-all duration-300"></div>

          {/* Bottom-left: name + designation */}
          <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-[#000]/60 backdrop-blur-sm text-[#fff] z-10">
            <h3 className="text-sm font-semibold uppercase">{name}</h3>
            <p className="text-xs text-gray-200">{designation}</p>
          </div>

          {/* Top-right: social icons on hover */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 opacity-100 md:opacity-100 transition-opacity duration-300 z-10">
            <a href={gScholar || "#"} className="bg-pink-600 text-[#fff] p-2 rounded-full">
              <FaGoogleScholar size={14} />
            </a>
            <a href={linkedIn || "#"} className="bg-[#0077B5] text-[#fff] p-2 rounded-full">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
