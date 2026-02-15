import React from 'react';

export default function SectionTitle({
  title,
  paragraph,
  width = "970px",
  center,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center flex flex-col items-center" : ""}`}
      data-wow-delay=".1s"
      style={{ maxWidth: width }}
    >
      {/* Title with improved weight and color depth */}
      <h2 className="mb-4 text-3xl font-extrabold !leading-tight text-[#1D2144] sm:text-4xl md:text-[45px] tracking-tight">
        {title}
      </h2>

      {/* Modern Centered Divider */}
      <div 
        className={`h-1.5 w-30 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-6 
        ${center ? "mx-auto" : ""} shadow-sm shadow-blue-200`} 
      />

      {/* Paragraph with better line-height and color contrast */}
      {paragraph && (
        <p className="text-base !leading-relaxed text-[#606060] font-medium md:text-lg lg:px-10">
          {paragraph}
        </p>
      )}
    </div>
  );
}