import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import PaperSubmissionGuidelines from '@/components/Guidelines/PaperSubGuidelines';

export const metadata: Metadata = {
  title: "Paper Submission Guidelines",
  description: "This is the guidelines Page for NACDC 2026",
  // other metadata
};

export default function GuidelinesPage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Paper Submission Guidelines'
        description='Guidelines ensuring proper paper submission and formatting for NACDC 2026.'
      />
      <PaperSubmissionGuidelines/>
    </div>
  )
}
