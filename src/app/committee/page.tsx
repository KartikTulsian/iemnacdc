import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import CommitteeList from '@/components/Committee/CommitteeList';

export const metadata: Metadata = {
  title: "Committee NACDC ",
  description: "This is Committee Page for NACDC 2026",
  // other metadata
};

export default function CommitteePage() {
  return (
    <div>
      <Breadcrumb
        pageName="Committee of NACDC"
        description="North American Conference on Computational Intelligence, Data Science, and Cloud Computing (NACDC 2026) Committee List"
      />
      <CommitteeList/>
    </div>
  )
}
