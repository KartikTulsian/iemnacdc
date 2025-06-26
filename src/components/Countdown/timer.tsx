"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "00", hours = "00", minutes = "00", seconds = "00";

  const difference = new Date(expiry).getTime() - new Date().getTime();
  if (difference <= 0) return { days, hours, minutes, seconds };

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((difference / (1000 * 60)) % 60);
  const secs = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : `${dys}`;
  hours = hrs < 10 ? `0${hrs}` : `${hrs}`;
  minutes = mins < 10 ? `0${mins}` : `${mins}`;
  seconds = secs < 10 ? `0${secs}` : `${secs}`;

  return { days, hours, minutes, seconds };
};

export default function Timer({ launchDate }: { launchDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeCount | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait until component is mounted
    setMounted(true);
    const updateTimer = () => setTimeLeft(getTimeLeft(launchDate));
    updateTimer(); // set immediately

    const interval = setInterval(() => {
      const time = getTimeLeft(launchDate);
      setTimeLeft(time);

      if (
        time.days === "00" &&
        time.hours === "00" &&
        time.minutes === "00" &&
        time.seconds === "00"
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  const timerUnit = (value: string, label: string) => (
    <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#ebf0ff] to-[#d7e0ff] shadow-lg border border-indigo-200 hover:scale-105 transition-transform duration-300 group relative">
      {/* Glowing pulse ring */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 blur opacity-10 group-hover:opacity-20 transition-all duration-300"></div>

      {/* Value */}
      <span className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 drop-shadow">
        {value}
      </span>
      {/* Label */}
      <small className="relative text-xs md:text-sm font-medium text-gray-700 uppercase tracking-wider mt-1">
        {label}
      </small>
    </div>
  );

  const handleGoogleCalendarClick = () => {
    const start = new Date(launchDate);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // +1 hour

    const format = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0]; // e.g., 20251201T235959

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Registration+Deadline&dates=${format(start)}/${format(end)}&details=Don%27t+miss+the+event+registration+deadline!`;

    window.open(gcalUrl, "_blank");
  };

  if (!mounted || !timeLeft) return null; // Avoid SSR mismatch

  return (
    <div className="flex flex-col items-center gap-12 w-full mt-8 sm:mt-10 lg:mt-12 px-4">
      <SectionTitle
        title="⏰ Your Journey Awaits"
        paragraph="Set a reminder now and be part of something big."
        center
      />

      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 w-full max-w-4xl bg-[#fff]/10 p-6 sm:p-8 rounded-2xl shadow-xl border border-[#fff]/20 backdrop-blur-md">
        {timerUnit(timeLeft.days, "Days")}
        {timerUnit(timeLeft.hours, "Hours")}
        {timerUnit(timeLeft.minutes, "Minutes")}
        {timerUnit(timeLeft.seconds, "Seconds")}
      </div>

      <button
        onClick={handleGoogleCalendarClick}
        className="mt-4 sm:mt-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 px-6 py-3 text-[#fff] font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition duration-300"
      >
        📅 Add to My Google Calendar
      </button>
    </div>
  );
}
