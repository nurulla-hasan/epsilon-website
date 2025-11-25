import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/blue-eco.jpg";
import ocean from "../../../../assetes/images/Blue ocean-economy-to-2030.jpg";
import sea from "../../../../assetes/images/Wave Energy.jpg";

import SectionHeading from "@/components/Shared/SectionHeading";

const BlueEconomy = () => {
  const blueEconomyServices = [
    "Blue Economy Strategy Development",
    "Blue Economy Potential Assessment and Prioritization",
    "Ocean-Based Renewable Energy",
    "Energy-Climate-Blue Energy Nexus",
    "Innovative Technologies and Policies for Advancing Blue Economy",
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
          pageHeading="Blue Economy"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Expertise", href: "/expertise/blue-economy" },
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
        <div className="flex flex-col gap-20 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-2/3">
              <SectionHeading heading="Blue Economy" />

              <p className="text-gray-800 mb-4">
                The "Blue Economy" is an emerging concept which constitutes an
                economy based on vast lakes and rivers and an extensive ocean
                resource base. Blue Economy can play a major role in sustainable
                economic development through the exploitation and application of
                resources. The major blue economy sectors that Epsilon
                Innovation Group provides services include:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {blueEconomyServices.map((item, index) => (
                  <li
                    key={index}
                    className="text-blue-900 hover:text-blue-900 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-[600px] flex justify-center">
              <Image
                src={ocean}
                alt="Blue Economy illustration"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-[600px] flex justify-center ">
              <Image
                src={sea}
                alt="Wave Energy illustration"
                className="rounded-md border border-gray-300 p-2 object-contain h-auto w-full"
                priority
              />
            </div>

            <div className="md:w-2/3">
              <SectionHeading heading="Climate–Wave Energy Nexus" />

              <p className="text-gray-800">
                As sea level rise is threatening most coastal areas of the
                world, taking advantage of wave energy while adapting is an
                innovative coastal engineering approach. We help undertake
                feasibility studies and provide due diligence of potential
                coastal locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueEconomy;
