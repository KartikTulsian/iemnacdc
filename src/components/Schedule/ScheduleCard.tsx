import React from 'react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';

export default function ScheduleCard() {
    return (
        <div id="conference-schedule" className="w-full max-w-5xl mx-auto scroll-mt-24">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-10">
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                    Main Conference
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    Conference Schedule
                </h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
                {/* <p className="text-slate-600 max-w-2xl mx-auto text-base">
                    North American Conference on Computational Intelligence, Data Science and Cloud Computing (NACDC 2026) — August 10–12, 2026
                </p> */}
            </div>

            <div className="bg-[#fff] rounded-3xl shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Top banner */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-900 px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#fff]/20 rounded-xl p-2 backdrop-blur-sm">
                            <Calendar className="w-6 h-6 text-[#fff]" />
                        </div>
                        <span className="text-[#fff] font-bold text-lg">NACDC 2026 — Program at a Glance</span>
                    </div>
                    <span className="bg-blue-900/50 text-blue-50 font-semibold px-4 py-1.5 rounded-full text-sm border border-blue-400/30">
                        August 10-12, 2026
                    </span>
                </div>

                <div className="p-6 sm:p-8 md:p-10 space-y-8">
                    {/* At a Glance Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-gradient-to-br from-blue-50 to-[#fff] border border-blue-100 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md">
                            <Calendar className="w-7 h-7 text-blue-600 mx-auto mb-3" />
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Dates</div>
                            <div className="font-bold text-slate-800 text-sm">August 10-12, 2026</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-[#fff] border border-blue-100 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md">
                            <Clock className="w-7 h-7 text-blue-600 mx-auto mb-3" />
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Duration</div>
                            <div className="font-bold text-slate-800 text-sm">3 Days</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-[#fff] border border-blue-100 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md">
                            <MapPin className="w-7 h-7 text-blue-600 mx-auto mb-3" />
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Location</div>
                            <div className="font-bold text-slate-800 text-xs sm:text-sm leading-tight">University of British Columbia, Vancouver, Canada</div>
                        </div>
                    </div>

                    {/* Download Schedule Action Area */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-inner">
                        <div className="text-center sm:text-left">
                            <h4 className="font-bold text-slate-900 text-lg mb-1">Full Conference Schedule</h4>
                            <p className="text-slate-600 text-sm">
                                Download the detailed day-by-day program including all sessions, keynotes, and virtual platform links.
                            </p>
                        </div>
                        <a
                            href="/templates/Schedule/Schedule_V3.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-2 bg-blue-700 text-[#fff] font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <Download className="w-5 h-5" />
                            Download Schedule PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}