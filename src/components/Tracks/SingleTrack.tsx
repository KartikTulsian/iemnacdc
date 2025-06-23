import React from "react";
import { CheckCircle } from "lucide-react";

interface SingleTrackProps {
  id: string;
  title: string;
  topics: string[];
}

export default function SingleTrack({ id, title, topics }: SingleTrackProps) {
  return (
    <div
      id={id}
      className="scroll-mt-28 bg-[#fff] rounded-xl border border-blue-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-10"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#4A6CF7] mb-6 border-b-2 pb-2 border-blue-200">
        {title}
      </h3>
      <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 hover:text-blue-600 hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <CheckCircle size={18} className="text-blue-500 mt-1 shrink-0" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
