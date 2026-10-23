import styled from "styled-components";

export const ContainerRowSty = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    gap: 1rem;
    margin-top: 2rem;
    height: calc(100% - 2rem);
    min-height: 0;
    overflow: hidden;
    @media screen and (max-width: 680px){
        display: flex;
        flex-direction: column;
        height: auto;
        overflow: visible;
        margin-top: 0.5rem;
    }
`