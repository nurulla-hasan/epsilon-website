import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import risk from "../../../../assetes/images/risk-analysis.jpeg";
import economy from "../../../../assetes/images//risk-analysis-2.jpeg";

import SectionHeading from "@/components/Shared/SectionHeading";
import TextHeading2 from "@/components/Shared/TextHeading2";

const RiskAnalysis = () => {
  const economyServices = [
    "Energy",
    "Transport",
    "Manufacturing",
    "Agriculture",
    "Tourism",
    "Revitalization projects",
    "Real Estate",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Risk Analysis"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Expertise", href: "/expertise/blue-economy" },
          ]}
        />

        <div>
          <Image
            src={risk}
            height={0}
            width={0}
            className="h-full w-full"
            alt="section image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] container px-4  ">
        <div className="">
          <SectionHeading heading="RISK ANALYSIS SERVICES" />

          <p className="text-gray-800 mb-4">
            Risk analysis refers to the uncertainty of forecasted future
            variance that apply statistical analysis to determine the
            probability of a project's success or failure, and possible future
            economic states. The objective of risk analysis is to minimize and
            avoid as much as possible of the future negative unforeseen effects.
            This analysis requires applied uncertainty analysis. Epsilon
            Innovation Group is positioned to provide services and our clients
            to make informed decision under uncertainty.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <TextHeading2 text2="Some of the core areas of our competence include:" />

            <ul className="list-disc pl-5 space-y-1">
              {economyServices.map((item, index) => (
                <li
                  key={index}
                  className="text-black cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[400px] flex justify-center">
            <Image
              src={economy}
              alt="Blue Economy illustration"
              className="rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;
