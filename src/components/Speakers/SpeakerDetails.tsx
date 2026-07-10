import React from 'react';
import SingleSpeaker from './SingleSpeaker';
import SectionTitle from '../Common/SectionTitle';

// Mock data taken from your index.tsx
const speakerData = [
  // {
  //   id: 1,
  //   name: "Dr. Tom Murad",
  //   designation: "Experienced Board Director; C - Level Engineering & Technology Leader; Past President & Board member at IEEE Canada, and University Adjunct Professor.",
  //   image: "/images/testimonials/speaker_1.png",
  //   linkedIn: "https://www.linkedin.com/in/tommurad/",
  // },
  // {
  //   id: 1,
  //   name: "Marcelo Caiado",
  //   designation: "Cybersecurity Leader, Digital Forensics Expert in Ministério Público Federal and Adjunct Professor, New York Institute of Technology, Vancouver, Canada",
  //   image: "/images/testimonials/speaker_6.png",
  //   linkedIn: "https://www.linkedin.com/in/caiado/",
  // },
  {
    id: 2,
    name: "Arnab Sinha",
    designation: "Senior Manager of Applied Science at Amazon, Seattle, Washington, United States",
    image: "/images/testimonials/speaker_2.png",
    linkedIn: "https://www.linkedin.com/in/arnab-sinha-597a074/",
  },
  {
    id: 3,
    name: "Swarnamouli Majumdar",
    designation: "CEO & Founder, Zenext AI, Montreal, QC, Canada || Bloomington, IN, USA",
    image: "/images/testimonials/speaker_3.png",
    linkedIn: "https://www.linkedin.com/in/swarnamouli/",
  },
  {
    id: 4,
    name: "Baljeet Malhotra",
    designation: "Founder & CEO at TeejLab Inc. and Adjunct Professor, University of Victoria, Canada",
    image: "/images/testimonials/speaker_4.png",
    linkedIn: "https://www.linkedin.com/in/baljeetmalhotra/",
  },
  {
    id: 5,
    name: "Avimanyou Vatsa",
    designation: "Associate Professor, Department of Computer Science, Fairleigh Dickinson University, Teaneck, New Jersey",
    image: "/images/testimonials/speaker_5.png",
    linkedIn: "https://www.linkedin.com/in/avimanyou/",
  },
];

export default function SpeakerDetails() {
  return (
    <section className="py-24 lg:py-28 bg-[#FBFBFF] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto mb-16 text-center">
            <SectionTitle 
                title="Expert Keynote Speakers" 
                paragraph="Meet the global pioneers and industry experts sharing their vision at NACDC 2026." 
                center 
            />
        </div>

        {/* - justify-center: centers cards if there are fewer than the max column count
            - items-stretch: ensures all cards in a row have identical height 
        */}
        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch max-w-7xl mx-auto">
          {speakerData.map((speaker) => (
            <div key={speaker.id} className="flex justify-center w-full">
              <SingleSpeaker speaker={speaker} />
            </div>
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
          {speakerData.map((speaker) => (
            <div key={speaker.id} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-22px)] xl:w-[calc(25%-24px)] flex justify-center">
              <SingleSpeaker speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}