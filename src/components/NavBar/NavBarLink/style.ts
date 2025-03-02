import Link from "next/link";
import styled from "styled-components";

interface NavBarLinkStyProp{
    title: string
}

const sizes = {
    main: "2.25rem",
    font: "1.25rem"
}


export const NavBarLinkSty = styled(Link)<NavBarLinkStyProp>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: 0.3s;
    width: ${sizes.main};
    height: ${sizes.main};
    border-radius: 8px;
    z-index: 1;
    color: ${prop=>prop.theme.contrast};
    font-size: ${sizes.font};

   
    &::before{
        content: "";
        display: flex;
        z-index: -1;
        position: absolute;
        width: 0;
        height: 0;
        background-color: transparent;
        transition: 0.5s;
        opacity: 0.2;
        border-radius: 8px;
    }

    &::after {
        content: attr(title);
        font-size: medium;
        position: absolute;
        display: flex;
        align-items:center;
        justify-content: center;
        /* left: 0rem; */
        padding: 4px;
        border-radius: 8px;
        min-width: 2.5rem;
        width: 100%;
        opacity: 0;
        transform: translateY(1.5rem) rotateX(90deg);
        transition:  0.4s ease-in-out;
        backface-visibility: hidden; 
    }


    &:hover{
        &::before{
            content: "";
            width: 100%;
            height: 100%;
            background-color: ${prop=>prop.theme.primary};
            background-image: url(${(props) => props.theme.noise});
            opacity: 1;
        }

        &::after {
            content: attr(title);
            transform: translateY(2.5rem) rotateX(0);
            opacity: 1;
            background-color: ${prop=>prop.theme.backgroundSnd};
        }
    }
`