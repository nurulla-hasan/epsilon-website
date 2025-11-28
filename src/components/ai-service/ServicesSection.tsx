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
      "We design, build, and implement AI-driven tools that accelerate digital transformation and solve specific business needs.",
    icon: RiRobot2Line,
  },
  {
    title: "AI Powered Predictive Analytics Tools",
    description:
      "Automate and enhance data analysis with AI so you can forecast, plan, and respond to change with confidence.",
    icon: RiBarChart2Line,
  },
  {
    title: "AI Model Assessment",
    description:
      "Comprehensive audits that optimize model performance, accuracy, and compliance through detailed evaluation and tuning.",
    icon: RiShieldStarLine,
  },
  {
    title: "Generative AI Consulting",
    description:
      "Strategy, prototyping, and implementation support to leverage generative AI for innovation, efficiency, and growth.",
    icon: TbBrain,
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Automate inspections, monitoring, and decision-making with image recognition, object detection, and video analytics.",
    icon: TbDeviceVisionPro,
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Text and speech processing services for chatbots, translation, voice interfaces, and insight extraction from unstructured data.",
    icon: PiChatsCircleLight,
  },
  {
    title: "Custom AI/ML Development",
    description:
      "Tailored AI/ML models and integrations—from predictive analytics to NLP—that align with your infrastructure and goals.",
    icon: RiCpuLine,
  },
  {
    title: "Real-Time Data Processing and Automation",
    description:
      "Collect, analyze, and act on data as it is generated so teams can make rapid, informed decisions when it matters.",
    icon: PiDatabaseLight,
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
            How we help you drive value with AI—from solution development and GenAI consulting to resilience analytics that
            keep critical systems adaptive.
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
