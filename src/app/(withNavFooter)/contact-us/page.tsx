"use client";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import PageTitle from "@/components/Shared/pageTitle";
import SectionHeading from "@/components/Shared/SectionHeading";
import TextHeading2 from "@/components/Shared/TextHeading2";
import conatct from "../../../assetes/images/cont.jpg";
import Image from "next/image";
import React from "react";
import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaLocationPin } from "react-icons/fa6";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Please fill all required fields correctly.");
  };
  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Contact Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            // { label: "Expertise", href: "/expertise/news" },
          ]}
        />

        <div>
          <Image
            src={conatct}
            height={0}
            width={0}
            className="h-full w-full"
            alt="section image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] container px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Form
              layout="vertical"
              form={form}
              name="contact-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="bg-white "
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your full name" size="large" />
              </Form.Item>

              <Form.Item
                label="Your Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input placeholder="Enter your email" size="large" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input placeholder="Subject" size="large" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea rows={5} placeholder="Write your message..." />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              To learn more about our services and teaming opportunities, please
              get in touch with us. We’re interested in learning more about your
              needs and collaboration opportunities.
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Epsilon Innovation Group Inc.
              </h3>
              <p className="flex items-start gap-2 text-sm mb-3">
                <FaLocationPin className="w-4 h-4 mt-0.5 text-neutral-500" />
                455 Massachusetts Ave NW #165, Washington, DC 20001
              </p>
              <p className="flex items-center gap-2 text-sm mb-3">
                <FaPhone className="w-4 h-4 text-neutral-500" /> +1 (202) 715-3882
              </p>
              <p className="flex items-center gap-2 text-sm">
                <FaMailBulk className="w-4 h-4 text-neutral-500" />
                <a
                  href="mailto:info@epsiloninnovation.com"
                  className="text-blue-700 hover:underline"
                >
                  info@epsiloninnovation.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
