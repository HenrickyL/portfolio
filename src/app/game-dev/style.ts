"use client";
import styled from "styled-components";

export const GameDevPageSty = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

export const GameHeroSty = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(11rem, 0.7fr);
    gap: 1rem;
    align-items: stretch;
    width: 100%;

    @media screen and (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const GameHeroContentSty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0 1rem;

    h1 {
        max-width: 40rem;
        line-height: 1.05;
    }
`;

export const GameEyebrowSty = styled.span`
    width: fit-content;
    padding: 0.35rem 0.7rem;
    border: 1px solid rgba(127, 88, 255, 0.28);
    border-radius: 999px;
    color: ${p => p.theme.primaryLight};
    background: rgba(127, 88, 255, 0.1);
    font-size: 0.82rem;
    font-weight: 700;
`;

export const GameLeadSty = styled.p`
    max-width: 40rem;
    color: ${p => p.theme.text2};
    font-size: 1.02rem;
    line-height: 1.65;
`;

export const GameMetricGridSty = styled.div`
    display: grid;
    gap: 0.75rem;
    align-content: center;

    @media screen and (max-width: 920px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const GameMetricCardSty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    min-height: 7.5rem;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background-color: ${p => p.theme.backgroundSnd};
    background-image: url(${p => p.theme.noise});

    strong {
        color: ${p => p.theme.primaryLight};
        font-size: 1.65rem;
        line-height: 1;
    }

    span {
        color: ${p => p.theme.text2};
        font-size: 0.88rem;
        line-height: 1.4;
    }
`;

export const GameGridSty = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 1rem;

    @media screen and (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const GamePanelSty = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background-color: ${p => p.theme.backgroundSnd};
    background-image: url(${p => p.theme.noise});
`;

export const GameTitleSty = styled.h2`
    color: ${p => p.theme.text};
    font-size: 1.35rem;
    line-height: 1.25;
`;

export const GameTextSty = styled.p`
    color: ${p => p.theme.text2};
    font-size: 0.96rem;
    line-height: 1.65;
`;

export const GameTagListSty = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
`;

export const GameTagSty = styled.span`
    display: inline-flex;
    align-items: center;
    min-height: 1.6rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(127, 88, 255, 0.26);
    color: ${p => p.theme.text2};
    background: rgba(127, 88, 255, 0.08);
    font-size: 0.78rem;
    line-height: 1.15;
`;

export const GameDevSectionSty = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .content {
        gap: 1rem;
    }
`;

export const GameYearBlockSty = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const GameDevYearSty = styled.h2`
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
