"use client";

import React from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SingleListProps {
  title: string;
  members: string[] | Record<string, string[]>;
}

countries.registerLocale(enLocale);

// Fallback mappings
const fallbackCountryMap: Record<string, string> = {
  USA: "US",
  US: "US",
  UK: "GB",
  CANADA: "CA",
  INDIA: "IN",
  California: "US",
  Ontario: "CA",
  Quebec: "CA",
  Europe: "MT",
  Taiwan: "TW",
  Egypt: "EG",
  Brazil: "BR",
  Malaysia: "MY",
  Japan: "JP",
  Greece: "GR",
  Portugal: "PT",
  Norway: "NO",
  Australia: "AU",
};

const getCountryCode = (countryName: string = "") => {
  const fallbackCode = fallbackCountryMap[countryName.toUpperCase()];
  if (fallbackCode) return fallbackCode.toLowerCase();

  const isoCode = countries.getAlpha2Code(countryName, "en");
  return isoCode ? isoCode.toLowerCase() : null;
};

const renderMemberList = (list: string[]) => (
  <ul className="space-y-4 mt-4">
    {list.map((member, idx) => {
      const countryMatch = member.match(/, ([^,]+)$/);
      const countryRaw = countryMatch?.[1]?.trim() || "";
      const countryCode = getCountryCode(countryRaw);

      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

      return (
        <motion.li
          ref={ref}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key={idx}
          className="flex items-start space-x-3 text-base sm:text-lg text-gray-700 pl-4 hover:text-[#4A6CF7] hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-default"
        >
          {countryCode ? (
            <Image
              src={`https://flagcdn.com/w40/${countryCode}.png`}
              alt={countryRaw}
              width={40}
              height={30}
              className="w-6 h-4 self-center rounded-sm object-cover"
              loading="lazy"
            />
          ) : (
            <span className="w-6 h-4 inline-block" />
          )}
          <span className="self-center">{member}</span>
        </motion.li>
      );
    })}
  </ul>
);

export default function SingleList({ title, members }: SingleListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#fff] w-full lg:w-[70%] border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 mb-10 mx-auto"
    >
      <h3 className="text-3xl font-bold text-[#4A6CF7] mb-6 group-hover:text-pink-600 transition-colors duration-300">
        {title}
      </h3>

      {Array.isArray(members) ? (
        renderMemberList(members)
      ) : (
        Object.entries(members).map(([subTitle, subMembers]) => (
          <motion.div
            key={subTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#f9f9ff] rounded-lg p-4 mb-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              {subTitle}
            </h4>
            {subMembers.length ? (
              renderMemberList(subMembers)
            ) : (
              <p className="text-sm text-gray-500 pl-4">To be announced</p>
            )}
          </motion.div>
        ))
      )}
    </motion.div>
  );
}
