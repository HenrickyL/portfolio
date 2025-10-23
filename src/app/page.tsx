"use client";
import { Card } from "@/components/Card";
import { ExperiencesField } from "@/components/SubPages";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import React, { useEffect } from "react";

const Home = () => {
  const {content:{pages:{professional}}} = useLocalization();
  const { setPageInfo } = usePageInfo();  
  useEffect(() => {
      setPageInfo(professional.info);
  }, [professional]);

  return (
    <div className="home-styles">
      <div className="container">

        <div>
          <Card src="Recipe.png" title="Recipe for Ruin" subtitle="Game" date="2025" url="https://www.instagram.com/perikan_studio/"/>
          <Card src="Recipe.png" title="Recipe for Ruin" subtitle="Game" date="2025" url="/projects" />
          <Card src="Recipe.png" title="Recipe for Ruin" subtitle="Game" date="2025"/>
        </div>
        <h1>{professional.header}</h1>
        <ExperiencesField/>
      </div>
    </div>
  );
};

export default Home;