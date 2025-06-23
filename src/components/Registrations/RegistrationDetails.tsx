'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreateTable = ({
  datas,
}: {
  datas: Array<{ col1: string; col2: string; className?: string }>;
}) => {
  return (
    <table className="w-full text-sm text-left text-gray-700">
      <tbody>
        {datas.map(({ col1, col2, className }, id) => (
          <tr
            key={id}
            className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition-all duration-300 ease-in-out"
          >
            <th
              scope="row"
              className={twMerge(
                'px-6 py-4 font-medium text-gray-900 md:text-base text-sm whitespace-normal',
                className
              )}
            >
              {col1}
            </th>
            <td className="px-6 py-4 md:text-base text-sm">{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function RegistrationDetails() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-12 lg:px-24 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4A6CF7] mb-8 text-center">
        Registration Details
      </h1>

      {/* Registration Form */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Registration Form
        </h2>
        <p className="text-gray-700 mb-4">
          Fill out the registration form&nbsp;
          <Link
            className="text-blue-600 hover:underline font-medium"
            href="https://forms.office.com/r/kTHwyVscZ1"
            target="_blank"
          >
            here
          </Link>
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/QR.jpeg"
            width={300}
            height={300}
            alt="QR Code"
            className="rounded-lg border border-gray-200 shadow"
          />
        </div>
      </section>

      {/* Registration Fees */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Registration Fee per Accepted Paper
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <CreateTable
            datas={[
              { col1: 'Indian Student', col2: '6000 INR' },
              { col1: 'Indian Researcher/Academician', col2: '7000 INR' },
              { col1: 'Indian Author from Industry', col2: '8000 INR' },
              { col1: 'Foreign Author', col2: '150 USD' },
              {
                col1: 'Charges for per extra page, above 10 pages per paper',
                col2: '',
                className: 'font-bold',
              },
              { col1: 'Indian Author', col2: '350 INR' },
              { col1: 'Foreign Author', col2: '20 USD' },
              {
                col1:
                  'Registration for participation (other than registered authors)',
                col2: '',
                className: 'font-bold',
              },
              { col1: 'Indian Participant', col2: '2000 INR' },
              { col1: 'Foreign Participant', col2: '80 USD' },
            ]}
          />
        </div>
      </section>

      {/* Indian Payments */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Bank Details for Indian Payments
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <CreateTable
            datas={[
              {
                col1: 'In the Favour of',
                col2: 'Institute of Engineering and Management Trust',
              },
              { col1: 'Bank Name', col2: 'IDBI Bank' },
              { col1: 'Branch', col2: 'Sector V, Kolkata' },
              { col1: 'A/C No', col2: '184104000054214' },
              { col1: 'IFSC Code', col2: 'IBKL0000184' },
            ]}
          />
        </div>
      </section>

      {/* International Payments */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Bank Details for International Payments
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <CreateTable
            datas={[
              {
                col1: 'In the Favour of',
                col2: 'Institute of Engineering and Management Trust',
              },
              { col1: 'Bank Name', col2: 'Indian Overseas Bank' },
              { col1: 'Branch', col2: 'Sector V, Kolkata' },
              { col1: 'A/C No', col2: '164201000000488' },
              { col1: 'IFSC Code', col2: 'IOBA0001642' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
