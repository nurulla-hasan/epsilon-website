"use client"
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaBatteryFull,
  FaChartLine,
  FaCheckCircle,
  FaSolarPanel,
  FaWater,
  FaWind,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";
const energy = { src: "https://images.unsplash.com/photo-1544262947-13a6c4d268e7?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1920, height: 1080 };
const service = { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", width: 800, height: 600 };

const transmission = { src: "https://images.unsplash.com/photo-1762427353897-20e566f120a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 600 };
const carbon = { src: "https://images.unsplash.com/photo-1646559768375-2b319a0c233e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 600 };
const wind = { src: "https://images.unsplash.com/photo-1755973735400-3f616e327759?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 600 };
const mill = { src: "https://images.unsplash.com/photo-1561115867-be8460fbebfe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 600 };

const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Integrated Renewable Roadmaps",
    description:
      "National and regional energy strategies that balance utility-scale solar, wind, hydro, and storage to achieve net-zero goals without compromising reliability.",
    icon: FaSolarPanel,
  },
  {
    title: "Grid Modernization & Resilience",
    description:
      "Transmission expansion planning, smart-grid integration, and adaptive controls that keep power systems secure under extreme weather and demand growth.",
    icon: FaWind,
  },
  {
    title: "Circular Energy & Water Systems",
    description:
      "Decarbonized desalination, sustainable aquaculture, and hybrid microgrids that close the loop between energy, water, and community livelihoods.",
    icon: FaWater,
  },
  {
    title: "Investment & Policy Analytics",
    description:
      "Bankable feasibility studies, climate finance roadmaps, and robust impact modelling that unlock public–private investment at scale.",
    icon: FaChartLine,
  },
  {
    title: "Storage & Demand Optimization",
    description:
      "Battery integration, demand-side management, and resilience analytics that keep critical infrastructure powered year-round.",
    icon: FaBatteryFull,
  },
];

const impactStats = [
  {
    value: "4 GW",
    label: "Renewable capacity assessed",
    description: "Across wind, solar, hydro, and hybrid microgrids in emerging markets.",
  },
  {
    value: "18+",
    label: "Countries supported",
    description: "Energy transition, workforce, and policy modernization programs.",
  },
  {
    value: "$1.2B",
    label: "Investment unlocked",
    description: "Climate finance pipelines backed by resilient infrastructure scenarios.",
  },
];

const services = [
  "Wind, Solar (PV & CSP), Hydro, Biomass, Geothermal, Waste-to-Energy portfolios",
  "Resource assessment, forecasting, and geospatial potential evaluation",
  "Bankable feasibility studies and techno-economic modelling",
  "Low-carbon development, NDC alignment, and energy planning analytics",
  "Clean energy investment roadmaps and climate finance advisory",
  "GHG baseline, MRV frameworks, and emission reduction auditing",
  "Industrial energy efficiency and building performance retrofits",
  "Weatherization and resilience upgrades for vulnerable communities",
  "Comprehensive energy audits for campuses and industrial estates",
  "Renewable-powered SWRO and sustainable coastal desalination systems",
  "Hybrid energy systems for aquaculture, cold-chain, and blue economy hubs",
  "Resilient telecom and remote operations powered by solar and storage",
  "Off-grid and mini-grid electrification for last-mile communities",
];

const approachPillars = [
  {
    title: "Human-centered transition plans",
    description:
      "We co-create pathways with utilities, regulators, and communities so that energy transitions uplift local talent and enterprises.",
  },
  {
    title: "Science-led analytics",
    description:
      "Advanced modelling, digital twins, and climate risk intelligence expose actionable insights for resilient infrastructure decisions.",
  },
  {
    title: "Deployment with accountability",
    description:
      "From pilot to scale, we embed measurable KPIs, monitoring, and adaptive management to sustain impact well beyond commissioning.",
  },
];

const projectShowcase = [
  {
    title: "Energy Skills Assessment & Strategy Development",
    description:
      "Epsilon led Rwanda's national workforce strategy, aligning training pipelines with utility-scale PV, hydro, geothermal, and methane projects to ensure a future-ready talent base.",
    image: transmission,
    alt: "Transmission infrastructure",
    insights: [
      "Nationwide competency mapping across generation and grid operations",
      "Certification framework for emerging renewable technology roles",
      "Implementation roadmap for public/private training centres",
    ],
  },
  {
    title: "Low Carbon Development Study",
    description:
      "A comprehensive pathway for the power and oil & gas sectors—covering renewable resource mapping, EFFECT model scenarios, and inclusive off-grid economics to meet national targets.",
    image: carbon,
    alt: "Low carbon analysis dashboard",
    insights: [
      "Multi-sector modelling with energy demand, supply, and emissions trajectories",
      "Policy levers and investment cases for rapid decarbonization",
      "Prioritized actions for provincial and national agencies",
    ],
  },
  {
    title: "Mesoscale Wind Resources Assessment",
    description:
      "High-resolution wind mapping in Kosovo identified bankable sites and informed utility-scale procurement, streamlining permitting and investor due diligence.",
    image: wind,
    alt: "Wind resource mapping",
    insights: [
      "Mesoscale modelling calibrated with on-site instrumentation",
      "Capacity factor optimization for diversified generation portfolios",
      "Actionable site packages for developers and financiers",
    ],
  },
  {
    title: "Renewable Energy Powered SWRO System Design",
    description:
      "We engineered the Caribbean's first renewable-powered desalination system, securing water independence for coastal communities while cutting emissions.",
    image: mill,
    alt: "Desalination facility",
    insights: [
      "Hybrid solar-wind architecture tailored to local climate patterns",
      "Seasonal variability modelling for demand and energy security",
      "Operations blueprint ensuring reliable water delivery with minimal grid draw",
    ],
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
      delayChildren: 0.1
    } 
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

const Energy = () => {
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Energy Systems & Decarbonization"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/energy" },
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
          src={energy.src}
          alt="Clean energy landscape"
          width={energy.width}
          height={energy.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20" />
        <motion.div 
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            Integrated Energy & Decarbonization
          </motion.div>
          <motion.h1 
            className="mt-6 text-3xl max-w-6xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{ 
              transition: { duration: 0.4 }
            }}
          >
            Building resilient, people-first energy systems that accelerate the transition to net-zero.
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            Epsilon Innovation Group combines deep technical expertise with community-centred design to deliver renewable energy, grid resilience, and climate finance solutions across the globe.
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
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSolarPanel className="text-base" aria-hidden /> Utility-scale renewables
            </motion.span>
            <motion.span 
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWater className="text-base" aria-hidden /> Resilient water systems
            </motion.span>
            <motion.span 
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChartLine className="text-base" aria-hidden /> Finance-ready analytics
            </motion.span>
          </motion.div>
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
          className="grid gap-6 sm:grid-cols-3"
          variants={staggerContainer}
        >
          {impactStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              variants={scaleIn}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-blue-400 to-sky-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.p 
                className="text-3xl font-semibold text-slate-900"
                whileInView={{ 
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.6, delay: 0.2 }
                }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.description}</p>
            </motion.div>
          ))}
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
            <SectionHeading heading="Our Capabilities" />
          </motion.div>
          <motion.div 
            className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {capabilityHighlights.map((item) => (
              <motion.div
                key={item.title}
                className="h-full rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                variants={fadeInUp}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-blue-200/30 to-blue-500/30 text-primary"
                  whileHover={{ 
                    rotate: 180,
                    scale: 1.05
                  }}
                >
                  <item.icon className="text-xl" aria-hidden />
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
              We partner with utilities, ministries, and private developers to provide end-to-end advisory—from early resource intelligence and policy design to detailed engineering and commissioning support.
            </p>
            <motion.div 
            className="mt-8 grid gap-3 sm:grid-cols-2"
            variants={staggerContainer}
          >
            {services.map((item) => (
              <motion.div 
                key={item} 
                className="flex items-start gap-3 rounded-xl bg-slate-50/60 p-4 transition hover:bg-slate-100"
                variants={slideInLeft}
                whileHover={{ 
                  x: 8,
                  backgroundColor: "rgba(241, 245, 249, 1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3, type: "spring" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  <FaCheckCircle className="mt-0.5 text-base text-primary" aria-hidden />
                </motion.div>
                <span className="text-sm leading-relaxed text-slate-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          </motion.div>
          <motion.div 
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
            variants={scaleIn}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              transition: { duration: 0.5, type: "spring" }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-tr from-slate-900/10 via-blue-700/10 to-transparent"
              whileHover={{ 
                opacity: 0.2,
                transition: { duration: 0.3 }
              }}
            />
            <Image
              src={service.src}
              alt="Specialists collaborating on clean energy design"
              width={service.width}
              height={service.height}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="bg-slate-900 py-20 text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="How We Partner" />
          </motion.div>
          <motion.div 
            className="mt-10 grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {approachPillars.map((item) => (
              <motion.div 
                key={item.title} 
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-lg font-semibold text-white"
                  whileHover={{ 
                    color: "#60a5fa",
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.title}
                </motion.h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
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
          <SectionHeading heading="Signature Projects" />
        </motion.div>
        <motion.div 
          className="mt-10 grid gap-10 lg:grid-cols-2"
          variants={staggerContainer}
        >
          {projectShowcase.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                scale: 1.01,
                boxShadow: "0 40px 80px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent z-10"
                  whileHover={{ 
                    opacity: 0.6,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.div
                  whileHover={{ 
                    scale: 1.05
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
                <motion.h3 
                  className="text-xl font-semibold text-slate-900"
                  whileHover={{ 
                    color: "#1e40af",
                    x: 4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
                <motion.ul 
                  className="space-y-2 text-sm text-slate-600"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {project.insights.map((insight, index) => (
                    <motion.li 
                      key={insight} 
                      className="flex gap-2"
                      variants={slideInLeft}
                      custom={index}
                    >
                      <motion.span 
                        className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary"
                        whileHover={{ 
                          scale: 2,
                          backgroundColor: "#3b82f6",
                          transition: { duration: 0.2 }
                        }}
                        aria-hidden 
                      />
                      <span>{insight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Energy;
