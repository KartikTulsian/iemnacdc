import Image from "next/image";
import { brandsData, coBrandsData } from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4">

        {/* Co-Partners Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <SectionTitle
            title="Technical Co-Partners"
            paragraph=""
            center
          />
          <div className="flex flex-wrap justify-center items-center gap-6">
            {coBrandsData.map((brand) => (
              <div
                key={brand.id}
                className="group flex items-center justify-center bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg w-[140px] md:w-[180px]"
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={130}
                    height={130}
                    className="object-contain max-h-[55px] md:max-h-[80px] w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Partners Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <SectionTitle
            title="🤝 Technical Partners"
            paragraph=""
            center
          />
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Technical Partners
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div> */}

          {/* Balanced Flex Layout: Cards are slightly bigger and fill space better */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
            {brandsData.map((brand) => (
              <div
                key={brand.id}
                className="group flex items-center justify-center bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 w-[160px] sm:w-[200px] md:w-[240px]"
              >
                <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={180}
                    height={100}
                    className="object-contain max-h-[60px] md:max-h-[90px] w-auto transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="my-16 flex justify-center items-center">
          <div className="h-[1px] w-full max-w-[300px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="h-[1px] w-full max-w-[300px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        
      </div>
    </section>
  );
};

export default Brands;