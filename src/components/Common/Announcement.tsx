import Link from 'next/link'
import React from 'react'

export default function Announcement() {
    return (
        <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">

            {/* Conference Schedule Highlight */}
            <Link
                href="/#countdown"
                className="group relative w-full lg:w-auto inline-flex items-center justify-between gap-4 px-8 py-4 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(185,28,28,0.18)] hover:border-blue-300/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Update</span>
                        <span className="hidden sm:block w-px h-4 bg-gray-300"></span>
                        <span className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                            Date Extended till 25th June 2026
                        </span>
                    </span>
                </div>

                <span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

            {/* PPT template live */}
            <Link
                href="/venue#venue-block"
                className="group relative w-full lg:w-auto inline-flex items-center justify-between gap-4 px-8 py-4 rounded-2xl border border-[#fff]/30 bg-[#fff]/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-[#fff]/20 hover:shadow-[0_8px_40px_rgba(185,28,28,0.18)] hover:border-blue-300/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)" }}
            >
                <div className="flex items-center gap-4">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>

                    <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Now Available</span>
                        <span className="hidden sm:block w-px h-4 bg-gray-300"></span>
                        <span className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                            Venue in Canada
                        </span>
                    </span>
                </div>

                <span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </Link>

        </div>
    )
}
