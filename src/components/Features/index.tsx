
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {

  const para = `The North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026) is an international conference dedicated to bringing together leading academics, 
  researchers, practitioners, and industry experts from across the globe. Hosted by the prestigious University of British Columbia (UBC) in Vancouver, Canada, the conference will be held from January 14 to 16, 2026.`;

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Welcome to NACDC 2026"
            paragraph={para}
            center
          />

          <p className="text-base !leading-relaxed text-body-color md:text-lg py-3 text-center max-w-5xl mx-auto">
            NACDC 2026 is poised to be a significant platform for the discussion, dissemination, and exchange of the latest trends, innovations, and future directions in Computational Intelligence, Artificial Intelligence (AI), Data Science, Big Data Analytics, Cloud Computing, and Emerging Technologies.
          </p>
          <p className="text-base !leading-relaxed text-body-color md:text-lg py-3 text-center max-w-5xl mx-auto mb-[10%]">
            In an era where intelligent computing and data-driven technologies are rapidly reshaping industries, the conference offers a unique venue for bridging the gap between theoretical advancements and real-world applications.
          </p>

          <div className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] text-center mb-[5%]">
              Conference Objectives
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
