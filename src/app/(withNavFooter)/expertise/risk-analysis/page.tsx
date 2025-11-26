"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
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
  FaMicroscope,
  FaFileAlt,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const risk = {
  src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
  const riskServices = [
    {
      title: "Financial Risk Analysis",
      icon: FaCalculator,
      description: "Comprehensive financial risk assessment and modeling for investment decisions and portfolio optimization.",
      badge: "Financial",
      focusAreas: [
        "Market risk",
        "Credit risk",
        "Liquidity risk",
      ],
      items: [
        "Value at Risk (VaR) analysis",
        "Stress testing scenarios",
        "Monte Carlo simulations",
        "Portfolio risk assessment",
        "Financial modeling",
        "Risk-adjusted returns",
      ],
    },
    {
      title: "Operational Risk Management",
      icon: FaIndustry,
      description: "Systematic identification and mitigation of operational risks in business processes and systems.",
      badge: "Operations",
      focusAreas: [
        "Process optimization",
        "System reliability",
        "Compliance management",
      ],
      items: [
        "Risk identification frameworks",
        "Business continuity planning",
        "Internal control assessment",
        "Process risk mapping",
        "Operational loss modeling",
        "Compliance risk analysis",
      ],
    },
    {
      title: "Environmental & Climate Risk",
      icon: FaLeaf,
      description: "Climate change and environmental risk assessment for sustainable development and resilience planning.",
      badge: "Environmental",
      focusAreas: [
        "Climate adaptation",
        "Environmental impact",
        "Sustainability risk",
      ],
      items: [
        "Climate risk modeling",
        "Environmental impact assessment",
        "Natural disaster risk",
        "Carbon footprint analysis",
        "Ecosystem service valuation",
        "Adaptation planning",
      ],
    },
  ];

  const riskMethodologies = [
    {
      title: "Quantitative Risk Analysis",
      icon: FaChartLine,
      description: "Statistical and mathematical approaches to quantify and measure risk exposure.",
      methods: [
        "Probability distributions",
        "Monte Carlo simulation",
        "Sensitivity analysis",
        "Decision tree analysis",
        "Bayesian risk assessment",
        "Extreme value theory",
      ],
    },
    {
      title: "Risk Assessment Tools",
      icon: FaTools,
      description: "Advanced software and computational tools for comprehensive risk modeling and analysis.",
      methods: [
        "@Risk software",
        "Crystal Ball simulation",
        "Risk management systems",
        "Geographic information systems",
        "Statistical analysis packages",
        "Custom risk models",
      ],
    },
    {
      title: "Strategic Risk Framework",
      icon: FaShieldAlt,
      description: "Enterprise-wide risk management frameworks and strategic risk mitigation strategies.",
      methods: [
        "Enterprise risk management",
        "Risk governance structures",
        "Strategic risk assessment",
        "Risk appetite definition",
        "Key risk indicators",
        "Risk reporting systems",
      ],
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
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Risk Analysis Services" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We apply statistical analysis and uncertainty modeling to determine project success probabilities and minimize future negative unforeseen effects across multiple domains.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-10 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {riskServices.map((service, index) => (
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
            <SectionHeading heading="Risk Analysis Methodologies" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We utilize advanced quantitative methods, specialized tools, and strategic frameworks to deliver comprehensive risk insights and mitigation strategies.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-8 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {riskMethodologies.map((methodology, index) => (
              <motion.div
                key={methodology.title}
                className="rounded-3xl border border-primary/20 bg-white p-6 shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <methodology.icon className="text-lg" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {methodology.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {methodology.description}
                </p>
                <ul className="space-y-2">
                  {methodology.methods.map((method) => (
                    <li
                      key={method}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <FaCheckCircle
                        className="mt-0.5 text-primary"
                        aria-hidden
                      />
                      <span className="leading-snug">{method}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Discover how our risk analysis expertise has provided critical insights for climate resilience, financial optimization, and operational excellence initiatives.
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
                          <FaFileAlt className="text-sm" aria-hidden />{" "}
                          {project.region}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                          <FaExclamationTriangle className="text-sm" aria-hidden />{" "}
                          {project.impact}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

export default RiskAnalysis;
