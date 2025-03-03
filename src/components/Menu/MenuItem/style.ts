import Link from "next/link";
import styled from "styled-components";

export const MenuItemSty = styled(Link)<{title:string}>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    line-height: 4.68rem;
    padding: 8px;
    z-index: 1;

    & > .icon{
        position: relative;
        display: block;
        font-size: 1.5em;
        color: ${prop=>prop.theme.contrast};
        transition: 0.3s;
    }

    &::after {
        content: attr(title);
        font-size: 0.8rem;
        position: absolute;
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 1.5px 4px;
        border-radius: 8px;
        /* min-width: 2.5rem; */
        width: fit-content;
        height: 1rem;
        opacity: 0;
        transform: translateY(1.5rem) rotateX(90deg);
        transition:  0.3s ease-in-out;
        backface-visibility: hidden; 
        background-image: url(${(props) => props.theme.noiseContrast});
        background-color: transparent;
        border: 0.5px solid ${prop=>prop.theme.contrastLight};
    }

    &:hover{
        &::after {
            content: attr(title);
            opacity: 1;
            transform: translateY(2.5rem) rotateX(0);
            width: fit-content;
            height: 1rem;
            background-color: ${prop=>prop.theme.backgroundSnd};
        }

        & > .icon{
            transform: scale(1.1);
            color: ${prop=>prop.theme.primaryLight};
        }
    }

    &.active{
        color: ${prop=>prop.theme.primary};

        & > .icon{
            transform: translateY(-4px);
            color: ${prop=>prop.theme.primary};
        }
        &:hover::after {
            content: "";
            opacity: 0;
            display: none;
        }
    }
`