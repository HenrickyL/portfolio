import styled from "styled-components";

export const InputRootSty = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: fit-content;
    gap: 4px;
    margin: 4px 0px;

    svg{
        color: ${prop=>prop.theme.contrast};
        background-color: transparent;
        font-size: ${prop => prop.theme.iconSize};
    }
`