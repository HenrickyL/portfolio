"use client";
import { Theme } from "@/types/theme";
import styled from "styled-components";

export const UrlLinkSty = styled.a<{theme: Theme}>`
  color: ${({ theme }) => theme.link || theme.primary};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHover || theme.primaryLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
   &:visited {
    color: ${({ theme }) => theme.linkVisited || theme.secondary};
  }
`;