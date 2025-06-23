import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import PaperTracks from '@/components/Tracks/PaperTracks';
import PaperDetails from '@/components/Tracks/PaperDetails';

export const metadata: Metadata = {
  title: "Call For Papers",
  description: "This is the Page for Papers of  NACDC 2026",
  // other metadata
};

export default function CallForPaperspage() {
  return (
    <div>
      <Breadcrumb
        pageName="Call For the Papers"
        description="North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026)"
      />
      <PaperDetails/>
      <PaperTracks/>
    </div>
  )
}
