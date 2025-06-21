'use client';

import { useRouter } from 'next/navigation';
import {
  BrainCircuit,
  DatabaseZap,
  CloudCog,
  Sparkles,
} from "lucide-react";
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const Card = ({
  track,
  Icon,
  id,
}: {
  track: string;
  Icon: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/callForPapers#${id}`)}
      className="w-full sm:w-[47%] md:w-[45%] lg:w-[40%] xl:w-[28%] h-[30vh] bg-white text-primary rounded-xl border-3 border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 cursor-pointer transition-transform transform duration-300 hover:-translate-y-2 group"
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full p-4 shadow-sm transition duration-300 group-hover:scale-110">
          {Icon}
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {track}
        </h2>
      </div>
    </div>
  );
};

export default function TracksList() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle
          title="🔍 Major Tracks and Topics"
          paragraph="Explore the diverse technical tracks that define the future of intelligent computing and data technologies."
          center
          width="665px"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Card
            id="track1"
            track="Computational Intelligence & Artificial Intelligence"
            Icon={<BrainCircuit size={40} />}
          />

          <Card
            id="track2"
            track="Data Science & Big Data Analytics"
            Icon={<DatabaseZap size={40} />}
          />

          <Card
            id="track3"
            track="Cloud Computing & Infrastructure"
            Icon={<CloudCog size={40} />}
          />

          <Card
            id="track4"
            track="Advanced & Emerging Technologies"
            Icon={<Sparkles size={40} />}
          />
        </div>
      </div>
    </section>
  );
}
