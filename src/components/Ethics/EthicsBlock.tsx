"use client";

import React from "react";
import { motion } from "framer-motion";

interface EthicsBlockProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function EthicsBlock({ icon, title, children }: EthicsBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="mt-14 bg-white/95 rounded-2xl border border-blue-300 shadow-xl 
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 p-8 sm:p-10"
    >
      <div className="flex items-center gap-4 mb-6 pb-3 border-b border-blue-400/50">
        <div className="bg-blue-100 text-blue-600 rounded-full p-3 shadow-inner">
          {icon}
        </div>
        <h2 className="text-3xl lg:text-2xl xl:text-2xl font-bold text-[#4A6CF7] tracking-wide">
          {title}
        </h2>
      </div>

      <ul className="space-y-5 xl:text[18px] lg:text-[18px] text-lg text-gray-800">
        {children}
      </ul>
    </motion.div>
  );
}
