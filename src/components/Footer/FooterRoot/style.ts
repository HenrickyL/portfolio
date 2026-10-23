import styled from "styled-components";

export const FooterRootSty = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 1rem 0 8px ;
    background-color: ${p=>p.theme.backgroundSnd};
    background-image: url(${(props) => props.theme.noise});
    border-top: 1px solid ${p=>p.theme.contrastLight};
    width: 100%;
    min-height: 2rem;
    color: ${p=>p.theme.text2};

    @media screen and (max-width: 680px){
        position: static;
        grid-area: footer;
        padding: 12px 12px 8px;
        font-size: 11px;
    }
`