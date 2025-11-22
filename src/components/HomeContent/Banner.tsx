"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
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
import slide5 from "../../assetes/images/energy.jpg";
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
    eyebrow: "Data-driven advisory",
    title: "Climate Risk and Adaptation Analysis",
    subtitle:
      "Advising clients in identifying climate risks and developing adaptation strategies.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/",
    secondaryCtaLabel: "Talk to an expert",
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
    eyebrow: "Nature first",
    title: "Nature-Based Solutions",
    subtitle:
      "Applying nature-based solutions to mitigate climate risks and improve livelihoods.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/nature-based-solution",
    secondaryCtaLabel: "Our expertise",
    secondaryCtaHref: "/expertise",
    highlights: [
      "Mangrove regeneration",
      "Blue carbon finance",
      "Community co-design",
    ],
  },
  {
    image: slide3,
    alt: "Clean energy turbines",
    eyebrow: "Intelligent tooling",
    title: "Energy Economic Analysis Tools",
    subtitle:
      "Helping clients analyze the economics of their energy investments.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "View tools",
    secondaryCtaHref: "/dataAnalysis/energy-economics-analysis-tool",
    highlights: [
      "Revenue stack modeling",
      "Multi-market sensitivity",
      "Actionable dashboards",
    ],
  },
  {
    image: slide5,
    alt: "Renewable power generation",
    eyebrow: "Floating innovation",
    title: "Floating Photovoltaics (FPV) System Designs",
    subtitle:
      "Designing FPV-powered systems for power, water quality, and aquaculture.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "View methodology",
    secondaryCtaHref: "/expertise/energy#fpv",
    highlights: [
      "Hydrodynamic simulations",
      "Yield optimization",
      "Water synergy insights",
    ],
  },
  {
    image: slide6,
    alt: "Ocean and coastal resilience",
    eyebrow: "Water security",
    title: "Renewable Energy Powered SWRO Systems",
    subtitle: "Delivering clean water using clean energy technology.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/re-designs/swro",
    secondaryCtaLabel: "Join our team",
    secondaryCtaHref: "/join-our-team",
    highlights: [
      "Solar + storage hybrids",
      "Low-carbon desalination",
      "24/7 remote monitoring",
    ],
  },
  {
    image: slide7,
    alt: "Global climate innovation",
    eyebrow: "Policy foresight",
    title: "Policy Analysis",
    subtitle: "Policy insights for environment, energy, and climate change.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/policy-analysis",
    secondaryCtaLabel: "Our expertise",
    secondaryCtaHref: "/expertise",
    highlights: [
      "Regulatory impact scans",
      "Stakeholder alignment",
      "Implementation roadmaps",
    ],
  },
];

const titleVariant: Variants = {
  hidden: { opacity: 0, y: -120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.8, 0, 0.2, 1], delay: 0 },
  },
};

const eyebrowVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.05 },
  },
};

const subtitleVariant: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.15 },
  },
};

const buttonVariant: Variants = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.8, 0, 0.2, 1], delay: 0.3 },
  },
};

const listContainerVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0, 0.2, 1],
      delayChildren: 0.25,
      staggerChildren: 0.08,
    },
  },
};

const listItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Slightly reduced height for larger screens while maintaining minimum height
  const heroHeight = "clamp(480px, calc(90svh - var(--nav-height, 80px)), 700px)";

  return (
    <section
      aria-label="Hero banner"
      className="relative overflow-hidden bg-black mt-[137px]"
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
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-8 md:px-12 lg:px-20">
                <div className="relative w-full max-w-[1500px] mx-auto px-1 sm:px-0">
                  {activeIndex === idx && (
                    <motion.div
                      className="text-white"
                      initial="hidden"
                      animate="visible"
                      key={idx}
                    >
                      {s.eyebrow && (
                        <motion.span
                          variants={eyebrowVariant}
                          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 sm:px-4 text-xs sm:text-[0.8rem] font-medium sm:font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/80 backdrop-blur"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {s.eyebrow}
                        </motion.span>
                      )}
                      <motion.h1
                        variants={titleVariant}
                        className="font-sans text-[36px] xs:text-[40px] sm:text-[44px] md:text-[52px] lg:text-[62px] font-semibold leading-[1.15] tracking-tight drop-shadow-xl"
                      >
                        {s.title}
                      </motion.h1>

                      <motion.p
                        variants={subtitleVariant}
                        className="max-w-3xl mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-xl text-gray-100 leading-relaxed"
                      >
                        {s.subtitle}
                      </motion.p>

                      {s.highlights && (
                        <motion.ul
                          variants={listContainerVariant}
                          className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6 text-xs sm:text-sm"
                        >
                          {s.highlights.map((point) => (
                            <motion.li
                              key={point}
                              variants={listItemVariant}
                              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full border-white/10 bg-white/10 text-white/90 backdrop-blur-md whitespace-nowrap"
                            >
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                              <span className="truncate">{point}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}

                      <motion.div
                        variants={buttonVariant}
                        className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8"
                      >
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={s.ctaHref}
                          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1f5eff] to-[#00d4ff] px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_40px_rgba(31,94,255,0.35)] transition active:scale-95"
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
        {/* Subtle Navigation Buttons - Hidden on mobile */}
        <div className="hidden sm:block">
          <div className="swiper-button-prev !left-2 !w-8 !h-8 !rounded-full !bg-black/20 hover:!bg-black/30 !text-white/80 hover:!text-white after:!text-lg after:!font-medium transition-all duration-200"></div>
          <div className="swiper-button-next !right-2 !w-8 !h-8 !rounded-full !bg-black/20 hover:!bg-black/30 !text-white/80 hover:!text-white after:!text-lg after:!font-medium transition-all duration-200"></div>
        </div>
        
        <style jsx global>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 2rem;
            height: 2rem;
            margin-top: -1rem;
            backdrop-filter: blur(4px);
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 1rem;
          }
          .swiper-button-prev {
            left: 0.5rem;
          }
          .swiper-button-next {
            right: 0.5rem;
          }
        `}</style>
      </Swiper>
    </section>
  );
}
