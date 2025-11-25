"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const tileVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80";

const HeroSection = () => {
  return (
    <motion.section
      className="relative overflow-hidden bg-slate-950 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            filter: "brightness(0.85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-900/80" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute -right-12 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto content-width px-6 py-20 lg:flex lg:items-center lg:gap-10">
        <motion.div className="lg:w-3/5" variants={textVariant}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
            Epsilon Innovation Group
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Artificial Intelligence and Machine Learning
          </h1>
          <p className="mt-6 text-base text-slate-200 sm:text-lg">
            Epsilon Innovation Group develops cutting-edge solutions tailored to your specific needs, integrating human-centered design with advanced AI/ML capabilities to accelerate insight, automation, and resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            <Link
              href="#ai-services"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 grid flex-1 grid-cols-2 gap-4 text-slate-900 sm:grid-cols-3 lg:mt-0"
          variants={container}
        >
          {["Strategy", "Design", "Delivery", "Automation", "Insights", "Impact"].map((item) => (
            <motion.div
              key={item}
              className="rounded-2xl border border-white/20 bg-white/80 p-4 text-center text-sm font-semibold shadow-xl backdrop-blur"
              variants={tileVariant}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
