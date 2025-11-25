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
      <div className="mx-auto content-width container px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2
            id="featured-solutions-heading"
            className="font-sans text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent"
          >
            Featured Solutions
          </h2>
          <TextHeading2 text2="Our world-class researchers and associates leverage industry-leading technical expertise, institutions, and local knowledge to build resilient communities through innovative solutions."></TextHeading2>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SOLUTIONS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-400/60 relative"
              >
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none" />
                  
                  {/* Main image with scale effect */}
                  <div className="relative h-full w-full transform transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-blue-300/40 transition-all duration-500" />
                  
                  {/* Content container */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 space-y-2">
                    {/* Category tag */}
                    <div className="inline-block px-2.5 py-1 bg-white/90 text-xs font-semibold text-blue-700 rounded-full mb-1.5 shadow-sm">
                      {item.href.includes('climate') ? 'Climate' : item.href.includes('solar') ? 'Energy' : 'Innovation'}
                    </div>
                    
                    {/* Title with hover effect */}
                    <div className="flex items-center">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight max-w-[90%] drop-shadow-lg">
                        {item.title}
                      </h3>
                      <span className="ml-2 text-white/80 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </div>
                    
                    {/* Subtle hover indicator */}
                    <div className="h-0.5 w-8 bg-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
