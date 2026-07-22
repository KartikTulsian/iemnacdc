"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Calendar, Clock, Download, X, User, BrainCircuit, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RunningLocalAIModelsWorshop() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Lock background scrolling when the modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <div id="acting-humanly-workshop" className="relative bg-[#fff] rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full transition-all duration-500 hover:shadow-2xl group/card">

            {/* Header Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-900"></div>

            <div className="p-6 sm:p-8 lg:p-10">
                {/* Top Badge */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-100">
                        <BrainCircuit className="w-4 h-4" />
                        Featured Workshop
                    </span>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                                    Running Local AI Models
                                </span>{" "}
                                on Android and iOS
                            </h3>

                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                                Learn how to run AI models directly on Android and iOS devices without relying on the cloud. This hands-on workshop covers on-device AI, model optimization, and integration into mobile applications to build fast, private, and offline AI experiences.
                            </p>

                            {/* Key Benefits */}
                            <div className="mb-8">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    What You&apos;ll Learn
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Run AI models directly on Android and iOS devices",
                                        "Build fast, offline and privacy-first AI applications",
                                        "Integrate on-device AI into mobile applications",
                                        "Optimize AI models for efficient mobile deployment"

                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-slate-100 p-3 rounded-xl border border-slate-100">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Speaker Profile (Integrated cleanly) */}
                        <div className="bg-gradient-to-br from-slate-50 to-[#fff] border border-slate-200 rounded-2xl p-5 flex items-center gap-5 shadow-sm mt-auto">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-md"></div>
                                <div className="relative bg-[#fff] border-2 border-blue-100 p-3 rounded-full">
                                    <User className="w-8 h-8 text-blue-700" />
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-blue-600 uppercase tracking-wider mb-1 font-bold">Esteemed Speaker</div>
                                <div className="font-bold text-slate-900 text-lg">Rohit Kumar</div>
                                <div className="text-slate-600 text-sm font-medium mt-0.5">Android@Flobiz</div>
                                {/* <div className="text-slate-500 text-xs mt-1">IIEST, Shibpur</div> */}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Info & Visuals */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-[#fff] border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                                <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                                <span className="text-xs text-slate-500 font-semibold uppercase mb-1">Date</span>
                                <span className="text-sm font-bold text-slate-800">Aug 11, 2026</span>
                            </div>
                            <div className="bg-[#fff] border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                                <Clock className="w-5 h-5 text-blue-600 mb-2" />
                                <span className="text-xs text-slate-500 font-semibold uppercase mb-1">Time</span>
                                <span className="text-sm font-bold text-slate-800">1:00 PM - 3:00 PM</span>
                            </div>
                            <div className="col-span-2 bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-row items-center justify-center gap-3 text-center">
                                <MapPin className="w-5 h-5 text-blue-700" />
                                <span className="text-sm font-bold text-blue-900">Godrej Genesis</span>
                            </div>
                        </div>

                        {/* Interactive Poster Thumbnail */}
                        <div
                            className="relative group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 shadow-md transition-all hover:shadow-xl mt-auto h-full min-h-[300px] bg-slate-50 flex items-center justify-center p-4"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                width={800}
                                height={1200}
                                src="/images/testimonials/running_local_ai.jpeg"
                                alt="Running Local AI Model"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                            {/* Hover Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <span className="bg-[#fff] text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                                    View Full Poster
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="bg-slate-900 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[#fff] text-center sm:text-left">
                    <h4 className="font-bold text-base sm:text-lg">Secure Your Spot Today</h4>
                    <p className="text-slate-400 text-sm">Limited seats available for this technical session.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                        href="/images/testimonials/running_local_ai.jpeg"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="NACDC_Workshop_Running_local_AI_Models_2026.jpeg"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 text-[#fff] hover:text-blue-400 font-medium px-5 py-2.5 rounded-xl transition-all duration-300 text-sm border border-slate-700 hover:border-blue-500/50"
                    >
                        <Download className="w-4 h-4" />
                        Brochure
                    </Link>
                    {/* <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfQwGRIwmMS1iLJU5zahvx8l2lQ1BPGOQFn9x7A8yx43ZUljg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 text-[#fff] font-bold px-8 py-2.5 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] text-sm"
                    >
                        Register Now
                    </Link> */}
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 sm:p-8 overscroll-contain backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-[#fff]/10 hover:bg-[#fff]/20 text-[#fff] p-3 rounded-full transition-colors backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                    <Image
                        width={1200}
                        height={1600}
                        src="/images/testimonials/running_local_ai.jpeg"
                        alt="Workshop Flyer Fullscreen"
                        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl ring-1 ring-[#fff]/10 p-4"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}