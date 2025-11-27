"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";
import logo from "../../assetes/images/logo.png";

type ChildItem = { label: string; href?: string; children?: ChildItem[] };
type NavItem = { label: string; href?: string; children?: ChildItem[] };

const NAV_ITEMS: NavItem[] = [
  { label: "AI Services", href: "/ai-services" },
  {
    label: "Industries",
    children: [
      { label: "Energy", href: "/expertise/energy" },
      { label: "Climate Change", href: "/expertise/climate-change" },
      {
        label: "Nature-Based Solutions",
        href: "/expertise/nature-based-solution",
      },
      { label: "Blue Economy", href: "/expertise/blue-economy" },
      {
        label: "Economic Development",
        href: "/expertise/economic-development",
      },
      { label: "Policy Analysis", href: "/expertise/policy-analysis" },
      { label: "Risk Analysis", href: "/expertise/risk-analysis" },
    ],
  },
  // { label: "Data Analytics Tools", href: "/dataAnalysis/climate-resilience" },
  {
    label: "Technology Innovation",
    children: [
      { label: "FPV-AS", href: "/re-designs/solar" },
      { label: "RE-SWRO", href: "/re-designs/swro" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about/projects" },
      {
        label: "Government Contracting",
        children: [
          { label: "Government Contracting", href: "/about/government-contract" },
          { label: "Company Designation", href: "/about/government-contract#company-designation" },
        ],
      },
      { label: "Awards", href: "/about/government-contract#awards" },
      { label: "Join Our Team", href: "/join-our-team" },
      { label: "News", href: "/news" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

const LinkedinBtn = () => (
  <Link
    href="https://www.linkedin.com/company/epsilon-innovation-group-inc/"
    aria-label="LinkedIn"
    className="inline-flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full shadow-md bg-linear-to-r from-primary to-blue-300 hover:scale-110 hover:shadow-lg"
  >
    <FaLinkedinIn className="text-[18px]" />
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const updateNavMetrics = useCallback(() => {
    const height = headerRef.current?.getBoundingClientRect().height ?? 0;
    document.documentElement.style.setProperty("--nav-height", `${height}px`);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      updateNavMetrics();
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateNavMetrics]);

  useEffect(() => {
    window.addEventListener("resize", updateNavMetrics);
    updateNavMetrics();
    return () => window.removeEventListener("resize", updateNavMetrics);
  }, [updateNavMetrics]);

  const shrink = scrollY > 100;

  const isActive = (href?: string) =>
    href
      ? href === "/"
        ? pathname === "/"
        : pathname.startsWith(href)
      : false;

  return (
    <div className="md:h-[120px] h-[66px]">
      <motion.header
        ref={headerRef}
        className="fixed py-3 md:py-1 inset-x-0 top-0 z-50 w-full border-b border-white/30 bg-white/50 backdrop-blur-2xl shadow-sm"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <motion.div
          initial={false}
          animate={{
            opacity: shrink ? 0 : 1,
            y: shrink ? -20 : 0,
            height: shrink ? 0 : "auto",
          }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex justify-end content-width mx-auto px-8 text-[12px] font-semibold text-primary tracking-wide overflow-hidden"
        >
          <div className="flex items-center gap-3 rounded-full bg-linear-to-r from-blue-100 via-white to-indigo-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">
            <span className="hidden lg:block">
              Strategy | Innovation | Impact
            </span>
            <div className="flex items-center gap-2">
              <Link
                href="/join-our-team"
                className="rounded-full bg-white/80 px-4 py-1 text-[11px] font-semibold text-primary transition hover:bg-linear-to-r hover:from-primary hover:to-blue-600 hover:text-white"
              >
                Join Our Team
              </Link>
              <button
                onClick={() =>
                  (window.location.href = "mailto:info@epsiloninnovation.com")
                }
                className="rounded-full bg-white/80 px-4 py-1 text-[11px] font-semibold text-primary transition hover:bg-linear-to-r hover:from-primary hover:to-blue-600 hover:text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>

        <motion.nav
          className="max-w-[1500px] mx-auto flex items-center justify-between gap-6 px-5"
          animate={{
            // paddingTop: shrink ? 6 : 12,
            // paddingBottom: shrink ? 6 : 12,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            animate={{
              scale: shrink ? 0.85 : 1,
              transition: { duration: 0.3 },
            }}
            className="origin-left"
          >
            <Link href="/" className="flex items-start">
              <img
                src={logo.src}
                alt="Epsilon Logo"
                className="h-10 w-auto md:h-[70px]"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Only show on XL screens and above */}
          <div className="items-center hidden xl:flex gap-3 rounded-full border border-white/60 bg-white/70 px-2 py-1 backdrop-blur antialiased shadow-sm">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;
              return (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`pl-3 pr-2 py-1.5 text-sm leading-none font-semibold uppercase tracking-wide rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                        isActive(item.href)
                          ? "bg-linear-to-r from-primary to-blue-300 text-white"
                          : "text-slate-700 hover:bg-linear-to-r hover:from-primary hover:to-blue-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      className="group relative flex items-center justify-center gap-1.5 pl-3 pr-2 py-2 text-sm leading-none font-semibold rounded-full uppercase tracking-wide text-slate-700 cursor-pointer hover:bg-linear-to-r hover:from-primary hover:to-blue-300 hover:text-white transition-all duration-300 hover:scale-105"
                      role="button"
                      tabIndex={0}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                      )}

                      {hasChildren && (
                        <div className=" absolute left-1/2 -translate-x-1/2 top-full w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                          <div className="bg-white border border-gray-100 rounded-xl py-2">
                            {item.children?.map((child) =>
                              child.children?.length ? (
                                <div
                                  key={child.label}
                                  className="relative group/child px-4 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-primary cursor-default flex items-center justify-between gap-2"
                                >
                                  <span>{child.label}</span>
                                  <FiChevronDown className="text-[10px] text-gray-400 group-hover/child:rotate-180 transition-transform" />

                                  <div className="absolute left-full top-0 w-64 rounded-lg rounded-l-none border border-gray-100 bg-white opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200">
                                    <div className="py-2">
                                      {child.children.map((grand) => (
                                        <Link
                                          key={grand.href}
                                          href={grand.href!}
                                          className="block px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                                        >
                                          {grand.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={child.href ?? child.label}
                                  href={child.href!}
                                  className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                                >
                                  {child.label}
                                </Link>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <LinkedinBtn />
          </div>

          {/* Mobile Menu Button - Show on all screens except XL */}
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 transition-all duration-300 border border-white/50 bg-white/80 rounded-xl xl:hidden text-primary hover:bg-gray-100 hover:scale-105"
            aria-label="Open menu"
          >
            <RxHamburgerMenu className="text-lg" />
          </button>
        </motion.nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="fixed top-0 left-0 z-50 h-screen w-4/5 max-w-sm bg-white overflow-y-auto flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src={logo}
                      alt="Logo"
                      width={140}
                      height={44}
                      className="h-11 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <FiX className="text-gray-500 text-xl" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  {NAV_ITEMS.map((item) =>
                    item.children ? (
                      <details key={item.label} className="group">
                        <summary className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                          <span>{item.label}</span>
                          <FiChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1">
                          {item.children.map((child) =>
                            child.children?.length ? (
                              <details key={child.label} className="group">
                                <summary className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer">
                                  <span>{child.label}</span>
                                  <FiChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="pl-4 mt-1 space-y-1">
                                  {child.children.map((grand) => (
                                    <Link
                                      key={grand.href}
                                      href={grand.href!}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary rounded-md transition-colors duration-200"
                                    >
                                      {grand.label}
                                    </Link>
                                  ))}
                                </div>
                              </details>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href!}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary rounded-md transition-colors duration-200"
                              >
                                {child.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </details>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href!}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                          isActive(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-center mb-3">
                    <LinkedinBtn />
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <Link
                      href="/join-our-team"
                      className="font-medium text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      Join our team
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      href="/contact"
                      className="font-medium text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
