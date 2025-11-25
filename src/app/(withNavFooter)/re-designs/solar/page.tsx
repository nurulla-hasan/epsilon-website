"use client";

import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/rest.jpg";
import srw from "../../../../assetes/images/277_2SWRO.jpg";
import rowing from "../../../../assetes/images/rowing-uts.png";
import clean from "../../../../assetes/images/fpvuse.jpeg";

import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";
import TextHeading2 from "@/components/Shared/TextHeading2";
import { Form, Input, Select } from "antd";
import NormalParagraph from "@/components/Shared/NormalParagraph";

const Solar = () => {
  const data = [
    " Renewable energy powered seawater reverse osmosis system",
    "Renewable energy powered aquaculture",
    "Renewable energy powered ice-making plant",
    "Off-grid hybrid renewable energy power design",
  ];

  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Renewable Energy Powered System Designs"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Data Analytics Tools"},
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
        <SectionHeading heading="RENEWABLE ENERGY POWERED SYSTEM DESIGNS"></SectionHeading>

        <div className="w-full flex justify-start items-start gap-10">
          <div className="w-full md:w-[70%]">
            <div className="">
              <NormalParagraph p="One of Epsilon Innovation Group's core innovative research applications is designing renewable energy (Wind and Solar) powered system designs." />
            </div>

            <TextHeading2 text2="Some of the core renewable energy powered system design innovations include:" />
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
            <SectionHeading heading="OUR TECHNOLOGY INNOVATIONS"></SectionHeading>
            <TextHeading2 text2="Floating Solar Photovoltaic Powered Aeration System (FPV-AS)"></TextHeading2>
            <NormalParagraph p="Epsilon Innovation Group has developed a self-sufficient, small-scale, floating solar aeration system coupled with energy storage that improves water quality and protects underwater organisms and habitats. This technology will supply dissolved oxygen to maintain fish and pond health. The floating solar aeration system could also be used for wastewater treatment and power generation."></NormalParagraph>
            <p className=" font-bold my-5">
              Interested to use our technology for your ponds, lakes,
              aquaculture, wastewater treatment, and power generation? We can
              help. Please
              <span>
                {" "}
                <Link
                  href="/contact-us"
                  className="underline cursor-pointer text-blue-900"
                >
                  {" "}
                  contact us
                </Link>
              </span>
              .
            </p>
            <TextHeading2 text2="Renewable Energy Powered Sea Water Reverse Osmosis System (RE-SWRO)"></TextHeading2>
            <NormalParagraph p="Epsilon Innovation Group have designed a renewable energy (wind and solar) powered SWRO funded by the World Bank and implemented by the Caribbean Community Climate Change Center (CCCCC) in Belize. Epsilon Innovation Group has complete SWRO system design, solar and wind power potential assessment and renewable energy powered SWRO system design. Based on Epsilon's innovative design, the World Bank and the CCCCC have implemented the PV powered SWRO system in which the PV is connected to the grid is operational serving potable water to the small fishing and whaling community of Paget Farms in Bequia."></NormalParagraph>
            <p className=" font-bold my-5">
              Interested in using our technology for desalination both for
              drinking and agricultural purposes? We can help. Please
              <span>
                {" "}
                <Link
                  href="/contact-us"
                  className="underline cursor-pointer text-blue-900"
                >
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
              className=" my-5 border border-neutral-200 p-1 rounded object-contain h-full w-full"
            ></Image>
            <Image
              src={srw}
              height={0}
              width={0}
              alt="climate"
              className=" my-5 border border-neutral-200 p-1 rounded object-contain h-full w-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solar;
