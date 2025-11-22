"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMailBulk,
  FaMapPin,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#396cbb] text-gray-100">
      <div className="max-w-[1500px] container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-3">
            EPSILON INNOVATION GROUP
          </h2>
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
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Expertise</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Energy", link: "/expertise/energy" },
              { name: "Climate Change", link: "/expertise/climate-chnage" },
              {
                name: "Nature-Based Solutions",
                link: "/expertise/nature-based-solution",
              },
              { name: "Policy Analysis", link: "/expertise/policy-analysis" },
              { name: "Risk Analysis", link: "/expertise/risk-analysis" },
              {
                name: "Development Economics",
                link: "/expertise/economic-development",
              },
              { name: "Blue Economy", link: "/expertise/blue-economy" },
            ].map((item) => (
              <li key={item.name} className="hover:text-blue-300 transition">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About", href: "/about/government-contract" },
              { name: "RE System Designs", href: "/re-designs/solar" },
              { name: "News", href: "/news" },
              { name: "Join Our Team", href: "/join-our-team" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-300 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="bg-gray-200 hover:bg-blue-500 hover:text-white text-blue-900 rounded-full p-2 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/epsilon-innovation-group-inc/"
              aria-label="LinkedIn"
              className="bg-gray-200 hover:bg-blue-500 hover:text-white text-blue-900 rounded-full p-2 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-600 text-center text-xs py-4 bg-blue-950/40">
        © {new Date().getFullYear()} Epsilon Innovation Group Inc. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
