import styled from "styled-components";

export const InputButtonSty = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid transparent;
    background-color: ${p=>p.theme.primary};
    font-weight: bold;
    background-image: url(${(props) => props.theme.noise});
    min-width: 8rem;
    letter-spacing: 2px;
    transition: 300ms ease-in-out;


    &:hover{
        border: 2px solid ${p=>p.theme.contrastLight};
        background-color: ${p=>p.theme.primaryLight};
        letter-spacing: 1px;
    }

    &:active{
        transition: 100ms ease-in;
        transform: scale(0.95) translateX(4px);
    }
`