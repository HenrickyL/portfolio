import styled from "styled-components";

export const ToggleLanguageSty = styled.div<{$isActive: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px;
    position: relative;
    user-select: none;


    span{ 
        font-weight: bold;
        z-index: 2;

    transition: 300ms ease-in;

        &:nth-child(1){
            color: ${p=>p.$isActive?  p.theme.white : p.theme.contrastLight};
        }
        &:nth-child(2){
            color: ${p=>p.$isActive?   p.theme.contrastLight: p.theme.white};
        }
    }

    &::after{
        content: "";
        position: absolute;
        width: 52%;
        height: 150%;
        border-radius: 12px;
        background-color: ${p=>p.theme.primary};

        transition: 300ms ease-in;
        
        border: -2px -2px red;
        ${p=>p.$isActive ? `
            transform: rotate(20deg) translateX(-50%);

        `:`
            transform: rotate(20deg) translateX(50%);
        `}
    }

`