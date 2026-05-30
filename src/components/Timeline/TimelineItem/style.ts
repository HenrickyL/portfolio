"use client";
import styled, {keyframes} from "styled-components";

type ItemContainerProp = {
    $alternate?: boolean
}

const TimelineItemMoveDownSty = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-12px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

const TimelineTagsMoveSty = keyframes`
    0%{ transform: translateX(0); }
    100%{ transform: translateX(-50%); }
`

export const TimelineHeaderSty = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: start;
    width: 100%;
`

export const TimelineExpandButtonSty = styled.button<{$isOpen: boolean}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: ${prop=>prop.theme.text3};
    cursor: pointer;
    transition: 0.2s ease;

    svg{
        width: 1.35rem;
        height: 1.35rem;
        transform: rotate(${prop=>prop.$isOpen ? "180deg" : "0deg"});
        transition: transform 0.25s ease;
    }

    &:hover{
        border-color: ${prop=>prop.theme.primary};
        color: ${prop=>prop.theme.primaryLight};
        background: rgba(127, 88, 255, 0.08);
    }
`

export const TimelineItemTextBoxSty = styled.div<{$alternate?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem 1.125rem;
    background-image: url(${(props) => props.theme.noise});
    background-color: ${prop=>prop.theme.backgroundSnd};
    position: relative;
    z-index: 2;
    border-radius: 8px;
    gap: 0.65rem;
    border: 1px solid transparent;
    transition: 0.25s ease;
    width: 100%;
    

    h2{
        margin: 0;
        font-size: 1.15rem;
        line-height: 1.25;
        font-weight: 700;
        color: ${prop=>prop.theme.text2};
    }

    h3{
        margin: 0.2rem 0 0;
        font-size: 0.95rem;
        line-height: 1.35;
        font-weight: 600;
        color: ${prop=>prop.theme.text};
    }

    &::after{
        content: '';
        width: 0;
        position: absolute;
        top: 1.5rem;
        ${prop=>prop.$alternate ? `
            left: -12px;
            border-right: 12px solid ${prop.theme.backgroundSnd};
        ` : `
            right: -12px;
            border-left: 12px solid ${prop.theme.backgroundSnd};
        `}
        z-index: 1;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
    }
`

export const TimelineItemContainer = styled.div<{$badge?: boolean}>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    color: ${prop=>prop.theme.text3};
    font-size: 0.82rem;
    line-height: 1.2;

    ${({ $badge, theme }) => $badge && `
        padding: 0.28rem 0.55rem;
        border-radius: 999px;
        background: rgba(127, 88, 255, 0.12);
        color: ${theme.text2};
    `}

    svg{
        flex: 0 0 auto;
        color: ${prop=>prop.theme.primaryLight};
    }
`

export const TimelineInfoSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
`

export const TimelineTagListSty = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);

    &:hover > div{
        animation-play-state: paused;
    }
`

export const TimelineTagTrackSty = styled.div`
    display: flex;
    flex: 0 0 auto;
    gap: 0.4rem;
    width: max-content;
    animation: ${TimelineTagsMoveSty} 14s linear infinite;
`

export const TimelineTagSty = styled.span`
    display: inline-flex;
    align-items: center;
    min-height: 1.5rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(127, 88, 255, 0.28);
    color: ${prop=>prop.theme.text2};
    background: rgba(255, 255, 255, 0.04);
    font-size: 0.76rem;
    line-height: 1.15;
    white-space: nowrap;
`

export const TimelineDescriptionSty = styled.div<{$isOpen: boolean}>`
    display: grid;
    grid-template-rows: ${prop=>prop.$isOpen ? "1fr" : "0fr"};
    opacity: ${prop=>prop.$isOpen ? 1 : 0};
    transition: grid-template-rows 0.28s ease, opacity 0.2s ease;
    width: 100%;
    overflow: hidden;

    p, a{
        min-height: 0;
        overflow: hidden;
    }

    p{
        margin: 0;
        padding-top: 0.2rem;
        color: ${prop=>prop.theme.text2};
        font-size: 0.9rem;
        line-height: 1.55;
    }

    a{
        width: fit-content;
        margin-top: 0.75rem;
        color: ${prop=>prop.theme.primaryLight};
        font-size: 0.85rem;
        text-decoration: none;
    }
`

export const TimelineItemSty = styled.div<ItemContainerProp>`
   position: relative;
   z-index: 3;
    display: flex;
    width: 100%;
    &::after{
        content: "";
        position: absolute;
        top: 1.6rem;
        ${prop=>prop.$alternate ? `
            left: -2.5rem;
        `: `
            right:-2.5rem;
        `}
        width: 1rem;
        height: 1rem;
        background-color: ${prop=>prop.theme.primaryLight};
        border: 4px solid ${prop=>prop.theme.background};
        border-radius: 50%;
        z-index: 6;
    }

    &:hover{
        &::after{
            background-color:${p=>p.theme.primary};
        }

        ${TimelineItemTextBoxSty}{
            border-color: ${p=>p.theme.primary};
        }
    }
`

export const TimelineItemWrapperSty = styled.div<{index: number}>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 30%;
    min-width: 24rem;
    max-width: 46rem;
    transition: 0.25s ease;
    opacity: 0;
    animation: ${TimelineItemMoveDownSty} 3s ease forwards;
    ${({ index }) => `
        animation-delay: ${(index - 1)}s;
    `}

    @media screen and (max-width: 680px){
        ${TimelineItemSty}{
            padding-left: 1.9rem;

            &::after{
                left: 0.28rem;
            }
        }

        ${TimelineItemTextBoxSty}{
            padding: 0.9rem;

            h2{
                font-size: 1rem;
            }

            h3{
                font-size: 0.88rem;
            }
        }

        ${TimelineInfoSty}{
            align-items: flex-start;
        }
    }
`
