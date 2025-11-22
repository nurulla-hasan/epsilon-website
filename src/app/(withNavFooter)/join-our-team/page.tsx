"use client";

import NormalParagraph from "@/components/Shared/NormalParagraph";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import TextHeading2 from "@/components/Shared/TextHeading2";
import Image from "next/image";
import React from "react";
import banner from "../../../assetes/images/team.png";
import { Select, Space } from "antd";
const JoinOurTeam = () => {
  const career = ["   Consultant", "Intern and/or", "Company Partner"];
  const expertiseOptions = [
    {
      value: "Climate Change - Adaptation",
      label: "Climate Change - Adaptation",
    },
    {
      value: "Climate Change - Agriculture",
      label: "Climate Change - Agriculture",
    },
    {
      value: "Climate Change - Climate Finance",
      label: "Climate Change - Climate Finance",
    },
    {
      value: "Climate Change - Disaster Risk Reduction",
      label: "Climate Change - Disaster Risk Reduction",
    },
    {
      value: "Climate Change - Economics",
      label: "Climate Change - Economics",
    },
    { value: "Climate Change - Forestry", label: "Climate Change - Forestry" },
    { value: "Climate Change - Gender", label: "Climate Change - Gender" },
    { value: "Climate Change - Health", label: "Climate Change - Health" },
    {
      value: "Climate Change - Mitigation",
      label: "Climate Change - Mitigation",
    },
    {
      value: "Climate Change - Modeling/Scenario Analysis",
      label: "Climate Change - Modeling/Scenario Analysis",
    },
    {
      value: "Climate Change - Resilience/Coastal Community",
      label: "Climate Change - Resilience/Coastal Community",
    },
    {
      value: "Climate Change - Risk Management",
      label: "Climate Change - Risk Management",
    },
    {
      value: "Climate Change - Strategy Development",
      label: "Climate Change - Strategy Development",
    },
    {
      value: "Climate Change - Transportation",
      label: "Climate Change - Transportation",
    },
    {
      value: "Climate Change - Urban Planning",
      label: "Climate Change - Urban Planning",
    },
    {
      value: "Climate Change - Water Resources",
      label: "Climate Change - Water Resources",
    },
    { value: "Climate Change - Other", label: "Climate Change - Other" },
    { value: "Energy - Audit", label: "Energy - Audit" },
    { value: "Energy - Biomass", label: "Energy - Biomass" },
    {
      value: "Energy - Capacity Building",
      label: "Energy - Capacity Building",
    },
    {
      value: "Energy - Economic and Financial Analysis",
      label: "Energy - Economic and Financial Analysis",
    },
    { value: "Energy - Efficiency", label: "Energy - Efficiency" },
    {
      value: "Energy - Engineering/System Design",
      label: "Energy - Engineering/System Design",
    },
    {
      value: "Energy - Floating Photovoltaics (FPV)",
      label: "Energy - Floating Photovoltaics (FPV)",
    },
    {
      value: "Energy - Feasibility Study",
      label: "Energy - Feasibility Study",
    },
    { value: "Energy - Green Building", label: "Energy - Green Building" },
    {
      value: "Energy - Low Carbon Development",
      label: "Energy - Low Carbon Development",
    },
    { value: "Energy - Modeler", label: "Energy - Modeler" },
    {
      value: "Energy - Planning / Policy Analysis",
      label: "Energy - Planning / Policy Analysis",
    },
    {
      value: "Energy - Resource Assessment",
      label: "Energy - Resource Assessment",
    },
    { value: "Energy - Solar (PV)", label: "Energy - Solar (PV)" },
    { value: "Energy - Wind Energy", label: "Energy - Wind Energy" },
    { value: "Energy - Other", label: "Energy - Other" },
  ];

  const values = [
    "Integrity: Do what is right, hold yourself and each other accountable",
    "Passion: Listen and act with empathy by embracing the mission.",
    "Innovation: Never stop learning, improving, and innovating.",
    "Together: Respect each other and draw strength from our differences.",
    "For Better: Do what matters.",
    "Champion's Heart: Bring joy to the pursuit and learn from failure - crave being the best.",
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Join Our Team"
          breadcrumbs={[
            { label: "Home", href: "/" },
            // { label: "Expertise", href: "/expertise/news" },
          ]}
        />

        <div>
          <Image
            src={banner}
            height={0}
            width={0}
            className="h-full w-full"
            alt="section image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] container px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <SectionHeading heading="Join Our Team" />

            <div className="">
              <NormalParagraph p="Epsilon Innovation Group Inc. has a dynamic team of experts, scientists, and consultants specialized in climate change, energy, environment, policy and risk analysis. We have more than a dozen active experts engaged in different projects around the world. We also maintain a database of selected experts who are ready to provide high-level services to our clients around the world."></NormalParagraph>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="How to Apply" />

            <div className="text-neutral-500">
              <p>
                If you want to help our clients in solving today's complex
                challenges, consider joining Epsilon Innovation Groups team,
                please send us your CV in Word or PDF file specifying your area
                of "Technical Expertise" in the subject line by e-mail to{" "}
                <span className="text-blue-800">hr@epsiloninnovation.com</span>.
              </p>
              <p className="my-6 text-neutral-600">You may join as:</p>
              <ul className="list-disc pl-5 space-y-1">
                {career.map((item, index) => (
                  <li key={index} className="text-neutral-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="Core Areas of Expertise" />

            <div className="text-neutral-500">
              <p>
                You can find Epsilon's priority areas of expertise by scrolling
                the " Areas of Technical Expertise" tab below.
              </p>
              <p className="my-6 text-neutral-600">
                We look forward to hearing from you
              </p>
              <TextHeading2 text2="Areas of Technical Expertise"></TextHeading2>
              <Space wrap>
                <Select
                  placeholder="Select Area of Technical Expertise"
                  style={{ width: 400 }}
                  onChange={handleChange}
                  options={expertiseOptions}
                />
              </Space>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="Why Epsilon Innovation Group?" />
            <div className="text-neutral-500">
              <NormalParagraph p="At Epsilon Innovation Group, we believe in building a world where progress and sustainability go hand-in-hand. Our team is committed to creating a diverse, equitable, and inclusive community where each individual has the opportunity to succeed."></NormalParagraph>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="Empowering with Purpose" />
            <div className="text-neutral-500">
              <NormalParagraph p="At Epsilon Innovation Group, we empower peopleâ€”our colleagues, our partners, our clients, our communities â€”to make the world a better place to live and thrive. Itâ€™s our purpose, and itâ€™s what we do every day through the expression of our values."></NormalParagraph>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="Our Values" />
            <div className="text-neutral-500">
              <NormalParagraph p="Our Values are the foundation of everything we do and every action that we take to make our community and planet a better place to live and thrive."></NormalParagraph>
              <ul className="list-disc pl-5 space-y-1">
                {values.map((item, index) => (
                  <li key={index} className="text-neutral-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeading heading="Let's Create Tomorrow Together" />
            <div className="text-neutral-500">
              <NormalParagraph p="Looking for your opportunity to change the world? Help us continue putting our values into action, explore our current job openings today, partner with us, and contact us."></NormalParagraph>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 my-8">
          <h1
            onClick={() =>
              (window.location.href = "mailto:info@epsiloninnovation.com")
            }
            className="text-2xl font-semibold text-blue-800 hover:underline"
          >
            Apply Now
          </h1>
          <h1
            onClick={() =>
              (window.location.href = "mailto:info@epsiloninnovation.com")
            }
            className="text-2xl font-semibold text-blue-800 hover:underline"
          >
            Partner With Us
          </h1>
          <h1
            onClick={() =>
              (window.location.href = "mailto:info@epsiloninnovation.com")
            }
            className="text-2xl font-semibold text-blue-800 hover:underline"
          >
            Conatct us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
