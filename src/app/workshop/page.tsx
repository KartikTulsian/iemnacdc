import Breadcrumb from "@/components/Common/Breadcrumb";
import WorkShopParentCard from "@/components/Workshop/WorkShopParentCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop NACDC ",
  description: "This is Workshop Page for NACDC 2026",
  // other metadata
};

const WorkshopPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Workshop"
        description="Enhance your expertise with immersive, hands-on sessions led by pioneers in computational intelligence, data science, and robotics."
      />
      <WorkShopParentCard/>
    </>
  );
};

export default WorkshopPage;
