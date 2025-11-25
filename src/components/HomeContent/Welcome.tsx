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
      <div className="relative h-[42vh] md:h-[46vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={tech}
          alt="Tech background"
          fill
          className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
        <div className="absolute text-center px-6 md:px-0 max-w-5xl">
          <h1 className="font-sans text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white drop-shadow-lg">
            Building Resilient Communities Through Innovation
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-200 font-medium drop-shadow-md">
            Let us help you achieve your goals with innovative solutions in
            energy, climate change, blue economy, AI analytics, policy & risk
            analysis.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/expertise" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1f5eff] to-[#00d4ff] px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-[0_10px_30px_rgba(31,94,255,0.35)] hover:shadow-[0_10px_30px_rgba(31,94,255,0.5)] transition-all duration-300">
              Our Expertise
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full border border-white/70 text-white/90 px-5 py-2.5 text-sm md:text-base hover:bg-white/10 transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
