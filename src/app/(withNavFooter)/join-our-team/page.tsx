"use client";

import { useState } from "react";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaEnvelope,
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

const stats = [
  { label: "Projects delivered", value: "120+" },
  { label: "Countries represented", value: "18" },
  { label: "Expert partners", value: "60+" },
];

const careerPaths = [
  {
    title: "Consultant",
    description:
      "Lead complex engagements that accelerate climate, energy, and policy transformation.",
  },
  {
    title: "Intern / Fellow",
    description:
      "Grow alongside mentors while contributing to high-impact research and delivery.",
  },
  {
    title: "Strategic Partner",
    description:
      "Co-create programmes with our multidisciplinary teams to scale collective impact.",
  },
];

const values = [
  {
    title: "Integrity",
    description: "Do what is right, building confidence through accountability.",
    icon: FaShieldAlt,
  },
  {
    title: "Passion",
    description: "Act with empathy, listening closely to the communities we serve.",
    icon: FaHeart,
  },
  {
    title: "Innovation",
    description: "Stay curious, test bold ideas, and translate insight into action.",
    icon: FaLightbulb,
  },
  {
    title: "Together",
    description: "Create inclusive teams that draw strength from diverse perspectives.",
    icon: FaUsers,
  },
  {
    title: "Impact",
    description: "Focus on measurable outcomes that advance communities globally.",
    icon: FaGlobe,
  },
  {
    title: "Champion's Heart",
    description: "Bring optimism, resilience, and craft to every challenge.",
    icon: FaBriefcase,
  },
];

