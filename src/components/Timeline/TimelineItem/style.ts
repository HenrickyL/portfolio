"use client";
import styled, {keyframes} from "styled-components";

type ItemContainerProp = {
    $alternate?: boolean
    index: number
}


const TimelineItemMoveDownSty = keyframes`
    0%{
        opacity: 0.7;
        transform: translateY(-30px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`


export const TimelineItemTextBoxSty = styled.div<{$alternate?: boolean}>`
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
    border: 2px solid transparent;
    transition: 0.3s;

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
        

        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        ${({ $alternate, theme }) =>$alternate? 
      `
        left: -15px;
        border-right: 15px solid ${theme.backgroundSnd};
      `
      : `
        right: -15px;
        border-left: 15px solid ${theme.backgroundSnd};
      `}
    }
`


export const TimelineItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    color: ${prop=>prop.theme.text2};
`



export const TimelineInfoSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    padding: 0 4px;
    width: 100%;

    span, svg{
        color: ${prop=>prop.theme.text3};
    }
`



export const TimelineItemSty = styled.div<ItemContainerProp & { total: number }>`
    padding: 0.625rem 3.125rem;
    position: relative;
    width: 50%;
    transition: 0.3s;
    
    animation: ${TimelineItemMoveDownSty} 0.5s ease-out forwards;
    opacity: 0;
    ${({ index, total }) => `
        animation-delay: ${(index - 1) * (total / total)}s;
    `}

    left: ${({ $alternate }) => ($alternate ? "50%" : "0")};

    &::after{
        content: "";
        position: absolute;
        top: 38px;
        width: 1.5rem;
        height: 1.5rem;
		background-color: ${prop=>prop.theme.primaryLight};

        border-radius: 50%;
        left: ${({ $alternate }) => ($alternate ? "calc(-12px)" : "calc(100% - 12px)")};
        z-index: 3;
    }


    &:hover{

        &::after{
            background-color:${p=>p.theme.primary};
        }
        ${TimelineItemTextBoxSty}{
            border: 2px solid ${p=>p.theme.primary};
        }
    }


    @media screen and (max-width: 680px){
		&{
            width:100%;
            padding-left:80px;
            padding-right:25px;
            left: 0;

            &::after{
                left: 19px;
            }
		}

        ${TimelineItemTextBoxSty}{
            font-size:13px;

            &::after{
                left: -15px;
                border-right: 15px solid ${prop=>prop.theme.backgroundSnd};
                border-left: none;
            }

            ${TimelineInfoSty}{
                font-size:11px;
            }
        }
	}
`