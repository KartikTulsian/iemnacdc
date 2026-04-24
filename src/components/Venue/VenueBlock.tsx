"use client";

import React from "react";
import Image from "next/image";
import {
    ExternalLink,
    Navigation,
    MapPin,
    Clock,
    Plane,
    Bus,
    Globe,
    Building2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VenueBlock() {
    const venueFeatures = [
        {
            icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Academic Excellence",
            description: "Ranked among the top 20 public universities globally."
        },
        {
            icon: <Plane className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Airport Access",
            description: "25 minutes from Vancouver International Airport (YVR)."
        },
        {
            icon: <Bus className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Transit Link",
            description: "Connected by the R4 RapidBus and SkyTrain network."
        },
        {
            icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Global Hub",
            description: "A multicultural campus at the edge of the Pacific Ocean."
        },
    ];

    return (
        <section id="venue-block" className="py-12 md:py-16 px-4 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">

                {/* Main Venue Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#fff] rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row">
                        {/* Content Section */}
                        <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 order-2 lg:order-1">
                            <div className="space-y-6 md:space-y-8">
                                <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-semibold">
                                    <MapPin size={14} className="md:w-4 md:h-4" />
                                    <span>Vancouver, Canada</span>
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                        University of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#4f46e5]">British Columbia</span>
                                    </h2>
                                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                        UBC&apos;s Vancouver campus offers a breathtaking backdrop for NACDC 2026, combining world-class research facilities
                                        with the natural beauty of the Canadian West Coast.
                                    </p>
                                </div>

                                {/* Feature Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    {venueFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3 md:space-x-4">
                                            <div className="p-2 md:p-3 bg-slate-50 text-[#2563eb] rounded-xl border border-slate-100 shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm md:text-base">{feature.title}</h4>
                                                <p className="text-slate-500 text-xs md:text-sm mt-0.5 md:mt-1">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                                    <Link
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-[#fff] px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95 text-sm md:text-base"
                                    >
                                        <Navigation className="w-4 h-4 md:w-5 md:h-5" />
                                        <span>Get Directions</span>
                                    </Link>
                                    <Link
                                        href="https://www.ubc.ca/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 bg-[#fff] text-slate-900 border border-slate-200 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95 text-sm md:text-base"
                                    >
                                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                        <span>Explore Campus</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-[450px] relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden order-1 lg:order-2">
                            <Image
                                src="/images/hero/hero_image7.png"
                                fill
                                alt="UBC Vancouver Campus"
                                className="object-cover object-[98%_20%] transition-transform duration-700 hover:scale-105"
                                priority
                            />
                            {/* Overlay for better mobile branding visibility */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent lg:hidden" />
                        </div>
                    </div>
                </motion.div>

                {/* Map and Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Info Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-[#fff] p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border border-slate-200 shadow-sm space-y-6 h-full">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-4">Conference Details</h3>

                            <div className="flex items-start gap-3 md:gap-4">
                                <Clock className="text-indigo-600 shrink-0 w-5 h-5 md:w-6 md:h-6" />
                                <div>
                                    <p className="font-bold text-xs md:text-sm text-slate-900 uppercase tracking-wider">Schedule</p>
                                    <p className="text-slate-600 text-sm md:text-base">August 10-12, 2026</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <MapPin className="text-indigo-600 shrink-0 w-5 h-5 md:w-6 md:h-6" />
                                <div>
                                    <p className="font-bold text-xs md:text-sm text-slate-900 uppercase tracking-wider">Address</p>
                                    <p className="text-slate-600 text-sm md:text-base">6200 University Blvd, Vancouver, BC V6T 1Z4, Canada</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="lg:col-span-2 bg-[#fff] rounded-[1.5rem] md:rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[300px] md:min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41662.44260986249!2d-123.30581454739364!3d49.25929081136661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sin!4v1772626533789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}