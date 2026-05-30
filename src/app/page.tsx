"use client";
import { Card } from "@/components/Card";
import { ExperiencesField } from "@/components/SubPages";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";
import {
  HomeActionsSty,
  HomeContentGridSty,
  HomeExperiencesSty,
  HomeExpertiseItemSty,
  HomeExpertiseListSty,
  HomeEyebrowSty,
  HomeHeroContentSty,
  HomeHeroSty,
  HomeLeadSty,
  HomeMetricCardSty,
  HomeMetricGridSty,
  HomePageSty,
  HomePanelSty,
  HomePrimaryLinkSty,
  HomeSecondaryLinkSty,
  HomeSectionTitleSty,
  HomeSideSty,
  HomeSkillGridSty,
  HomeSkillGroupSty,
  HomeTagListSty,
  HomeTagSty,
  HomeTextSty,
} from "./style";

const Home = () => {
  const {content:{pages:{professional}}} = useLocalization();
  const { setPageInfo } = usePageInfo();
  const { home } = professional;

  useEffect(() => {
      setPageInfo(professional.info);
  }, [professional, setPageInfo]);

  return (
    <HomePageSty className="home-styles">
      <div className="container">
        <HomeHeroSty>
          <HomeHeroContentSty>
            <HomeEyebrowSty>{home.eyebrow}</HomeEyebrowSty>
            <h1>{home.title}</h1>
            <HomeLeadSty>{home.intro}</HomeLeadSty>
            <HomeActionsSty>
              <HomePrimaryLinkSty href="#experiences">
                {home.primaryAction}
              </HomePrimaryLinkSty>
              <HomeSecondaryLinkSty href={professional.curriculum}>
                {home.secondaryAction}
              </HomeSecondaryLinkSty>
            </HomeActionsSty>
          </HomeHeroContentSty>

          <HomeSideSty>
            <HomeMetricGridSty>
              {home.metrics.map((metric) => (
                <HomeMetricCardSty key={`${metric.value}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </HomeMetricCardSty>
              ))}
            </HomeMetricGridSty>

            <Card
              src="/img/curriculum.png"
              title={professional.curriculumTitle}
              subtitle={professional.curriculumSubtitle}
              date="2025"
              url={professional.curriculum}
              isDownload
            />
          </HomeSideSty>
        </HomeHeroSty>

        <HomeContentGridSty>
          <HomePanelSty>
            <HomeSectionTitleSty>{home.aboutTitle}</HomeSectionTitleSty>
            <HomeTextSty>{home.aboutText}</HomeTextSty>
          </HomePanelSty>

          <HomePanelSty>
            <HomeSectionTitleSty>{home.skillsTitle}</HomeSectionTitleSty>
            <HomeSkillGridSty>
              {home.skillGroups.map((group) => (
                <HomeSkillGroupSty key={group.title}>
                  <h3>{group.title}</h3>
                  <HomeTagListSty>
                    {group.skills.map((skill) => (
                      <HomeTagSty key={skill}>{skill}</HomeTagSty>
                    ))}
                  </HomeTagListSty>
                </HomeSkillGroupSty>
              ))}
            </HomeSkillGridSty>
          </HomePanelSty>
        </HomeContentGridSty>

        <HomePanelSty>
          <HomeSectionTitleSty>{home.expertiseTitle}</HomeSectionTitleSty>
          <HomeExpertiseListSty>
            {home.expertises.map((expertise) => (
              <HomeExpertiseItemSty key={expertise.title}>
                <strong>{expertise.title}</strong>
                <span>{expertise.description}</span>
              </HomeExpertiseItemSty>
            ))}
          </HomeExpertiseListSty>
        </HomePanelSty>

        <HomeExperiencesSty id="experiences">
          <ExperiencesField/>
        </HomeExperiencesSty>
      </div>
    </HomePageSty>
  );
};

export default Home;
