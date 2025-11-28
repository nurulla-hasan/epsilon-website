"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const items = [
  "AI Powered Energy Resilience Data Analytics",
  "AI Powered Agriculture Resilience Data Analytics",
  "AI Powered Water Resilience Data Analytics",
  "AI Powered Health Resilience Data Analytics",
  "AI Powered Financial Resilience Data Analytics",
  "AI Powered Coastal Resilience Data Analytics",
  "AI Powered Transport Resilience Data Analytics",
  "AI Powered Infrastructure Resilience Data Analytics",
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const ResilienceSection: React.FC = () => {
  return (
    <motion.section
      className="bg-slate-50 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <div className="content-width container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-linear-to-br from-white to-blue-50/50 p-8 shadow-lg md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
              AI Powered Resilience Data Analytics
            </h2>
            <p className="text-base text-slate-600 md:text-lg">
              Our AI-powered resilience analytics portfolio supports decision-making across key sectors:
            </p>
          </div>
          <motion.ul
            className="grid gap-4 sm:grid-cols-2 lg:gap-6"
            variants={listVariant}
          >
            {items.map((item) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                variants={itemVariant}
              >
                <span className="flex h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ResilienceSection;
