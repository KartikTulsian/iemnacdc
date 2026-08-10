import Link from 'next/link'
import React from 'react'

export default function Announcement() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

            {/* Conference Schedule Highlight */}
            <Link
                href="/schedule#conference-schedule"
                className="group relative w-full h-full flex items-center justify-between gap-3 p-5 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Now Available</span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                            Conference Schedule
                            <span className="block text-[11px] font-medium text-slate-500 mt-0.5">August 10-12, 2026</span>
                        </span>
                    </div>
                </div>

                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 ml-1">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

            {/* Workshop Card */}
            <Link
                href="/workshop#acting-humanly-workshop"
                className="group relative w-full h-full flex items-center justify-between gap-3 p-5 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Presenting</span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                            NACDC Workshops
                        </span>
                    </div>
                </div>

                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 ml-1">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

            {/* PPT template live */}
            <Link
                href="/callForPapers#paperdetails"
                className="group relative w-full h-full flex items-center justify-between gap-3 p-5 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Now Available</span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                            Presentation Template
                        </span>
                    </div>
                </div>

                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 ml-1">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

            {/* Venue live */}
            <Link
                href="/venue#venue-block"
                className="group relative w-full h-full flex items-center justify-between gap-3 p-5 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Now Available</span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                            Venue in Canada
                        </span>
                    </div>
                </div>

                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 ml-1">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

        </div>
    )
}