"use client";

import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import {
  RiRobot2Line,
  RiCpuLine,
  RiBarChart2Line,
  RiShieldStarLine,
} from "react-icons/ri";
import { TbBrain, TbDeviceVisionPro } from "react-icons/tb";
import { PiChatsCircleLight, PiDatabaseLight, PiCirclesThreeLight } from "react-icons/pi";
import { motion, type Variants } from "framer-motion";

const services: ServiceCardProps[] = [
  {
    title: "AI Solution Development",
    description:
      "End-to-end solutioning from discovery to deployment, blending domain expertise with trusted delivery playbooks.",
    icon: RiRobot2Line,
  },
  {
    title: "AI Powered Predictive Analytics Tools",
    description:
      "Scenario modeling, forecasting, and planning tools that anticipate change and support confident decision-making.",
    icon: RiBarChart2Line,
  },
  {
    title: "AI Model Assessment",
    description:
      "Model audits, bias detection, and governance frameworks to ensure transparency, compliance, and trust.",
    icon: RiShieldStarLine,
  },
  {
    title: "Generative AI Consulting",
    description:
      "Rapid prototyping of GenAI copilots, knowledge assistants, and content automation pipelines tailored to your teams.",
    icon: TbBrain,
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Image, video, and sensor analytics that accelerate inspections, monitoring, and mission-critical operations.",
    icon: TbDeviceVisionPro,
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Custom NLP models that extract signal from unstructured data, supporting risk, policy, and customer insight.",
    icon: PiChatsCircleLight,
  },
  {
    title: "Custom AI/ML Development",
    description:
      "Specialized models, APIs, and integrations engineered to align with your infrastructure and data realities.",
    icon: RiCpuLine,
  },
  {
    title: "Real-Time Data Processing and Automation",
    description:
      "Streaming architectures and automation workflows that unlock live intelligence for operations teams.",
    icon: PiDatabaseLight,
  },
  {
    title: "AI Powered Resilience Data Analytics",
    description:
      "Cross-sector resilience insights supported by dynamic dashboards and stress-tested data models.",
    icon: PiCirclesThreeLight,
    highlightList: [
      "Energy",
      "Agriculture",
      "Water",
      "Health",
      "Financial",
      "Coastal",
      "Transport",
      "Infrastructure",
    ],
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <motion.section
      id="ai-services"
      className="bg-slate-50 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="mx-auto content-width px-6">
        <motion.div className="text-center" variants={sectionVariant}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Capabilities</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Our AI Application Services</h2>
          <p className="mt-4 text-base text-slate-600">
            A flexible services stack that meets you where you are, whether you need discovery workshops, rapid pilots, or
            enterprise-scale deployment.
          </p>
        </motion.div>
        <motion.div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3" variants={gridVariant}>
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariant}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
