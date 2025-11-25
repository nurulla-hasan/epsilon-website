import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";

const NewProduct = () => {
  const tools = [
    {
      name: "Levelized Cost of Electricity Analysis (LCOE) Tool",
      link: "#",
      category: "Energy Analytics",
      description: "Comprehensive tool for calculating and comparing electricity generation costs across different technologies.",
      image: "/images/kenny-eliason-PzBrkbtJ-tU-unsplash.jpg"
    },
    {
      name: "Levelized Cost of Battery Storage (LCOS) Tool",
      link: "#",
      category: "Energy Storage",
      description: "Advanced analysis for evaluating the cost-effectiveness of battery storage solutions.",
      image: "/images/kumpan-electric-30D7430ywf4-unsplash.jpg"
    },
    {
      name: "Climate Model Evaluation Tool (CMET)",
      link: "#",
      category: "Climate Analysis",
      description: "Robust framework for assessing and comparing climate model performance.",
      image: "/images/frederik-schonfeldt--QTa5xYxDCs-unsplash.jpg"
    },
    {
      name: "Climate Impact on Health Prediction Model (CIHPM)",
      link: "#",
      category: "Health & Environment",
      description: "Predictive analytics for understanding climate change impacts on public health.",
      image: "/images/doris-morgan-mXUFJ1U2AeA-unsplash.jpg"
    },
    {
      name: "Floating Photovoltaic (FPV) Powered Aeration System for Aquaculture",
      link: "#",
      category: "Renewable Energy",
      description: "Innovative solar-powered solution for sustainable aquaculture operations.",
      image: "/images/brian-mcgowan-kKyxIwvljBg-unsplash.jpg"
    },
    {
      name: "Mini-Grid Tariff Analysis Tool",
      link: "#",
      category: "Energy Access",
      description: "Comprehensive solution for designing and optimizing mini-grid tariffs.",
      image: "/images/evgeniy-alyoshin-2ASQyjafflo-unsplash.jpg"
    },
    {
      name: "Energy Workforce Development Planning Tool (EWDPT)",
      link: "#",
      category: "Capacity Building",
      description: "Strategic planning tool for developing skilled energy sector workforces.",
      image: "/images/anastassia-anufrieva-3yb7ZsaY0LY-unsplash.jpg"
    },
    {
      name: "Climate Resilience Data Analytics Tool (CRDAnalytics)",
      link: "#",
      category: "Climate Adaptation",
      description: "Data-driven insights for building climate resilience in vulnerable communities.",
      image: "/images/mitch-hodiono--8iYWtDhXM4-unsplash.jpg"
    },
  ];

  const categories = [...new Set(tools.map((tool) => tool.category))];

  const highlights = [
    { title: "Purpose-Built", detail: "Tailored for climate & energy leaders" },
    { title: "Data-Driven", detail: "Grounded in robust analytics" },
    { title: "Deployment Ready", detail: "Built for real-world impact" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <PageTitle
        pageHeading="Innovative Solutions & Tools"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Solutions" }]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Technology background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative content-width mx-auto px-4 py-16 sm:py-24 lg:py-28">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Cutting-Edge Tools for a Sustainable Future
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our suite of innovative solutions designed to address the
              world's most pressing energy and climate challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-white/90">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1 backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative content-width mx-auto px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/15 p-5 text-sm text-white backdrop-blur-md border border-white/20"
              >
                <p className="text-base font-semibold uppercase tracking-[0.2em] text-white/80">
                  {item.title}
                </p>
                <p className="mt-2 text-lg font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="content-width mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <SectionHeading heading="Our Solutions Portfolio" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
            Discover our comprehensive range of analytical tools and
            technologies designed to drive sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden border border-white"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                  {tool.category}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                  Solution #{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 flex-1 text-slate-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
                    {tool.category}
                  </div>
                  <Link
                    href={tool.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-700"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewProduct;
