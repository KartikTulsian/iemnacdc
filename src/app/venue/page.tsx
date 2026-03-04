import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import VenueBlock from '@/components/Venue/VenueBlock';

export const metadata: Metadata = {
  title: "Venue NACDC",
  description: "This is Venue Page for NACDC 2026",
  // other metadata
};

export default function VenuePage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Venue of NACDC 2026'
        description='Tentative Venue Canada'
      />
      <VenueBlock/>
    </div>
  )
}
