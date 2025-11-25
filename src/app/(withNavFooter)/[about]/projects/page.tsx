import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import sectionImg from "../../../../assetes/images/about.jpg";
import worker from "../../../../assetes/images/about-side.jpg";
import Image from "next/image";
import SectionHeading from "@/components/Shared/SectionHeading";


const Projects = () => {
  const projects = [
    "Access to Energy Innovation for Rural Communities",
    "National Nature, People, and Climate (NPC) Investment Plan (IP)",
    "Mini-Grid Tariff and Regulation",
    "Regional Blue Economy Governance Framework and Implementation Plan",
    "Africa Blue Economy Strategy Development, Governance Framework, and Implementation Plan",
    "Floating Photovoltaic (FPV) Applications System Design",
    "National Blue Economy Strategy",
    "Continental Regulatory Framework for Energy Private Investment in Africa",
    "Internationally Transferred Mitigation Outcomes (ITMO) of Article 6 of the Paris Agreement",
    "Multi-Hazard Contingency Plan Development",
    "Accelerating the Transformational Shift to a Low-Carbon Economy",
    "Climate Mitigation and Adaptation Project Proposals for Green Climate Fund (GCF) and Adaptation Fund (AF)",
    "National Communications to the United Nations Framework Convention on Climate Change (UNFCCC)",
    "Renewable Energy Powered Systems",
    "Energy Efficient Product’s Market Performance Algorithm",
    "Qualitative Resilience Measurement Conceptual Framework",
    "Climate Change Risk Profile Development",
    "Energy Skills Gap Analysis, Energy Skills Development Strategy and Profile Development",
    "Global Circulation Model Data Output Accessibility to Non-Climate Researchers and Policy Makers",
    "Mesoscale Wind Resources Assessment Study",
  ];





  return (
    <div className="mt-5">
      <PageTitle
        pageHeading="Projects"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <div>
        <Image
          src={sectionImg}
          height={0}
          width={0}
          className="h-full w-full"
          alt="section image"
        />
      </div>

      <div className="mx-auto content-width container px-4 py-16 md:py-20">
        <div className="w-full flex justify-between items-start gap-5">
          <div className="w-[70%]">
            
            <div id="projects">
              <SectionHeading heading="PROJECTS" />

              <ul className="list-[square] pl-5">
                {projects.map((item, index) => (
                  <li key={index} className="text-gray-800 mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

         
          </div>

          <div className="w-[30%]">
            <Image
              src={worker}
              height={0}
              width={0}
              className="h-full w-fit"
              alt="side image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
