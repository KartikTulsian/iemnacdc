import Image from "next/image";

const Brands = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 space-y-20">

        {/* Technical Co-Sponsorship Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 animate-on-scroll">
          <div className="text-center space-y-4">
            <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Technical Co-Sponsorship
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="w-full max-w-6xl flex justify-center">
            {/* Card for Single Large Sponsor */}
            <div className="group bg-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center justify-center min-w-[280px]">
              <Image
                src="/images/brands/IEEE_kol_logo.png"
                width={300}
                height={150}
                alt="Partner 1"
                className="object-contain max-h-[60px] md:max-h-[90px] w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200 w-full max-w-6xl mx-auto" />

        {/* Technical Partners Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 animate-on-scroll">
          <div className="text-center space-y-4">
            <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Technical Partners
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* CHANGED: justify-center allows the logos to sit in the middle if the row isn't full */}
          <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 md:gap-6 stagger-animation">
            {[
              "/images/brands/genai_logo.png",
              "/images/brands/innovai_logo.png",
              "/images/brands/cern_logo.png",
            ].map((src, index) => (
              <div
                key={index}
                /* Fixed width and height ensures all cards are identical */
                className="group w-[160px] h-[120px] md:w-[220px] md:h-[160px] flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Partner ${index}`}
                    width={200}
                    height={100}
                    className="object-contain max-h-full max-w-full w-auto h-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;