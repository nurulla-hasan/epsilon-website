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
  const blueEconomyServices = [
    {
      title: "Blue Economy Strategy Development",
      icon: FaGlobe,
      description: "Comprehensive strategic planning for sustainable ocean-based economic growth and resource utilization.",
      badge: "Strategic planning",
      focusAreas: [
        "National blue economy frameworks",
        "Regional ocean governance",
        "Sector integration policies",
      ],
      items: [
        "Stakeholder engagement frameworks",
        "Policy analysis and design",
        "Economic impact assessments",
        "Institutional capacity building",
        "Implementation roadmaps",
        "Monitoring and evaluation systems",
      ],
    },
    {
      title: "Ocean-Based Renewable Energy",
      icon: FaWind,
      description: "Development of offshore wind, wave, tidal, and ocean thermal energy conversion systems.",
      badge: "Renewable energy",
      focusAreas: [
        "Offshore wind farms",
        "Wave energy converters",
        "Tidal stream systems",
      ],
      items: [
        "Site selection and feasibility",
        "Grid integration studies",
        "Environmental impact assessments",
        "Technology deployment strategies",
        "Investment facilitation",
        "Regulatory compliance support",
      ],
    },
    {
      title: "Climate–Wave Energy Nexus",
      icon: FaWaveSquare,
      description: "Innovative approaches combining climate adaptation with wave energy harvesting for coastal resilience.",
      badge: "Climate adaptation",
      focusAreas: [
        "Coastal protection systems",
        "Energy resilience planning",
        "Climate risk assessments",
      ],
      items: [
        "Wave energy feasibility studies",
        "Coastal engineering solutions",
        "Climate vulnerability analysis",
        "Integrated adaptation planning",
        "Technology demonstration projects",
        "Performance monitoring frameworks",
      ],
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
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Blue Economy Services" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We partner with governments, communities, and industry to develop comprehensive blue economy strategies that unlock sustainable ocean-based economic opportunities.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]"
            variants={staggerContainer}
          >
            <div className="col-span-2">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-blue-500/10 via-cyan-400/10 to-blue-500/5 p-8 shadow-sm"
                variants={fadeInUp}
                // whileHover={{
                //   y: -6,
                //   boxShadow: "0 30px 60px rgba(15,118,110,0.15)",
                // }}
              >
                <div
                  className="absolute inset-y-0 right-0 hidden w-1/4 bg-linear-to-b from-blue-500/10 via-transparent to-transparent lg:block"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Integrated ocean management
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-950 sm:text-3xl">
                    From policy frameworks to project implementation, we guide comprehensive blue economy development.
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-900/80 sm:text-base">
                    We assemble multidisciplinary expertise—marine scientists, policy specialists, energy engineers, and community facilitators—to unlock sustainable ocean-based economic pathways.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {serviceHighlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-sm"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                          {highlight.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-blue-900">
                          {highlight.value}
                        </p>
                        <p className="mt-2 text-xs text-blue-900/70">
                          {highlight.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <ul className="grid gap-3 text-sm text-blue-950/80 sm:grid-cols-2">
                    {[
                      "Ocean resource assessment",
                      "Stakeholder engagement",
                      "Policy framework design",
                      "Project implementation support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FaCheckCircle
                          className="text-blue-500"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            <motion.div className="space-y-6 col-span-2" variants={staggerContainer}>
              {blueEconomyServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  variants={fadeInUp}
                  // whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/15 via-cyan-200/30 to-blue-600/30 text-blue-600"
                      // whileHover={{ rotate: 180, scale: 1.05 }}
                    >
                      <service.icon className="text-xl" aria-hidden />
                    </motion.div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                        <span className="rounded-full bg-blue-500/10 px-2 py-0.5">
                          {service.badge}
                        </span>
                        <span className="text-blue-500/70">
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
                        className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600"
                      >
                        <FaWater className="text-sm" aria-hidden /> {point}
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
                          className="mt-0.5 text-blue-500"
                          aria-hidden
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
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
              Discover how our blue economy solutions are creating sustainable ocean-based economic opportunities while protecting marine ecosystems and coastal communities.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="mt-12 space-y-10">
            {sampleProjects.map((project, index) => {
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
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
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-blue-700">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">
                          <FaShip className="text-sm" aria-hidden />{" "}
                          {project.region}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">
                          <FaRecycle className="text-sm" aria-hidden />{" "}
                          {project.impact}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/15 via-cyan-200/30 to-blue-600/30 text-blue-600">
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
                                className="mt-0.5 text-blue-500"
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

export default BlueEconomy;
