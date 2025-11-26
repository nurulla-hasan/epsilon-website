"use client";

import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form, Input, Select } from "antd";
import type { IconType } from "react-icons";
import {
  FaWater,
  FaSolarPanel,
  FaCheckCircle,
  FaLeaf,
  FaBolt,
  FaMicroscope,
} from "react-icons/fa";
import { AnimatePresence, motion, Variants } from "framer-motion";

const heroImage = {
  src: "https://images.unsplash.com/photo-1760643731219-2e44fddef615?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width: 1920,
  height: 1080,
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

type Solution = {
  title: string;
  description: string;
  icon: IconType;
  badge: string;
  highlights: string[];
};

type Innovation = {
  title: string;
  description: string;
  icon: IconType;
  image: { src: string; width: number; height: number };
  alt: string;
  features: string[];
};

type Metric = {
  label: string;
  value: string;
  subtext: string;
};

const solutions: Solution[] = [
  {
    title: "Hybrid Renewable Powered SWRO",
    description:
      "Grid-synchronized desalination facilities that blend solar PV, wind, and storage to deliver resilient potable water.",
    icon: FaWater,
    badge: "Desalination",
    highlights: [
      "Full process engineering",
      "Energy optimization modeling",
      "Demand responsive operation",
    ],
  },
  {
    title: "Floating Intake & Pretreatment",
    description:
      "Modular floating platforms with pre-filtration, aeration, and monitoring to protect fragile coastal ecosystems.",
    icon: FaLeaf,
    badge: "Ecosystem",
    highlights: [
      "Low-impact intake structures",
      "Real-time biofouling control",
      "Water quality analytics",
    ],
  },
  {
    title: "Intelligent O&M Command",
    description:
      "Digital twin dashboards that streamline operations, predict maintenance, and coordinate emergency response.",
    icon: FaMicroscope,
    badge: "Operations",
    highlights: [
      "Predictive maintenance",
      "Remote performance insights",
      "Lifecycle cost reduction",
    ],
  },
];

const innovations: Innovation[] = [
  {
    title: "West Indies Solar-Wind SWRO",
    description:
      "World Bank-supported resilient desalination plant delivering drinking water to island communities with renewable integration.",
    icon: FaWater,
    image: {
      src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1400&auto=format&fit=crop",
      width: 1400,
      height: 1000,
    },
    alt: "Desalination facility near the coast",
    features: [
      "Grid-interactive 500 kW PV",
      "5,000 m³/day potable supply",
      "Operational since 2022",
      "Community training programs",
    ],
  },
  {
    title: "Floating SWRO Demonstrator",
    description:
      "Self-contained floating SWRO and storage barge powering aquaculture and coastal villages with zero diesel backup.",
    icon: FaSolarPanel,
    image: {
      src: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1400&auto=format&fit=crop",
      width: 1400,
      height: 1000,
    },
    alt: "Floating solar panels and water infrastructure",
    features: [
      "Hybrid PV + battery microgrid",
      "Floating intake aeration",
      "Modular <250 kW footprint",
      "Environmental monitoring suite",
    ],
  },
];

const metrics: Metric[] = [
  {
    label: "Energy Offset",
    value: "45%",
    subtext: "average reduction in diesel reliance",
  },
  {
    label: "Water Output",
    value: "3.1M+",
    subtext: "liters produced annually per site",
  },
  {
    label: "CO₂ Avoided",
    value: "1.8kt",
    subtext: "emissions avoided across deployments",
  },
];

const Swro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log("SWRO brochure request:", values);
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Renewable Energy Powered SWRO Systems"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Data Analytics Tools", href: "/data-analytics-tools" },
        ]}
      />

      <motion.section
        className="relative isolate overflow-hidden text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <Image
          src={heroImage.src}
          alt="Solar powered desalination facility"
          width={heroImage.width}
          height={heroImage.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/60 to-primary/10" />

        <motion.div
          className="relative mx-auto flex max-w-[1500px] flex-col gap-6 px-4 py-16 md:flex-row md:items-end md:gap-12 lg:py-24"
          variants={staggerContainer}
        >
          <motion.div className="max-w-3xl" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              <FaWater aria-hidden className="text-base" /> SWRO Innovation
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Decarbonized seawater reverse osmosis systems engineered for islands, coasts, and remote communities.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              Epsilon Innovation Group designs renewable-powered desalination ecosystems that secure climate-resilient water supplies while protecting fragile marine environments.
            </p>
          </motion.div>

          <motion.div
            className="grid w-full gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm backdrop-blur-sm sm:grid-cols-3 md:max-w-xl"
            variants={staggerContainer}
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} variants={scaleIn} className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-slate-200/80">
                  {metric.label}
                </p>
                <p className="text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="text-xs text-slate-200/80">{metric.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-linear-to-br from-blue-50 via-white to-primary/5 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="mx-auto content-width px-4">
          <motion.div className="max-w-3xl" variants={fadeInUp}>
            <SectionHeading heading="Integrated SWRO Solutions" />
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              From feasibility to commissioning, we pair desalination engineering with renewable energy modeling to deliver dependable, low-carbon water infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
          >
            {solutions.map((solution) => (
              <motion.article
                key={solution.title}
                className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <solution.icon aria-hidden className="text-xl" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5">
                        {solution.badge}
                      </span>
                      <span className="text-primary/70">Capability</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {solution.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                      <FaCheckCircle aria-hidden className="mt-0.5 text-primary" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-primary/80">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                    <FaSolarPanel aria-hidden className="text-sm" /> Renewable Integration
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                    <FaBolt aria-hidden className="text-sm" /> Reliability
                  </span>
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
          <motion.div className="max-w-2xl" variants={fadeInUp}>
            <SectionHeading heading="Deployment Highlights" />
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Our resilient desalination portfolio proves renewable-powered water treatment works at scale—delivering safe drinking water, protecting ecosystems, and strengthening communities.
            </p>
          </motion.div>

          <motion.div className="mt-12 space-y-10" variants={staggerContainer}>
            {innovations.map((innovation, index) => {
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={innovation.title}
                  className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  variants={fadeInUp}
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-5 ${
                      reversed ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div className="relative h-full min-h-[260px] overflow-hidden lg:col-span-2" variants={fadeIn}>
                      <Image
                        src={innovation.image.src}
                        alt={innovation.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" aria-hidden />
                    </motion.div>

                    <div className="flex flex-col justify-between gap-6 p-8 lg:col-span-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <innovation.icon aria-hidden className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {innovation.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {innovation.description}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-100/70 p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Project Outcomes
                        </p>
                        <ul className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                          {innovation.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <FaCheckCircle aria-hidden className="mt-0.5 text-primary" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/contact-us"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                        >
                          <FaMicroscope aria-hidden className="text-base" /> Discuss a Project
                        </Link>
                        <Link
                          href="/projects"
                          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
                        >
                          <FaLeaf aria-hidden className="text-base" /> Explore Case Studies
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-linear-to-br from-primary/7 via-blue-50 to-white py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="mx-auto content-width px-4">
          <motion.div
            className="flex flex-col items-center gap-6 rounded-3xl border border-primary/15 bg-white p-10 text-center shadow-lg"
            variants={scaleIn}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <FaWater aria-hidden className="text-base" /> Partner with Us
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Ready to build a climate-resilient SWRO network?
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Our multidisciplinary team guides you through site selection, energy modeling, permitting, financing, and commissioning to deliver reliable, sustainable water supply.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                <FaBolt aria-hidden className="text-base" /> Book a Consultation
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
              >
                <FaCheckCircle aria-hidden className="text-base" /> Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-200 flex items-center justify-center bg-slate-900/70 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} aria-hidden />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="swro-brochure-modal"
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative z-210 w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-sm font-semibold text-slate-400 transition-colors hover:text-slate-700"
              >
                Close
              </button>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FaCheckCircle aria-hidden className="text-2xl" />
                </div>
                <h2 id="swro-brochure-modal" className="text-2xl font-semibold text-slate-900">
                  Request the SWRO Technology Brochure
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Provide your details to receive detailed specifications, case studies, and deployment options for our renewable-powered SWRO systems.
                </p>
              </div>
              <Form
                form={form}
                layout="vertical"
                name="swro-brochure"
                onFinish={handleSubmit}
                requiredMark={false}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Form.Item
                    name="firstName"
                    label={<span className="text-sm font-medium text-slate-700">First Name</span>}
                    rules={[{ required: true, message: "Please enter your first name" }]}
                  >
                    <Input size="large" placeholder="Enter first name" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    label={<span className="text-sm font-medium text-slate-700">Last Name</span>}
                    rules={[{ required: true, message: "Please enter your last name" }]}
                  >
                    <Input size="large" placeholder="Enter last name" />
                  </Form.Item>
                </div>
                <Form.Item
                  name="email"
                  label={<span className="text-sm font-medium text-slate-700">Email Address</span>}
                  rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
                >
                  <Input size="large" placeholder="name@email.com" />
                </Form.Item>
                <Form.Item
                  name="company"
                  label={<span className="text-sm font-medium text-slate-700">Company Name</span>}
                  rules={[{ required: true, message: "Please enter your company name" }]}
                >
                  <Input size="large" placeholder="Enter company name" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label={<span className="text-sm font-medium text-slate-700">Country</span>}
                  rules={[{ required: true, message: "Please select your country" }]}
                >
                  <Select
                    size="large"
                    placeholder="Select a country"
                    options={[
                      { value: "usa", label: "United States" },
                      { value: "canada", label: "Canada" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "australia", label: "Australia" },
                      { value: "india", label: "India" },
                    ]}
                  />
                </Form.Item>
                <p className="text-xs text-slate-500 mb-1">
                  By submitting this form you agree to our {" "}
                  <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <Form.Item className="mb-0 mt-4">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Submit &amp; Receive Brochure
                  </button>
                </Form.Item>
              </Form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Swro;
