import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import sectionImg from "../../../../assetes/images/about.jpg";
import worker from "../../../../assetes/images/about-side.jpg";
import Image from "next/image";
import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";

const NewProduct = () => {
  const tools = [
    { name: "Levelized Cost of Electricity Analysis (LCOE) Tool", link: "#" },
    { name: "Levelized Cost of Battery Storage (LCOS) Tool", link: "#" },
    { name: "Climate Model Evaluation Tool (CMET)", link: "#" },
    { name: "Climate Impact on Health Prediction Model (CIHPM)", link: "#" },
    {
      name: "Floating Photovoltaic (FPV) Powered Aeration System for Aquaculture",
      link: "#",
    },
    { name: "Mini-Grid Tariff Analysis Tool", link: "#" },
    { name: "Energy Workforce Development Planning Tool (EWDPT)", link: "#" },
    {
      name: "Climate Resilience Data Analytics Tool (CRDAnalytics)",
      link: "#",
    },
  ];

  return (
    <div className="mt-5">
      <PageTitle
        pageHeading="Our New Products"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "New products"},
          ]}
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
            <div className="new-products">
              <SectionHeading heading="NEW PRODUCTS" />

              <ul className="list-[square] pl-5">
                {tools.map((tool, index) => (
                  <li key={index} className="text-gray-800 mb-1">
                    <Link
                      href={tool.link}
                      className="hover:underline text-blue-500 cursor-pointer"
                    >
                      {tool.name}
                    </Link>
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

export default NewProduct;
