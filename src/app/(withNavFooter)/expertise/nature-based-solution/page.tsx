import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/nbs-tb.jpeg";

import SectionHeading from "@/components/Shared/SectionHeading";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";

const NatureBasedSolution = () => {
  const benefitsLeft = [
    "Combat climate change",
    "Reduce flood risk",
    "Improve water quality",
    "Protect coastal property",
    "Improve Actionable",
    "Blue Carbon Ecosystems for Mitigation",
  ];

  const benefitsRight = [
    "Restore and protect wetlands",
    "Stabilize shorelines",
    "Reduce urban heat",
    "Ensure food security",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Nature-Based Solutions"
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
            <SectionHeading heading="NATURE BASED SOLUTIONS" />
            <div className="my-10">
              <NormalParagraph p="Nature-based Solutions (NbS) harness the power of nature to address some of our most pressing societal challenges, such as climate change, drought, flood, food security, water security, biodiversity loss, and human health."></NormalParagraph>
            </div>
            <div className="my-10">
              <NormalParagraph p="Nature-based solutions include landscape management, sustainable planning, design, environmental management, engineering practices, policy changes, and capacity building that weave natural features or processes into the built environment to promote adaptation and resilience."></NormalParagraph>
            </div>

            <SectionHeading heading="SAMPLE PROJECTS" />

            <div className="">
              <div>
                <TextHeading2 text2="Benefits and Co-Benefits of NbS" />
                <NormalParagraph p="The NbS that Epsilon Innovation Group use natural features and processes to address the following risks, among others:" />
              </div>
              <div className="mt-5">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/2">
                    <ul className="list-disc pl-5 space-y-1">
                      {benefitsLeft.map((item, index) => (
                        <li key={index} className="text-gray-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:w-1/2">
                    <ul className="list-disc pl-5 space-y-1">
                      {benefitsRight.map((item, index) => (
                        <li key={index} className="text-gray-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureBasedSolution;
