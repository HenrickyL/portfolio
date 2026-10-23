"use client";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const genreMove = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

export const GameDetailPageSty = styled.main`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        height: auto;
        overflow: visible;
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

export const GamePathSty = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    min-width: 0;
    color: ${p => p.theme.text3};
    font-size: 0.84rem;

    a:hover {
        color: ${p => p.theme.primaryLight};
    }

    span:last-child {
        color: ${p => p.theme.text2};
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
    border: 1px solid rgba(127, 88, 255, 0.45);
    color: #d7c4ff;
    background: rgba(127, 88, 255, 0.16);
    font-size: 0.78rem;
    white-space: nowrap;
`;

export const GameCategorySty = styled(GameTagSty)`
    border-color: rgba(255, 176, 122, 0.5);
    color: #ffc89a;
    background: rgba(255, 154, 82, 0.12);
`;

export const GameToolsSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.45rem;
    flex: 0 0 auto;
`;

export const GameToolSty = styled.span`
    position: relative;
    display: grid;
    place-items: center;
    width: 1.85rem;
    height: 1.85rem;

    img {
        width: 1.45rem;
        height: 1.45rem;
        object-fit: contain;
    }

    em {
        position: absolute;
        right: 0;
        bottom: calc(100% + 0.35rem);
        z-index: 2;
        padding: 0.15rem 0.4rem;
        border-radius: 4px;
        color: ${p => p.theme.text};
        background: rgba(0, 0, 0, 0.82);
        font-size: 0.72rem;
        font-style: normal;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
    }

    &:hover em {
        opacity: 1;
    }
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
    flex: 1;
    min-height: 0;
    align-items: stretch;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const GameSheetSty = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 0;
    min-height: 0;
    height: 100%;
    padding: 0.85rem 0.95rem 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    overflow: hidden;

    @media screen and (max-width: 800px) {
        height: auto;
        overflow: visible;
    }
`;

export const GameSheetBodySty = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.85rem;
    min-height: 0;
    overflow-y: auto;
    padding-right: 0.15rem;
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
    color: ${p => p.theme.text};
    font-size: 0.98rem;
    line-height: 1.55;
`;

export const GameMechanicGridSty = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
`;

export const GameMechanicTagSty = styled.span`
    display: inline-flex;
    align-items: center;
    min-height: 1.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: ${p => p.theme.text2};
    background: rgba(255, 255, 255, 0.05);
    font-size: 0.78rem;
    line-height: 1.2;
`;

export const GameMechanicSty = styled.p`
    color: ${p => p.theme.text3};
    font-size: 0.84rem;
    line-height: 1.4;

    strong {
        color: ${p => p.theme.text2};
        font-weight: 600;
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
        color: ${p => p.theme.text2};
        font-size: 0.86rem;
    }
`;

export const GameGenreListSty = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);

    &:hover > div {
        animation-play-state: paused;
    }
`;

export const GameGenreTrackSty = styled.div`
    display: flex;
    flex: 0 0 auto;
    gap: 0.4rem;
    width: max-content;
    animation: ${genreMove} 14s linear infinite;
`;

export const GameSheetFootSty = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    flex: 0 0 auto;
    min-width: 0;
    margin-top: auto;
    padding-top: 0.35rem;
`;

export const GameReferenceLineSty = styled.p`
    min-width: 0;
    color: ${p => p.theme.text3};
    font-size: 0.75rem;
    line-height: 1.35;
`;
