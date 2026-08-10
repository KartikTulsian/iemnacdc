import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
// import ComingSoon from '@/components/Common/CommingSoon';
import ScheduleCard from '@/components/Schedule/ScheduleCard';

export const metadata: Metadata = {
  title: "Schedule NACDC",
  description: "This is Schedule Page for NACDC 2026",
  // other metadata
};

export default function SchedulePage() {
  return (
    <div>
      <Breadcrumb
        pageName='Schedule of NACDC 2026'
        description='The Programme of NACDC 2026'
      />
      <section className="bg-slate-50 py-16 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center w-full">
        <ScheduleCard />
      </section>
    </div>
  )
}
