"use client";

import React from "react";
import ActingHumanlyWorkshop from "./ActingHumanlyWorkshop";
import RunningLocalAIModelsWorshop from "./RunningLocalAIModelsWorshop";

export default function WorkShopParentCard() {

    return (
        <section className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div id="nacdc-workshops" className="w-full max-w-5xl mx-auto scroll-mt-24">

                {/* Page/Section Header */}
                {/* <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        Conference Programs
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        NACDC 2026 Workshops
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
                        Explore our hands-on technical sessions led by industry experts and academic pioneers.
                    </p>
                </div> */}

                <div className="space-y-24">

                    {/* Running Local AI Models Workshop */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                                PRE-CONFERENCE WORKSHOP
                            </span>

                            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-900">
                                Running Local AI Models on Android and iOS
                            </h2>

                            <div className="mt-5 h-1.5 w-40 bg-gradient-to-r from-blue-500 to-indigo-700 mx-auto rounded-full"></div>
                        </div>

                        <RunningLocalAIModelsWorshop />
                    </div>

                    {/* Acting Humanly Workshop */}
                    <div>
                        <div className="text-center mb-10">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                                PRE-CONFERENCE WORKSHOP
                            </span>

                            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-900">
                                Acting Humanly: Transforming the World Where AI & ML Meet Robotics
                            </h2>

                            <div className="mt-5 h-1.5 w-40 bg-gradient-to-r from-blue-500 to-indigo-700 mx-auto rounded-full"></div>
                        </div>

                        <ActingHumanlyWorkshop />
                    </div>

                </div>

            </div>
        </section>
    );
}