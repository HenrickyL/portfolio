"use client";
import styled from "styled-components";

type ItemContainerProp = {
    $alternate?: boolean
}

export const TimelineItemSty = styled.div<ItemContainerProp>`
    padding: 0.625rem 3.125rem;
    position: relative;
    width: 50%;

    left: ${({ $alternate }) => ($alternate ? "50%" : "0")};

    &::after{
        content: "";
        position: absolute;
        top: 38px;
        width: 1.5rem;
        height: 1.5rem;
		background-color: ${prop=>prop.theme.primary};

        border-radius: 50%;
        left: ${({ $alternate }) => ($alternate ? "calc(-12px)" : "calc(100% - 12px)")};
        z-index: 3;
    }
`

export const TimelineItemTextBoxSty = styled.div<ItemContainerProp>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1.25rem 1.875rem;
    background-image: url(${(props) => props.theme.noise});
    background-color: ${prop=>prop.theme.backgroundSnd};
    position: relative;
    border-radius:8px;
    font-size: 16px;
    gap: 4px;

    h2{
        font-weight: 600;
        color: ${prop=>prop.theme.text2};
    }
    h3{
        color: ${prop=>prop.theme.text};
        font-size: 20px;
    }

    p{
        display:inline-block;
        margin-bottom: 16px;
        color: ${prop=>prop.theme.text2};
        
    }


    &::after{
        content: '';
        width: 0;
        position: absolute;
        top: 28px;
        z-index: 1;
        
        ${({ $alternate, theme }) =>
    $alternate
      ? `
        left: -15px;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid ${theme.backgroundSnd};
      `
      : `
        right: -15px;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid ${theme.backgroundSnd};
      `}
    }
`


export const TimelineItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    color: ${prop=>prop.theme.text2};

`



export const TimelineInfoSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
    width: 100%;

    span, svg{
        color: ${prop=>prop.theme.text3};
    }
`
