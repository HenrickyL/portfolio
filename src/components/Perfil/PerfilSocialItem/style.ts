import Link from "next/link";
import styled from "styled-components";

export const PerfilSocialItemSty = styled(Link)<{title?:string}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    width: 2rem;
    height:2rem;
    transition: 300ms;

    & > .icon{
        position: absolute;
        display: block;
        font-size: 1.5em;
        color: ${prop=>prop.theme.primary};
        transition: 0.3s;

    }

    &:hover{
        background-color: ${p=>p.theme.primary};
        border-radius: 8px;


        & > .icon{
            transform: scale(1.1);
            color: ${prop=>prop.theme.contrast};
        }
        ${p=> p.title &&
            
            `
            &::after {
                content: attr(title);
                opacity: 1;
                transform: translateY(2.5rem) rotateX(0);
                width: fit-content;
                height: max-content;
                background-color: ${p.theme.primaryLight};
            }
            ` 
        }
        
    }

    ${p=> p.title &&
    `
        &::after {
            content: attr(title);
            font-size: 0.8rem;
            position: absolute;
            display: flex;
            align-items:center;
            justify-content: center;
            padding: 1.5px 4px;
            border-radius: 8px;
            width: fit-content;
            text-align: center;
            opacity: 0;
            z-index: 2;
            transform: translateY(1.5rem) rotateX(90deg);
            transition:  0.3s ease-in-out;
            backface-visibility: hidden; 
            background-color: transparent;
        } `
    }
`