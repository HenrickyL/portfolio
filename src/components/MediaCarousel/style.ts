"use client";
import styled from "styled-components";

export const CarouselRoot = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    width: 100%;
    min-width: 0;
`;

export const Stage = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: calc(100dvh - 16.5rem);
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: ${p => p.theme.black};

    img {
        object-fit: cover;
    }
`;

export const StageHit = styled.button`
    position: absolute;
    inset: 0;
    z-index: 1;
`;

export const StagePlay = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    color: ${p => p.theme.white};
    background: rgba(0, 0, 0, 0.55);
    font-size: 1.1rem;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

export const StageButton = styled.button<{ $side: "previous" | "next"; $disabled?: boolean }>`
    position: absolute;
    top: 50%;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 999px;
    color: ${p => p.theme.white};
    background: rgba(0, 0, 0, 0.45);
    opacity: ${p => p.$disabled ? 0.35 : 1};
    transform: translateY(-50%);
    ${p => p.$side === "previous" ? "left: 0.65rem;" : "right: 0.65rem;"}

    &:hover {
        background: ${p => p.theme.primary};
    }
`;

export const Strip = styled.div`
    display: flex;
    align-items: center;
    gap: 0.45rem;
    width: 100%;
`;

export const Track = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.45rem;
    flex: 1;
    min-width: 0;
`;

export const Thumb = styled.button<{ $active?: boolean }>`
    position: relative;
    flex: 0 0 calc((100% - 0.9rem) / 3);
    height: 4.4rem;
    overflow: hidden;
    border-radius: 8px;
    border: 2px solid ${p => p.$active ? p.theme.primaryLight : "transparent"};
    background: ${p => p.theme.black};

    img {
        object-fit: cover;
    }

    &:hover {
        border-color: ${p => p.theme.primaryLight};
    }
`;

export const ThumbPlay = styled.span`
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 999px;
    color: ${p => p.theme.white};
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.7rem;
`;

export const StripButton = styled.button<{ $disabled?: boolean }>`
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 999px;
    color: ${p => p.theme.text};
    opacity: ${p => p.$disabled ? 0.35 : 1};

    &:hover {
        color: ${p => p.theme.primaryLight};
    }
`;

export const ViewerBackdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 40;
    display: grid;
    place-items: center;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.82);
`;

export const ViewerStage = styled.div`
    position: relative;
    width: min(56rem, 100%);
    height: min(78vh, 34rem);
    overflow: hidden;
    border-radius: 12px;
    background: ${p => p.theme.black};

    img,
    video {
        object-fit: contain;
        background: ${p => p.theme.black};
    }
`;

export const ViewerVideo = styled.video`
    width: 100%;
    height: 100%;
`;

export const ViewerButton = styled.button<{ $side: "previous" | "next" }>`
    position: absolute;
    top: 50%;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 999px;
    color: ${p => p.theme.white};
    background: rgba(0, 0, 0, 0.55);
    transform: translateY(-50%);
    ${p => p.$side === "previous" ? "left: 0.75rem;" : "right: 0.75rem;"}

    &:hover {
        background: ${p => p.theme.primary};
    }
`;

export const ViewerClose = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 4;
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 999px;
    color: ${p => p.theme.white};
    background: rgba(0, 0, 0, 0.55);

    &:hover {
        background: ${p => p.theme.primary};
    }
`;
