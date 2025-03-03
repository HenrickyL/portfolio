import styled, { ExecutionProps, FastOmit } from "styled-components";

export const MenuRootSty =styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3rem;
    background-color: ${prop=>prop.theme.backgroundSnd};
    border-radius:10px;
    padding: 8px;
    gap: 8px;
`

export const Indicator = styled.div<{index:number, title:string}>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    transition: 0.5s;
    transform: translateX(calc(${prop=>prop.index}*3rem));

    &::before{
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        padding: none;
        width: 8px;
        height: 8px;
        bottom: 12px;
        background-color: ${prop=>prop.theme.primary};
        border-radius: 10px;
        /*  */
        font-weight: 600;
        font-size: 0.5em;
        color: ${prop=>prop.theme.contrast};
        transition: 0.5s;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        opacity: 0.5;
    }

    &.transition-end::before {
        content: attr(title);
        height: fit-content;
        width: fit-content;
        padding: 2px 4px;
        opacity: 1;
    }

`