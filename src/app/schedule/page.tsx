import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import ComingSoon from '@/components/Common/CommingSoon';

export const metadata: Metadata = {
  title: "Schedule NACDC",
  description: "This is Schedule Page for NACDC 2025",
  // other metadata
};

export default function SchedulePage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Schedule of NACDC 2025'
        description='The Pr0gramme of NACDC 2025'
      />
      <ComingSoon/>
    </div>
  )
}
