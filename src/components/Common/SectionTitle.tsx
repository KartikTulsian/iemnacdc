import React from 'react'

export default function SectionTitle(
  {
  title,
  paragraph,
  width = "970px",
  center,
} : {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width}}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-[#000] sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p
          className="text-base !leading-relaxed text-body-color md:text-lg py-3"
        >
          {paragraph}
        </p>
      </div>
    </>
  );
}

