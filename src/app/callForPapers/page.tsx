import React, { Suspense } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PaperTracks from "@/components/Tracks/PaperTracks";
import PaperDetails from "@/components/Tracks/PaperDetails";
import SmoothScrollWrapper from "@/components/Tracks/SmoothScrollWrapper";

export const metadata: Metadata = {
  title: "Call For Papers",
  description: "This is the Page for Papers of NACDC 2025",
};

export default function CallForPaperspage() {
  return (
    <div>
      <Suspense fallback={null}>
        <SmoothScrollWrapper />
      </Suspense>
      
      <Breadcrumb
        pageName="Call For the Papers"
        description="International Conference on NextGeneration Advances in Computational Intelligence, Data Science and Cloud Computing (NACDC 2025)"
      />
      <PaperDetails />
      <PaperTracks />
    </div>
  );
}
