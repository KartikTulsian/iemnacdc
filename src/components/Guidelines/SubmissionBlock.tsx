"use client";
import React from "react";
import { motion } from "framer-motion";

interface SubmissionBlockProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accentColor?: string; 
}

export default function SubmissionBlock({ icon, title, children, accentColor = "[#4f46e5]" }: SubmissionBlockProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Responsive padding: p-6 on mobile, p-10 on tablet, p-12 on desktop
      className="mt-8 md:mt-12 bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-md transition-all p-6 sm:p-10 md:p-12 overflow-hidden"
    >
      {/* Responsive Header: Stacks on mobile, row on tablet+ */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 md:mb-10">
        <div className={`w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-slate-50 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 transform -rotate-2 sm:-rotate-3`}>
          {icon}
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-indigo-500 to-transparent mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Grid: 1 column on mobile/tablet, 2 columns on large screens */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-4 sm:gap-y-6"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}