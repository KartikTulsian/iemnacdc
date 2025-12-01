"use client";
import React from "react";
import { motion } from "framer-motion";

interface EthicsPointProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function EthicsPoint({ icon, children }: EthicsPointProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="flex items-start gap-3 py-1 hover:text-blue-600 transition-colors duration-200"
    >
      <span className="mt-1 shrink-0 text-blue-500">
        {icon}
      </span>
      <p className="flex-1 leading-relaxed">{children}</p>
    </motion.li>
  );
}
