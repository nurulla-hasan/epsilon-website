"use client";
import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React, { useState } from "react";
import { FaMap, FaPhone, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button, Form, Input, notification } from "antd";
import TextArea from "antd/es/input/TextArea";

// Animation variants
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContactUs = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    notification.success({
      message: "Message Sent!",
      description: "Your message has been sent successfully. We'll respond within 24 hours.",
      placement: "topRight",
    });
    form.resetFields();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Validation Error",
      description: "Please fill all required fields correctly.",
      placement: "topRight",
    });
  };

  const contactInfo = [
    {
      icon: FaLocationPin,
      title: "Address",
      content: "455 Massachusetts Ave NW #165, Washington, DC 20001",
      color: "text-blue-600"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+1 (202) 715-3882",
      color: "text-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@epsiloninnovation.com",
      color: "text-purple-600",
      href: "mailto:info@epsiloninnovation.com"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      color: "text-orange-600"
    }
  ];

  const services = [
    {
      icon: FaHeadset,
      title: "Customer Support",
      description: "Dedicated support team ready to assist you"
    },
    {
      icon: FaEnvelope,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: FaMap,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise"
    }
  ];
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <motion.div 
        className="relative h-screen max-h-[700px] overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Background Layers */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            className="object-cover scale-110"
            alt="Contact Us Hero Background"
            priority
          />
        </div>
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              className="max-w-2xl"
              variants={slideInLeft}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                variants={scaleIn}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">We're here to help</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Get in
                <motion.span 
                  className="block text-transparent bg-clip-text bg-linear-to-r from-white to-white/80"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  Touch
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Transform your ideas into reality with our innovative solutions. 
                Let's discuss how we can bring your vision to life.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Conversation
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Contact Cards */}
            <motion.div 
              className="hidden lg:block"
              variants={slideInRight}
            >
              <div className="space-y-4">
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  variants={scaleIn}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Call Us</p>
                      <p className="text-white font-semibold">+1 (202) 715-3882</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  variants={scaleIn}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email Us</p>
                      <p className="text-white font-semibold">info@epsiloninnovation.com</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  variants={scaleIn}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaLocationPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Visit Us</p>
                      <p className="text-white font-semibold">Washington, DC 20001</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            id="contact-form"
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {submitted && (
                <motion.div 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-800 font-medium">
                    ✓ Thank you for your message! We'll respond within 24 hours.
                  </p>
                </motion.div>
              )}
              
              <Form
                layout="vertical"
                form={form}
                name="contact-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: "Please enter your first name" }]}
                  >
                    <Input placeholder="Enter your first name" size="large" className="rounded-lg" />
                  </Form.Item>
                  
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: "Please enter your last name" }]}
                  >
                    <Input placeholder="Enter your last name" size="large" className="rounded-lg" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Email Address"
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
                  <Input placeholder="Enter your email" size="large" className="rounded-lg" />
                </Form.Item>

                <Form.Item
                  label="Company"
                  name="company"
                >
                  <Input placeholder="Your company name (optional)" size="large" className="rounded-lg" />
                </Form.Item>

                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="What is this regarding?" size="large" className="rounded-lg" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea 
                    rows={5} 
                    placeholder="Tell us more about your project or inquiry..."
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="h-12 px-8 bg-primary hover:bg-primary/90 rounded-lg font-medium"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Company Info Card */}
            <motion.div 
              className="bg-linear-to-br from-primary to-primary/80 rounded-2xl p-8 text-white"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">
                Epsilon Innovation Group Inc.
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Leading the way in innovative solutions for renewable energy, 
                water treatment, and sustainable infrastructure worldwide.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      variants={fadeInUp}
                    >
                      <Icon className="w-5 h-5 mt-0.5 text-white/80 shrink-0" aria-hidden />
                      <div className="flex-1">
                        <p className="font-medium text-white/80 text-sm">{info.title}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-white/80 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-white">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Services Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              
              <div className="space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      variants={fadeInUp}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
