"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { 
  BookOpen, 
  Image as ImageIcon, 
  Layers, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import SubmissionBlock from "./SubmissionBlock";
import { motion } from "framer-motion";

export default function PaperSubmissionGuidelines() {
  return (
    // Responsive padding-y: py-16 on mobile, py-24 on desktop
    <section id="paper-submission-guidelines" className="py-16 md:py-24 px-4 bg-[#f8fafc] relative">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="Paper Submission Guidelines"
          paragraph="Please follow these technical specifications strictly to ensure your research is processed for NACDC 2026."
          center
        />

        <SubmissionBlock 
          icon={<BookOpen size={28} className="text-indigo-600 md:w-8 md:h-8" />} 
          title="Chapter Preparation Guidelines"
        >
          <GuideItem title="Length" text="Each chapter must not exceed 10 pages in length." />
          <GuideItem title="Word Limit" text="The maximum word limit is 3500 words per chapter." />
          <GuideItem title="First Author" text="The first author of each chapter must be an M.D., Ph.D., or equivalent." />
          <GuideItem title="References" text="References must follow the Chicago Manual of Style." />
        </SubmissionBlock>

        <SubmissionBlock 
          icon={<ImageIcon size={28} className="text-emerald-600 md:w-8 md:h-8" />} 
          title="Figure Submission Guidelines"
        >
          <GuideItem title="Source Files" text="All images, charts, and graphs (collectively referred to as figures) must be submitted with their original source files." />
          <GuideItem title="Software Charts" text="For figures created using software (e.g., PowerPoint charts), the original .pptx file should be submitted." />
          <GuideItem title="Color Usage" text="Open Access publications allow unlimited color usage." />
          <GuideItem title="Filing" text="Each figure must be uploaded to the designated SharePoint folder as a separate electronic file (one figure per file)." />
          <GuideItem title="Maps" text="All maps must be in color." />
          <GuideItem title="Resolution" text="Photographs must be high quality, with a resolution of 350–750 PPI (pixels per inch), also known as DPI." />
          <GuideItem variant="warning" title="Prohibited" text="Screenshots or photos of charts, graphs, or diagrams will not be accepted." />
        </SubmissionBlock>

        <SubmissionBlock 
          icon={<Layers size={28} className="text-orange-600 md:w-8 md:h-8" />} 
          title="Visual Standards"
        >
          <div className="col-span-full">
             <GuideItem 
                title="B&W Clarity" 
                text="Black-and-white figures and legends must remain clearly distinguishable using different shapes or symbols and must be clear and legible." 
             />
          </div>
        </SubmissionBlock>
      </div>
    </section>
  );
}

function GuideItem({ title, text, variant = "default" }: { title: string, text: string, variant?: "default" | "warning" }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-colors duration-300 group"
    >
      <div className="mt-1 shrink-0">
        {variant === "warning" ? 
          <AlertCircle size={20} className="text-red-500 animate-pulse md:w-5 md:h-5" /> : 
          <CheckCircle2 size={20} className="text-indigo-500 group-hover:scale-110 transition-transform md:w-5 md:h-5" />
        }
      </div>
      <div>
        {/* Adjusted font sizes for mobile (text-xs/text-sm) vs desktop (text-md/text-base) */}
        <h3 className="font-bold text-slate-900 text-md sm:text-sm md:text-md uppercase tracking-widest mb-1">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-[16px] sm:text-[15px] md:text-[16px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}