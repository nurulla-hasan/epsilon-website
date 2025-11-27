import Banner from "@/components/HomeContent/Banner";
import ClimateResilience from "@/components/HomeContent/ClimateResilience";
import FeaturedSolutions from "@/components/HomeContent/FeaturedSolutions";
import Welcome from "@/components/HomeContent/Welcome";
import AIResilienceList from "@/components/HomeContent/AIResilienceList";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <FeaturedSolutions />
      <AIResilienceList />
      <ClimateResilience />
    </div>
  );
};

export default HomePage;
