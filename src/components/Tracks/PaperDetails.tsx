import React from 'react';
import { 
  FileText, 
  Trophy,
  BookOpen, 
  ArrowRightCircle,
  DownloadCloud,
  MonitorPlay
} from 'lucide-react';
// If you are using Next.js, it is better to use the Link component for internal routing
import Link from 'next/link'; 

const cards = [
  {
    title: "EDAS Submission",
    description: "Submit your research paper through the official EDAS platform for peer review.",
    icon: <FileText className="w-8 h-8" />,
    btnGradient: "from-[#059669] to-[#047857]",
    cardBg: "bg-[#f0fdf4]",
    iconBg: "bg-[#10b981]",
    link: "https://edas.info/N34454",
    buttonText: "Go to EDAS",
    hasButton: true,
    isExternal: true,
    isDownload: false
  },
  {
    title: "Paper Submission Guidelines",
    description: "Detailed instructions for authors on how to prepare and submit their manuscripts for review.",
    icon: <BookOpen className="w-8 h-8" />,
    btnGradient: "from-[#db2777] to-[#be185d]",
    cardBg: "bg-[#fdf2f8]",
    iconBg: "bg-[#ec4899]",
    link: "/guidelines",
    buttonText: "Read Guidelines",
    hasButton: true,
    isExternal: false,
    isDownload: false
  },
  //{
  //   title: "10 Pages Minimum",
  //   description: "Full-length papers only. Submissions must adhere to the minimum page requirements.",
  //   icon: <FileStack className="w-8 h-8" />,
  //   cardBg: "bg-[#fffbeb]",
  //   iconBg: "bg-[#f59e0b]",
  //   hasButton: false,
  // },
  {
    title: "Presentation Template",
    description: "Download the official presentation template for your paper.",
    icon: <MonitorPlay className="w-8 h-8" />,
    btnGradient: "from-[#F97316] to-[#FB923C]",
    cardBg: "bg-[#FFF7ED]",
    iconBg: "bg-[#EA580C]",
    link: "https://docs.google.com/presentation/d/1EqZTwXTl6rbhb6T3meLCJVv6iyHDC9fF/edit?usp=drivesdk&ouid=103301009156057410609&rtpof=true&sd=true",
    buttonText: "Download Template",
    hasButton: true,
    isExternal: true,
    isDownload: false
  },
  {
    title: "Sample Chapter Format",
    description: "Authors can refer to the sample chapter format provided by Nova Publishers for manuscript preparation.",
    icon: <BookOpen className="w-8 h-8" />,
    btnGradient: "from-[#2563eb] to-[#1d4ed8]",
    cardBg: "bg-[#eff6ff]",
    iconBg: "bg-[#3b82f6]",
    link: "https://drive.google.com/drive/folders/1DovMlftK37ptRtWAyJYTdZJQ0i_GWxIV?usp=drive_link",
    buttonText: "Download Sample Format",
    hasButton: true,
    isExternal: true,
    isDownload: false
  },
  {
    title: "Best Paper Award",
    description: "Outstanding research contributions will be recognized with prestigious awards.",
    icon: <Trophy className="w-8 h-8" />,
    cardBg: "bg-[#fff1f2]",
    iconBg: "bg-[#f43f5e]",
    hasButton: false,
  },
];

export default function PaperDetails() {
  return (
    <section className="relative py-12 px-4 bg-[#fcfcfd]">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] tracking-tight sm:text-4xl">
            Paper <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#4f46e5]">Submission Details</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#2563eb] mx-auto rounded-full"></div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            // <div 
            //   key={index} 
            //   className={`group relative ${card.cardBg} border border-[#d5e2ff] rounded-[1.5rem] p-6 transition-all duration-300 hover:shadow-xl shadow-[#d5e2ff] hover:-translate-y-1.5 flex flex-col items-center text-center`}
            // >
            <div 
              key={index} 
              className={`group relative ${card.cardBg} border border-[#e5e7eb] rounded-[1.5rem] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] min-h-[320px]`}
            >
              <div className={`mb-5 p-3.5 rounded-xl ${card.iconBg} text-[#ffffff] shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                {card.title}
              </h3>
              
              <p className="text-[#4b5563] mb-6 leading-relaxed text-sm flex-grow">
                {card.description}
              </p>

              {card.hasButton && card.link && (
                <Link 
                  href={card.link}
                  target={card.isExternal ? "_blank" : "_self"} 
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 w-full justify-center py-2.5 rounded-lg font-bold text-[#ffffff] transition-all duration-300 bg-gradient-to-r ${card.btnGradient} hover:brightness-105 shadow-sm active:scale-95 text-sm`}
                >
                  {card.isDownload ? <DownloadCloud size={16} /> : <ArrowRightCircle size={16} />}
                  {card.buttonText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
