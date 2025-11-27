"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  EffectFade,
} from "swiper/modules";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "../../assetes/images/climateslider.jpg";
import slide2 from "../../assetes/images/NatureBasedSolutionsApril28.jpg";
import slide3 from "../../assetes/images/tool.jpg";
import slide6 from "../../assetes/images/3.jpg";
import slide7 from "../../assetes/images/5.jpg";

type Slide = {
  image: StaticImageData;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  highlights?: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const slides: Slide[] = [
  {
    image: slide1,
    alt: "Climate risk assessment",
    title: "Climate Risk and Adaptation Analysis",
    subtitle:
      "Advising clients in identifying climate risks and developing adaptation strategies.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Scenario-based impact modeling",
      "Portfolio stress-testing",
      "Adaptive investment pathways",
    ],
  },
  {
    image: slide2,
    alt: "Forest and river landscape",
    title: "Nature-Based Solutions",
    subtitle:
      "Applying nature-based solutions to mitigate climate risks and improve livelihoods.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/nature-based-solution",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Mangrove regeneration",
      "Blue carbon finance",
      "Community co-design",
    ],
  },
  {
    image: slide3,
    alt: "Clean energy turbines",
    title: "Energy Economic Analysis Tools",
    subtitle:
      "Helping clients analyze the economics of their energy investments.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Revenue stack modeling",
      "Multi-market sensitivity",
      "Actionable dashboards",
    ],
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1722951668719-e91f8db1d3f7?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    } as unknown as StaticImageData,
    alt: "Floating solar photovoltaic system on water",
    title: "Floating Photovoltaics (FPV) System Designs",
    subtitle:
      "Designing FPV-powered systems for power, water quality, and aquaculture.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Hydrodynamic simulations",
      "Yield optimization",
      "Water synergy insights",
    ],
  },
  {
    image: slide6,
    alt: "Ocean and coastal resilience",
    title: "Renewable Energy Powered SWRO Systems",
    subtitle: "Delivering clean water using clean energy technology.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/re-designs/swro",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Solar + storage hybrids",
      "Low-carbon desalination",
      "24/7 remote monitoring",
    ],
  },
  {
    image: slide7,
    alt: "Global climate innovation",
    title: "Policy Analysis",
    subtitle: "Policy insights for environment, energy, and climate change.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/policy-analysis",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
    highlights: [
      "Regulatory impact scans",
      "Stakeholder alignment",
      "Implementation roadmaps",
    ],
  },
];

const buttonVariant: Variants = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.8, 0, 0.2, 1], delay: 0.3 },
  },
};

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Slightly reduced height for larger screens while maintaining minimum height
  const heroHeight = "clamp(480px, calc(90svh - var(--nav-height, 80px)), 700px)";

  return (
    <section
      aria-label="Hero banner"
      className="relative overflow-hidden"
      style={
        {
          ["--swiper-navigation-color" as any]: "#fff",
          ["--swiper-pagination-color" as any]: "#fff",
          minHeight: heroHeight,
        } as React.CSSProperties
      }
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop
        speed={1500} 
        centeredSlides
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-full min-h-[480px]"
              style={{ minHeight: heroHeight, maxHeight: '90vh' }}
            >
              <img
                src={s.image.src}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.9] md:object-[center_40%]"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              <div className="absolute inset-0 " />
              <div className="absolute inset-x-0 bottom-0 h-1/3 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-8 md:px-12 lg:px-20">
                <div className="relative w-full max-w-[1500px] mx-auto px-1 sm:px-0">
                  {activeIndex === idx && (
                    <motion.div
                      className="text-white"
                      initial="hidden"
                      animate="visible"
                      key={idx}
                    >
                      <motion.div
                        variants={buttonVariant}
                        className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8"
                      >
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={s.ctaHref}
                          className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#1f5eff] to-[#00d4ff] px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_40px_rgba(31,94,255,0.35)] transition active:scale-95"
                        >
                          {s.ctaLabel}
                        </motion.a>

                        {s.secondaryCtaLabel && s.secondaryCtaHref && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            href={s.secondaryCtaHref}
                            className="inline-flex items-center justify-center py-2.5 sm:py-3 text-sm sm:text-base font-semibold border rounded-full border-white/50 px-5 sm:px-6 text-white/90 backdrop-blur active:scale-95"
                          >
                            {s.secondaryCtaLabel}
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </section>
  );
}