const expertise = [
  {
    title: "Climate & Resilience",
    items: [
      "Adaptation strategy",
      "Disaster risk reduction",
      "Climate finance",
      "Resilience analytics",
    ],
  },
  {
    title: "Energy & Technology",
    items: [
      "Low-carbon transitions",
      "Renewable energy planning",
      "Energy modelling",
      "Green infrastructure",
    ],
  },
  {
    title: "Policy & Inclusive Growth",
    items: [
      "Impact evaluation",
      "Gender-responsive design",
      "Urban resilience",
      "Public private partnerships",
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const JoinOurTeam = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownData = [
    {
      id: "climate-change",
      title: "Climate Change",
      description: "Lead comprehensive climate change initiatives across adaptation, mitigation, and resilience sectors.",
      items: [
        "Climate Change - Adaptation",
        "Climate Change - Agriculture",
        "Climate Change - Climate Finance",
        "Climate Change - Disaster Risk Reduction",
        "Climate Change - Economics",
        "Climate Change - Forestry",
        "Climate Change - Gender",
        "Climate Change - Health",
        "Climate Change - Mitigation",
        "Climate Change - Modeling/Scenario Analysis",
        "Climate Change - Resilience/Coastal Community",
        "Climate Change - Risk Management",
        "Climate Change - Strategy Development",
        "Climate Change - Transportation",
        "Climate Change - Urban Planning",
        "Climate Change - Water Resources",
        "Climate Change - Other",
      ],
    },
    {
      id: "energy",
      title: "Energy",
      description: "Drive sustainable energy transformation through technical expertise and strategic planning.",
      items: [
        "Energy - Audit",
        "Energy - Biomass",
        "Energy - Capacity Building",
        "Energy - Economic and Financial Analysis",
        "Energy - Efficiency",
        "Energy - Engineering/System Design",
        "Energy - Floating Photovoltaics (FPV)",
        "Energy - Feasibility Study",
        "Energy - Green Building",
        "Energy - Low Carbon Development",
        "Energy - Modeler",
        "Energy - Planning / Policy Analysis",
        "Energy - Resource Assessment",
        "Energy - Solar (PV)",
        "Energy - Wind Energy",
        "Energy - Other",
      ],
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "Leverage cutting-edge AI technologies to develop innovative solutions for complex challenges.",
      items: [
        "Artificial Intelligence — AI Researcher",
        "Artificial Intelligence — AI Software Development",
        "Artificial Intelligence — Data Engineer",
        "Artificial Intelligence — Data Science",
        "Artificial Intelligence — Data Visualization Engineer",
        "Artificial Intelligence — Cloud Computing Specialist",
        "Artificial Intelligence — Computer Vision",
        "Artificial Intelligence — Machine Learning Engineer",
        "Artificial Intelligence — Product Management",
        "Artificial Intelligence — Robotics Engineer",
        "Artificial Intelligence — UX Designer",
        "Artificial Intelligence — Other",
      ],
    },
  ];

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <div className="bg-white">
      <PageTitle
        pageHeading="Join Our Team"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Team collaborating"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />

        <div className="relative mx-auto flex max-w-[1500px] flex-col gap-10 px-4 py-20 text-white md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              Build with us
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Shape global solutions with a team that blends innovation and purpose.
            </h1>
            <p className="mt-4 text-base text-slate-100 sm:text-lg">
              Join consultants, researchers, designers, and strategists working across climate, energy, and inclusive development. We tackle complex challenges with curiosity, rigor, and integrity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => (window.location.href = "mailto:hr@epsiloninnovation.com")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <FaEnvelope className="text-lg" /> Apply now
              </button>
              <button
                onClick={() => (window.location.href = "mailto:info@epsiloninnovation.com")}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <FaHandshake className="text-lg" /> Partner with us
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/15 px-6 py-4 text-sm font-medium"
              >
                <p className="text-xs uppercase tracking-wide text-white/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dropdown Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="text-center"
          {...fadeIn}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Explore opportunities by expertise
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Click on each area below to discover specific roles and responsibilities
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {dropdownData.map((dropdown) => (
            <motion.div
              key={dropdown.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
              {...fadeIn}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button
                onClick={() => toggleDropdown(dropdown.id)}
                className="w-full px-8 py-6 text-left transition hover:bg-slate-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {dropdown.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {dropdown.description}
                    </p>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">
                      {openDropdown === dropdown.id ? "Show less" : "Show more"}
                    </span>
                    {openDropdown === dropdown.id ? (
                      <FaChevronUp className="text-primary transition-transform" />
                    ) : (
                      <FaChevronDown className="text-primary transition-transform" />
                    )}
                  </div>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openDropdown === dropdown.id ? "auto" : 0,
                  opacity: openDropdown === dropdown.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Key responsibilities
                    </h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {dropdown.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-primary/5 px-4 py-3"
                        >
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => (window.location.href = "mailto:hr@epsiloninnovation.com")}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        <FaEnvelope className="text-lg" />
                        Apply for {dropdown.title} roles
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.15fr_1fr]"
          {...fadeIn}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6">
            <SectionHeading heading="Why join Epsilon Innovation Group?" />
            <p className="text-base text-slate-600 sm:text-lg">
              We are a collaborative network of specialists who translate science and human insight into mission outcomes. Whether advancing coastal resilience, building data platforms, or financing the energy transition, we lead with empathy and measurable impact.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How to apply</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Email your CV (PDF or DOC) with your key area of technical expertise in the subject line to
              <span className="font-semibold text-primary"> hr@epsiloninnovation.com</span>.
              We review profiles on a rolling basis and reach out when we see a match.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                "Highlight project experience and regional knowledge",
                "Share languages, certifications, and sector strengths",
                "Let us know if you are available for short or long-term engagements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Career paths */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading heading="Choose your path" />
          <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
            Our network blends seasoned experts with emerging talent and strategic collaborators. Explore the pathways below to see how you can contribute.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {careerPaths.map((path) => (
              <motion.article
                key={path.title}
                className="rounded-2xl border border-white/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                {...fadeIn}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {path.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading heading="Areas of impact" />
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          Tell us where you thrive. We maintain an active roster of experts ready to deploy across these capability areas.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {expertise.map((cluster) => (
            <motion.div
              key={cluster.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              {...fadeIn}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {cluster.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {cluster.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading heading="What guides us" />
          <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
            We believe great work emerges when diverse voices build trust, challenge the status quo, and stay resilient together.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  {...fadeIn}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="text-xl" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="rounded-3xl border border-primary/15 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to create what comes next?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Share your story, your craft, and the questions that keep you curious. We would love to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => (window.location.href = "mailto:hr@epsiloninnovation.com")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <FaEnvelope className="text-lg" /> Apply now
            </button>
            <button
              onClick={() => (window.location.href = "mailto:info@epsiloninnovation.com")}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <FaHandshake className="text-lg" /> Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;
