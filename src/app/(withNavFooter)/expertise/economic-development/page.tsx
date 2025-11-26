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
  const economicServices = [
    {
      title: "Energy Sector Analysis",
      icon: FaBriefcase,
      description: "Comprehensive economic impact modeling for energy investments and infrastructure projects.",
      badge: "Energy economics",
      focusAreas: [
        "Renewable energy investments",
        "Infrastructure development",
        "Policy impact analysis",
      ],
      items: [
        "Cost-benefit analysis",
        "Employment impact assessment",
        "Supply chain analysis",
        "Market forecasting",
        "Regulatory impact studies",
        "Investment risk evaluation",
      ],
    },
    {
      title: "Transport & Infrastructure",
      icon: FaPlane,
      description: "Economic modeling for transportation projects and infrastructure development initiatives.",
      badge: "Infrastructure",
      focusAreas: [
        "Transport networks",
        "Urban development",
        "Regional connectivity",
      ],
      items: [
        "Traffic impact studies",
        "Accessibility analysis",
        "Economic multiplier effects",
        "Land value impact",
        "Environmental cost-benefit",
        "Funding mechanism analysis",
      ],
    },
    {
      title: "Manufacturing & Industry",
      icon: FaIndustry,
      description: "Industrial development analysis and manufacturing sector economic impact assessments.",
      badge: "Industrial analysis",
      focusAreas: [
        "Industrial parks",
        "Manufacturing clusters",
        "Technology adoption",
      ],
      items: [
        "Production impact studies",
        "Export potential analysis",
        "Supply chain optimization",
        "Technology transfer effects",
        "Competitive advantage studies",
        "Workforce development impact",
      ],
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
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Economic Impact Modeling Services" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We provide comprehensive economic impact analysis using IMPLAN and advanced modeling tools to evaluate complex investment projects across all sectors and regions.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-10 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {economicServices.map((service, index) => (
              <motion.article
                key={service.title}
                className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                variants={fadeInUp}
                // whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 via-blue-200/30 to-primary/30 text-primary"
                    // whileHover={{ rotate: 180, scale: 1.05 }}
                  >
                    <service.icon className="text-xl" aria-hidden />
                  </motion.div>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5">
                        {service.badge}
                      </span>
                      <span className="text-primary/70">
                        Service {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {service.focusAreas?.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      <FaChartLine className="text-sm" aria-hidden /> {point}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.items.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <FaCheckCircle
                        className="mt-0.5 text-primary"
                        aria-hidden
                      />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 to-blue-500/10 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to evaluate your economic impact?
              </h3>
              <p className="text-slate-600 mb-6">
                Contact us for comprehensive economic impact analysis using IMPLAN and advanced modeling tools for your investment projects.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Contact Us
                <FaChartLine className="text-base" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-slate-50 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Sample Projects" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              Discover how our economic impact modeling has provided critical insights for major investment decisions and development initiatives across diverse sectors.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="mt-12 space-y-10">
            {sampleProjects.map((project, index) => {
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  variants={fadeInUp}
                  // whileHover={{ y: -6 }}
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-5 ${
                      reversed ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div
                      className="relative h-full overflow-hidden lg:col-span-2"
                      // whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent z-10"
                        aria-hidden
                      />
                      <Image
                        src={project.image.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    <div className="flex flex-col justify-between gap-6 p-8 lg:col-span-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-primary">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                          <FaGlobe className="text-sm" aria-hidden />{" "}
                          {project.region}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                          <FaMoneyBillWave className="text-sm" aria-hidden />{" "}
                          {project.impact}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 via-blue-200/30 to-primary/30 text-primary">
                            <project.icon className="text-lg" aria-hidden />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {project.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {project.description}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50/80 p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Project highlights
                        </p>
                        <ul className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2"
                            >
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
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default EconomicDevelopment;
