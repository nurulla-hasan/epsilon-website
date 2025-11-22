import Banner from "@/components/HomeContent/Banner";
import ClimateResilience from "@/components/HomeContent/ClimateResilience";
import FeaturedSolutions from "@/components/HomeContent/FeaturedSolutions";
import Welcome from "@/components/HomeContent/Welcome";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <FeaturedSolutions />
      <ClimateResilience />
    </div>
  );
};

export default HomePage;
