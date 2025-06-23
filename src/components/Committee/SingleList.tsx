import React from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Image from "next/image";

interface SingleListProps {
  title: string;
  members: string[];
}


countries.registerLocale(enLocale);


// Fallback mappings for approximate region strings or uncommon values
const fallbackCountryMap: Record<string, string> = {
  USA: "US",
  US: "US",
  UK: "GB",
  CANADA: "CA",
  INDIA: "IN",
  California: "US",
  Ontario: "CA",
  Quebec: "CA",
  Europe: "MT", // Malta
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

export default function SingleList({ title, members }: SingleListProps) {
  return (
    <div className="group relative bg-[#fff] border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <h3 className="text-2xl sm:text-2.5xl font-semibold text-[#4A6CF7] mb-4 group-hover:text-pink-600 transition-colors duration-300">
        {title}
      </h3>

      <ul className="space-y-3">
        {members.map((member, idx) => {
          const countryMatch = member.match(/, ([^,]+)$/);
          const countryRaw = countryMatch?.[1]?.trim() || "";
          const countryCode = getCountryCode(countryRaw);

          return (
            <li
              key={idx}
              className="flex items-start space-x-3 text-base sm:text-lg text-gray-700 pl-4 hover:text-[#4A6CF7] transition-colors duration-200 cursor-pointer"
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
