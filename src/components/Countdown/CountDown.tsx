import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Timer from "./timer";
import ImpDates from "./ImpDates";

export default function CountDown() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff]">
      <div className="container mx-auto px-4 flex flex-col gap-6 md:gap-10">
        <SectionTitle
          title="📅 Important Dates"
          paragraph=""
          center
        />

        {/* Dates table already includes spacing */}
        <ImpDates />

        {/* Timer with built-in spacing */}
        <Timer launchDate="2025-12-01T23:59:59" />
      </div>
    </section>

  );
}
