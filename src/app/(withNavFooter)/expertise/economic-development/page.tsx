import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/economic.jpg";
import economy from "../../../../assetes/images/economy.png";

import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";

const EconomicDevelopment = () => {
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
          pageHeading="Development Economics"
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

      <div className="mx-auto max-w-[1500px] container px-4 py-16 md:py-20">
        <div className="flex flex-col gap-20 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-2/3">
              <SectionHeading heading="ECONOMIC IMPACT MODELING SERVICE" />

              <p className="text-gray-800 mb-4">
                Using IMPLAN - an input output economic modeling tool- and other
                tools, we provide data driven analysis for complex investment
                projects of different sectors including:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {economyServices.map((item, index) => (
                  <li
                    key={index}
                    className="text-blue-900 hover:text-blue-900 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 my-5">
                You want to evaluate the economic impact of existing and new
                investments at all levels of the economy such as local, national
                and regional? Please <span><Link href="contact-us">contact us</Link></span>.
              </p>
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
    </div>
  );
};

export default EconomicDevelopment;
