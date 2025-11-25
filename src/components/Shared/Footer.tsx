"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMailBulk,
  FaMapPin,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  
  return (
    <React.Fragment>
    <footer className="relative overflow-hidden bg-[#204d91] text-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-500/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float animation-delay-4000" />
      </div>
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="content-width container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm shadow-2xl shadow-blue-900/20"
        >
          {/* First Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold tracking-wide mb-3">
              EPSILON INNOVATION GROUP
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full" />
            <p className="flex items-start gap-2 text-sm mt-4">
              <FaMapPin className="w-4 h-4 mt-1" />
              455 Massachusetts Ave NW #165
              <br />
              Washington, DC 20001
            </p>
            <p className="flex items-center gap-2 text-sm mt-3">
              <FaPhone className="w-4 h-4" />
              +1 (202) 715-3882
            </p>
            <p className="flex items-center gap-2 text-sm mt-3">
              <FaMailBulk className="w-4 h-4" />
              <a
                href="mailto:info@epsiloninnovation.com"
                className="hover:underline"
              >
                info@epsiloninnovation.com
              </a>
            </p>
          </motion.div>

          {/* Second Column - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="h-1.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              Expertise
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Energy", link: "/expertise/energy" },
                { name: "Climate Change", link: "/expertise/climate-chnage" },
                { name: "Nature-Based Solutions", link: "/expertise/nature-based-solution" },
                { name: "Policy Analysis", link: "/expertise/policy-analysis" },
                { name: "Risk Analysis", link: "/expertise/risk-analysis" },
                { name: "Development Economics", link: "/expertise/economic-development" },
                { name: "Blue Economy", link: "/expertise/blue-economy" },
              ].map((item) => (
                <li key={item.name} className="transition">
                  <a href={item.link} className="inline-flex items-center gap-2 hover:text-white/90 hover:translate-x-0.5 transition">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Third Column - Quick Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 col-span-1 lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "About", href: "/about/government-contract" },
                    { name: "RE System Designs", href: "/re-designs/solar" },
                    { name: "News", href: "/news" },
                    { name: "Join Our Team", href: "/join-our-team" },
                    { name: "Contact Us", href: "/contact-us" },
                  ].map((link) => (
                    <li key={link.name} className="transition">
                      <a href={link.href} className="inline-flex items-center gap-2 hover:text-white/90 hover:translate-x-0.5 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <span className="h-1.5 w-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
                      Newsletter
                    </h3>
                    {isSubscribed ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 p-3 rounded-lg"
                      >
                        Thank you for subscribing!
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                            required
                          />
                          <button 
                            type="submit"
                            className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <FaPaperPlane className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-white/50">
                          Stay updated with our latest insights and news
                        </p>
                      </form>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-white/80 mb-3">Follow Us</h4>
                    <div className="flex gap-3">
                      <a
                        href="https://facebook.com"
                        aria-label="Facebook"
                        className="group relative p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        <FaFacebookF className="w-4 h-4 text-white/80 group-hover:text-white" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Facebook
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/epsilon-innovation-group-inc/"
                        aria-label="LinkedIn"
                        className="group relative p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        <FaLinkedinIn className="w-4 h-4 text-white/80 group-hover:text-white" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-white/5 text-center text-xs py-5 bg-gradient-to-r from-transparent via-white/5 to-transparent"
      >
        <div className="content-width mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Epsilon Innovation Group Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/50">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
    
    <style jsx global>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      .animate-float {
        animation: float 12s ease-in-out infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
    </React.Fragment>
  );
};

export default Footer;
