"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/images/hero/hero_image1.png",
    title: "NACDC 2026 Begins Here!",
    subtitle: "The Premier AI, Data Science, and Cloud Computing Conference",
    date: "January 14-16, 2026 · Vancouver, Canada",
    cta1: { label: "Register Now", link: "/registration" },
    cta2: { label: "View Schedule", link: "/schedule" },
  },
  {
    image: "/images/hero/hero_image2.png",
    title: "Explore Vancouver with NACDC",
    subtitle: "Where World-Class Innovation Meets Stunning Landscapes",
    date: "Don't just attend — experience!",
    cta1: { label: "About", link: "/about" },
    cta2: { label: "Contact", link: "/contact" },
  },
  {
    image: "/images/hero/hero_image3.png",
    title: "Global Minds. One Stage.",
    subtitle: "Meet the Leading Researchers and Visionaries in AI & Cloud",
    date: "Keynotes from 30+ Industry Experts",
    cta1: { label: "Keynote Speakers", link: "/speakers" },
    cta2: { label: "Conference Tracks", link: "/callForPapers" },
  },
  {
    image: "/images/hero/hero_image4.png",
    title: "Submit Your Breakthroughs",
    subtitle: "Call for Papers Now Open – Share Your Research With the World",
    date: "Deadline: October 7, 2025",
    cta1: { label: "Submit Paper", link: "/registration" },
    cta2: { label: "Author Guidelines", link: "/callForPapers" },
  },
  {
    image: "/images/hero/hero_image5.png",
    title: "Innovate. Integrate. Impact.",
    subtitle: "Workshops & Demos Showcasing the Future of Tech",
    date: "Live Hands-on Sessions · Limited Seats",
    cta1: { label: "Workshop Schedule", link: "/schedule" },
    cta2: { label: "Apply to Present", link: "/registration" },
  },
  {
    image: "/images/hero/hero_image6.png",
    title: "Celebrate Excellence",
    subtitle: "Awards, Networking Gala & Closing Ceremony",
    date: "Connect, Collaborate & Celebrate",
    cta1: { label: "View Awards", link: "/awards" },
    cta2: { label: "Check Schedule", link: "/schedule" },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto Slide
  useEffect(() => {
    if (isHovered) return;

    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [currentSlide, isHovered]);

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (!touchStartX.current || !touchEndX.current) return;

    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) nextSlide();
    else if (delta < -50) prevSlide();
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full h-screen overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <Image
            key={idx}
            src={slide.image}
            alt={`Slide ${idx}`}
            fill
            priority={idx === 0}
            className={`object-cover transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#000]/40" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#fff] mb-4">
              {slide.title}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fff] mb-2">
              {slide.subtitle}
            </h2>
            <p className="text-[#fff] mb-8">{slide.date}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href={slide.cta1.link}
                className="bg-[#4A6CF7] hover:bg-[#4A6CF7]/80 text-[#fff] px-6 py-3 rounded shadow font-semibold transition duration-300"
              >
                {slide.cta1.label}
              </Link>
              <Link
                href={slide.cta2.link}
                className="bg-[#fff]/20 hover:bg-[#fff]/30 text-[#fff] px-6 py-3 rounded shadow font-semibold transition duration-300"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Controls (hover only) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center bg-[#fff]/50 hover:bg-[#fff]/70 text-[#000] text-xl p-3 rounded-full transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center bg-[#fff]/50 hover:bg-[#fff]/70 text-[#000] text-xl p-3 rounded-full transition"
      >
        &#8594;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-[#fff] scale-110" : "bg-[#fff]/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
