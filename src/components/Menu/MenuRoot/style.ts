import styled, { keyframes } from "styled-components";

export const MenuRootSty =styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3rem;
    background-color: ${prop=>prop.theme.backgroundSnd};
    border-radius:10px;
    padding: 8px 12px;
    gap: 8px;
    background-image: url(${(props) => props.theme.noise});
    /* border: 1px solid ${prop=>prop.theme.contrastLight}; */
    margin-top:4px;
`

const swing = keyframes`
    0% { transform: rotateZ(-4deg); }
    50% { transform: rotateZ(4deg); }
    100% { transform: rotateZ(-4deg); }
`;


export const Indicator = styled.div<{$index:number, title:string}>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    /*  */
    transition: 0.5s;
    transform-origin: top center;
    left: calc(${prop=>prop.$index}*3rem);

    &.transition-end {
        animation: ${swing} 5s ease-in-out infinite;
    }

    &::before{
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        padding: none;
        width: 8px;
        height: 8px;
        bottom: 0.4rem;
        background-color: ${prop=>prop.theme.primaryLight};
        border-radius: 10px;
        /*  */
        font-weight: 600;
        font-size: 0.6rem;
        color: ${prop=>prop.theme.contrast};
        transition: 0.4s;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        opacity: 0;
    }

    &::after{
        content: "";
        position: absolute;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        background-color: transparent;
        box-shadow: 0 0 0 2px ${prop=>prop.theme.primary};
        border-radius: 50%;
    }

    &.transition-end::before {
        content: attr(title);
        height: fit-content;
        width: fit-content;
        padding: 2px 4px;
        color: ${prop=>prop.theme.contrast};
        background-color: ${prop=>prop.theme.primary};
        opacity: 1;
    }

`