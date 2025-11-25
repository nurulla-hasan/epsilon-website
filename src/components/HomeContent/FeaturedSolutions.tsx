"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

import climate from "../../assetes/images/climate.jpeg";
import solar from "../../assetes/images/solar.jpeg";
import ship from "../../assetes/images/blue-eco.jpg";
import bigdata from "../../assetes/images/bigdata.jpeg";
import clean from "../../assetes/images/clean-development-mechanism (1).jpg";
import wave from "../../assetes/images/Wave-Energy Untitled-1_0002_wave.jpg";
import TextHeading2 from "../Shared/TextHeading2";

type Solution = {
  title: string;
  href: string;
  image: string | StaticImport;
  alt: string;
  category: string;
  description: string;
  accent: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Climate Change and Human Health Risk Detection Tool",
    href: "/expertise/climate-chnage",
    image: climate,
    alt: "Heat map visualization of climate variables",
    category: "Climate Health",
    description:
      "Blends satellite data with epidemiology models to detect vulnerability hotspots before crises escalate.",
    accent: "from-rose-500/70 to-orange-400/60",
  },
  {
    title: "Floating Solar Photovoltaic Powered Aeration System",
    href: "/re-designs/solar",
    image: solar,
    alt: "Floating solar panels on a water body",
    category: "Energy Systems",
    description:
      "Hybrid floating PV modules that power low-maintenance aeration for inland fisheries and reservoirs.",
    accent: "from-amber-400/70 to-lime-400/60",
  },
  {
    title: "Blue Economy Strategy Development",
    href: "/expertise/blue-economy",
    image: ship,
    alt: "Container ship traveling at sea",
    category: "Blue Economy",
    description:
      "National playbooks aligning coastal infrastructure, trade, and biodiversity finance priorities.",
    accent: "from-cyan-400/70 to-blue-500/60",
  },
  {
    title: "AI-Powered Resilience Data Analytics Tools",
    href: "/dataAnalysis/climate-resilience",
    image: bigdata,
    alt: "Abstract visualization of AI data streams",
    category: "Data & AI",
    description:
      "Modular analytics stack aggregating risk signals for planners, lenders, and utilities.",
    accent: "from-purple-500/70 to-indigo-500/60",
  },
  {
    title: "Climate Finance Funding Proposal Development",
    href: "/expertise/climate-chnage",
    image: clean,
    alt: "Wind farm in a cloudy landscape",
    category: "Climate Finance",
    description:
      "Investor-grade concept notes and MRV frameworks unlocking concessional and blended capital.",
    accent: "from-emerald-500/70 to-teal-400/60",
  },
  {
    title: "Climate – Wave Energy Nexus",
    href: "/expertise/blue-economy",
    image: wave,
    alt: "Ocean wave with energy device",
    category: "Emerging Tech",
    description:
      "Demonstration pilots coupling wave energy with community desalination and cold-chain hubs.",
    accent: "from-sky-400/70 to-indigo-400/60",
  },
];

const impactHighlights = [
  { label: "Deployments", value: "120+", detail: "multi-country programs" },
  { label: "Impact capital", value: "$3B", detail: "mobilized financing" },
  { label: "Client rating", value: "4.9/5", detail: "average satisfaction" },
];

const focusTags = [
  "Climate adaptation",
  "Energy transition",
  "Blue economy",
  "Data & AI",
];

const FeaturedSolutions: React.FC = () => {
  return (
    <section
      aria-labelledby="featured-solutions-heading"
      className="relative overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 bg-linear-gradient-to-b from-slate-50 to-white"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto content-width px-4 py-16 md:py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Flagship Offerings
          </div>
          <h2
            id="featured-solutions-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Innovative Solutions for a Sustainable Future
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our team of experts delivers cutting-edge solutions to tackle the
            world's most pressing environmental challenges.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-xl bg-slate-50 p-1.5">
            {focusTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-white hover:shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {impactHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm font-medium text-gray-500 mb-1">
                {item.label}
              </p>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTIONS.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                index === 0
                  ? "md:col-span-2"
                  : index === 5
                  ? "md:col-span-3"
                  : ""
              }`}
            >
              <Link href={item.href} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        index === 0
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
