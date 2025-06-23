"use client";

import { BrainCircuit, DatabaseZap, CloudCog, Sparkles } from "lucide-react";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTrack from "./SingleTrack";

const tracks = [
    {
        id: "track1",
        title: "Computational Intelligence & Artificial Intelligence",
        icon: <BrainCircuit size={40} />,
        topics: [
            "Neural Networks and Fuzzy Logic",
            "Evolutionary Algorithms",
            "Swarm Intelligence",
            "Reinforcement Learning",
            "Hybrid Intelligent Systems",
        ],
    },
    {
        id: "track2",
        title: "Data Science & Big Data Analytics",
        icon: <DatabaseZap size={40} />,
        topics: [
            "Predictive Analytics and Forecasting Models",
            "Data Mining and Visualization",
            "Natural Language Processing (NLP)",
            "Sentiment Analysis and Social Network Mining",
            "Responsible AI and Bias Mitigation",
        ],
    },
    {
        id: "track3",
        title: "Cloud Computing & Infrastructure",
        icon: <CloudCog size={40} />,
        topics: [
            "Cloud-Native Applications and Serverless Architectures",
            "Edge and Fog Computing",
            "Virtualization and Containerization Technologies (e.g., Docker, Kubernetes)",
            "Distributed Systems and Scalability",
            "Cloud Security and Privacy",
        ],
    },
    {
        id: "track4",
        title: "Advanced & Emerging Technologies",
        icon: <Sparkles size={40} />,
        topics: [
            "Internet of Things (IoT) and Smart Systems",
            "Blockchain and Decentralized Cloud Solutions",
            "Quantum Computing and Quantum Machine Learning",
            "AI in Cybersecurity and Network Defense",
            "Digital Twins and AI-Driven Simulations",
        ],
    },
];

export default function PaperTracks() {
    const handleScrollToTrack = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <SectionTitle
                    title="🔍 Major Tracks and Topics"
                    paragraph="Participants are encouraged to submit original research papers, case studies, or demos across, but not limited to, the following domains"
                    center
                />

                {/* Cards */}
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            onClick={() => handleScrollToTrack(track.id)}
                            className="w-full sm:w-[47%] lg:w-[22%] h-[30vh] bg-[#fff] text-[#4A6CF7] rounded-xl border-3 border-gray-200 shadow-md hover:shadow-2xl hover:border-blue-400 cursor-pointer transition-transform duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-4">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full p-4 shadow-md transition-transform duration-300 group-hover:scale-110">
                                    {track.icon}
                                </div>
                                <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {track.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Track Details */}
                <div className="mt-20 space-y-20">
                    {tracks.map((track) => (
                        <SingleTrack
                            key={track.id}
                            id={track.id}
                            title={track.title}
                            topics={track.topics}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute top-50 right-0 z-[-1] opacity-30 lg:opacity-100">
                <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="225" cy="225" r="200" fill="url(#bg1)" />
                    <circle cx="100" cy="300" r="30" fill="#4A6CF7" opacity="0.1" />
                    <circle cx="350" cy="150" r="20" fill="#4A6CF7" opacity="0.1" />
                </svg>
            </div>

            <div className="absolute top-400 left-0 z-[-1] opacity-30 lg:opacity-100">
                <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="225" cy="225" r="200" fill="url(#bg1)" />
                    <circle cx="100" cy="300" r="30" fill="#4A6CF7" opacity="0.1" />
                    <circle cx="350" cy="150" r="20" fill="#4A6CF7" opacity="0.1" />
                </svg>
            </div>

        </section>
    );
}
