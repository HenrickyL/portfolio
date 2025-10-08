import { HomeHelper } from "@/components/Helper/HomeHelpert";
import { ExperiencesField } from "@/components/SubPages";
import React from "react";


const Home = () => {
  return (
    <div className="home-styles">
      <ExperiencesField/>
      <HomeHelper/>
    </div>
  );
};

export default Home;