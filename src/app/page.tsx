import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import CountDown from "@/components/Countdown/CountDown";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TracksList from "@/components/Tracks/TracksList";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NACDC 2026",
  description: "Landing Page for NACDC 2026",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <CountDown/>
      <Brands />
      <TracksList/>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree/>
      {/* <Pricing /> */}
      <Video />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
