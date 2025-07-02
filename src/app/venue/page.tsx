import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import ComingSoon from '@/components/Common/CommingSoon';

export const metadata: Metadata = {
  title: "Venue NACDC",
  description: "This is Venue Page for NACDC 2025",
  // other metadata
};

export default function VenuePage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Venue of NACDC 2025'
        description='Tentative Venue Japan'
      />
      <ComingSoon/>
    </div>
  )
}
