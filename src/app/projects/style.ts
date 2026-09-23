"use client";
import styled from "styled-components";

export const ProjectsPageSty = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ProjectsSectionSty = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .content {
    gap: 1rem;
  }
`;

export const ProjectsTitleSty = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${p => p.theme.text};
  font-size: 1.35rem;
  line-height: 1.25;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.14);
  }
`;
