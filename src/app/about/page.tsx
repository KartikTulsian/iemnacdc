import BlogChanging from "@/components/About/BlogChanging";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NACDC ",
  description: "This is About Page for NACDC 2025",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About NACDC"
        description="NexGen Asian Conference on Intelligent Computing, Data Science and Cloud Computing (NACDC 2025)"
      />
      <BlogChanging/>
    </>
  );
};

export default AboutPage;
