import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";

const BlogSidebar1 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
    return (
        <>
            <section className="overflow-hidden pb-[60px] pt-[100px]">
                <div className="container">
                    <div className="mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h1 className="mb-8 text-3xl font-bold leading-tight text-[#000] sm:text-4xl sm:leading-tight">
                                    North American Conference on Computational Intelligence, Data Science, and Cloud Computing
                                </h1>
                                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">

                                </div>
                                <div>
                                    <div className="mb-10 w-full overflow-hidden rounded-lg shadow-xl">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="/images/blog/NACDC.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-contain object-center "
                                            />
                                        </div>
                                    </div>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        The North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026) is an international conference dedicated to bringing together leading academics,
                                        researchers, practitioners, and industry experts from across the globe. The conference will be held from January 14 to 16, 2026 in Canada.
                                    </p>
                                    <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        NACDC 2026 is poised to be a significant platform for the discussion, dissemination, and exchange of the latest trends, innovations, and future directions in Computational Intelligence, Artificial Intelligence (AI), Data Science, Big Data Analytics, Cloud Computing, and Emerging Technologies.
                                    </p>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        In an era where intelligent computing and data-driven technologies are rapidly reshaping industries, the conference offers a unique venue for bridging the gap between theoretical advancements and real-world applications.
                                    </p>
                                    <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        Major Tracks and Topics
                                    </h3>
                                    <ul className="mb-10 list-inside list-disc text-body-color">
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            Computational Intelligence and Artificial Intelligence
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            Data Science and Big Data
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            Cloud Computing and Infrastructure
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            Advanced and Emerging Technologies
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-4/12">

                            <div className="shadow-lg mb-10 rounded-xl bg-[#fff] border border-gray-100">
                                <h3 className="border-b border-gray-300 px-8 py-4 text-lg font-semibold text-gray-800">
                                    Explore More
                                </h3>
                                <ul className="px-6 pt-6 pb-0">
                                    <li
                                        onClick={() => onSelect("blog2")}
                                        className="mb-6 pb-6 border-b border-gray-200 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                                    >
                                        <RelatedPost
                                            title="IEM Kolkata"
                                            image="/images/hero/gurukul_image.png"
                                            slug="#"
                                        />
                                    </li>
                                    {/* <li
                                        onClick={() => onSelect("blog3")}
                                        className="mb-6 pb-6 border-b border-gray-200 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                                    >
                                        <RelatedPost
                                            title="University of British Columbia"
                                            image="/images/hero/hero_image7.png"
                                            slug="#"
                                        />
                                    </li> */}
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSidebar1;
