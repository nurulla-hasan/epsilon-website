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
};

const SOLUTIONS: Solution[] = [
  {
    title: "Climate Change and Human Health Risk Detection Tool",
    href: "/expertise/climate-chnage",
    image: climate,
    alt: "Heat map visualization of climate variables",
  },
  {
    title: "Floating Solar Photovoltaic Powered Aeration System",
    href: "/re-designs/solar",
    image: solar,
    alt: "Floating solar panels on a water body",
  },
  {
    title: "Blue Economy Strategy Development",
    href: "/expertise/blue-economy",
    image: ship,
    alt: "Container ship traveling at sea",
  },
  {
    title: "AI-Powered Resilience Data Analytics Tools",
    href: "/dataAnalysis/climate-resilience",
    image: bigdata,
    alt: "Abstract visualization of AI data streams",
  },
  {
    title: "Climate Finance Funding Proposal Development",
    href: "/expertise/climate-chnage",
    image: clean,
    alt: "Wind farm in a cloudy landscape",
  },
  {
    title: "Climate – Wave Energy Nexus",
    href: "/expertise/blue-economy",
    image: wave,
    alt: "Ocean wave with energy device",
  },
];

const FeaturedSolutions: React.FC = () => {
  return (
    <section aria-labelledby="featured-solutions-heading" className="bg-white">
      <div className="mx-auto max-w-[1500px] container px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2
            id="featured-solutions-heading"
            className="font-sans text-4xl font-bold tracking-tight text-slate-900 "
          >
            Featured Solutions
          </h2>
          <TextHeading2 text2="Our world-class researchers and associates leverage industry-leading technical expertise, institutions, and local knowledge to build resilient communities through innovative solutions."></TextHeading2>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SOLUTIONS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105 hover:ring-2 hover:ring-blue-400 hover:shadow-xl"
              >
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full ">
                    <h3 className="h-20 m-0 px-4 py-3 text-sm sm:text-base md:text-lg font-semibold text-[#396cbb] bg-white/90 transition-all duration-300 group-hover:bg-[#396cbb] group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
