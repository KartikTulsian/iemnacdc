'use client';

import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreateTable1 = ({
  datas,
}: {
  datas: Array<{ col1: string; col2: string; className?: string }>;
}) => {
  return (
    <table className="w-full text-md text-left text-gray-700">
      <tbody>
        {datas.map(({ col1, col2, className }, id) => (
          <tr
            key={id}
            className="odd:bg-[#fff] even:bg-gray-50 border-b border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition-all duration-300 ease-in-out"
          >
            <th
              scope="row"
              className={twMerge(
                'px-6 py-4 font-medium text-gray-900 md:text-base text-md whitespace-normal',
                className
              )}
            >
              {col1}
            </th>
            <td className={twMerge('px-6 py-4 md:text-base text-md', className)}>{col2}</td>
            {/* <td className={twMerge('px-6 py-4 md:text-base text-md', className)}>{col3}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const CreateTable2 = ({
  datas,
}: {
  datas: Array<{ col1: string; col2: string; className?: string }>;
}) => {
  return (
    <table className="w-full text-md text-left text-gray-700">
      <tbody>
        {datas.map(({ col1, col2, className }, id) => (
          <tr
            key={id}
            className="odd:bg-[#fff] even:bg-gray-50 border-b border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition-all duration-300 ease-in-out"
          >
            <th
              scope="row"
              className={twMerge(
                'px-6 py-4 font-medium text-gray-900 md:text-base text-md whitespace-normal',
                className
              )}
            >
              {col1}
            </th>
            <td className="px-6 py-4 md:text-base text-md">{col2}</td>
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
    <div className="flex flex-col items-center px-4 py-10 md:px-10 lg:px-16 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4A6CF7] mb-4 text-center">
        Registration Details
      </h1>

      <div className="mt-4 mb-7 bg-gray-50 px-4 md:px-12 lg:px-20 py-4 rounded-md text-gray-700 text-md md:text-base font-bold text-center">*Registration will be handled electronically via EDAS. It will be updated soon. At least one author of each paper must register at the Author registration rate.
        For a single paper, a single author registration is required. A attendee/student registration is not an author regsitration.*</div>

      {/* Registration Form */}
      {/* <section
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
      </section> */}

      {/* Registration Fees */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Standard Registration Fees (Per Accepted Paper)
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
          <CreateTable1
            datas={[
              { col1: 'Category', col2: 'Regular', className: 'font-semibold' },
              { col1: 'Academic Authors', col2: '600 CAD' },
              { col1: 'Industry Participants', col2: '600 CAD' },
            ]}
          />
        </div>
        {/* <div className="mt-4 bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md text-gray-700 italic text-sm md:text-base font-semibold">
          Additional Page Charges (per page) : 50 USD
        </div> */}
      </section>

      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Attendee&apos;s Registration Fees
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
          <CreateTable1
            datas={[
              { col1: 'Category', col2:  'Regular', className: 'font-bold' },
              { col1: 'Student Non-Member', col2: '400 CAD' },
              { col1: 'General Attendee', col2: '400 CAD' },
            ]}
          />
        </div>
      </section>

      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Discounted Fees for Multiple Accepted Papers (Same Author)
        </h2>
        <div className="mb-4 bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md text-gray-700 italic text-sm md:text-base font-bold">
          Authors affiliated with academic institutions MUST register under the &quot;Academic Authors&quot; category.*
        </div>
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
          <CreateTable2
            datas={[
              {
                col1: 'Single Author with Two Accepted Papers',
                col2: '600 CAD',
                className: 'font-semibold',
              },
              {
                col1: 'Single Author with Three Accepted Papers',
                col2: '700 CAD',
                className: 'font-semibold',
              },
            ]}
          />
        </div>
      </section>

      {/* Information and Cancellation Section */}
      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Important Information & Cancellation Policy
        </h2>

        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md shadow-sm">
            <p className="font-semibold text-gray-800">Note:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All Fees are in <b>CAD</b> and include all applicable taxes.</li>
              <li>
                The minimum page length of each accepted paper is <b>10 pages</b> in
                LNNS format.
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
            <p className="font-semibold text-gray-800">Cancellation Policy:</p>
            <p className="mt-2 italic">
              There will be <b>no cancellation or refund</b> after registration.
            </p>
          </div>
        </div>
      </section>


      <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Sponsorship Notes
        </h2>
        {/* <div className="mb-4 bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md text-gray-700 italic text-sm md:text-base font-bold">
          Authors affiliated with academic institutions MUST register under the &quot;Academic Authors&quot; category.*
        </div> */}
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
          <CreateTable2
            datas={[
              {
                col1: 'Silver Partner',
                col2: '4000 CAD',
                className: 'font-semibold',
              },
              {
                col1: 'Gold Partner',
                col2: '6000 CAD',
                className: 'font-semibold',
              },
              {
                col1: 'Diamond Partner',
                col2: '8000 CAD',
                className: 'font-semibold',
              },
            ]}
          />
        </div>
      </section>


      {/* Indian Payments */}
      {/* <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Bank Details for Indian Payments
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
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
      </section> */}

      {/* International Payments */}
      {/* <section
        className="w-full max-w-4xl bg-[#fff] p-6 md:p-8 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Bank Details for International Payments
        </h2>
        <div className="overflow-x-auto rounded-md border border-gray-200 w-full">
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
      </section> */}
    </div>
  );
}
