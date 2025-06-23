import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BlogChanging from "@/components/About/BlogChanging";
import BlogSidebar1 from "@/components/About/BlogSideBar1";
import BlogSidebar2 from "@/components/About/BlogSideBar2";
import BlogSidebar3 from "@/components/About/BlogSideBar3";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NACDC ",
  description: "This is About Page for NACDC 2026",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About NACDC"
        description="North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026)"
      />
      <BlogChanging/>
    </>
  );
};

export default AboutPage;
