"use client";
import Link from "next/link";
import styled from "styled-components";

export const GameDetailPageSty = styled.main`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    max-height: 100%;

    @media screen and (max-width: 800px) {
        height: auto;
    }
`;

export const GameTopSty = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
`;

export const GameTitleRowSty = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
`;

export const GameBackLink = styled(Link)`
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 2rem;
    height: 2rem;
    color: ${p => p.theme.gray};

    &:hover {
        color: ${p => p.theme.primaryLight};
    }
`;

export const GameHeaderSty = styled.header`
    min-width: 0;

    h1 {
        font-size: 1.85rem;
        line-height: 1.05;
    }
`;

export const GameMetaSty = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.45rem;
`;

export const GameTagSty = styled.span`
    display: inline-flex;
    align-items: center;
    min-height: 1.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(127, 88, 255, 0.28);
    color: ${p => p.theme.primaryLight};
    background: rgba(127, 88, 255, 0.1);
    font-size: 0.78rem;
`;

export const GameYearSty = styled.span`
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    min-height: 1.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: ${p => p.theme.backgroundSnd};
    background-image: url(${p => p.theme.noise});

    strong {
        color: ${p => p.theme.primaryLight};
        font-size: 0.95rem;
    }

    span {
        color: ${p => p.theme.text3};
        font-size: 0.72rem;
    }
`;

export const GameToolsSty = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    min-height: 1.7rem;
    padding: 0 0.65rem;
    border-radius: 8px;
    border: 1px solid rgba(127, 88, 255, 0.28);
    color: ${p => p.theme.primaryLight};
    background: rgba(127, 88, 255, 0.1);
    font-size: 1rem;
`;

export const GameInfoLinkSty = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: ${p => p.theme.text};
    background-color: ${p => p.theme.backgroundSnd};
    background-image: url(${p => p.theme.noise});
    font-size: 0.82rem;

    &:hover {
        color: ${p => p.theme.primaryLight};
    }
`;

export const GameBoardSty = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(16rem, 0.85fr);
    gap: 0.85rem;
    align-items: stretch;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const GameSheetSty = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    min-width: 0;
    min-height: 0;
    padding: 0.95rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    background-color: ${p => p.theme.backgroundSnd};
    background-image: url(${p => p.theme.noise});
    overflow: auto;
`;

export const GameBlockSty = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    & + & {
        padding-top: 0.85rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
`;

export const GamePanelTitleSty = styled.h2`
    color: ${p => p.theme.text3};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.2;
    text-transform: uppercase;
`;

export const GameTextSty = styled.p`
    color: ${p => p.theme.text2};
    font-size: 0.92rem;
    line-height: 1.45;
`;

export const GameMechanicSty = styled.p`
    color: ${p => p.theme.text2};
    font-size: 0.88rem;
    line-height: 1.35;

    strong {
        color: ${p => p.theme.text};
        font-weight: 700;
    }
`;

export const GameSpecGridSty = styled.dl`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.55rem 0.75rem;
    margin: 0;
`;

export const GameSpecSty = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    dt {
        color: ${p => p.theme.text3};
        font-size: 0.72rem;
    }

    dd {
        margin: 0;
        color: ${p => p.theme.text};
        font-size: 0.88rem;
    }
`;

export const GameReferenceLineSty = styled.p`
    margin-top: auto;
    color: ${p => p.theme.text3};
    font-size: 0.78rem;
    line-height: 1.35;
`;
