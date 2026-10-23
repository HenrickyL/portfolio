import { styled } from "styled-components";

export const PerfilCardSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${(props) => props.theme.noise});
    background-color: ${prop=>prop.theme.backgroundSnd};
    padding: 2rem 1rem;
    border-radius: 16px;
    min-width: 16rem;
    min-height: 32rem;
    width: 100%;
    max-width: 20rem;
    max-height: 36rem;
    gap: 8px;


    @media screen and (max-width: 680px){
        min-width: 0;
        min-height: 0;
        max-height: none;
        max-width: 20rem;
        padding: 1rem 0.85rem 0.85rem;
    }
`