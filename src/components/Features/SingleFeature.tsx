import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp group h-full rounded-2xl bg-[#fff] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,108,247,0.3)]"
        data-wow-delay=".15s"
      >
        {/* Icon Bubble */}
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-[#7d95f8] to-blue-500 text-[#fff] shadow-lg transition-transform duration-300 group-hover:scale-105">
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-dark sm:text-2xl group-hover:text-[#4A6CF7] transition-transform duration-300 group-hover:scale-102">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base text-body-color font-medium leading-relaxed text-gray-700 transition-transform duration-300 group-hover:scale-102">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
