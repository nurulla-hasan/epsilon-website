import React from "react";
import tech from "../../assetes/images/texh.jpeg";
import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="font-sans mx-auto max-w-7xl py-20 px-6 text-center md:text-left font-customFont text-primary">
        <h2 className=" text-[2.6em] leading-[54px] text-[#121214] font-semibold tracking-[-1px] mb-8 text-center">
          Welcome to Epsilon Innovation Group
        </h2>
        <p className="text-2xl  font-extralight leading-[1.4] mb-5 text-center font-sans">
          Epsilon Innovation Group is a consulting and research and development
          (R&D) firm specializing in energy, climate change, nature-based
          solutions, blue economy, Artificial intelligence (AI) powered
          resilience data analytics, policy, and risk analysis. We are well
          equipped with strong analytical skills to provide answers to our
          client's complex technical and policy challenges.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20">
        {[
          {
            title: "AI-Powered Solutions",
            description:
              "Leverage cutting-edge AI analytics to drive resilient business strategies.",
          },
          {
            title: "Sustainable Innovation",
            description:
              "Implement nature-based and energy-focused solutions for long-term impact.",
          },
          {
            title: "Policy & Risk Analysis",
            description:
              "Comprehensive analysis to navigate complex technical and regulatory challenges.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={tech}
          alt="Tech background"
          fill
          className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        <div className="absolute text-center px-6 md:px-0 max-w-5xl">
          <h1 className="font-sans text-4xl  font-extrabold text-white drop-shadow-lg">
            Building Resilient Communities Through Innovation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium drop-shadow-md">
            Let us help you achieve your goals with innovative solutions in
            energy, climate change, blue economy, AI analytics, policy & risk
            analysis.
          </p>
          {/* <Link href="/">
            <button className="cursor-pointer mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
              Learn More
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
