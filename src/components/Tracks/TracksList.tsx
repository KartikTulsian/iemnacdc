"use client";

import { BrainCircuit, DatabaseZap, CloudCog, Sparkles } from "lucide-react";
import React from "react";
import SectionTitle from "../Common/SectionTitle";

const tracks = [
  {
    id: "track1",
    title: "Computational Intelligence & Artificial Intelligence",
    icon: <BrainCircuit size={40} />,
  },
  {
    id: "track2",
    title: "Data Science & Big Data Analytics",
    icon: <DatabaseZap size={40} />,
  },
  {
    id: "track3",
    title: "Cloud Computing & Infrastructure",
    icon: <CloudCog size={40} />,
  },
  {
    id: "track4",
    title: "Advanced & Emerging Technologies",
    icon: <Sparkles size={40} />,
  },
];

export default function PaperTracks() {
  const handleScrollToTrack = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="🔍 Major Tracks and Topics"
          paragraph="Participants are encouraged to submit original research papers, case studies, or demos across, but not limited to, the following domains"
          center
        />

        {/* Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              onClick={() => handleScrollToTrack(track.id)}
              className="w-full sm:w-[47%] lg:w-[22%] h-[30vh] bg-white text-[#4A6CF7] rounded-xl border-3 border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 cursor-pointer transition-transform transform duration-300 hover:-translate-y-2 group"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full p-4 shadow-md transition duration-300 group-hover:scale-110">
                  {track.icon}
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {track.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
