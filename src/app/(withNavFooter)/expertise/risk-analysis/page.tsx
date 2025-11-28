"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaShieldAlt,
  FaChartLine,
  FaExclamationTriangle,
  FaBalanceScale,
  FaIndustry,
  FaLeaf,
  FaWater,
  FaTools,
  FaCheckCircle,
  FaCalculator,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const risk = {
  src: "https://images.unsplash.com/photo-1757882585667-dffbeaaabb81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 1920,
  height: 1080,
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const RiskAnalysis = () => {
  const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
    {
      title: "Financial Risk Analysis",
      description:
        "Comprehensive financial risk assessment including market, credit, and operational risk analysis using Monte Carlo simulation.",
      icon: FaChartLine,
    },
    {
      title: "Operational Risk Management",
      description:
        "Business continuity planning and operational loss modeling through process risk mapping and internal control assessment.",
      icon: FaCog,
    },
    {
      title: "Environmental & Climate Risk",
      description:
        "Climate change and environmental risk assessment for sustainable development through climate risk modeling and adaptation planning.",
      icon: FaLeaf,
    },
    {
      title: "Quantitative Risk Analysis",
      description:
        "Statistical and mathematical approaches to quantify risk exposure using probability distributions and sensitivity analysis.",
      icon: FaCalculator,
    },
    {
      title: "Risk Assessment Tools",
      description:
        "Advanced software and computational tools for comprehensive risk modeling using @Risk and Crystal Ball simulation.",
      icon: FaTools,
    },
  ];

  const sampleProjects = [
    {
      title: "Climate Risk Assessment for Infrastructure",
      description: "Comprehensive climate change risk analysis for critical infrastructure projects including sea level rise and extreme weather scenarios.",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Climate risk assessment",
      icon: FaWater,
      region: "Coastal Infrastructure",
      impact: "Climate resilience",
      highlights: [
        "Analyzed 50+ climate scenarios",
        "Developed adaptation strategies",
        "Quantified infrastructure risk",
      ],
    },
    {
      title: "Financial Portfolio Risk Modeling",
      description: "Advanced financial risk modeling for investment portfolio optimization and market risk management.",
      image: {
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Financial risk modeling",
      icon: FaCalculator,
      region: "Investment Portfolio",
      impact: "Financial optimization",
      highlights: [
        "Modeled $500M portfolio risk",
        "Implemented VaR frameworks",
        "Optimized risk-adjusted returns",
      ],
    },
    {
      title: "Operational Risk Framework Development",
      description: "Enterprise-wide operational risk management framework implementation for multinational corporation.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Operational risk management",
      icon: FaIndustry,
      region: "Enterprise Operations",
      impact: "Risk governance",
      highlights: [
        "Implemented ERM framework",
        "Reduced operational losses by 25%",
        "Enhanced risk culture",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Risk Analysis"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/risk-analysis" },
        ]}
      />

      <motion.section
        className="relative isolate overflow-hidden text-white py-8" 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <Image
          src={risk.src}
          alt="Risk analysis landscape"
          width={risk.width}
          height={risk.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/50 to-green-900/50 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt className="text-base" aria-hidden /> Risk Analysis
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Comprehensive risk analysis and uncertainty management for informed decision-making under complex conditions.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            We apply advanced statistical analysis, quantitative modeling, and uncertainty assessment to minimize future negative effects and help clients make informed decisions under uncertainty.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-100"
            variants={staggerContainer}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExclamationTriangle className="text-base" aria-hidden /> Risk Assessment
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalculator className="text-base" aria-hidden /> Quantitative Analysis
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBalanceScale className="text-base" aria-hidden /> Decision Support
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-linear-to-br from-blue-50 to-primary/10 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div variants={fadeInUp} className="content-width mx-auto">
          <SectionHeading heading="Our Capabilities" />
        </motion.div>
        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 content-width mx-auto"
          variants={staggerContainer}
        >
          {capabilityHighlights.map((item) => (
            <motion.div
              key={item.title}
              className="h-full rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              variants={fadeInUp}
              whileHover={{
                y: -4,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-red-200/30 to-orange-500/30 text-primary"
                whileHover={{
                  rotate: 180,
                  scale: 1.05,
                }}
              >
                <item.icon className="text-xl" aria-hidden />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto content-width px-4 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Services We Deliver" />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We apply statistical analysis and uncertainty modeling to determine
              project success probabilities and minimize future negative unforeseen
              effects across multiple domains.
            </p>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              {[
                "Value at Risk (VaR) modeling",
                "Stress testing scenarios",
                "Credit risk assessment",
                "Market risk analysis",
                "Portfolio optimization",
                "Derivative pricing models",
                "Risk identification frameworks",
                "Business continuity planning",
                "Internal control assessment",
                "Process risk mapping",
                "Operational loss modeling",
                "Compliance risk analysis",
                "Climate risk modeling",
                "Environmental impact assessment",
                "Natural disaster risk",
                "Carbon footprint analysis",
                "Ecosystem service valuation",
                "Adaptation planning",
                "Probability distributions",
                "Monte Carlo simulation",
                "Sensitivity analysis",
                "Decision tree analysis",
                "Bayesian risk assessment",
                "Extreme value theory",
                "@Risk software",
                "Crystal Ball simulation",
                "Risk management systems",
                "Geographic information systems",
                "Statistical analysis packages",
                "Custom risk models",
              ].map((service) => (
                <motion.div
                  key={service}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <FaCheckCircle className="mt-0.5 text-primary" aria-hidden />
                  <span className="text-sm leading-relaxed text-slate-700">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            variants={slideInLeft}
          >
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={risk.src}
                alt="Risk analysis framework"
                width={risk.width}
                height={risk.height}
                className="h-full w-full object-cover aspect-9/12"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto content-width px-4 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading heading="Sample Projects" />
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Discover how our risk analysis expertise has provided critical insights for climate resilience, financial optimization, and operational excellence initiatives.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-2"
          variants={staggerContainer}
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.01,
                boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent z-10"
                  whileHover={{
                    opacity: 0.6,
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <Image
                    src={project.image.src}
                    alt={project.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-3 text-xs font-medium text-primary">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaFileAlt className="text-sm" aria-hidden /> {project.region}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaExclamationTriangle className="text-sm" aria-hidden /> {project.impact}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={scaleIn}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <project.icon className="text-lg" aria-hidden />
                  </div>
                  <motion.h3
                    className="text-xl font-semibold text-slate-900"
                    whileHover={{
                      color: "#1e40af",
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="rounded-2xl bg-slate-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Project highlights
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <FaCheckCircle
                          className="mt-0.5 text-primary"
                          aria-hidden
                        />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default RiskAnalysis;
