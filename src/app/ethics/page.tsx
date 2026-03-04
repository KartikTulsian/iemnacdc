import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import ListOfEthics from '@/components/Ethics/ListOfEthics';

export const metadata: Metadata = {
  title: "Ethics & Malpractice Statement",
  description: "This is the guidelines Page for NACDC 2026",
  // other metadata
};

export default function EthicsPage() {
  return (
    <div>
      <Breadcrumb 
        pageName='Ethics & Malpractice Statement'
        description='Guidelines ensuring research integrity, ethical conduct, and malpractice prevention for NACDC 2026.'
      />
      <ListOfEthics/>
    </div>
  )
}
