import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function PaperDetails() {
  return (
    <section className="relative py-16 px-4 ">
      <div className="max-w-4xl mx-auto space-y-12 animate-animate-appear">
        {/* Submission Section */}
        <div className="bg-[#fff] p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">
            📤 Paper Submission Instructions
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-700 text-base sm:text-lg">
            <li>
              EasyChair submission link{' '}
              <Link
                className="text-blue-600 hover:text-blue-800 underline transition duration-200"
                target="_blank"
                href="https://easychair.org/conferences/?conf=iemicdc2025"
              >
                here
              </Link>
            </li>
            <li>
              Springer Paper Submission Guidelines{' '}
              <Link
                className="text-blue-600 hover:text-blue-800 underline transition duration-200"
                target="_blank"
                href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines"
              >
                here
              </Link>
            </li>
            <li>
              Download LaTeX Package{' '}
              <Link
                className="text-blue-600 hover:text-blue-800 underline transition duration-200"
                target="_blank"
                href="/templates/Latex_Package.zip"
              >
                here
              </Link>
            </li>
            <li>
              Download Word Template{' '}
              <Link
                className="text-blue-600 hover:text-blue-800 underline transition duration-200"
                target="_blank"
                href="/templates/Word_Template.zip"
              >
                here
              </Link>
            </li>
            <li>
              <span className="font-semibold">Awards:</span> Best Paper Award will be provided.
            </li>
          </ul>

          <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 rounded-md">
            <strong className="text-red-700 text-base sm:text-lg">
              ⚠ Note:
            </strong>{' '}
            Papers should have <strong>preferably 10 pages</strong>. No short papers will be accepted.
          </div>
        </div>

        {/* Publication Section */}
        <div className="bg-blue-100/50 p-8 rounded-xl shadow-lg border border-blue-200 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4 uppercase tracking-wide">
            📝 Publication & Indexing Details
          </h2>

          <p className="text-lg text-blue-900 mb-4">
            The conference proceedings will be published in the Springer Book Series:{' '}
            <span className="font-semibold italic text-blue-800">
              &quot;Lecture Notes in Networks and Systems&quot;
            </span>
          </p>

          {/* Optional Logo */}
          <div className="flex justify-center items-center my-6">
            <Image
              src="/images/sp.png"
              width={250}
              height={80}
              alt="Springer Logo"
            />
          </div>

          <p className="text-base sm:text-lg text-blue-900">
            <strong>Indexing:</strong> SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago
          </p>
        </div>
      </div>
    </section>
  );
}
