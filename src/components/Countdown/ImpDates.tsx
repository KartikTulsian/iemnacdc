'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { twMerge } from 'tailwind-merge';
import { CalendarDays, Clock, CheckCircle, Upload, FileCheck2, Users } from 'lucide-react'; // Add icons

const icons = [
  <Upload key="0" className="w-5 h-5 text-blue-600 mr-2" />,
  <CheckCircle key="1" className="w-5 h-5 text-green-600 mr-2" />,
  <FileCheck2 key="2" className="w-5 h-5 text-yellow-600 mr-2" />,
  <Users key="3" className="w-5 h-5 text-pink-600 mr-2" />,
  <Clock key="4" className="w-5 h-5 text-indigo-600 mr-2" />,
  <CalendarDays key="5" className="w-5 h-5 text-purple-600 mr-2" />,
];

const CreateTable = ({
  datas,
}: {
  datas: Array<{ col1: string; col2: string; className?: string }>;
}) => {
  return (
    <table className="w-full text-sm md:text-base text-left text-gray-700">
      <tbody>
        {datas.map(({ col1, col2, className }, id) => (
          <tr
            key={id}
            className="odd:bg-white even:bg-purple-50 border-b border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition-all duration-300 ease-in-out"
          >
            <th
              scope="row"
              className={twMerge(
                'px-4 py-3 md:px-6 md:py-4 font-semibold text-gray-900 whitespace-normal flex items-center',
                className
              )}
            >
              {icons[id % icons.length]}
              <span>{col1}</span>
            </th>
            <td className="px-4 py-3 md:px-6 md:py-4 text-gray-800 font-medium">
              <span className="inline-block px-2 py-1 bg-yellow-50 text-yellow-900 rounded-md shadow-sm text-xs md:text-sm">
                {col2}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function ImpDates() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4A6CF7] mb-6 text-center">
        🗓️ Important Dates
      </h1>

      <section
        className="w-full max-w-4xl bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-xl border border-indigo-100"
        data-aos="fade-up"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center">
          📌 Mark Your Calendars for Key Deadlines
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm">
          <CreateTable
            datas={[
              { col1: 'Full Paper Submission:', col2: '7th October 2025' },
              { col1: 'Acceptance Notification:', col2: '20th November 2025' },
              { col1: 'Final/Camera-ready Paper Submission:', col2: '10th December 2025' },
              { col1: 'Registration:', col2: '1st December 2025' },
              { col1: 'Presentation Submission:', col2: '4th January 2026' },
              { col1: 'Conference:', col2: '14 - 16 January 2026' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
