import styled from "styled-components";

export const LayoutWrapperSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;


    @media screen and (max-width: 680px){
        &{
            flex-direction: column-reverse;
        }
    }
`