import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import Link from "next/link";

const BlogSidebar3 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {

    return (
        <>
            <section className="overflow-hidden pb-[60px] pt-[100px]">
                <div className="container">
                    <div className="mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    The University of British Columbia, Vancouver, Canada
                                </h1>
                                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">

                                </div>
                                <div>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        The University of British Columbia is a global centre for teaching, learning and research, consistently ranked among the top public universities in the world.
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="/images/hero/hero_image7.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        UBC embraces innovation and transforms ideas into action. Since 1915, UBC has been opening doors of opportunity for people with the curiosity, drive and vision to shape a better world.
                                        A world-leading centre of teaching, learning and research excellence, UBC transforms personal initiative into innovation, and new ideas into impact. Read a welcome from President and Vice-Chancellor Dr. Benoit-Antoine Bacon, explore the strategic plan and learn about UBC’s vision and values.
                                    </p>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        UBC’s strategic plan represents a roadmap. It sets out our collective vision, purpose, goals and strategies for the years ahead. It guides our decisions and actions–inspiring the very best in our students, faculty, staff, alumni and partners. We hope you will join us on this journey.
                                    </p>
                                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        UBC Campuses
                                    </h3>
                                    {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p> */}
                                    <ul className="mb-10 list-inside list-disc text-body-color">
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            UBC’s two main campuses are situated in Vancouver and in Kelowna in the Okanagan Valley.
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            UBC Robson Square, the UBC Learning Exchange and UBC’s Centre for Digital Media are also in Vancouver.
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            UBC provides clinical education to Faculty of Medicine students at 80+ training sites across BC.
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            UBC’s two regional bases in Hong Kong and India make local connections and elevate partnerships for research, learning and capacity development.
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
                                <ul className="p-6">
                                    <li
                                        onClick={() => onSelect("blog1")}
                                        className="mb-6 pb-6 border-b border-gray-200 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                                    >
                                        <RelatedPost
                                            title="NACDC 2026"
                                            image="/images/blog/post-01.jpg"
                                            slug="#"
                                        />
                                    </li>
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
                                </ul>
                            </div>

                            <div className="shadow-md rounded-xl bg-white border border-gray-100">
                                <h3 className="border-b border-gray-200 px-8 py-4 text-lg font-semibold text-gray-800">
                                Reference
                                </h3>
                                <ul className="px-8 py-6">
                                <li>
                                    <Link
                                    href="https://www.ubc.ca/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-medium text-blue-600 hover:underline"
                                    >
                                    University of British Columbia Official Website
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSidebar3;
