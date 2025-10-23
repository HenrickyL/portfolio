import styled from "styled-components";

export const PerfilDescriptionSty = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    font-size: 18px;
    color: ${t=>t.theme.text2};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    text-align: center;
    gap: 2px;

    & span{
        display: flex;
        color: ${t=>t.theme.text3};
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 14px;
        gap: 4px;
    }
`
