"use client";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaTree,
  FaWater,
  FaLeaf,
  FaSeedling,
  FaMountain,
  FaCheckCircle,
  FaCloud,
  FaHeart,
  FaRecycle,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const nature = {
  src: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  width: 1920,
  height: 1080,
};
const wetlands = {
  src: "https://plus.unsplash.com/premium_photo-1695715587842-3855d52ac461?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 800,
  height: 600,
};
const coastal = {
  src: "https://images.unsplash.com/photo-1548484352-ea579e5233a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};
const urban = {
  src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width: 800,
  height: 600,
};

const serviceHighlights = [
  {
    label: "Restoration projects",
    value: "120+",
    detail:
      "Forest, wetland, and coastal systems renewed over the past decade.",
  },
  {
    label: "Communities supported",
    value: "85",
    detail:
      "Partnerships delivering equitable, locally led stewardship models.",
  },
  {
    label: "Carbon secured",
    value: "4.2 MtCO₂e",
    detail: "Measured through verified blue and green carbon programs.",
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

const NatureBasedSolution = () => {
  const capabilityHighlights: { title: string; description: string; icon: IconType }[] = [
    {
      title: "Ecosystem Restoration",
      description:
        "Comprehensive restoration of degraded ecosystems to enhance biodiversity and resilience through native species reforestation and habitat connectivity.",
      icon: FaTree,
    },
    {
      title: "Climate Resilience",
      description:
        "Nature-based approaches to climate adaptation and mitigation through blue carbon ecosystems and green infrastructure design.",
      icon: FaCloud,
    },
    {
      title: "Sustainable Land Management",
      description:
        "Integrated land use planning that balances development with conservation priorities through agroecological practices and watershed management.",
      icon: FaLeaf,
    },
    {
      title: "Community Stewardship",
      description:
        "Empowering local communities through sustainable livelihood programs and ecosystem service valuation for long-term conservation success.",
      icon: FaHeart,
    },
    {
      title: "Carbon Sequestration",
      description:
        "Measuring and enhancing carbon storage in forest, wetland, and coastal ecosystems through verified monitoring methodologies.",
      icon: FaRecycle,
    },
  ];

  const sampleProjects = [
    {
      title: "Mangrove Restoration for Coastal Protection",
      description:
        "Large-scale mangrove ecosystem restoration project protecting 250km of coastline, enhancing biodiversity, and providing sustainable livelihoods for coastal communities through nature-based flood defense systems.",
      image: {
        src: "https://images.unsplash.com/photo-1746474078818-63ed9aed7fd7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Mangrove restoration",
      icon: FaWater,
      region: "Southeast Asia",
      impact: "Coastal resilience & livelihoods",
      highlights: [
        "Restored 15,000 hectares of mangrove forests",
        "Protected 120 coastal communities from storm surges",
        "Created 3,000 sustainable livelihood opportunities",
      ],
    },
    {
      title: "Urban Green Infrastructure Network",
      description:
        "Comprehensive green infrastructure development integrating parks, green roofs, and urban forests to reduce heat island effects, improve air quality, and enhance urban biodiversity across metropolitan areas.",
      image: {
        src: "https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Urban green infrastructure",
      icon: FaMountain,
      region: "Major Metropolitan Areas",
      impact: "Urban climate adaptation",
      highlights: [
        "Developed 500+ hectares of urban green spaces",
        "Reduced urban temperatures by 2-3°C",
        "Improved air quality for 2M+ residents",
      ],
    },
    {
      title: "Wetland Rehabilitation for Water Security",
      description:
        "Strategic wetland restoration project enhancing water purification, flood regulation, and groundwater recharge while creating critical habitat for endangered species and supporting traditional livelihoods.",
      image: {
        src: "https://images.unsplash.com/photo-1710259060999-a89800986e75?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      alt: "Wetland rehabilitation",
      icon: FaSeedling,
      region: "River Basin Systems",
      impact: "Water security & biodiversity",
      highlights: [
        "Rehabilitated 8,000 hectares of wetlands",
        "Enhanced water storage capacity by 40M cubic meters",
        "Recovered habitat for 50+ threatened species",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Nature-Based Solutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise/nature-based-solution" },
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
          src={nature.src}
          alt="Nature-based solutions landscape"
          width={nature.width}
          height={nature.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/70 to-blue-950/30" />
        <motion.div
          className="relative max-w-[1500px] mx-auto px-4 py-16 lg:py-20"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide "
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <FaLeaf className="text-base" aria-hidden /> Nature-Based Solutions
          </motion.div>
          <motion.h1
            className="mt-6 text-3xl max-w-5xl font-bold leading-tight sm:text-4xl md:text-5xl"
            variants={fadeInUp}
            whileInView={{
              transition: { duration: 0.4 },
            }}
          >
            Harnessing nature's power to build resilient ecosystems and
            sustainable communities.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={slideInLeft}
          >
            We design and implement nature-based solutions that address climate
            change, biodiversity loss, and community resilience through
            ecosystem restoration and sustainable landscape management.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm font-medium "
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
              <FaTree className="text-base" aria-hidden /> Ecosystem Restoration
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
              <FaCloud className="text-base" aria-hidden /> Climate Resilience
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
              <FaHeart className="text-base" aria-hidden /> Biodiversity
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
          {serviceHighlights.map((highlight) => (
            <motion.div
              key={highlight.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              variants={scaleIn}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-emerald-400 to-sky-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.p
                className="text-3xl font-semibold text-slate-900"
                whileInView={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.6, delay: 0.2 },
                }}
              >
                {highlight.value}
              </motion.p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">{highlight.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{highlight.detail}</p>
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
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-emerald-200/30 to-emerald-500/30 text-primary"
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
              We partner with communities, governments, and organizations to
              deliver comprehensive nature-based solutions from assessment to
              implementation and long-term monitoring.
            </p>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              {[
                "Ecosystem restoration and rehabilitation",
                "Biodiversity assessment and monitoring",
                "Climate resilience planning and adaptation",
                "Sustainable land management practices",
                "Carbon sequestration measurement and verification",
                "Community-based natural resource management",
                "Watershed management and restoration",
                "Coastal zone protection and rehabilitation",
                "Urban green infrastructure development",
                "Nature-based flood and erosion control",
                "Forest landscape restoration and agroforestry",
                "Wetland creation and enhancement projects",
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
                src={wetlands.src}
                alt="Wetland restoration project"
                width={wetlands.width}
                height={wetlands.height}
                className="h-full w-full object-cover"
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
            Discover how our nature-based solutions are creating resilient
            ecosystems, protecting communities, and restoring biodiversity
            across diverse landscapes and seascapes.
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
                    <FaMountain className="text-sm" aria-hidden /> {project.region}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <FaRecycle className="text-sm" aria-hidden /> {project.impact}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={scaleIn}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-primary/20 to-primary/30 text-primary">
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
                          className="mt-0.5 text-emerald-500"
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

export default NatureBasedSolution;