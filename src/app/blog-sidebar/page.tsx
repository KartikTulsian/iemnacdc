// import RelatedPost from "@/components/Blog/RelatedPost";
// import Image from "next/image";

// const BlogSidebarPage = () => {
//   return (
//     <>
//       <section className="overflow-hidden pb-[60px] pt-[100px]">
//         <div className="container">
//           <div className="mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-8/12">
//               <div>
//                 <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
//                   10 amazing sites to download stock photos & digital assets for
//                   free
//                 </h1>
//                 <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  
//                 </div>
//                 <div>
//                   <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
//                     The University of British Columbia is a global centre for teaching, learning and research, consistently ranked among the top public universities in the world.
//                   </p>
//                   <div className="mb-10 w-full overflow-hidden rounded">
//                     <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                       <Image
//                         src="/images/hero/hero_image7.png"
//                         alt="image"
//                         fill
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                   </div>
//                   <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
//                     UBC embraces innovation and transforms ideas into action. Since 1915, UBC has been opening doors of opportunity for people with the curiosity, drive and vision to shape a better world.
//                     A world-leading centre of teaching, learning and research excellence, UBC transforms personal initiative into innovation, and new ideas into impact. Read a welcome from President and Vice-Chancellor Dr. Benoit-Antoine Bacon, explore the strategic plan and learn about UBC’s vision and values.
//                   </p>
//                   <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
//                     UBC’s strategic plan represents a roadmap. It sets out our collective vision, purpose, goals and strategies for the years ahead. It guides our decisions and actions–inspiring the very best in our students, faculty, staff, alumni and partners. We hope you will join us on this journey.
//                   </p>
//                   <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
//                     UBC Campuses
//                   </h3>
//                   {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
//                     consectetur adipiscing elit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     mattis vulputate cupidatat.
//                   </p> */}
//                   <ul className="mb-10 list-inside list-disc text-body-color">
//                     <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
//                       UBC’s two main campuses are situated in Vancouver and in Kelowna in the Okanagan Valley.
//                     </li>
//                     <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
//                       UBC Robson Square, the UBC Learning Exchange and UBC’s Centre for Digital Media are also in Vancouver.
//                     </li>
//                     <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
//                       UBC provides clinical education to Faculty of Medicine students at 80+ training sites across BC.
//                     </li>
//                     <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
//                       UBC’s two regional bases in Hong Kong and India make local connections and elevate partnerships for research, learning and capacity development.
//                     </li>
//                   </ul>
                
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-4 lg:w-4/12">
              
//               <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
//                 <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
//                   Related Posts
//                 </h3>
//                 <ul className="p-8">
//                   <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
//                     <RelatedPost
//                       title="Best way to boost your online sales."
//                       image="/images/blog/post-01.jpg"
//                       slug="#"
//                       date="12 Feb 2025"
//                     />
//                   </li>
//                   <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
//                     <RelatedPost
//                       title="50 Best web design tips & tricks that will help you."
//                       image="/images/blog/post-02.jpg"
//                       slug="#"
//                       date="15 Feb, 2024"
//                     />
//                   </li>
//                   <li>
//                     <RelatedPost
//                       title="The 8 best landing page builders, reviewed"
//                       image="/images/blog/post-03.jpg"
//                       slug="#"
//                       date="05 Jun, 2024"
//                     />
//                   </li>
//                 </ul>
//               </div>
//               <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
//                 <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
//                   Popular Category
//                 </h3>
//                 <ul className="px-8 py-6">
//                   <li>
//                     <a
//                       href="#0"
//                       className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Tailwind Templates
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#0"
//                       className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Landing page
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#0"
//                       className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Startup
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#0"
//                       className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Business
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#0"
//                       className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Multipurpose
//                     </a>
//                   </li>
//                 </ul>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogSidebarPage;

import React from 'react'

export default function BlogSidebarPage() {
  return (
    <div>
      
    </div>
  )
}

