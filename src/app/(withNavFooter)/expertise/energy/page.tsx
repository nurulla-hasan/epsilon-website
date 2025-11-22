import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import service from "../../../../assetes/images/278_2Energy.jpg";
import energy from "../../../../assetes/images/energypage.jpg";
import transmission from "../../../../assetes/images/278_2EnergySkillsTransmission.jpg";
import carbon from "../../../../assetes/images/257_2EnergyAnalysisLowCarbon.jpg";
import wind from "../../../../assetes/images/266_2MesoScaleWind.jpg";
import mill from "../../../../assetes/images/280_2SWRO.jpg";
import SectionHeading from "@/components/Shared/SectionHeading";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";

const Energy = () => {
  const services = [
    "Wind, Solar (PV & CSP), Hydro, Biomass, Geothermal, Waste to Energy",
    "Resources Assessment and Potential Evaluation",
    "Feasibility Studies",
    "Low Carbon Development and Energy Planning Analysis",
    "Clean Energy Investment Analysis",
    "Greenhouse Gas (GHG) Emission Reduction Studies",
    "Energy Efficiency",
    "Weatherization Performance Evaluation",
    "Energy Audit and Performance Evaluation",
    "Wind and Solar Seawater Reverse Osmosis (SWRO) System Design",
    "Renewable energy powered intensive aquaculture and ice-making system design",
    "Wind and solar energy powered telecommunication towers system design",
    "Off-Grid Rural Electrification Project Development",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Energy"
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

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <SectionHeading heading="ENERGY SERVICES" />
          
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <ul className="list-disc pl-5 space-y-1">
                  {services.map((item, index) => (
                    <li key={index} className="text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-96 ">
                <Image
                  src={service}
                  alt="Transmission Image"
                  className="rounded-lg border p-1 border-neutral-200 h-full w-full "
                />
              </div>
            </div>

            <SectionHeading heading="SAMPLE PROJECTS" />

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Energy Skills Assessment and Strategy Development" />
                <NormalParagraph p="Rwanda is implementing several power plant projects that include Photovoltaic (PV), hydropower, peat, geothermal and methane. As part of its effort to parepare its national energy workforce, Epsilon is undertaking energy skills assesemnt, strategic skills development, and energy skills quaification and profiling study." />
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
                <TextHeading2 text2="Low Carbon Development Study" />
                <NormalParagraph p="This low-carbon development study has two component such as power and oil & gas sectors. Epsilon's researcher is a lead author for the low carbon development study of the power sector that included national renewable energy potential assessment for Photovoltaic (PV), Concentrated Solar Power (CSP), wind, waste-to-energy, biomass, and small-hydro power; energy modeling using the Energy Forecasting Framework and Emissions Consensus Tool (EFFECT) model, energy demand and supply analysis, and off-grid economic analysis." />
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
                <TextHeading2 text2="Mesoscale Wind Resources Assessment" />
                <NormalParagraph p="Epsilon researchers have conducted a mesoscale modeling (high resolution wind modeling) and mapping to identify optimal wind potential with the highest capacity factor useful for the generation of utility scale wind energy project in Kosovo." />
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
                <TextHeading2 text2="Renewable Energy Powered SWRO System Design" />
                <NormalParagraph p="Epsilon researchers have designed and implemented the first of its kind renewable energy powered desalination system in the Caribbean. We have also conducted wind and solar energy potential assessment and wind energy seasonal variability assessment study, which is critical in desalination system design." />
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

export default Energy;
