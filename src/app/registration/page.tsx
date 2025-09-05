import React from 'react'

import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import RegistrationDetails from '@/components/Registrations/RegistrationDetails';

export const metadata: Metadata = {
  title: "Registration NACDC",
  description: "This is Registration Page for NACDC 2026",
  // other metadata
};

export default function RegistrationPage() {
  return (
    <div>
      
      <Breadcrumb 
        pageName='Registration NACDC 2026'
        description='Grab the oppertunity of experiencing the interdisciplinary collaborations with renowned researchers'
      />
      {/* <ComingSoon/> */}
      <RegistrationDetails/>
    </div>
  )
}
