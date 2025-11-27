"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button, Space } from "antd";
import { FaHeart, FaTeamspeak, FaUser } from "react-icons/fa";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import img from "../../assetes/images/3.jpg";
import Link from "next/link";

const ClimateResilience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(contentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const SPEED = 0.25;
    let rafId = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom >= -vh && rect.top <= vh * 2) {
        const sectionCenter = rect.top + rect.height / 2;
        const fromViewportCenter = vh / 2 - sectionCenter;
        const translateY = fromViewportCenter * SPEED;
        bg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.1)`;
      }
      rafId = 0;
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    update();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={img}
          alt="Climate resilience background"
          fill
          priority
          className="object-cover object-center select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-blue-950/60" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 grid min-h-[40vh] place-items-center px-6 py-20 text-center text-white">
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-4xl font-sans font-semibold leading-tight mb-4 text-white">
            Climate Resilience Data Analytics Tools
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-blue-400 to-cyan-300 mb-6" />

          <p className="mx-auto mt-2 max-w-5xl text-lg md:text-xl text-white/90 leading-relaxed">
            We are helping our clients develop localized and sector-specific climate risk profiles and
            climate resilience data analytics tools for robust decision-making vulnerability and adaptation actions.
          </p>

          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 text-left">
            <div className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
              <FiCheckCircle className="mt-0.5 text-cyan-300" />
              <span className="text-sm text-white/90">Spatial & predictive analytics</span>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
              <FiCheckCircle className="mt-0.5 text-cyan-300" />
              <span className="text-sm text-white/90">Interactive dashboards</span>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
              <FiCheckCircle className="mt-0.5 text-cyan-300" />
              <span className="text-sm text-white/90">Insightful visualizations</span>
            </div>
          </div>

          <motion.a
            href="/dataAnalysis/climate-risk-profile"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white text-[#396cbb] px-8 py-3 font-semibold shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3, duration: 0.7 },
              },
            }}
          >
            Explore Our Solution
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>

      <motion.section
        className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-linear-to-r from-slate-50 via-white to-blue-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="max-w-3xl mx-auto text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-sans text-3xl font-bold mb-4">
            Let’s Connect and Collaborate
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-10">
            To learn more about our services, teaming, career, and internship
            opportunities, get in touch with us. We’re always eager to
            collaborate on innovative solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Space size="middle" wrap>
              <button
                type="button"
                className="flex justify-center items-center gap-2 rounded px-6 py-3 font-medium shadow-lg transition-all duration-300 hover:shadow-xl bg-primary text-white hover:bg-primary/90"
                onClick={() =>
                  (window.location.href = "mailto:info@epsiloninnovation.com")
                }
              >
                <FaTeamspeak />
                Partner With Us
              </button>
              <Link href="/join-our-team">
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 rounded px-6 py-3 font-medium shadow-lg transition-all duration-300 hover:shadow-xl border border-primary/30 bg-white text-primary hover:bg-primary/5"
                >
                  <FaUser />
                  Join Our Team
                </button>
              </Link>
              <Link href="https://www.linkedin.com/company/epsilon-innovation-group-inc/">
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 rounded px-6 py-3 font-medium shadow-lg transition-all duration-300 hover:shadow-xl border border-primary/30 bg-white text-primary hover:bg-primary/5"
                >
                  <FaHeart />
                  Follow Us
                </button>
              </Link>
            </Space>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default ClimateResilience;
