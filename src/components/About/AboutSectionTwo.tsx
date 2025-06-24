"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="h-5 w-5 text-[#4A6CF7] shrink-0 mt-[2px]"
  >
    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
  </svg>
);

const BulletPoint = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4 mb-8 group hover:translate-x-1 transition-transform duration-200">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[#4A6CF7]">
      {starIcon}
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-dark">
        {title}
      </h3>
      <p className="mt-1 text-base font-medium text-body-color leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-11">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-[600px] mx-auto lg:mr-0 mt-6 lg:mt-0">
              <Image
                src="/images/about/about-image-dark-2.svg"
                alt="about image"
                width={600}
                height={600}
                className="object-contain drop-shadow-three ml-4"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              title="🎤 Event Highlights"
              paragraph="Explore interactive panels and roundtables on safeguarding vulnerable business applications."
            />
            <div className="wow fadeInUp max-w-[500px] mx-auto lg:mx-0 mt-6"
            data-wow-delay=".15s">
              <BulletPoint
                title="Keynote Speeches"
                description="By renowned researchers and industry leaders"
              />
              <BulletPoint
                title="Paper Presentations"
                description="Showcasing global research contributions"
              />
              <BulletPoint
                title="Panel Discussions"
                description="On future trends and cross-disciplinary challenges"
              />
              <BulletPoint
                title="Networking Opportunities"
                description="For research and career development"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
