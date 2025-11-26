"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import {
  FaShieldAlt,
  FaChartLine,
  FaWater,
  FaGlobe,
  FaLeaf,
  FaCheckCircle,
  FaTemperatureHigh,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const climate = {
  src: "https://images.unsplash.com/photo-1677138736641-c1033dc5586a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 1920,
  height: 1080,
};
const risk = {
  src: "https://images.unsplash.com/photo-1632372207404-d4f590dd66c1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 800,
  height: 600,
};
const adaptation = {
  src: "https://images.unsplash.com/photo-1592056594884-838835d0b0ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 800,
  height: 600,
};
const gender = {
  src: "https://images.unsplash.com/photo-1622050701194-fb04fcf65867?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 800,
  height: 600,
};
const coastal = {
  src: "https://images.unsplash.com/photo-1667038437407-992e59398946?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 800,
  height: 600,
};

const heroHighlights = [
  {
    label: "Projects delivered",
    value: "120+",
    detail: "Across adaptation, mitigation & finance portfolios",
  },
  {
    label: "Countries served",
    value: "26",
    detail: "Multiregional experience across Asia & Africa",
  },
  {
    label: "Average risk reduction",
    value: "38%",
    detail: "Measured improvement in climate preparedness",
  },
  {
    label: "Funding unlocked",
    value: "$420M",
    detail: "Mobilised through climate finance strategies",
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

const ClimateChange = () => {
  const climateServices = [
    {
      title: "Climate Change Risk Analysis",
      icon: FaChartLine,
      description:
        "Comprehensive diagnostics combining scenario modelling, asset exposure analysis, and policy insights.",
      badge: "Strategic foresight",
      focusAreas: [
        "Sector vulnerability modelling",
        "Critical infrastructure mapping",
        "Disaster preparedness roadmaps",
      ],
      items: [
        "Climate Change Scenario Analysis",
        "Climate Change Vulnerability Analysis",
        "Critical Infrastructure Risk Analysis",
        "Coastal Vulnerability Analysis",
        "Disaster Risk Reduction (DRR)",
        "Flood and Drought Analysis",
        "Extreme Event Analysis",
        "Climate Change Uncertainty Analysis",
        "Policy, Risk and Uncertainty Analysis",
      ],
    },
    {
      title: "Climate Change Adaptation",
      icon: FaShieldAlt,
      description:
        "Integrated adaptation design that links resilient infrastructure, social systems, and governance.",
      badge: "Resilience design",
      focusAreas: [
        "Nature-based adaptation",
        "Decision-support systems",
        "Community resilience accelerators",
      ],
      items: [
        "Adaptation Strategy Development",
        "Coastal Adaptation Analysis",
        "Adaptation Options Investment Analysis",
        "Critical Infrastructure Adaptation Strategy",
        "Water Supply Adaptation Analysis",
        "Climate Change Resilient Community Development",
        "Climate Change Visualization Tool Development",
        "Climate Change Information System Development",
        "Climate Change Decision-Making Tool Development",
      ],
    },
    {
      title: "Climate Finance",
      icon: FaLeaf,
      description:
        "Investment blueprints and funding pathways that de-risk climate innovation.",
      badge: "Finance architecture",
      focusAreas: [
        "Green climate fund access",
        "Blended finance structuring",
        "Institutional capacity building",
      ],
      items: [
        "Climate Finance Strategy Development",
        "Climate Adaptation Funding Proposal Development",
        "Climate Mitigation Funding Proposal Development",
        "Climate Finance Capacity Building",
      ],
    },
  ];

  const sampleProjects = [
    {
      title: "Climate Risk Profile (CRP) Development",
      description:
        "Epsilon Innovation Group's researchers have developed Climate Risk Profile (CRP) for Turkmenistan, which included reviewing Turkmenistan's climate change reports, conducting climate scenario, impact and adaptation analysis, developing climate risk management methodologies, synthesizing institutional capacity to manage climate risks and developing climate risk management options.",
      image: risk,
      alt: "Climate Risk Analysis",
      icon: FaTemperatureHigh,
      region: "Central Asia",
      impact: "National resilience roadmap for Turkmenistan",
      highlights: [
        "Unified 20+ datasets into a climate risk dashboard",
        "Designed sector-specific adaptation pathways",
        "Built institutional toolkit for scenario planning",
      ],
    },
    {
      title:
        "Disaster Risk Reduction (DRR) and Climate Change Adaptation (CCA)",
      description:
        "The project titled 'Systematization of Information and Development of Methodology for Disaster Risk Reduction (DRR) and Climate Change Adaptation (CCA) for the Greater Horn of Africa' has been carried out by Epsilon Innovation Group researchers. In the study, we have developed a systematization of climate information and methodology for climate change adaptation best practices in Ethiopia, Kenya and Uganda.",
      image: adaptation,
      alt: "Disaster Risk Reduction",
      icon: FaUmbrellaBeach,
      region: "Greater Horn of Africa",
      impact: "Regional early-warning & adaptation toolkit",
      highlights: [
        "Baseline assessments for 3 climate zones",
        "Playbooks for DRR integration in policy",
        "Capacity-building for 120+ practitioners",
      ],
    },
    {
      title: "Climate Change and Gender Risk Analysis",
      description:
        "Epsilon Innovation Group's principal researchers have developed the study methodology, conducted climate change induced flood and drought risk analysis, developed gender and climate change training tool, and provided training to stakeholders. The project is part of the UNDP's Africa Adaptation Program (AAP) adaptation program.",
      image: gender,
      alt: "Gender and Climate Analysis",
      icon: FaGlobe,
      region: "West & Central Africa",
      impact: "Gender-responsive climate resilience pathways",
      highlights: [
        "Inclusive risk lens for 8 priority sectors",
        "Co-created training toolkit with local partners",
        "Onboarded 45 institutions to apply findings",
      ],
    },
    {
      title: "Sea Level Rise Vulnerability Assessment",
      description:
        "Epsilon Innovation Group team members conducted temperature and rainfall projection, sea level rise scenario analysis, and developed adaptation strategy for Lagos State (Lagos Mega City), Nigeria. In the study we have conducted detailed coastal vulnerability assessment, economic valuation of exposed assets and population, and extreme water level events. In the temperature and precipitation projection about 14 Global Circulation Models (GCMs) are evaluated and statistical analysis performed.",
      image: coastal,
      alt: "Sea Level Rise Assessment",
      icon: FaWater,
      region: "Lagos State, Nigeria",
      impact: "Coastal resilience blueprint for megacity assets",
      highlights: [
        "Modelled 14 climate scenarios for 2050 horizon",
        "Economic valuation of 1.2M exposed residents",
        "Defined phased adaptation investment roadmap",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Climate Change Resilience & Adaptation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/climate-change" },
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
          src={climate.src}
          alt="Climate change visualization"
          width={climate.width}
          height={climate.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 to-primary/20" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            Climate Resilience & Adaptation
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Building climate-resilient communities through science-driven
            adaptation strategies.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            We translate climate science into practical solutions that help
            communities build resilience against climate change impacts.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm font-medium"
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
              <FaTemperatureHigh className="text-base" aria-hidden /> Risk
              Analysis
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
              <FaShieldAlt className="text-base" aria-hidden /> Adaptation
              Planning
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
              <FaLeaf className="text-base" aria-hidden /> Climate Finance
            </motion.span>
          </motion.div>
        </motion.div>
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
            <SectionHeading heading="Climate Change Services" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We partner with public institutions, development partners, and
              private-sector innovators to translate climate intelligence into
              confident, measurable actions. Each service bundle blends
              analytical depth with implementation support so programmes scale
              with purpose.
            </p>
          </motion.div>
          <motion.div
            className="mt-10 grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
          >
            {climateServices.map((service) => (
              <motion.div
                key={service.title}
                className="h-full rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-primary/20 to-primary/30"
                  whileHover={{
                    rotate: 180,
                    scale: 1.05,
                  }}
                >
                  <service.icon className="text-xl" aria-hidden />
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {service.badge}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="mt-4 rounded-2xl bg-slate-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus areas
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {service.focusAreas?.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  {service.items.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2"
                      variants={slideInLeft}
                      custom={index}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                      >
                        <FaCheckCircle
                          className="mt-0.5 text-primary"
                          aria-hidden
                        />
                      </motion.div>
                      <span className="leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            Explore how our multidisciplinary teams convert climate data into
            policies, investments, and community outcomes. Each case pairs
            rigorous analytics with co-creation alongside local institutions.
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
                <motion.div
                  className="flex items-center gap-3"
                  variants={scaleIn}
                >
                  <motion.div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-primary/20 to-primary/30 text-primary"
                    whileHover={{
                      rotate: 180,
                      scale: 1.05,
                    }}
                  >
                    <project.icon className="text-lg" aria-hidden />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold text-slate-900"
                    whileHover={{
                      color: "var(--color-primary, #2563eb)",
                      x: 2,
                    }}
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
                <div className="flex flex-wrap gap-3 text-xs font-medium text-primary">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaGlobe className="text-sm" aria-hidden /> {project.region}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaLeaf className="text-sm" aria-hidden /> {project.impact}
                  </span>
                </div>
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

export default ClimateChange;
