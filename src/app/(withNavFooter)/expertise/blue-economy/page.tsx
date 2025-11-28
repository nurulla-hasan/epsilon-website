"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaWater,
  FaShip,
  FaFish,
  FaWind,
  FaSolarPanel,
  FaAnchor,
  FaCheckCircle,
  FaWaveSquare,
  FaGlobe,
  FaRecycle,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const ocean = {
  src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  width: 1920,
  height: 1080,
};
const wave = {
  src: "https://images.unsplash.com/photo-1606147542990-d23b9c4eb4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};
const marine = {
  src: "https://images.unsplash.com/photo-1583222234452-4a923d5c8f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};

const serviceHighlights = [
  {
    label: "Ocean projects",
    value: "45+",
    detail: "Sustainable marine initiatives across coastal regions worldwide.",
  },
  {
    label: "Coastal communities",
    value: "120",
    detail: "Partnering with local stakeholders for inclusive blue growth.",
  },
  {
    label: "Renewable capacity",
    value: "2.8 GW",
    detail: "Ocean-based renewable energy potential identified and developed.",
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

const BlueEconomy = () => {
  const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
    {
      title: "Blue Economy Strategy Development",
      description:
        "Comprehensive strategic planning for sustainable ocean-based economic growth and resource utilization through stakeholder engagement.",
      icon: FaGlobe,
    },
    {
      title: "Ocean-Based Renewable Energy",
      description:
        "Development of offshore wind, wave, tidal, and ocean thermal energy conversion systems for clean power generation.",
      icon: FaWind,
    },
    {
      title: "Climate–Wave Energy Nexus",
      description:
        "Innovative approaches combining climate adaptation with wave energy harvesting for coastal resilience and energy security.",
      icon: FaWaveSquare,
    },
    {
      title: "Sustainable Marine Aquaculture",
      description:
        "Integrated multi-trophic aquaculture systems combining fish farming with seaweed cultivation for zero-waste production.",
      icon: FaFish,
    },
    {
      title: "Coastal Protection Systems",
      description:
        "Nature-based and engineered solutions for coastal resilience combining wave energy converters with shoreline protection.",
      icon: FaWater,
    },
  ];

  const sampleProjects = [
    {
      title: "Offshore Wind Farm Development",
      description: "Large-scale offshore wind energy project delivering clean power to coastal communities while creating marine habitat enhancement opportunities.",
      image: {
        src: "https://images.unsplash.com/photo-1759899343917-4a9fef6c1548?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Offshore wind turbines",
      icon: FaWind,
      region: "North Atlantic Coast",
      impact: "Clean energy & jobs",
      highlights: [
        "Installed 200 MW capacity",
        "Powered 50,000+ homes",
        "Created 300+ local jobs",
      ],
    },
    {
      title: "Sustainable Marine Aquaculture",
      description: "Integrated multi-trophic aquaculture system combining fish farming with seaweed cultivation for zero-waste production.",
      image: {
        src: "https://images.unsplash.com/photo-1572015242290-d9132e2b6d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Marine aquaculture farm",
      icon: FaFish,
      region: "Pacific Island Nations",
      impact: "Food security & economy",
      highlights: [
        "Produced 1,200 tons annually",
        "Reduced import dependency by 40%",
        "Empowered 150 local farmers",
      ],
    },
    {
      title: "Coastal Wave Energy System",
      description: "Pilot wave energy converter installation providing renewable power while enhancing coastal protection through innovative design.",
      image: {
        src: "https://images.unsplash.com/photo-1747019943186-9424f30b65ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Wave energy converters",
      icon: FaWaveSquare,
      region: "Mediterranean Coast",
      impact: "Energy resilience",
      highlights: [
        "Generated 5 MW clean power",
        "Protected 3km of coastline",
        "Demonstrated 95% uptime",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Blue Economy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/blue-economy" },
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
          src={ocean.src}
          alt="Blue economy ocean landscape"
          width={ocean.width}
          height={ocean.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/70 via-cyan-900/50 to-blue-950/30" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <FaWater className="text-base" aria-hidden /> Blue Economy
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Harnessing ocean resources for sustainable economic growth and climate resilience.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            We develop innovative blue economy solutions that balance economic development with ocean conservation, creating sustainable pathways for coastal communities and marine ecosystems.
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
              <FaShip className="text-base" aria-hidden /> Maritime Innovation
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
              <FaSolarPanel className="text-base" aria-hidden /> Renewable Energy
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
              <FaAnchor className="text-base" aria-hidden /> Coastal Resilience
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
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-cyan-200/30 to-blue-500/30 text-primary"
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
              We partner with governments, coastal communities, and ocean industries
              to develop sustainable blue economy strategies that balance economic
              growth with marine ecosystem protection and climate resilience.
            </p>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              {[
                "Stakeholder engagement frameworks",
                "Policy analysis and design",
                "Economic impact assessments",
                "Institutional capacity building",
                "Implementation roadmaps",
                "Monitoring and evaluation systems",
                "Site selection and feasibility studies",
                "Grid integration analysis",
                "Environmental impact assessments",
                "Technology deployment strategies",
                "Investment facilitation",
                "Regulatory compliance support",
                "Wave energy feasibility studies",
                "Coastal engineering solutions",
                "Climate vulnerability analysis",
                "Integrated adaptation planning",
                "Technology demonstration projects",
                "Performance monitoring frameworks",
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
                src={ocean.src}
                alt="Blue economy framework"
                width={ocean.width}
                height={ocean.height}
                className="h-full w-full object-cover aspect-square"
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
            Discover how our blue economy solutions are creating sustainable ocean-based economic opportunities while protecting marine ecosystems and coastal communities.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-2"
          variants={staggerContainer}
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
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
                <div className="flex flex-wrap gap-3 text-xs font-medium text-blue-700">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">
                    <FaShip className="text-sm" aria-hidden /> {project.region}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">
                    <FaRecycle className="text-sm" aria-hidden /> {project.impact}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={scaleIn}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/15 via-cyan-200/30 to-blue-600/30 text-blue-600">
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
                          className="mt-0.5 text-blue-500"
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

export default BlueEconomy;
