import styled from "styled-components";

export const LayoutWrapperSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100dvh;
    min-height: 0;
    overflow: hidden;
    position: relative;


    @media screen and (max-width: 680px){
        &{
            flex-direction: column-reverse;
        }
    }
`
export const LayoutContentSty = styled.div`
    min-height: 0;
    width: 120%;
    overflow-y: auto;
    padding-right: 8px;
`