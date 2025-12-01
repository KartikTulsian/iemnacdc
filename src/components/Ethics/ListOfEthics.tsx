"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { ethicsData } from "@/types/ethics";
import { ShieldCheck, Users, AlertOctagon, BookCheck, CheckCircle, UserCheck, BadgeCheck, ShieldAlert, RefreshCcw } from "lucide-react";
import EthicsBlock from "./EthicsBlock";
import EthicsPoint from "./EthicsPoint";
import { motion } from "framer-motion";

export default function ListOfEthics() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">

                <SectionTitle
                    title="Ethics & Malpractice Statement"
                    paragraph="Ensuring submission integrity and maintaining the highest standards of academic excellence."
                    center
                />

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white shadow-lg rounded-2xl border border-blue-200 p-6 sm:p-8 mt-10
                     xl:text-[18px] lg:text-[17px] text-xl leading-[1.8] text-gray-800 tracking-wide"
                >
                    <p>
                        The North American Conference on Computational Intelligence, Data Science and Cloud Computing (NACDC 2026)
                        is committed to upholding the highest standards of ethics, integrity, and professionalism in all stages
                        of the research submission, review, presentation, and publication process. All authors, reviewers, and
                        committee members are expected to adhere to the following principles:
                    </p>
                </motion.div>

                {/* AUTHORS */}
                <EthicsBlock icon={<ShieldCheck size={36} />} title="1. Ethical Responsibilities of Authors">
                    {ethicsData.authorsEthics.map((item, idx) => (
                        <EthicsPoint key={idx} icon={<CheckCircle size={20} className="text-blue-600" />}>
                            <strong>{item.title}:</strong> {item.description}
                        </EthicsPoint>
                    ))}
                </EthicsBlock>

                {/* REVIEWERS */}
                <EthicsBlock icon={<Users size={36} />} title="2. Ethical Responsibilities of Reviewers">
                    {ethicsData.reviewersEthics.map((item, idx) => (
                        <EthicsPoint key={idx} icon={<UserCheck size={20} className="text-blue-600" />}>
                            <strong>{item.title}:</strong> {item.description}
                        </EthicsPoint>
                    ))}
                </EthicsBlock>

                {/* COMMITTEE */}
                <EthicsBlock icon={<BookCheck size={36} />} title="3. Ethical Responsibilities of the Editorial / Organizing Committee">
                    {ethicsData.committeeEthics.map((item, idx) => (
                        <EthicsPoint key={idx} icon={<BadgeCheck size={20} className="text-blue-600" />}>
                            <strong>{item.title}:</strong> {item.description}
                        </EthicsPoint>
                    ))}
                </EthicsBlock>

                {/* PLAGIARISM */}
                <EthicsBlock icon={<AlertOctagon size={36} />} title="4. Plagiarism & Misconduct Policy">
                    <EthicsPoint icon={<ShieldAlert size={20} className="text-red-600" />}>
                        {ethicsData.plagiarismPolicy}
                    </EthicsPoint>
                </EthicsBlock>

                {/* POST-PUBLICATION */}
                <EthicsBlock icon={<BookCheck size={36} />} title="5. Post-Publication Responsibilities">
                    <EthicsPoint icon={<RefreshCcw size={20} className="text-blue-600" />}>
                        {ethicsData.postPublicationPolicy}
                    </EthicsPoint>
                </EthicsBlock>

            </div>
        </section>
    );
}
