"use client";
import Image from "next/image";
import React from "react";
import service from "../../../assetes/images/solar.jpeg";
import ctn from "../../../assetes/images/300_CTCN.jpg";
import energy from "../../../assetes/images/news.jpg";
import safety from "../../../assetes/images/safety.jpg";
import carbon from "../../../assetes/images/267_no_slow_down_in_global_warming.jpg";
import wind from "../../../assetes/images/267_PagetFarmBequia.jpg";
import mill from "../../../assetes/images/600_WaterSupplyClimateProbabilityNY.jpg";
import global from "../../../assetes/images/210_210_9780521182935.jpg";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaNewspaper, FaAward, FaGlobe, FaBook, FaFlask } from "react-icons/fa";
import Link from "next/link";

// Animation variants
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Epsilon Innovation Group has won DoE SBIR to design a Floating Solar-Powered Aeration System for Aquaculture",
      excerpt: "Epsilon Innovation Group has won the highly competitive Department of Energy's Small Business Innovation Research (SBIR) to design a Floating Solar-Powered Aeration System for Aquaculture. Using the funding, Epsilon Innovation Group's team is developing a self-sufficient, small-scale, floating solar aeration system coupled with energy storage that improves water quality and protects underwater organisms and habitats.",
      image: service,
      date: "2024",
      category: "Award",
      icon: FaAward
    },
    {
      id: 2,
      title: "Epsilon Innovation Group is now a member of the Climate Technology Center and Network (CTCN)",
      excerpt: "The CTCN is the operational arm of the UNFCCC Technology Mechanism, which promotes the accelerated transfer of environmentally sound technologies for low carbon and climate resilient development in developing countries.",
      image: ctn,
      date: "2024",
      category: "Partnership",
      icon: FaGlobe
    },
    {
      id: 3,
      title: "Safety and Reliability of Complex Engineered Systems: ESREL 2015 Proceedings Now Available",
      excerpt: "The Safety and Reliability of Complex Engineered Systems proceedings of the 25th European Safety and Reliability Conference (ESREL 2015), held 7-10 September 2015 in Zurich, Switzerland, contains about 570 papers accepted for presentation at the conference.",
      image: safety,
      date: "2015",
      category: "Publication",
      icon: FaBook,
      link: "https://www.routledge.com/Safety-and-Reliability-of-Complex-Engineered-Systems-ESREL-2015/Podofillini-Sudret-Stojadinovic-Zio-Kroger/p/book/9781138028791"
    },
    {
      id: 4,
      title: "No Slowdown in Global Warming",
      excerpt: "Shows that the rate of global warming has continued, and there has not been slow down. Using the latest global surface temperature data, a team of scientists from the National Oceanic and Atmospheric Administration's (NOAA) and National Centers for Environmental Information (NCEI) published their findings.",
      image: carbon,
      date: "2015",
      category: "Research",
      icon: FaFlask
    },
    {
      id: 5,
      title: "PV-Hybrid Powered Desalination System in the News",
      excerpt: "Renewable-grid hybrid desalination system designed by Epsilon Innovations Group featured in the weADAPT of the Stockholm Environmental Institute titled 'Implementation of adaptation measures to address the absence of fresh water and coastal vulnerabilities in Bequia, St. Vincent and the Grenadines.'",
      image: wind,
      date: "2015",
      category: "Feature",
      icon: FaNewspaper,
      link: "https://weadapt.org/knowledge-base/ecosystem-based-adaptation/special-programme-for-adaptation-to-climate-change-spacc"
    },
    {
      id: 6,
      title: "Dr. Gilau to Present a Paper on Climate Change and Critical Infrastructure at ESREL Conference",
      excerpt: "Dr. Gilau will be presenting a paper titled Water supply investment decision-making under climate change variability New York City case study at the annual European Safety and Reliability Conference (ESREL) to be held in Zurich, Switzerland from 7-10, September 2015.",
      image: mill,
      date: "2015",
      category: "Conference",
      icon: FaCalendarAlt
    },
    {
      id: 7,
      title: "Global Energy Assessment (GEA) Report Launched",
      excerpt: "Dr. Gilau has served as a member of the worlds leading innovative energy experts in research, academia, business, industry and policy during the preparation of the Global Energy Assessment (GEA), launched in 2012 at the Rio+20 summit.",
      image: "https://images.unsplash.com/photo-1738911393596-9520ef8723a8?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2012",
      category: "Report",
      icon: FaGlobe
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="absolute inset-0">
          <Image
            src={energy}
            fill
            className="object-cover"
            alt="News Hero Background"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="max-w-3xl"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              variants={fadeInUp}
            >
              <FaNewspaper className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Latest Updates</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              News &
              <motion.span 
                className="block text-transparent bg-clip-text bg-linear-to-r from-white to-white/80"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Updates
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Stay informed about our latest achievements, research breakthroughs, 
              and industry contributions in renewable energy and sustainable infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* News Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            // Create dynamic layout: first item and 7th item span 2 cols
            const isFeatured = index === 0 || index === 6;
            
            return (
              <motion.article 
                key={item.id}
                className={`
                  bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group
                  ${isFeatured ? 'lg:col-span-2 xl:col-span-2' : ''}
                `}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2"
                    variants={scaleIn}
                  >
                    <Icon className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{item.category}</span>
                  </motion.div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-700">{item.date}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 line-clamp-${isFeatured ? '4' : '3'} leading-relaxed`}>
                    {item.excerpt}
                  </p>
                  
                  {item.link && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
        
        {/* Load More Section */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <FaNewspaper className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow our journey as we continue to innovate and contribute to a sustainable future. 
              Check back regularly for the latest news and updates.
            </p>
            <motion.button
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
