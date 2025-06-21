import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { linkedIn, gScholar, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div
        className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 dark:bg-dark dark:shadow-gray-800"
        data-wow-delay=".1s"
      >
        {/* Image Section */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-300"
          />

          {/* Bottom Blurred Name & Designation */}
          <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-contrast-100 px-4 py-3 dark:bg-dark/60">
            <h3 className="text-sm font-semibold text-white dark:text-white">
              {name}
            </h3>
            <p className="text-xs text-body-color dark:text-gray-300">
              {designation}
            </p>
          </div>

          {/* Hover Social Icons */}
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <div className="flex gap-2 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white hover:bg-opacity-90"
                >
                  <FaLinkedinIn size={16} />
                </a>
              )}
              {gScholar && (
                <a
                  href={gScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white hover:bg-opacity-90"
                >
                  <SiGooglescholar size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="p-4 border-t border-gray-200 dark:border-white/10">
          <p className="text-center text-sm italic leading-relaxed text-body-color dark:text-white">
            “{content}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
