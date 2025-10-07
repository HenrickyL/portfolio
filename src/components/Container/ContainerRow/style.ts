import styled from "styled-components";

export const ContainerRowSty = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    gap: 1rem;
    margin-top: 6rem;

    @media screen and (max-width: 680px){
        &{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        }
    }
`