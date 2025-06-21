import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const para = `The North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026) is an international conference dedicated to bringing together leading academics, 
  researchers, practitioners, and industry experts from across the globe. Hosted by the prestigious University of British Columbia (UBC) in Vancouver, Canada, the conference will be held from January 14 to 16, 2026.`;

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <SectionTitle
          title="Welcome to NACDC 2026"
          paragraph={para}
          center
          width="1100px"
        />

        <p className="text-base text-body-color md:text-lg py-3 text-center max-w-6xl mx-auto">
          NACDC 2026 is poised to be a significant platform for the discussion, dissemination, and exchange of the latest trends, innovations, and future directions in Computational Intelligence, Artificial Intelligence (AI), Data Science, Big Data Analytics, Cloud Computing, and Emerging Technologies.
        </p>
        <p className="text-base text-body-color md:text-lg py-3 text-center max-w-6xl mx-auto mb-12">
          In an era where intelligent computing and data-driven technologies are rapidly reshaping industries, the conference offers a unique venue for bridging the gap between theoretical advancements and real-world applications.
        </p>

        {/* Objectives Heading */}
        <div className="text-3xl font-bold text-center text-dark sm:text-4xl md:text-[42px] mb-12">
          🎯 Conference Objectives
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 place-items-center">
          {featuresData.map((feature) => (
            <div key={feature.id} className="w-full max-w-[350px]">
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
