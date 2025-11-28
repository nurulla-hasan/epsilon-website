"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBalanceScale,
  FaChartLine,
  FaGavel,
  FaMicroscope,
  FaIndustry,
  FaLightbulb,
  FaLeaf,
  FaWater,
  FaTools,
  FaCheckCircle,
  FaCalculator,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const policy = {
  src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  width: 1920,
  height: 1080,
};
const analysis = {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};
const climate = {
  src: "https://images.unsplash.com/photo-1569163139394-de491dcd2134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};

const policyMetrics = [
  {
    label: "Policy analyses",
    value: "180+",
    detail: "Comprehensive policy studies across multiple sectors and regions.",
  },
  {
    label: "Tools developed",
    value: "25",
    detail: "Custom computational models and decision-making frameworks created.",
  },
  {
    label: "Stakeholders engaged",
    value: "500+",
    detail: "Multi-stakeholder participatory processes facilitated worldwide.",
  },
];

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

const PolicyAnalysis = () => {
  const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
    {
      title: "Technology Policy Analysis",
      description:
        "Strategic technology policy development and assessment for innovation-driven growth and digital transformation through technology roadmapping.",
      icon: FaMicroscope,
    },
    {
      title: "Energy & Environmental Policy",
      description:
        "Comprehensive energy and environmental policy analysis for sustainable development and climate resilience through renewable energy frameworks.",
      icon: FaLeaf,
    },
    {
      title: "Infrastructure & Investment Policy",
      description:
        "Strategic infrastructure development and investment policy analysis for economic growth and regional development through public-private partnerships.",
      icon: FaIndustry,
    },
    {
      title: "Quantitative Analysis Tools",
      description:
        "Advanced statistical and mathematical models for data-driven policy insights and decision support using cost-benefit analysis and simulation.",
      icon: FaCalculator,
    },
    {
      title: "Participatory Methods",
      description:
        "Multi-stakeholder engagement approaches and collaborative decision-making frameworks for consensus building and stakeholder mapping.",
      icon: FaUsers,
    },
  ];

  const sampleProjects = [
    {
      title: "Clean Development Mechanism Analysis",
      description: "Quantitative evaluation of renewable energy technologies for low abatement costs and sustainable development in developing countries.",
      image: {
        src: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Clean development mechanism",
      icon: FaLeaf,
      region: "International",
      impact: "Climate policy",
      highlights: [
        "Published in Energy Policy Journal",
        "Analyzed 15+ renewable technologies",
        "Developed cost-effectiveness framework",
      ],
    },
    {
      title: "Water Supply Climate Risk Analysis",
      description: "Comprehensive investment decision-making analysis for water supply systems under climate change variability scenarios.",
      image: {
        src: "https://images.unsplash.com/photo-1726165534079-d9844b034099?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Water supply analysis",
      icon: FaWater,
      region: "New York City",
      impact: "Climate adaptation",
      highlights: [
        "Presented at ESREL 2015",
        "Analyzed climate variability scenarios",
        "Developed investment decision framework",
      ],
    },
    {
      title: "Coastal Risk Adaptation Strategy",
      description: "UNIDO-funded coastal sea level rise risk analysis and adaptation strategy development for Lagos, Nigeria coastline.",
      image: {
        src: "https://images.unsplash.com/photo-1652471326658-6423302b7ed8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Coastal risk analysis",
      icon: FaBalanceScale,
      region: "Lagos, Nigeria",
      impact: "Risk management",
      highlights: [
        "UNIDO-funded project",
        "Top 20 exposed cities analysis",
        "Sea level rise scenario modeling",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Policy Analysis"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/policy-analysis" },
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
          src={policy.src}
          alt="Policy analysis landscape"
          width={policy.width}
          height={policy.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-blue-900/60 to-primary/70" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <FaBalanceScale className="text-base" aria-hidden /> Policy Analysis
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Evidence-based policy analysis for informed decision-making and sustainable development outcomes.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            We combine quantitative analysis, participatory approaches, and custom computational models to solve complex technical and policy challenges for governments and organizations worldwide.
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
              <FaGavel className="text-base" aria-hidden /> Policy Design
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
              <FaUsers className="text-base" aria-hidden /> Stakeholder Engagement
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
        <motion.div variants={fadeInUp} className="mx-auto content-width">
          <SectionHeading heading="Our Capabilities" />
        </motion.div>
        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto content-width"
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
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-purple-200/30 to-purple-500/30 text-primary"
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
              We partner with governments, development agencies, and organizations
              to develop evidence-based policies that drive sustainable development,
              climate resilience, and inclusive economic growth.
            </p>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              {[
                "Technology assessment frameworks",
                "Innovation policy design",
                "Digital economy strategies",
                "R&D policy analysis",
                "Technology transfer mechanisms",
                "Innovation impact evaluation",
                "Climate policy frameworks",
                "Renewable energy policies",
                "Environmental impact assessments",
                "Carbon pricing mechanisms",
                "Sustainability standards",
                "Green growth strategies",
                "Infrastructure policy design",
                "Public-private partnerships",
                "Investment climate analysis",
                "Regional development strategies",
                "Economic impact assessment",
                "Policy implementation support",
                "Cost-benefit analysis",
                "Statistical analysis",
                "Monte Carlo simulation",
                "Optimization analysis",
                "Risk assessment models",
                "Econometric analysis",
                "Multi-Stakeholder Participatory Approach (MSPA)",
                "Stakeholder mapping",
                "Consensus building",
                "Delphi techniques",
                "Focus group facilitation",
                "Participatory modeling",
                "@Risk software",
                "Custom decision models",
                "System dynamics",
                "Agent-based modeling",
                "Geospatial analysis",
                "Policy simulation tools",
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
                src={policy.src}
                alt="Policy analysis framework"
                width={policy.width}
                height={policy.height}
                className="h-full w-full object-cover aspect-8/12"
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
            Discover how our policy analysis expertise has provided critical insights for sustainable development and climate resilience initiatives worldwide.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-2"
          variants={staggerContainer}
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
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
                    <FaLightbulb className="text-sm" aria-hidden /> {project.impact}
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

export default PolicyAnalysis;
