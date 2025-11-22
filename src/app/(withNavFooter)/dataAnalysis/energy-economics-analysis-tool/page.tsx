"use client";
import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import energy from "../../../../assetes/images/tool.jpg";
import ocean from "../../../../assetes/images/Blue ocean-economy-to-2030.jpg";
import sea from "../../../../assetes/images/Wave Energy.jpg";
import SectionHeading from "@/components/Shared/SectionHeading";
import TextHeading from "@/components/Shared/TextHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../../../../assetes/images/257_2EnergyAnalysisLowCarbon.jpg";
import slide2 from "../../../../assetes/images/NatureBasedSolutionsApril28.jpg";
import slide3 from "../../../../assetes/images/tool.jpg";
import slide4 from "../../../../assetes/images/climateslider.jpg";
import slide5 from "../../../../assetes/images/energy.jpg";
import slide6 from "../../../../assetes/images/3.jpg";

type Slide = {
  image: any;
  alt: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};
const slides: Slide[] = [
  {
    image: slide1,
    alt: "Slide 1",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    image: slide2,
    alt: "Slide 2",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    image: slide3,
    alt: "Slide 3",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    image: slide4,
    alt: "Slide 4",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    image: slide5,
    alt: "Slide 5",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    image: slide6,
    alt: "Slide 6",
    title: "",
    subtitle: "",
    ctaLabel: "",
    ctaHref: "",
  },
];

const EnergyEconomicAnalysis = () => {
  const blueEconomyServices = [
    "Solar Photovoltaic (PV)",
    "Floating Photovoltaic (FPV)",
    "Concentrated Solar Power (CSP)",
    "Wind Energy",
    "Wave Energy",
    "Tidal Energy",
    "Hydropower",
    "Waste to Energy",
    "Biomass",
    "Simple cycle gas turbine (SCGT)",
    "Combined Cycle Gas Turbine (CCGT)",
  ];

  const benefitsRight = [
    "Pumped Hydro Energy Storage (PHS)",
    "Compressed Air Energy Storage (CAES)",
    "Fly-Wheel Energy Storage (FES)",
    "Hydrogen Energy Storage (HES)",
    "Vanadium Redox-Flow",
    "Gravity Energy Storage",
    "Sensible Thermal Energy Storage",
    "Latent Thermal Energy Storage",
    "Thermochemical Storage",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="Energy Economic Analysis Services and Tools"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Data Analysis", href: "/expertise/blue-economy" },
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
        <SectionHeading heading="Energy Economic Analysis Services and Tools" />

        <div className="flex flex-col gap-20 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-2/3">
              <TextHeading text="Levelized Cost of Electricity Analysis (LCOE) Tool:" />
              <p className="text-gray-800 mb-4">
                Using the most up-to-data energy technology costs and adapting
                to your specific location, we provide a very quick comparative
                LCOE analysis to help you make cost-effective decisions. Our
                tool computes LCOE of several energy technologies including:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {blueEconomyServices.map((item, index) => (
                  <li key={index} className="text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-[600px] flex justify-center">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                centeredSlides
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                className="hero-swiper w-full"
              >
                {slides.map((s, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[72vh] min-h-[420px] max-h-[880px] w-full">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        className="object-cover rounded-md border border-gray-300"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <Image
                src={ocean}
                alt="Blue Economy illustration"
                className="rounded-md border border-gray-300 p-2"
              /> */}
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-[600px] flex justify-start items-start ">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                centeredSlides
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                className="hero-swiper w-full"
              >
                {slides.map((s, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[72vh] min-h-[420px] max-h-[880px] w-full">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        className="object-cover rounded-md border border-gray-300"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Image
                src={sea}
                alt="Wave Energy illustration"
                className="rounded-md border border-gray-300 p-2 object-contain h-auto w-full"
                priority
              /> */}
            </div>

            <div className="md:w-2/3">
              <SectionHeading heading="Levelized Cost of Battery Storage (LCOS) Tool:" />

              <p className="text-gray-800 mb-5">
                In order to narrow the intermittency gap and mismatch of the
                huge renewable electricity production in the grid, advanced and
                matured energy storage systems are in need for operation the
                renewable energy powered systems in the grid system seamlessly.
                We help in choosing cost-effective electricity storage
                applicable for your need. Using the most up-to-date LCOS tool,
                we can help you analyze the following top energy storage
                technologies including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {benefitsRight.map((item, index) => (
                  <li key={index} className="text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-blue-900 font-semibold my-10">
                To learn more about our energy economic analysis services,
                please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyEconomicAnalysis;
