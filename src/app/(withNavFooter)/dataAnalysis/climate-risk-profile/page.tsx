"use client";

import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import energy from "../../../../assetes/images/risk1.jpg";
import economy from "../../../../assetes/images/resilience-logo.png";

import SectionHeading from "@/components/Shared/SectionHeading";
import Link from "next/link";
import TextHeading2 from "@/components/Shared/TextHeading2";
import {  Form, Input, Select } from "antd";

const climateRiskProfile = () => {
  const data = [
    "Water Resilience Data Analytics",
    "Electric Power Resilience Data Analytics",
    "Agriculture Resilience Data Analytics",
    "Forestry Resilience Data Analytics",
    "Urban Resilience Data Analytics",
    "Truism Resilience Data Analytics",
    "Health Resilience Data Analytics",
    "Coastal Resilience Data Analytics",
    "Infrastructure Resilience Data Analytics",
    "Finance Resilience Data Analytics",
  ];

  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Climate Risk Profile"
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
        <SectionHeading heading="CLIMATE RISK PROFILE"></SectionHeading>

        <div className="w-full flex justify-start items-start gap-10">
          <div className="w-full md:w-[70%]">
            <p className="text-neutral-900 my-5">
              In{" "}
              <strong className="font-bold">
                "The Very High Costs of Climate Risk"
              </strong>{" "}
              opinion piece in the New York Times, Mr. Bob Litterman, stated
              that "Before the catastrophic Camp Fire destroyed Paradise,
              Calif., the Pacific Gas and Electric Company was worth more than
              $25 billion. Now its C.E.O. has stepped down and the company,
              which provides natural gas and electricity to 16 million people in
              California, has filed for bankruptcy as it confronts billions of
              dollars in potential liability claims following recent wildfires.
              It is perhaps not the first bankruptcy in which the changing
              climate played a role, but it is almost certainly the largest. And
              no doubt, it won't be the last."
            </p>
            <p className="my-5">
              Please read the complete article titled{" "}
              <span className="text-blue-900">
                <Link href="https://www.nytimes.com/2019/01/29/opinion/climate-wildfires-bankruptcy-california.html">
                  {" "}
                  The Very High Costs of Climate Risk
                </Link>
              </span>
              , at the the New York Times.
            </p>
            <p className="text-neutral-900 mb-5">
              In order to help our clients, our new innovative climate risk
              profile tool, we undertake sector specific climate risk profile
              analysis and devise resilient adaption options.
            </p>
            <TextHeading2 text2="The Resilience Data Analytics Tool that we can provide services include:" />
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
                className="border border-neutral-200 p-1 rounded "
              ></Image>
            </div>
            <div className="flex justify-start items-start gap-5 mt-10">
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
          <div  className="w-full md:w-[30%]">
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

export default climateRiskProfile;
