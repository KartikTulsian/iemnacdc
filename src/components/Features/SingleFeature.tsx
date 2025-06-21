import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp group h-full rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:shadow-gray-400"
        data-wow-delay=".15s"
      >
        {/* Icon Bubble */}
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white sm:text-2xl group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base text-body-color font-medium leading-relaxed text-gray-700">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
