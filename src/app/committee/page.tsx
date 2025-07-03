import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import CommitteeList from '@/components/Committee/CommitteeList';

export const metadata: Metadata = {
  title: "Committee NACDC ",
  description: "This is Committee Page for NACDC 2025",
  // other metadata
};

export default function CommitteePage() {
  return (
    <div>
      <Breadcrumb
        pageName="Committee of NACDC"
        description="International Conference on NextGeneration Advances in Computational Intelligence, Data Science and Cloud Computing (NACDC 2025) Committee List"
      />
      <CommitteeList/>
    </div>
  )
}
