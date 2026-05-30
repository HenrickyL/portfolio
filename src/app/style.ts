"use client";
import Link from "next/link";
import styled from "styled-components";

export const HomePageSty = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow: hidden;
`;

export const HomeHeroSty = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
  gap: 1.5rem;
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: 920px){
    grid-template-columns: 1fr;
  }
`;

export const HomeHeroContentSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  min-height: 28rem;
  padding: 2rem 0;

  h1{
    max-width: 48rem;
    line-height: 1.02;
  }

  @media screen and (max-width: 680px){
    min-height: auto;
    padding: 1rem 0;
  }
`;

export const HomeEyebrowSty = styled.span`
  width: fit-content;
  padding: 0.35rem 0.7rem;
  border: 1px solid rgba(127, 88, 255, 0.28);
  border-radius: 999px;
  color: ${p=>p.theme.primaryLight};
  background: rgba(127, 88, 255, 0.1);
  font-size: 0.82rem;
  font-weight: 700;
`;

export const HomeLeadSty = styled.p`
  max-width: 44rem;
  color: ${p=>p.theme.text2};
  font-size: 1.08rem;
  line-height: 1.65;
`;

export const HomeActionsSty = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const ActionLinkSty = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 700;
  transition: 0.2s ease;
`;

export const HomePrimaryLinkSty = styled(ActionLinkSty)`
  color: ${p=>p.theme.background};
  background: ${p=>p.theme.primaryLight};

  &:hover{
    background: ${p=>p.theme.primary};
  }
`;

export const HomeSecondaryLinkSty = styled(ActionLinkSty)`
  color: ${p=>p.theme.text2};
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);

  &:hover{
    color: ${p=>p.theme.primaryLight};
    border-color: ${p=>p.theme.primary};
  }
`;

export const HomeSideSty = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
  width: 100%;

  & > div:last-child{
    align-self: flex-end;
    max-width: 100%;
  }

  @media screen and (max-width: 920px){
    & > div:last-child{
      align-self: flex-start;
    }
  }
`;

export const HomeMetricGridSty = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media screen and (max-width: 520px){
    grid-template-columns: 1fr;
  }
`;

export const HomeMetricCardSty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 6rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: ${p=>p.theme.backgroundSnd};
  background-image: url(${p=>p.theme.noise});

  strong{
    color: ${p=>p.theme.primaryLight};
    font-size: 1.6rem;
    line-height: 1;
  }

  span{
    color: ${p=>p.theme.text2};
    font-size: 0.86rem;
    line-height: 1.35;
  }
`;

export const HomeContentGridSty = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 920px){
    grid-template-columns: 1fr;
  }
`;

export const HomePanelSty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: ${p=>p.theme.backgroundSnd};
  background-image: url(${p=>p.theme.noise});
`;

export const HomeSectionTitleSty = styled.h2`
  color: ${p=>p.theme.text};
  font-size: 1.35rem;
  line-height: 1.25;
`;

export const HomeTextSty = styled.p`
  color: ${p=>p.theme.text2};
  font-size: 0.96rem;
  line-height: 1.65;
`;

export const HomeSkillGridSty = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media screen and (max-width: 620px){
    grid-template-columns: 1fr;
  }
`;

export const HomeSkillGroupSty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);

  h3{
    color: ${p=>p.theme.text};
    font-size: 0.95rem;
    line-height: 1.25;
  }
`;

export const HomeTagListSty = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const HomeTagSty = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(127, 88, 255, 0.26);
  color: ${p=>p.theme.text2};
  background: rgba(127, 88, 255, 0.08);
  font-size: 0.78rem;
  line-height: 1.15;
`;

export const HomeExpertiseListSty = styled.ul`
  display: grid;
  gap: 0.75rem;
`;

export const HomeExpertiseItemSty = styled.li`
  display: grid;
  gap: 0.3rem;
  padding: 0.9rem 1rem;
  border-left: 3px solid ${p=>p.theme.primaryLight};
  border-radius: 0 8px 8px 0;
  background: rgba(255, 255, 255, 0.04);

  strong{
    color: ${p=>p.theme.text};
    font-size: 0.96rem;
  }

  span{
    color: ${p=>p.theme.text2};
    font-size: 0.88rem;
    line-height: 1.45;
  }
`;

export const HomeExperiencesSty = styled.section`
  width: 100%;
`;
