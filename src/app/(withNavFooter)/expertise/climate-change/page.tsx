import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/global-temprature-armingstripes-past-2000-years.jpg";
import transmission from "../../../../assetes/images/282_2RiskProfileExposure.jpg";
import carbon from "../../../../assetes/images/272_2DRR.jpg";
import wind from "../../../../assetes/images/278_2ClimateGender.jpg";
import mill from "../../../../assetes/images/276_2CCCoastalVulnerability.jpg";
import SectionHeading from "@/components/Shared/SectionHeading";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";

const ClimateChnage = () => {
  const climate = [
    {
      title: "Climate Change Risk Analysis",
      items: [
        "Climate Change Scenario Analysis",
        "Climate Change Vulnerability Analysis",
        "Critical Infrastructure Risk Analysis",
        "Coastal Vulnerability Analysis",
        "Disaster Risk Reduction (DRR)",
        "Flood and Drought Analysis",
        "Extreme Event Analysis",
        "Climate Change Uncertainty Analysis",
        "Policy, Risk and Uncertainty Analysis",
      ],
    },
    {
      title: "Climate Change Adaptation",
      items: [
        "Adaptation Strategy Development (Dev’t)",
        "Coastal Adaptation Analysis",
        "Adaptation Options Investment Analysis",
        "Critical Infrastructure Adaptation Strategy",
        "Water Supply Adaptation Analysis",
        "Climate Change Resilient Community Dev’t",
        "Climate Change Visualization Tool Dev’t",
        "Climate Change Information System Dev’t",
        "Climate Change Decision-Making Tool Dev’t",
      ],
    },
    {
      title: "Climate Finance",
      items: [
        "Climate Finance Strategy Development",
        "Climate Adaptation Funding Proposal Development",
        "Climate Mitigation Funding Proposal Development",
        "Climate Finance Capacity Building",
      ],
    },
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="CLIMATE CHANGE"
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

      <div className="mx-auto content-width container px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <SectionHeading heading="Climate Change Services" />

            <div className="flex flex-col gap-10 mb-10">
              <div className="flex flex-col md:flex-row items-start gap-10">
                {climate.map((section, index) => (
                  <div key={index} className="md:w-1/3">
                    <h3 className="text-lg  text-blue-800 mb-2">
                      {section.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <SectionHeading heading="SAMPLE PROJECTS" />

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Climate Risk Profile (CRP) Development" />
                <NormalParagraph p="Epsilon Innovation Group's researchers have developed Climate Risk Profile (CRP) for Turkmenistan, which included reviewing Turkmenistan's climate change reports, conducting climate scenario, impact and adaption analysis, developing climate risk management methedologies, synthesizing institutional capacity to manage climate risks and develoing climate risk management options." />
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={transmission}
                  alt="Transmission Image"
                  className="rounded-lg border p-1 border-neutral-200  "
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Disaster Risk Reduction (DRR) and Climate Change Adaptation (CCA)" />
                <NormalParagraph p="The project titled 'Systematization of Information and Development of Methodology for Disaster Risk Reduction (DRR) and Climate Change Adaptation (CCA) for the Greater Horn of Africa' have been carried out by Epsilon Innovation Group researchers. In the study, we have developed a systematization of climate information and methodology for climate change adaptation best practices in Ethiopia, Kenya and Uganda." />
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={carbon}
                  alt="Carbon Study Image"
                  className="rounded-lg border p-1 border-neutral-200 "
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Climate Change and Gender Risk Analysis" />
                <NormalParagraph p="Epsilon Innovation Group's principal researchers have developed the study methodology, conducted climate change induced flood and drought risk analysis, 'developed gender and climate change' training tool, and provided training to stakeholders. The project is part of the UNDP's Africa Adaptation Program (AAP) adapation program." />
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={wind}
                  alt="Wind Image"
                  className="rounded-lg border p-1 border-neutral-200 "
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Sea Level Rise Vulnerability Assessment" />
                <NormalParagraph p="Epsilon Innovation Group team members conducted temperature and rainfall projection, sea level rise scenario analysis, and developed adaptation strategy for Lagos State (Lagos Mega City), Nigeria. In the study we have conducted detailed coastal vulnerability assessment, economic valuation of exposed assets and population, and extreme water level events. In the temperature and precipitation projection about 14 Global Circulation Models (GCMs) are evaluated and statistical analysis performed. The results of the study have been presented in the Annual Lagos State's Climate Submit." />
              </div>
              <div className="md:w-1/3 ">
                <Image
                  src={mill}
                  alt="SWRO Image"
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

export default ClimateChnage;
