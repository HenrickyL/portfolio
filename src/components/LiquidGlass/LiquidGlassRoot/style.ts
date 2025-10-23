import styled from "styled-components";

export const LiquidGlassRootSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7em;
    overflow: hidden;

    /* padding: 0.5em; */
    border-radius: 12px;

    /* border:1px solid hsl(0, 0%, 100%, 0.3); */
    /* background: hsl(0, 0%, 100%, 0.2); */
    /* backdrop-filter: blur(2px); */
    /* box-shadow: inset 0 0 8px 1px hsl(0, 0%, 100%, 0.3); */

    transition: opacity 0.26s ease-out;
    filter: drop-shadow(-8px -10px 46px #0000005f);
    backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);

    


    &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: 12px;
        box-shadow: inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7),
                    inset 0 0 8px 1px rgba(255, 255, 255, 0.7);
        z-index: 1;
    }
`