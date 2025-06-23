import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
}: {
  image: string;
  slug: string;
  title: string;
}) => {
  return (
    <Link
      href={slug}
      className="group flex items-center gap-4 p-2 rounded-md transition-all duration-300 hover:bg-blue-50"
    >
      <div className="relative h-[70px] w-[90px] flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h5 className="text-base font-medium text-gray-800 group-hover:text-blue-700 transition-all duration-300">
        {title}
      </h5>
    </Link>
  );
};

export default RelatedPost;
