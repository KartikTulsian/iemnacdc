import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import SpeakerDetails from '@/components/Speakers/SpeakerDetails';
// import ComingSoon from '@/components/Common/CommingSoon';

export const metadata: Metadata = {
  title: "Speakers NACDC",
  description: "Keynote Speeches by renowned researchers and industry leaders for NACDC 2026",
  // other metadata
};

export default function SpeakersPage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Key Note Speakers'
        description='Join us to hear from world-class researchers and industry leaders in the field of Computing and Digital Communication.'
      />
      <main className="min-h-screen">
        <SpeakerDetails />
      </main>
    </div>
  )
}
