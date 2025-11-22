"use client";

import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/dims.jpg";
import economy from "../../../../assetes/images/climate-predictive-analytics.png";
import map from "../../../../assetes/images/map.jpg";

import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";
import { Button, Form, Input, Select } from "antd";

const CLimateResilience = () => {
  const data = [
    " Spatial data analytics",
    "Predictive data analytics",
    "Easy to use Dashboards",
    "Info-graphics",
    "Embedded analytics",
    "Data Visualization",
  ];

  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Climate Resilience Data Analytics Tools"
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

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeading heading="CLIMATE RESILIENCE DATA ALALYTICS TOOLS"></SectionHeading>

        <div className="flex justify-start items-start gap-5">
          <div>
            <NormalParagraph p="Epsilon Innovation Group is developing climate resilience data analytics tools. The tools help decision-makers and non-climate change experts in the energy, health, transportation, water resources, agriculture, coastal area, transportation and urban planners to incorporate climate change risks and vulnerabilities during project design and implementation." />
            <TextHeading2 text2="Data Analytics Products:" />
            <div className="flex justify-between items-start gap-5">
              <ul className="list-disc pl-5 space-y-1">
                {data.map((item, index) => (
                  <li key={index} className="text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <Image
                src={economy}
                height={0}
                width={0}
                alt="climate"
                className="w-96"
              ></Image>
            </div>
            <div className="">
              <TextHeading2 text2="Zika Virus Global Risk Data Visualization"></TextHeading2>
              <Image
                src={map}
                height={0}
                width={0}
                alt="climate"
                className=""
              ></Image>
              <p className="text-blue-700 font-semibold my-5">
                Data Source: Caminde et. al., 2016.
              </p>
              <div className="flex justify-start items-start gap-5">
                <Link href="/contact-us">
                  <button className="px-6 py-2 rounded bg-[#184f9f] text-white hover:bg-white hover:text-[#184f9f] hover:border ">
                    Contact Us
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button className="px-6 py-2 rounded bg-[#184f9f] text-white hover:bg-white hover:text-[#184f9f] hover:border ">
                    Request a Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
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
      </div>
    </div>
  );
};

export default CLimateResilience;
