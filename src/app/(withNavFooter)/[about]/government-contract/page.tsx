import PageTitle from "@/components/Shared/pageTitle";
import React from "react";
import sectionImg from "../../../../assetes/images/about.jpg";
import worker from "../../../../assetes/images/about-side.jpg";
import Image from "next/image";
import TextHeading from "@/components/Shared/TextHeading";
import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";

const GovernmentContract = () => {
 

  const designation = [
    "541330 - Engineering Services",
    "541360 - Geophysical Surveying and Mapping",
    "541511 - Custom Computer Programming",
    "541611 - General Management Consulting",
    "541620 - Environmental Consulting",
    "541690 - Energy Consulting",
    "541712 - R & D in Physical Sciences",
    "541720 - R & D Research in Social Sciences",
  ];
  return (
    <div className="mt-5">
      <PageTitle
        pageHeading="About"
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
            <h1 className="text-4xl font-bold mb-10">
              About Epsilon Innovation Group Inc.
            </h1>

            <p className="text-gray-800 mb-5">
              Epsilon Innovation Group Inc. is a private limited liability
              company, incorporated in the State of Maryland, USA. Epsilon
              Innovation Group Inc. has a dynamic team of experts, scientists,
              and consultants specialized in climate change, energy,
              environment, policy, and risk analysis.
            </p>

            <h2 className="text-3xl font-semibold text-blue-800 my-5">
              GOVERNMENT CONTRACTING
            </h2>

            <p className="text-gray-800 mb-5">
              Epsilon Innovation Group has extensive experience working with
              international and national governments and is well equipped to
              provide support in high-quality and emerging markets.
            </p>

            <p className="text-gray-800 mb-5">
              Epsilon Innovation Group Inc continuously expands our professional
              and foundational knowledge to meet our clients’ needs, employing
              best practices and emerging innovative solutions.
            </p>

            <TextHeading text="COMPANY DESIGNATION" />

            <p className="mb-5 text-gray-800">
              Epsilon Innovation Group's NAICS CODES (United States Registered
              Services) include:
            </p>

            <ul className="list-[square] pl-5">
              {designation.map((item, index) => (
                <li key={index} className="text-gray-800 mb-1">
                  {item}
                </li>
              ))}
            </ul>
          
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

export default GovernmentContract;
