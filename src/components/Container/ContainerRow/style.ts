import styled from "styled-components";

export const ContainerRowSty = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    gap: 1rem;
    margin-top: 6rem;
    height: calc(100% - 6rem);
    min-height: 0;
    overflow: hidden;
    @media screen and (max-width: 680px){
        &{
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow-y: auto;
            margin-top: 1rem;
        }
    }
`