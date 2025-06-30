import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="flex fle-col justify-center pt-16 pb-10 bg-[#fff] mx-auto">
      <div className="container">
        <SectionTitle
          title="🤝 Our Technical Partners"
          paragraph=""
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
  const { href, image, name } = brand;

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className="group transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-42 md:h-42 lg:w-50 lg:h-50">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
};
