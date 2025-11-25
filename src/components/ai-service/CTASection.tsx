"use client";

import Link from "next/link";

import { motion, type Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const contentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const CTASection = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <motion.div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center" variants={contentVariant}>
        <motion.p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80" variants={itemVariant}>
          Let's Collaborate
        </motion.p>
        <motion.h2 className="text-3xl font-semibold sm:text-4xl" variants={itemVariant}>
          Ready to build your next AI initiative?
        </motion.h2>
        <motion.p className="text-base text-white/90" variants={itemVariant}>
          Partner with Epsilon Innovation Group to align AI strategy, delivery, and change enablement across your
          organization. Our senior architects and scientists are ready to co-create your roadmap.
        </motion.p>
        <motion.div variants={itemVariant}>
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;
