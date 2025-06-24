import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Timer from "./timer";
import VerticalTimelineCard from "../Timeline/VerticalTimelineCard";
import ImpDates from "./ImpDates";

export default function CountDown() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="⏰ Hurry! Registration Closes Soon"
          paragraph="Set a reminder now and be part of something big. Registration closes soon—don't miss your chance!"
          center
        />
        <div className="pt-8 sm:pt-10 md:pt-12">
          <Timer launchDate="2025-12-01T23:59:59" />
        </div>
        <div className="pt-8 sm:pt-10 md:pt-12">
            <VerticalTimelineCard/>
        </div>
        <div className="pt-12 sm:pt-10 md:pt-12">
            <ImpDates/>
        </div>
      </div>
    </section>
  );
}
