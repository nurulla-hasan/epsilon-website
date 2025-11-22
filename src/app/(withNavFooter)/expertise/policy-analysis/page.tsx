import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import policy from "../../../../assetes/images/policy-analysis.jpg";
import energy from "../../../../assetes/images/pol.jpg";
import cleanDev from "../../../../assetes/images/clean-development-mechanism.jpg";
import waterSupply from "../../../../assetes/images/water-supply-analysis.jpg";

import SectionHeading from "@/components/Shared/SectionHeading";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";
import Link from "next/link";

const PolicyAnalysis = () => {
  const services = [
    "Technology Policy Analysis",
    "Infrastructure Development Policy Analysis",
    "Industrial Investment Policy Analysis",
    "Development Economics Policy Analysis",
    "Applied Policy Analysis",
    "Public Policy Analysis",
    "Energy Policy Analysis",
    "Climate Change Policy Analysis",
    "Environmental Policy Analysis",
  ];
  const tools = [
    "Applied quantitative and qualitative policy analysis tools",
    "Multi-Stakeholder Participatory Approach (MSPA) Model",
    "Cost-benefit analysis",
    "Statistical analysis",
    "Risk analysis under uncertainty",
    "Monte Carlo simulation",
    "@Risk",
    "Optimization analysis",
    "Decision-making tool development",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Policy Analysis"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Expertise", href: "/expertise/energy" },
          ]}
        />

        <div>
          <Image
            src={energy}
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
            <SectionHeading heading="POLICY ANALYSIS SERVICES" />
            <div className="mb-5">
              <NormalParagraph p="Our multidisciplinary experience is well positioned to help organizations solve complex technical and policy issues. We use applied quantitative and qualitative policy and risk analysis models and develop customized computational models to solve specific problems. The areas of our specialization include:"></NormalParagraph>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10 ">
              <div className="md:w-2/3">
                <ul className="list-disc pl-5 space-y-1">
                  {services.map((item, index) => (
                    <li key={index} className="text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="my-5">
                  We are well equipped with advanced policy analysis tools to
                  solve our client complex problems.
                </p>
                <TextHeading2 text2="Examples of Tools and Computational Models Being Used at Epsilon:"></TextHeading2>
                <div className="my-5">
                  <ul className="list-disc pl-5 space-y-1">
                    {tools.map((item, index) => (
                      <li key={index} className="text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-96 ">
                <Image
                  src={policy}
                  alt="Transmission Image"
                  className="rounded-lg border p-1 border-neutral-200 h-full w-full "
                />
              </div>
            </div>

            <SectionHeading heading="SAMPLE PROJECTS" />

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Optimal Energy Options Under the Clean Development Mechanism" />
                <p className="my-5 text-neutral-700">
                  We have quantitatively evaluated the cost-effectiveness of
                  renewable energy technologies in achieving low abatement costs
                  and promoting sustainable developments especially in
                  developing countries. The peer-reviewed paper is available at{" "}
                  <span>
                    {" "}
                    <Link href="" className="text-blue-800">
                      Energy Policy Journal.
                    </Link>
                  </span>
                </p>
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={cleanDev}
                  alt="Transmission Image"
                  className="rounded-lg border p-1 border-neutral-200  "
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Water Supply Investment Options Analysis Under Climate Change" />
                <p className="my-5 text-neutral-700">
                  A case study titled "Water supply investment decision-making
                  under climate change variability ï¿½ New York City" has been
                  conducted, which was presented at the Safety and Reliability
                  of Complex Engineered Systems, held 7-10 September 2015 in
                  Zurich, Switzerland. The paper is available at the proceedings
                  of the
                  <span>
                    {" "}
                    <Link href="" className="text-blue-800">
                      25th ESREL 2015.
                    </Link>
                  </span>
                </p>
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={waterSupply}
                  alt="Carbon Study Image"
                  className="rounded-lg border p-1 border-neutral-200 "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Coastal Risk Analysis and Adaptation Strategy Development" />
                <p className="my-5 text-neutral-700">
                  In the project funded by the United Nations Industrial
                  Development Organization (UNIDO), Dr. Asmerom Gilau, Principal
                  Researcher at Epsilon Innovation Group has conducted coastal
                  sea level rise risk analysis. The opposite graph shows the
                  City of Lagos, Nigeria coastline sea level rise scenario
                  analysis developed by Dr. Asmerom Gilau in a project funded by
                  the United Nations Industrial Development Organization
                  (UNIDO). Nicholls et. al. (2007) indicates that out of fifty
                  coastal cities of the world, the City of Lagos is one the top
                  twenty populous cities exposed to present-day extreme sea
                  levels. The report indicates that next to Dhaka and Chittagong
                  of Bangladesh and Ningbo of China, Lagos is ranked the fourth
                  highly exposed city to sea level rise and storm surge. This
                  also implies that developing countries who has no strong
                  technical capability and financial access are at risk.
                </p>
                <p className="my-5 text-blue-700">
                  {" "}
                  Click on the graph for high resolution
                </p>
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={waterSupply}
                  alt="Carbon Study Image"
                  className="rounded-lg border p-1 border-neutral-200 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyAnalysis;
