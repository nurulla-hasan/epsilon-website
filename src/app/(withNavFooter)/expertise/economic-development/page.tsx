"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChartLine,
  FaBriefcase,
  FaIndustry,
  FaTractor,
  FaPlane,
  FaBuilding,
  FaTools,
  FaCheckCircle,
  FaMoneyBillWave,
  FaGlobe,
  FaCalculator,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const economic = {
  src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  width: 1920,
  height: 1080,
};
const modeling = {
  src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};
const investment = {
  src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};

const impactMetrics = [
  {
    label: "Projects analyzed",
    value: "250+",
    detail: "Complex economic impact assessments across multiple sectors.",
  },
  {
    label: "Investment evaluated",
    value: "$15B+",
    detail: "Total value of investments analyzed for economic impact.",
  },
  {
    label: "Regions covered",
    value: "35",
    detail: "Local, national, and regional economic studies completed.",
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

const EconomicDevelopment = () => {
  const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
    {
      title: "Energy Sector Analysis",
      description:
        "Comprehensive economic impact modeling for energy investments and infrastructure projects through cost-benefit analysis and employment assessment.",
      icon: FaBriefcase,
    },
    {
      title: "Transport & Infrastructure",
      description:
        "Economic modeling for transportation projects and infrastructure development initiatives through traffic impact and accessibility analysis.",
      icon: FaPlane,
    },
    {
      title: "Manufacturing & Industry",
      description:
        "Industrial development analysis and manufacturing sector economic impact assessments through production and supply chain optimization.",
      icon: FaIndustry,
    },
    {
      title: "Regional Development Planning",
      description:
        "Comprehensive regional economic impact studies using IMPLAN modeling for multi-sector development initiatives and investment analysis.",
      icon: FaGlobe,
    },
    {
      title: "Urban Revitalization",
      description:
        "Economic impact analysis for urban renewal projects including business development, property value impacts, and tourism opportunities.",
      icon: FaBuilding,
    },
  ];

  const sampleProjects = [
    {
      title: "Regional Economic Impact Study",
      description: "Comprehensive IMPLAN-based analysis for a multi-billion dollar regional development initiative covering multiple sectors and communities.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Regional economic development",
      icon: FaGlobe,
      region: "Midwest Region",
      impact: "Multi-sector growth",
      highlights: [
        "Analyzed $2.5B investment impact",
        "Projected 15,000 new jobs",
        "Identified 8 key growth sectors",
      ],
    },
    {
      title: "Energy Infrastructure Economic Assessment",
      description: "Economic impact modeling for major renewable energy infrastructure development including employment and supply chain effects.",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Energy infrastructure project",
      icon: FaBriefcase,
      region: "Pacific Northwest",
      impact: "Clean energy transition",
      highlights: [
        "Evaluated $800M wind project",
        "Quantified 3,200 construction jobs",
        "Assessed long-term economic benefits",
      ],
    },
    {
      title: "Urban Revitalization Economic Analysis",
      description: "Comprehensive economic impact study for downtown revitalization project including business development and property value impacts.",
      image: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
      },
      alt: "Urban revitalization project",
      icon: FaBuilding,
      region: "Northeast Corridor",
      impact: "Urban renewal",
      highlights: [
        "Analyzed $500M redevelopment",
        "Projected 25% business growth",
        "Identified tourism opportunities",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Development Economics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/economic-development" },
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
          src={economic.src}
          alt="Economic development landscape"
          width={economic.width}
          height={economic.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/70 via-blue-900/50 to-primary/30" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <FaChartLine className="text-base" aria-hidden /> Development Economics
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Data-driven economic impact analysis for informed investment decisions and sustainable development.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            Using advanced IMPLAN modeling and comprehensive analytical tools, we provide precise economic impact assessments for complex investment projects across all sectors and regions.
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
              <FaCalculator className="text-base" aria-hidden /> IMPLAN Modeling
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
              <FaMoneyBillWave className="text-base" aria-hidden /> Investment Analysis
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
              <FaGlobe className="text-base" aria-hidden /> Regional Impact
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
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-green-200/30 to-emerald-500/30 text-primary"
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
              We partner with governments, developers, and organizations to provide comprehensive economic impact analysis using IMPLAN modeling and advanced analytical tools for informed investment decisions.
            </p>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              {[
                "Cost-benefit analysis",
                "Employment impact assessment",
                "Supply chain analysis",
                "Market forecasting",
                "Regulatory impact studies",
                "Investment risk evaluation",
                "Traffic impact studies",
                "Accessibility analysis",
                "Economic multiplier effects",
                "Land value impact",
                "Environmental cost-benefit",
                "Funding mechanism analysis",
                "Production impact studies",
                "Export potential analysis",
                "Supply chain optimization",
                "Technology transfer effects",
                "Competitive advantage studies",
                "Workforce development impact",
                "IMPLAN regional modeling",
                "Multi-sector impact analysis",
                "Investment attraction studies",
                "Business development analysis",
                "Property value impact assessment",
                "Tourism economic impact",
                "Urban renewal economic analysis",
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
                src={economic.src}
                alt="Economic development analysis"
                width={economic.width}
                height={economic.height}
                className="h-full w-full object-cover aspect-8/9"
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
            Discover how our economic impact modeling has provided critical insights for major investment decisions and development initiatives across diverse sectors.
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
                    <FaGlobe className="text-sm" aria-hidden /> {project.region}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaMoneyBillWave className="text-sm" aria-hidden /> {project.impact}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={scaleIn}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 via-blue-200/30 to-primary/30 text-primary">
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

export default EconomicDevelopment;
