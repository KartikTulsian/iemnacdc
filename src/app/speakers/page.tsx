import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import SpeakerDetails from '@/components/Speakers/SpeakerDetails';
import ComingSoon from '@/components/Common/CommingSoon';

export const metadata: Metadata = {
  title: "Speakers NACDC",
  description: "This is Speakers Page for NACDC 2026",
  // other metadata
};

export default function SpeakersPage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Key Note Speakers'
        description='Keynote Speeches by renowned researchers and industry leaders'
      />
      <ComingSoon/>
      <SpeakerDetails/>
    </div>
  )
}
