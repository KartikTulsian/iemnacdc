import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import Link from "next/link";

const BlogSidebar2 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
    return (
        <>
            <section className="overflow-hidden pb-[60px] pt-[100px]">
                <div className="container">
                    <div className="mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h1 className="mb-8 text-3xl font-bold leading-tight text-[#000] sm:text-4xl sm:leading-tight">
                                    Institute Of Engineering & Management, Kolkata, India
                                </h1>
                                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">

                                </div>
                                <div>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        The IEM group is an acclaimed educational group amongst the industry-centred academic training organisations of today. IEM has set sublime standards in addressing the
                                        technical and managerial resource shortage in the new era of dynamic globalisation. The IEM group has risen to fame for its strong foundation in teaching and R&D in multifaceted areas.
                                        It aims to serve the future generation as well as the Nation through its commitment towards self sufficiency and unmatchable excellence.
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="/images/hero/gurukul_image.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-fill object-center"
                                            />
                                        </div>
                                    </div>
                                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        IEM is one of the top-ranked engineering colleges in Kolkata and Eastern India which provides the best engineering course with 100% job assistance. Contact today to
                                        know the course details of computer science engineering, mechanical engineering, electrical and electronics engineering, electronics and communication engineering.For more information, visit here!
                                    </p>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Since its inception, the IEM group has surpassed innumerable benchmarks of achievements and accreditations. Today IEM flaunts a colossal network of expansive
                                        operations led by an awe-inspiring student force who are the torchbearers of a better tomorrow.
                                    </p>
                                    <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        IEM is successfully organizing international conferences for the last few years as mentioned below:
                                    </h3>
                                    <ul className="mb-10 list-inside list-disc text-body-color">
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            IEEE IEMCON at University of British Columbia, Vancouver, Canada (http://ieee-iemcon.org/) since 2015
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            IEEE UEMCON at Columbia University, New York, USA (http://ieee-uemcon.org/) since 2016
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            IEEE CCWC, University of Nevada, Las Vegas (http://ieee-ccwc.org/) since 2017
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            IEEE IEMANTENNA, University of British Columbia, Vancouver, Canada (http://iemantenna.org/) in 2019
                                        </li>
                                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                            IEEE IEMTRONICS at University of British Columbia, Vancouver, Canada (https://iemtronics.org/) since 2020
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
                                        onClick={() => onSelect("blog1")}
                                        className="mb-6 pb-6 border-b border-gray-200 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                                    >
                                        <RelatedPost
                                            title="NACDC 2026"
                                            image="/images/blog/NACDC.png"
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

                            <div className="shadow-md rounded-xl bg-white border border-gray-100">
                                <h3 className="border-b border-gray-200 px-8 py-4 text-lg font-semibold text-gray-800">
                                    Reference
                                </h3>
                                <ul className="px-8 py-6">
                                    <li>
                                        <Link
                                            href="https://iem.edu.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEM: Top Engineering College in Kolkata, West Bengal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="http://ieee-iemcon.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEEE IEMCON
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="http://ieee-uemcon.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEEE UEMCON
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="http://ieee-ccwc.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEEE CCWC
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="http://iemantenna.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEEE IEMANTENNA
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="http://iemtronics.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium text-blue-600 hover:underline"
                                        >
                                            IEEE IEMTRONICS
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

export default BlogSidebar2;
