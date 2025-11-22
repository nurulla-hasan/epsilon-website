import PageTitle from "@/components/Shared/pageTitle";
import Image from "next/image";
import React from "react";
import service from "../../../assetes/images/solar.jpeg";
import ctn from "../../../assetes/images/300_CTCN.jpg";
import energy from "../../../assetes/images/news.jpg";
import safety from "../../../assetes/images/safety.jpg";
import carbon from "../../../assetes/images/267_no_slow_down_in_global_warming.jpg";
import wind from "../../../assetes/images/267_PagetFarmBequia.jpg";
import mill from "../../../assetes/images/600_WaterSupplyClimateProbabilityNY.jpg";
import global from "../../../assetes/images/210_210_9780521182935.jpg";
import SectionHeading from "@/components/Shared/SectionHeading";
import NormalParagraph from "@/components/Shared/NormalParagraph";
import TextHeading2 from "@/components/Shared/TextHeading2";
import Link from "next/link";

const News = () => {
  const services = [
    "Wind, Solar (PV & CSP), Hydro, Biomass, Geothermal, Waste to Energy",
    "Resources Assessment and Potential Evaluation",
    "Feasibility Studies",
    "Low Carbon Development and Energy Planning Analysis",
    "Clean Energy Investment Analysis",
    "Greenhouse Gas (GHG) Emission Reduction Studies",
    "Energy Efficiency",
    "Weatherization Performance Evaluation",
    "Energy Audit and Performance Evaluation",
    "Wind and Solar Seawater Reverse Osmosis (SWRO) System Design",
    "Renewable energy powered intensive aquaculture and ice-making system design",
    "Wind and solar energy powered telecommunication towers system design",
    "Off-Grid Rural Electrification Project Development",
  ];

  return (
    <div className="mt-5">
      <div>
        <PageTitle
          pageHeading="News"
          breadcrumbs={[
            { label: "Home", href: "/" },
            // { label: "Expertise", href: "/expertise/news" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <SectionHeading heading="NEWS" />

            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Epsilon Innovation Group has won DoE SBIR to design a Floating Solar-Powered Aeration System for Aquaculture"></TextHeading2>
                <NormalParagraph p="Epsilon Innovation Group has won the highly competitive Department of Energyï¿½s Small Business Innovation Research (SBIR) to design a Floating Solar-Powered Aeration System for Aquaculture. Using the funding, Epsilon Innovation Groupï¿½s team is developing a self-sufficient, small-scale, floating solar aeration system coupled with energy storage that improves water quality and protects underwater organisms and habitats. This technology will supply dissolved oxygen to maintain fish and pond health. The technology could further be used for wastewater treatment and electricity production and reduce water evaporation in lakes and dams."></NormalParagraph>
              </div>
              <div className="w-96 ">
                <Image
                  src={service}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain  "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Epsilon Innovation Group is now a memeber of the Climate Technology Center and Network (CTCN)"></TextHeading2>
                <p className="text-neutral-800">
                  The{" "}
                  <span className="text-blue-900">
                    <Link href="">CTCN </Link>
                  </span>
                  is the operational arm of the UNFCCC Technology Mechanism,
                  which promotes the accelerated transfer of environmentally
                  sound technologies for low carbon and climate resilient
                  development in developing countries.
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={ctn}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain  "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Safety and Reliability of Complex Engineered Systems: ESREL 2015 Proceeings Now Available"></TextHeading2>
                <p className="text-neutral-800">
                  The{" "}
                  <span className="text-blue-900 underline">
                    <Link href="https://www.routledge.com/Safety-and-Reliability-of-Complex-Engineered-Systems-ESREL-2015/Podofillini-Sudret-Stojadinovic-Zio-Kroger/p/book/9781138028791">
                      Safety and Reliability of Complex Engineered Systems
                      proceedings{" "}
                    </Link>
                  </span>
                  of the 25th European Safety and Reliability Conference (ESREL
                  2015), held 7-10 September 2015 in Zurich, Switzerland,
                  containes about 570 papers accepted for presentation at the
                  conference. These contributions focus on theories and methods
                  in the area of risk, safety and reliability, and their
                  applications to a wide range of industrial, civil and social
                  sectors. Dr. Gilu's paper titled "Water supply investment
                  decision-making under climate change variability ï¿½ New York
                  City case study", is now available in the proceedings book.
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={safety}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="No Slowdown in Global Warming"></TextHeading2>
                <p className="text-neutral-800">
                  The{" "}
                  <span className="text-blue-900 underline">
                    <Link href="">
                      Safety and Reliability of Complex Engineered Systems
                      proceedings{" "}
                    </Link>
                  </span>
                  shows that the rate of global warming has continued, and there
                  has not been slow down. Using the latest global surface
                  temperature data, a team of scientists from the National
                  Oceanic and Atmospheric Administration's{" "}
                  <span className="text-blue-800 underline">
                    {" "}
                    <Link href="https://www.noaa.gov/index.html"> (NOAA)</Link>
                  </span>{" "}
                  and National Centers for Environmental Information{" "}
                  <span className="text-blue-800 underline">
                    {" "}
                    <Link href="https://www.ncei.noaa.gov/"> (NCEI)</Link>
                  </span>{" "}
                  published their findings on June 4, 2015 on the journal of{" "}
                  <span className="text-blue-800 underline">
                    {" "}
                    <Link href="https://www.science.org/doi/10.1126/science.aaa5632">
                      sciences
                    </Link>
                  </span>{" "}
                  .
                  <span className="italic">
                    {" "}
                    Click on the right graph for detailed observed global
                    surface temperature data, which continues to increase
                    dramatically.
                  </span>
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={carbon}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="PV-Hybrid Powered Desalination System in the News"></TextHeading2>
                <p className="text-neutral-800">
                  Renewable-grid hybrid desalination system designed by Epsilon
                  Innovations Group featured in the
                  <span className="text-blue-900 underline">
                    <Link href="https://weadapt.org/knowledge-base/ecosystem-based-adaptation/special-programme-for-adaptation-to-climate-change-spacc">
                      weADAPT
                    </Link>
                  </span>
                  of the Stockholm Environmental Institute titled
                  "Implementation of adaptation measures to address the absence
                  of fresh water and coastal vulnerabilities in Bequia, St.
                  Vincent and the Grenadines." For further information, please
                  visit the Featured Services section of this website.
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={wind}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Dr. Gilau to Present a Paper on Climate Change and Critical Infrastructure at ESREL Conference"></TextHeading2>
                <p className="text-neutral-800">
                  Dr. Gilau will be presenting a paper titled Water supply
                  investment decision-making under climate change variability
                  New York City case study at the annual European Safety and
                  Reliability Conference (ESREL) to be held in Zurich,
                  Switzerland from 7-10, September 2015 (ESREL 2015). The case
                  study, which is being developed using the publicly available
                  data, provides an insight on how water conservation measures
                  could sustentailly help mega cities like NY to meet their
                  water demand and maintain their resilience to droughts. Dr.
                  Gilaus presentation will be in climate change and critical
                  infrastructure thematic area.
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={mill}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
              <div className="md:w-2/3">
                <TextHeading2 text2="Global Energy Assessment (GEA) Report Launched"></TextHeading2>
                <p className="text-neutral-800">
                  Dr. Gilau has served as a member of the worlds leading
                  innovative energy experts in research, academia, business,
                  industry and policy during the preparation of the Global
                  Energy Assessment (GEA), launched in 2012 at the Rio+20
                  summit. The study was coordinated by the International
                  Institute for Applied Systems Analysis (IIASA), Laxenburg,
                  Austria. Dr. Gilau is one of the lead authors in Chapter 6:
                  Energy and Economy of the GEA report.
                </p>
                <p>
                  The report is available at the{" "}
                  <span className="text-blue-800 underline">
                    <Link href="">IIASA</Link>
                  </span>{" "}
                  website and is highly recommended to acquire it for your self
                  and institution.
                </p>
              </div>
              <div className="w-96 ">
                <Image
                  src={global}
                  alt="Transmission Image"
                  className="rounded-lg  h-80 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
