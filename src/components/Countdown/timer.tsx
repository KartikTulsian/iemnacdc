"use client";

import React, { useEffect, useState } from "react";

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
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
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
    <div className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 transform hover:scale-105">
      <span className="text-xl sm:text-2xl md:text-4xl font-bold">{value}</span>
      <small className="text-[10px] sm:text-xs uppercase font-medium">{label}</small>
    </div>
  );

  const handleGoogleCalendarClick = () => {
    const start = new Date(launchDate);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // +1 hour

    const format = (d: Date) =>
      d.toISOString().replace(/-|:|\.\d\d\d/g, "").slice(0, -1); // YYYYMMDDTHHmmssZ → remove 'Z'

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Registration+Deadline&dates=${format(start)}/${format(end)}&details=Don%27t+miss+the+event+registration+deadline!`;

    window.open(gcalUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center space-y-8 w-full">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-4xl">
        {timerUnit(timeLeft.days, "Days")}
        {timerUnit(timeLeft.hours, "Hours")}
        {timerUnit(timeLeft.minutes, "Minutes")}
        {timerUnit(timeLeft.seconds, "Seconds")}
      </div>

      <button
        onClick={handleGoogleCalendarClick}
        className="mt-6 rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-500 transition duration-300"
      >
        Add to My Google Calendar
      </button>
    </div>
  );
}
