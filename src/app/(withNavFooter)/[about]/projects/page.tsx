"use client"
import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/Shared/SectionHeading";
import { motion, Variants } from "framer-motion";

const Projects = () => {
  const projects = [
    "Access to Energy Innovation for Rural Communities",
    "National Nature, People, and Climate (NPC) Investment Plan (IP)",
    "Mini-Grid Tariff and Regulation",
    "Regional Blue Economy Governance Framework and Implementation Plan",
    "Africa Blue Economy Strategy Development, Governance Framework, and Implementation Plan",
    "Floating Photovoltaic (FPV) Applications System Design",
    "National Blue Economy Strategy",
    "Continental Regulatory Framework for Energy Private Investment in Africa",
    "Internationally Transferred Mitigation Outcomes (ITMO) of Article 6 of the Paris Agreement",
    "Multi-Hazard Contingency Plan Development",
    "Accelerating the Transformational Shift to a Low-Carbon Economy",
    "Climate Mitigation and Adaptation Project Proposals for Green Climate Fund (GCF) and Adaptation Fund (AF)",
    "National Communications to the United Nations Framework Convention on Climate Change (UNFCCC)",
    "Renewable Energy Powered Systems",
    "Energy Efficient Product’s Market Performance Algorithm",
    "Qualitative Resilience Measurement Conceptual Framework",
    "Climate Change Risk Profile Development",
    "Energy Skills Gap Analysis, Energy Skills Development Strategy and Profile Development",
    "Global Circulation Model Data Output Accessibility to Non-Climate Researchers and Policy Makers",
    "Mesoscale Wind Resources Assessment Study",
  ];

  const stats = [
    { label: "Countries", value: "18", detail: "Across Africa & Asia" },
    { label: "Years", value: "15+", detail: "of delivery" },
    { label: "Impact", value: "$3B", detail: "in mobilized funding" },
  ];

  const focusAreas = [
    "Climate & Energy",
    "Blue Economy",
    "Policy Advisory",
    "Resilience Analytics",
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <div>
      <PageTitle
        pageHeading="Our Impactful Projects & Initiatives"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Sustainable energy and climate action concept"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-black/30 to-black/50" />{" "}
        </div>

        <div className="relative mx-auto max-w-[1500px] px-4 py-8">
          <div className="max-w-4xl">
            <motion.div
            className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4 text-white" variants={fadeInUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Designing resilient futures across climate, energy, and blue
                economy.
              </h2>
              <p className="text-base text-white/90 leading-relaxed max-w-2xl">
                Explore our portfolio of transformative projects in sustainable
                development.
              </p>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
              >
                {focusAreas.map((item) => (
                  <motion.span
                    key={item}
                    className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary/90"
                    variants={fadeInUp}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="grid gap-3" variants={staggerContainer}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center justify-between rounded-xl bg-white/80 backdrop-blur-sm p-3"
                  variants={fadeInUp}
                >
                  <div>
                    <p className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 text-right">
                    {stat.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2 text-xs"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {["Governments", "Banks", "Utilities", "Labs"].map((tag) => (
              <motion.span
                key={tag}
                className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1"
                variants={fadeInUp}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto content-width px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[1.45fr,0.9fr]">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-wrap items-center justify-between gap-4 pb-6"
              variants={fadeInUp}
            >
              <SectionHeading heading="PROJECT PORTFOLIO" />
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-8 space-y-6" variants={staggerContainer}>
              <motion.p className="text-slate-600 leading-relaxed" variants={fadeInUp}>
                Our portfolio demonstrates hands-on delivery across climate
                adaptation, energy access, and blue economy growth. Each
                engagement is co-designed with local partners and supported by
                rigorous analytics, policy insight, and implementation support.
              </motion.p>

              <motion.div className="relative mt-10" variants={fadeInUp}>
                <div className="pointer-events-none absolute left-3 top-0 bottom-0 hidden sm:block">
                  <div className="h-full w-px bg-linear-to-b from-primary/20 via-slate-200 to-transparent" />
                </div>

                <motion.div className="space-y-6" variants={staggerContainer}>
                  {projects.map((item, index) => (
                    <motion.div
                      key={item}
                      className="group relative rounded-3xl bg-slate-50/80 px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-white sm:pl-14"
                      variants={fadeInUp}
                    >
                      <div className="absolute left-3 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary sm:block" />
                      <div className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-slate-800 font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.article>

          <motion.aside
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              className="rounded-3xl bg-linear-to-br from-white to-blue-50/70 p-6"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 20 7-12-7 4-7-4 7 12z" />
                    <path d="M12 4h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    Impact Areas
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    Integrated advisory focus
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Multidisciplinary teams blend policy, engineering, and finance
                to accelerate resilient development programs.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Climate Finance Facility Design",
                  "Energy Transition Roadmaps",
                  "Blue Economy Implementation",
                  "Disaster Risk Preparedness",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="text-primary">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl bg-white overflow-hidden border border-slate-100"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Team collaboration meeting"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent" />
                </div>
                <motion.div className="p-6 space-y-4 flex flex-col" variants={staggerContainer}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                      Partner with us
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900 mt-1">
                      Co-create your next flagship initiative
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 grow">
                    We translate climate, energy, and resilience goals into
                    actionable programs that unlock finance and community
                    benefits.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Program Design", "Policy Labs", "Innovation Pilots", "Analytics"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full rounded-xl border-2 border-primary/20 px-4 py-2.5 text-sm font-semibold text-primary/90 hover:bg-primary/5 transition-colors mt-2">
                    Explore collaboration
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default Projects;
