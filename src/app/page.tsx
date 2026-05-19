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
        <h1>{professional.header}</h1>
        

        <div className="content">
            <Card src="/img/curriculum.png" title={professional.curriculumTitle} subtitle={professional.curriculumSubtitle} date="2025" url={professional.curriculum} isDownload/>
        </div>
        <ExperiencesField/>
      </div>
    </div>
  );
};

export default Home;