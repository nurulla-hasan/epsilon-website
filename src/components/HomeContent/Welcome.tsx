import React from "react";
import tech from "../../assetes/images/texh.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FiCpu, FiShield, FiWind } from "react-icons/fi";

const Welcome = () => {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.08),transparent_60%)]" />
      <div className="relative font-sans mx-auto content-width container py-16 md:py-20 px-6 text-center font-customFont text-primary">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          Welcome to Epsilon Innovation Group
        </h2>
        <p className="mx-auto max-w-4xl text-base md:text-lg lg:text-xl text-slate-700/90 leading-relaxed">
          Epsilon Innovation Group is a consulting and R&D firm specializing in energy, climate resilience, nature-based solutions, blue economy, and AI-powered analytics for policy and risk assessment. We solve complex technical and policy challenges with evidence-driven insights.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-100 hover:border-blue-200">
            AI Analytics
          </span>
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-emerald-100 hover:border-emerald-200">
            Energy & Climate
          </span>
          <span className="px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-cyan-100 hover:border-cyan-200">
            Blue Economy
          </span>
          <span className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-purple-100 hover:border-purple-200">
            Policy & Risk
          </span>
        </div>
      </div>

      <div className="relative content-width container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 pb-12 md:pb-20">
        {[
          {
            title: "AI-Powered Solutions",
            description:
              "Leverage cutting-edge machine learning and geospatial analytics to inform resilient decisions.",
            icon: <FiCpu className="w-6 h-6 text-blue-600" />,
          },
          {
            title: "Sustainable Innovation",
            description:
              "Nature-based designs and energy optimization to deliver measurable long-term impact.",
            icon: <FiWind className="w-6 h-6 text-emerald-600" />,
          },
          {
            title: "Policy & Risk Analysis",
            description:
              "Evidence-based policy support and risk modeling to navigate complex regulations.",
            icon: <FiShield className="w-6 h-6 text-cyan-600" />,
          },
        ].map((card) => (
          <div
            key={card.title}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/20 via-cyan-400/20 to-emerald-400/20 hover:from-blue-600/30 hover:via-cyan-400/30 hover:to-emerald-400/30 transition-colors duration-300"
          >
            <div className="h-full rounded-2xl bg-white shadow-xl px-6 py-6 md:px-7 md:py-7 transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-5">
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Learn more
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-6 py-16 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.55)]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-12 top-0 h-80 w-80 rounded-full bg-primary/50 blur-3xl" />
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.25),_transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_35%),linear-gradient(-120deg,rgba(255,255,255,0.08)_10%,rgba(255,255,255,0)_45%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">Future-Ready Advisory</p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight">
            Building Resilient Communities Through Innovation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-white/85">
            We align strategy, technology, and policy to accelerate climate resilience, equitable energy systems, and
            AI-driven insights for governments, communities, and private partners.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Energy & Climate",
              "Blue Economy",
              "AI Analytics",
              "Policy & Risk",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/expertise/energy"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Our Expertise
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm md:text-base font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-10 grid gap-6 text-left text-white/80 sm:grid-cols-3">
            {[
              { label: "Impact Studies", value: "120+" },
              { label: "Countries Served", value: "18" },
              { label: "Cross-Sector Programs", value: "35" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
