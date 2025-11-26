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
  src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
  const natureServices = [
    {
      title: "Ecosystem Restoration",
      icon: FaTree,
      description:
        "Comprehensive restoration of degraded ecosystems to enhance biodiversity and resilience.",
      badge: "Ecological renewal",
      focusAreas: [
        "Forest landscape restoration",
        "Wetland rehabilitation",
        "Mangrove ecosystem recovery",
      ],
      items: [
        "Native species reforestation",
        "Habitat connectivity enhancement",
        "Soil health improvement",
        "Invasive species management",
        "Biodiversity monitoring",
        "Community stewardship programs",
      ],
    },
    {
      title: "Climate Resilience",
      icon: FaCloud,
      description:
        "Nature-based approaches to climate adaptation and mitigation through ecosystem services.",
      badge: "Climate adaptation",
      focusAreas: [
        "Carbon sequestration",
        "Natural flood management",
        "Urban heat island mitigation",
      ],
      items: [
        "Blue carbon ecosystems",
        "Green infrastructure design",
        "Nature-based flood defenses",
        "Climate-smart agriculture",
        "Carbon accounting methodologies",
        "Adaptive management frameworks",
      ],
    },
    {
      title: "Sustainable Land Management",
      icon: FaLeaf,
      description:
        "Integrated land use planning that balances development with conservation priorities.",
      badge: "Landscape planning",
      focusAreas: [
        "Sustainable agriculture",
        "Watershed management",
        "Coastal zone management",
      ],
      items: [
        "Agroecological practices",
        "Soil conservation techniques",
        "Water resource management",
        "Landscape connectivity planning",
        "Sustainable forestry practices",
        "Ecosystem service valuation",
      ],
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
        className="bg-slate-50 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="mx-auto content-width px-4">
          <motion.div variants={fadeInUp}>
            <SectionHeading heading="Nature-Based Solutions" />
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We partner with communities, governments, and organizations to
              implement nature-based programs that interweave ecological
              restoration, climate resilience, and long-term stewardship.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]"
            variants={staggerContainer}
          >
            <div className="col-span-2">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/5 to-primary/3 p-8 shadow-sm"
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 30px 60px rgba(37,99,235,0.15)",
                }}
              >
                <div
                  className="absolute inset-y-0 right-0 hidden w-1/4 bg-linear-to-b from-primary/10 via-transparent to-transparent lg:block"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Integrated delivery model
                  </div>
                  <h3 className="text-2xl font-semibold text-primary sm:text-3xl">
                    From diagnostic insight to community stewardship, our teams
                    guide full project lifecycles.
                  </h3>
                  <p className="text-sm leading-relaxed text-primary/80 sm:text-base">
                    We assemble multidisciplinary expertise—ecologists,
                    landscape architects, finance specialists, and community
                    facilitators—to unlock nature-based pathways tailored to
                    each landscape.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {serviceHighlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-sm"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          {highlight.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-primary">
                          {highlight.value}
                        </p>
                        <p className="mt-2 text-xs text-primary/70">
                          {highlight.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <ul className="grid gap-3 text-sm text-primary/80 sm:grid-cols-2">
                    {[
                      "Landscape diagnostics",
                      "Participatory co-design",
                      "Implementation roadmaps",
                      "Performance monitoring",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="space-y-6 col-span-2"
              variants={staggerContainer}
            >
              {natureServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-primary/20 to-primary/30 text-primary"
                      whileHover={{ rotate: 180, scale: 1.05 }}
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
                        <FaLeaf className="text-sm" aria-hidden /> {point}
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
              Discover how our nature-based solutions are creating resilient
              ecosystems, protecting communities, and restoring biodiversity
              across diverse landscapes and seascapes.
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
                  whileHover={{ y: -6 }}
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-5 ${
                      reversed ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div
                      className="relative h-full overflow-hidden lg:col-span-2"
                      whileHover={{ scale: 1.02 }}
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
                          <FaMountain className="text-sm" aria-hidden />{" "}
                          {project.region}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                          <FaRecycle className="text-sm" aria-hidden />{" "}
                          {project.impact}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-primary/20 to-primary/30 text-primary">
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
                                className="mt-0.5 text-emerald-500"
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

export default NatureBasedSolution;
