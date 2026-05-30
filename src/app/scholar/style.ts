"use client";
import styled from "styled-components";

export const ScholarPageSty = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ScholarHeroSty = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);
  gap: 1rem;
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: 920px){
    grid-template-columns: 1fr;
  }
`;

export const ScholarHeroContentSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  min-height: 23rem;
  padding: 1.5rem 0;

  h1{
    max-width: 46rem;
    line-height: 1.05;
  }

  @media screen and (max-width: 680px){
    min-height: auto;
    padding: 0.75rem 0;
  }
`;

export const ScholarEyebrowSty = styled.span`
  width: fit-content;
  padding: 0.35rem 0.7rem;
  border: 1px solid rgba(127, 88, 255, 0.28);
  border-radius: 999px;
  color: ${p=>p.theme.primaryLight};
  background: rgba(127, 88, 255, 0.1);
  font-size: 0.82rem;
  font-weight: 700;
`;

export const ScholarLeadSty = styled.p`
  max-width: 42rem;
  color: ${p=>p.theme.text2};
  font-size: 1.02rem;
  line-height: 1.65;
`;

export const ScholarMetricGridSty = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  align-self: center;
  width: 100%;

  @media screen and (max-width: 520px){
    grid-template-columns: 1fr;
  }
`;

export const ScholarMetricCardSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: 7.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: ${p=>p.theme.backgroundSnd};
  background-image: url(${p=>p.theme.noise});

  strong{
    color: ${p=>p.theme.primaryLight};
    font-size: 1.65rem;
    line-height: 1;
  }

  span{
    color: ${p=>p.theme.text2};
    font-size: 0.88rem;
    line-height: 1.4;
  }
`;

export const ScholarGridSty = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1rem;

  @media screen and (max-width: 920px){
    grid-template-columns: 1fr;
  }
`;

export const ScholarPanelSty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: ${p=>p.theme.backgroundSnd};
  background-image: url(${p=>p.theme.noise});
`;

export const ScholarTitleSty = styled.h2`
  color: ${p=>p.theme.text};
  font-size: 1.35rem;
  line-height: 1.25;
`;

export const ScholarTextSty = styled.p`
  color: ${p=>p.theme.text2};
  font-size: 0.96rem;
  line-height: 1.65;
`;

export const ScholarAreaListSty = styled.ul`
  display: grid;
  gap: 0.75rem;
`;

export const ScholarAreaItemSty = styled.li`
  display: grid;
  gap: 0.35rem;
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

export const ScholarTagListSty = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const ScholarTagSty = styled.span`
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

export const ScholarCardsSty = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .content{
    gap: 1rem;
  }
`;
