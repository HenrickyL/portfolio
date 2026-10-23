import styled from "styled-components";

export const ContainerRootSty = styled.main`
    display: flex;
    overflow: hidden;
    flex: 1;
    min-height: 0;
    flex-direction: column;
    width: 100%;

    padding: 8px;

    @media screen and (max-width: 680px){
        grid-area: main;
        flex: none;
        height: auto;
        min-height: auto;
        overflow: visible;
    }
`