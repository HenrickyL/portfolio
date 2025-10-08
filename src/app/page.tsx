import { HomeHelper } from "@/components/Helper/HomeHelpert";
import { ExperiencesField } from "@/components/SubPages";
import React from "react";


const Home = () => {
  return (
    <div className="home-styles">
      <HomeHelper/>
      <div className="container">
        <h1>Profissional</h1>
        <ExperiencesField/>
      </div>
    </div>
  );
};

export default Home;