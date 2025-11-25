"use client";

import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/ewdpt.jpg";
import economy from "../../../../assetes/images/PV-Workforce.png";
import rowing from "../../../../assetes/images/rowing-uts.png";
import clean from "../../../../assetes/images/clean-development-mechanism (1).jpg";

import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";
import TextHeading2 from "@/components/Shared/TextHeading2";
import { Form, Input, Select } from "antd";
import NormalParagraph from "@/components/Shared/NormalParagraph";

const EnergyWorkforse = () => {
  const data = [
    " Determine staffing requirements by qualifications, discipline, and educational level",
    "Categorizes short, medium and long-term energy workforce requirements as per projected types of energy projects in the pipeline",
    "Develop relevant curriculum and training, and",
    "Develop energy career pathways for skilled energy workforce.",
  ];

  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Energy Workforce Development Planning Tool"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Data Analytics Tools", href: "/expertise/blue-economy" },
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
        <SectionHeading heading="ENERGY WORKFORCE DEVELOPMENT PLANNING TOOL (EWDPT)"></SectionHeading>

        <div className="w-full flex justify-start items-start gap-10">
          <div className="w-full md:w-[70%]">
            <div className="flex justify-start items-start gap-8">
              <NormalParagraph p="Epsilon Innovation Group has developed Renewable Energy Workforce Development Planning Tool (EWDPT), which helps to quantitatively determine energy workforce needs and gaps of all renewable energy types such as biomass, geothermal, hydropower, methane energy solar and wind." />
              <Image
                src={economy}
                height={0}
                width={0}
                alt="climate"
                className=" w-96 "
              ></Image>
            </div>

            <TextHeading2 text2="As part of the tool, we have also incorporated energy workforce competency model, which helps to," />
            <div className="">
              <ul className="list-disc pl-5 space-y-1 ">
                {data.map((item, index) => (
                  <li key={index} className="text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <Image
                src={rowing}
                height={0}
                width={0}
                alt="climate"
                className=" my-5"
              ></Image>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <p className="text-neutral-600">
              To learn more about our product, please download our brochure.
              Should have any queries or seek our services please{" "}
              <span>
                {" "}
                <Link href="">contact us.</Link>
              </span>
            </p>
            <div className="bg-[#edf1f5] p-8 my-8 rounded">
              <h1 className="text-blue-900 text-2xl text-center mb-5">
                Download Brochure
              </h1>
              <Form
                form={form}
                name="brochure"
                layout="vertical"
                onFinish={handleSubmit}
                className="max-w-md mx-auto"
              >
                <Form.Item
                  name="first-name"
                  label={<p>First Name</p>}
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input placeholder="Enter first name" />
                </Form.Item>

                <Form.Item
                  name="last-name"
                  label={<p>Last Name</p>}
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input placeholder="Enter last name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<p>Your E-mail Address</p>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Your E-mail Address",
                    },
                  ]}
                >
                  <Input placeholder="Enter Your E-mail Address" />
                </Form.Item>
                <Form.Item
                  name="company-name"
                  label={<p>Comapny Name </p>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Comapny Name ",
                    },
                  ]}
                >
                  <Input placeholder="Enter Comapny Name " />
                </Form.Item>

                <Form.Item
                  name="country"
                  label={<p>Country</p>}
                  rules={[
                    { required: true, message: "Please select your country" },
                  ]}
                >
                  <Select placeholder="Select one">
                    <Select.Option value="usa">United States</Select.Option>
                    <Select.Option value="canada">Canada</Select.Option>
                    <Select.Option value="uk">United Kingdom</Select.Option>
                    <Select.Option value="australia">Australia</Select.Option>
                    <Select.Option value="india">India</Select.Option>
                  </Select>
                </Form.Item>
                <p className="text-sm text-neutral-400 my-5">
                  By clicking download button I confirm that I have read and
                  understood{" "}
                  <span>
                    {" "}
                    <Link href="/privacy-policy" className="text-blue-900">
                      Epsilon's Privacy Policy
                    </Link>
                  </span>
                  .
                </p>
                <Form.Item>
                  <button className="w-full py-2 rounded bg-[#103b88] text-white">
                    Download Brochure
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="w-fit my-10 flex justify-center items-center gap-20">
          <div className="w-full md:w-[70%]">
            <SectionHeading heading="SAMPLE PROJECTS"></SectionHeading>
            <TextHeading2 text2="Rwanda Energy Skills Needs Assessment Study"></TextHeading2>
            <NormalParagraph p="Epsilon Innovation Group has finalized the Energy Workforce Development Planning Tool (EWDPT) for Rwanda that include energy skills needs assessment, capacity development strategy, competency analysis, gap analysis and profile development. The study included five renewable energy types such as solar (PV), methane, biomass, peat and hydropower. In excel based tool, we have determined energy skills needs for all energy project value chain though 2035."></NormalParagraph>
            <p className="text-xl text-blue-800 my-5">
              To learn more about our products, please
              <span>
                {" "}
                <Link href="/contact-us" className="underline cursor-pointer">
                  {" "}
                  contact us
                </Link>
              </span>
              .
            </p>
          </div>
          <div className="w-full md:w-[30%]">
            <Image
              src={clean}
              height={0}
              width={0}
              alt="climate"
              className=" my-5 border border-neutral-200 p-1 rounded"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyWorkforse;
