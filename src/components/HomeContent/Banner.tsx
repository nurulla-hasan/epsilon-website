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
    eyebrow: "CLIMATE",
    title: "Climate Risk and Adaptation Analysis",
    subtitle:
      "Advising clients in identifying climate risks and developing adaptation strategies.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
  },
  {
    image: slide2,
    alt: "Forest and river landscape",
    eyebrow: "NATURE",
    title: "Nature-Based Solutions",
    subtitle:
      "Applying nature-based solutions to mitigate climate risks and improve livelihoods.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/nature-based-solution",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
  },
  {
    image: slide3,
    alt: "Clean energy turbines",
    eyebrow: "ENERGY",
    title: "Energy Economic Analysis Tools",
    subtitle:
      "Helping clients analyze the economics of their energy investments.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1707459754123-c92cbee0d941?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    } as unknown as StaticImageData,
    alt: "Floating solar photovoltaic system on water",
    eyebrow: "INNOVATION",
    title: "Floating Photovoltaics (FPV) System Designs",
    subtitle:
      "Designing FPV-powered systems for power, water quality, and aquaculture.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/energy",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
  },
  {
    image: slide6,
    alt: "Ocean and coastal resilience",
    eyebrow: "WATER",
    title: "Renewable Energy Powered SWRO Systems",
    subtitle: "Delivering clean water using clean energy technology.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/re-designs/swro",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
  },
  {
    image: slide7,
    alt: "Global climate innovation",
    eyebrow: "POLICY",
    title: "Policy Analysis",
    subtitle: "Policy insights for environment, energy, and climate change.",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "/expertise/policy-analysis",
    secondaryCtaLabel: "Talk To Our Expert",
    secondaryCtaHref: "/contact-us",
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
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />

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
                          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 mb-3 sm:px-4 text-xs sm:text-[0.8rem] font-medium sm:font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/80 backdrop-blur"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {s.eyebrow}
                        </motion.span>
                      )}
                      <motion.h1
                        variants={titleVariant}
                        className="font-sans text-[36px] xs:text-[40px] sm:text-[44px] md:text-[52px] lg:text-5xl font-semibold leading-[1.15] tracking-tight drop-shadow-xl"
                      >
                        {s.title}
                      </motion.h1>

                      <motion.p
                        variants={subtitleVariant}
                        className="max-w-3xl mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-xl text-gray-100 leading-relaxed"
                      >
                        {s.subtitle}
                      </motion.p>

                      {/* {s.highlights && (
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
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shrink-0" />
                              <span className="truncate">{point}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )} */}

                      <motion.div
                        variants={buttonVariant}
                        className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8"
                      >
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={s.ctaHref}
                          className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition active:scale-95"
                        >
                          {s.ctaLabel}
                        </motion.a>

                        {s.secondaryCtaLabel && s.secondaryCtaHref && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            href={s.secondaryCtaHref}
                            className="inline-flex items-center justify-center py-2.5 sm:py-3 text-sm sm:text-base font-semibold border rounded-sm border-white/50 px-5 sm:px-6 text-white/90 backdrop-blur active:scale-95"
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
       {/* Navigation arrows */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </section>
  );
}