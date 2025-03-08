import styled from "styled-components";


interface InputSty{
    background?: string
}

export const InputInputSty = styled.div<InputSty>`
    display: flex;
    flex-direction: row;
    width: 100%;

    & input{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        padding: 2px 4px;
        color: ${prop => prop.theme.contrast};

        &[type="button"] {
            transition: ${prop=>`${prop.theme.settings.normalTransition}ms`};
            background-color: ${prop => prop.background || prop.theme.primary };
            font-weight: bold;
        }

        &:disabled{
            color: ${prop=>prop.theme.gray};
            cursor: not-allowed;
        }
    }

    span{
        position: absolute;
        font-size: 10px;
        bottom:-30%;
        left:8px;
        color:red;
    }
`