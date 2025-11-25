"use client";

import { motion, type Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const pillContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const pillVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const DataSection = () => {
  return (
    <motion.section
      className="bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <div className="mx-auto content-width px-6 py-16 lg:flex lg:items-center lg:gap-12">
        <motion.div className="flex-1" variants={sectionVariant}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Data Advantage</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Unleash the power of your data</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Unleash the power of your data with our advanced analytics services. We employ AI/ML algorithms to extract
            meaningful insights, helping you make informed decisions, identify patterns, and uncover hidden opportunities
            within your data.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether you are optimizing operations or building new capabilities, we turn complex datasets into clear
            intelligence so your teams can move faster with confidence.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-1 flex-wrap justify-center gap-4 lg:mt-0"
          variants={pillContainer}
        >
          {["Data Lakes", "Digital Twins", "ML Ops", "Human-Centered Dashboards"].map((item) => (
            <motion.div
              key={item}
              className="min-w-[140px] rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-5 text-center text-sm font-semibold text-slate-700 shadow-sm"
              variants={pillVariant}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DataSection;
