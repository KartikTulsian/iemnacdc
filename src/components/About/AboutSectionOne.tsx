import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne: React.FC = () => {
  const List = ({ text }: { text: string}) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color hover:translate-x-1 transition-transform duration-200">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-[#4A6CF7]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 px-5">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="🌍 Who Should Attend"
                paragraph="Is this conference the right fit for your role or expertise?"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0 mt-6"
                data-wow-delay=".15s"
              >
                <div className="gap-y-6 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 ">
                    <List text="Academic researchers and faculty"/>
                    <List text="Data scientists and cloud engineers" />
                    <List text="AI/ML developers and architects" />
                    <List text="Cybersecurity and blockchain professionals"/>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Postgraduate and PhD scholars" />
                    <List text="Start-up founders and industry executives" />
                    <List text="Policy makers and digital transformation leaders" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pl-0 pr-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto lg:mr-0 mt-6 lg:mt-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  width={600}
                  height={600}
                  className="mx-auto drop-shadow-three lg:ml-0"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
