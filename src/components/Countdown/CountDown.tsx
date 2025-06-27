import React from "react";
// import SectionTitle from "../Common/SectionTitle";
import Timer from "./timer";
import ImpDates from "./ImpDates";

export default function CountDown() {
  return (
    <section className="relative z-10 py-16 md:py-17 lg:pb-28 lg:pt-16 bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff]">
      <div className="container mx-auto px-4 flex flex-col gap-6 md:gap-10">
        {/* <SectionTitle
          title="📅 Important Dates"
          paragraph=""
          center
        /> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4A6CF7] text-center leading-tight tracking-tight px-4 md:px-10 mb-6">
          📅 Important Dates
        </h1>


        {/* Dates table already includes spacing */}
        <ImpDates />

        {/* Timer with built-in spacing */}
        <Timer launchDate="2025-12-01T23:59:59" />
      </div>
    </section>

  );
}
