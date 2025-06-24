"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FaRegFileAlt,
  FaCheckCircle,
  FaUpload,
  FaUserCheck,
} from "react-icons/fa";
import { MdOutlineSlideshow, MdEventAvailable } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function VerticalTimelineCard() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50 ">
      <h2 className="text-3xl font-bold text-center mb-12">
        📅 Conference Important Dates
      </h2>

      <VerticalTimeline lineColor="#A5B4FC">
        {/* Full Paper Submission */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #4A6CF7, #657EFF)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #4A6CF7" }}
          date="25 September 2025"
          dateClassName="font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #4A6CF7, #657EFF)",
            color: "#fff",
          }}
          icon={<FaRegFileAlt />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">
            Full Paper Submission
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Submit your original research paper
          </h4>
        </VerticalTimelineElement>

        {/* Acceptance Notification */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #1D976C, #93F9B9)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1D976C" }}
          date="20 November 2025"
          dateClassName="text-white font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #1D976C, #93F9B9)",
            color: "#fff",
          }}
          icon={<FaCheckCircle />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">
            Acceptance Notification
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Receive confirmation of acceptance
          </h4>
        </VerticalTimelineElement>

        {/* Registration */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #FF512F, #DD2476)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #FF512F" }}
          date="1 December 2025"
          dateClassName="text-white font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #FF512F, #DD2476)",
            color: "#fff",
          }}
          icon={<FaUserCheck />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">Registration</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Complete your conference registration
          </h4>
        </VerticalTimelineElement>

        {/* Camera-ready Submission */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #FFC371, #FF5F6D)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #FFC371" }}
          date="10 December 2025"
          dateClassName="text-white font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #FFC371, #FF5F6D)",
            color: "#fff",
          }}
          icon={<FaUpload />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">
            Camera-ready Submission
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Submit final formatted paper
          </h4>
        </VerticalTimelineElement>

        {/* Presentation Submission */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #E91E63, #FF6090)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #E91E63" }}
          date="4 January 2026"
          dateClassName="text-white font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #E91E63, #FF6090)",
            color: "#fff",
          }}
          icon={<MdOutlineSlideshow />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">
            Presentation Submission
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Upload your slides or video
          </h4>
        </VerticalTimelineElement>

        {/* Conference Days */}
        <VerticalTimelineElement
          contentStyle={{
            background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #3a7bd5" }}
          date="14–16 January 2026"
          dateClassName="text-white font-semibold"
          iconStyle={{
            background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
            color: "#fff",
          }}
          icon={<MdEventAvailable />}
        >
          <h3 className="vertical-timeline-element-title text-[#fff]">Conference Days</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#fff]">
            Attend and present your work
          </h4>
        </VerticalTimelineElement>

        {/* Final Star */}
        <VerticalTimelineElement
          iconStyle={{ background: "#10cc52", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </div>
  );
}
