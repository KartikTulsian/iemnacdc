import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="flex fle-col justify-center pt-16 pb-10 bg-white mx-auto">
      <div className="container">
        <SectionTitle
          title="🤝 Our Technical Partners"
          paragraph="We are proud to collaborate with globally recognized institutions and innovators."
          center
        />
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 pt-10 pb-6">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className="group transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-42 md:h-42 lg:w-50 lg:h-50">
        {/* Colored logo for small & medium screens */}
        <div className="block lg:hidden relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Grayscale (light) logo for large screens */}
        <div className="hidden lg:block relative w-full h-full">
          {/* Grayscale (default) */}
          <Image
            src={imageLight || image}
            alt={name}
            fill
            priority
            quality={100}
            className="object-contain opacity-90 grayscale group-hover:opacity-0 transition-opacity duration-300"
          />
          {/* Colored (on hover) */}
          <Image
            src={image}
            alt={`${name} color`}
            fill
            priority
            quality={100}
            className="object-contain opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-200"
          />
        </div>
      </div>
    </Link>
  );
};
