import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary/10 text-primary shadow-md">
          <span className="text-primary">{icon}</span>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="text-base text-body-color font-medium leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
