import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import sectionImg from "../../../../assetes/images/about.jpg";
import worker from "../../../../assetes/images/about-side.jpg";
import Image from "next/image";
import TextHeading from "@/components/Shared/TextHeading";

const stats = [
  { label: "NAICS Codes", value: "8+" },
  { label: "Years of Advisory", value: "15" },
  { label: "Gov/NGO Partners", value: "30+" },
];

const contractingHighlights = [
  "Federal & State Partnerships",
  "International Development Programs",
  "Climate & Energy Policy Advisory",
  "Evidence-Based Risk Assessment",
];

const GovernmentContract = () => {
  const designation = [
    "541330 - Engineering Services",
    "541360 - Geophysical Surveying and Mapping",
    "541511 - Custom Computer Programming",
    "541611 - General Management Consulting",
    "541620 - Environmental Consulting",
    "541690 - Energy Consulting",
    "541712 - R & D in Physical Sciences",
    "541720 - R & D Research in Social Sciences",
  ];

  return (
    <div>
      <PageTitle
        pageHeading="About Epsilon Innovation Group Inc."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Government Contract" },
        ]}
      />

      <div className="relative">
        <div className="relative overflow-hidden">
          <Image
            src={sectionImg}
            height={900}
            width={1920}
            className="w-full h-auto"
            alt="section image"
            priority
          />
          <div className="pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </div>

      <section className="mx-auto content-width px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,0.9fr]">
          <article className=" bg-white/90 backdrop-blur">
            <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-semibold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-slate-700">
              <h1 className="text-3xl font-bold text-slate-900">
                About Epsilon Innovation Group Inc.
              </h1>
              <p>
                Epsilon Innovation Group Inc. is a private limited liability
                company, incorporated in the State of Maryland, USA. Our
                multidisciplinary bench of experts, scientists, and consultants
                specialize in climate change, energy, environment, policy, and
                risk analysis for both national and international partners.
              </p>

              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Government Contracting
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Purpose-built expertise for public sector impact
                </h2>
                <p className="mt-3 text-slate-700">
                  Epsilon Innovation Group has extensive experience working with
                  international and national governments, delivering
                  high-quality support across emerging markets. We continuously
                  expand our foundational knowledge to meet client needs,
                  employing best practices and innovative, evidence-based
                  solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contractingHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-white px-4 py-1 text-sm font-semibold text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <TextHeading text="Company Designation" />
                <p className="mt-3 text-slate-700">
                  Epsilon Innovation Group's NAICS CODES (United States
                  Registered Services) include:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {designation.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                  Trusted Partner
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 leading-tight">
                Delivering resilience, innovation, and policy clarity for
                government clients worldwide.
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                From feasibility studies to mission-critical implementation, our
                teams blend domain expertise with agile program delivery. We
                support agencies through every phase of the contracting
                lifecycle.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    text: "Acquisition Strategy & Proposal Support",
                    icon: "📋",
                  },
                  {
                    text: "Climate, Energy, and Infrastructure Advisory",
                    icon: "🌱",
                  },
                  {
                    text: "Specialized Research & Data Analytics",
                    icon: "📊",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-slate-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-[500px] mx-auto md:mx-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <Image
                  src={worker}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  alt="team at work"
                />
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary mb-2">
                      Capability Snapshot
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Expert Solutions for Complex Challenges
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Evidence-driven insights, technical rigor, and culturally
                    aware engagement models tailored for both public and private
                    sector partners.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-medium text-slate-500 mb-3">
                      Our Expertise Includes:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: "💼", text: "Climate Finance" },
                        { icon: "⚡", text: "Energy Transition" },
                        { icon: "📊", text: "Risk Modeling" },
                        { icon: "🌱", text: "Policy Innovation" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-primary/5 transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm font-medium text-slate-700">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button className="w-full md:w-auto px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    Learn more about our capabilities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default GovernmentContract;
