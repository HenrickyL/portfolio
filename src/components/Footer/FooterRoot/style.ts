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
        &{
            position: absolute;
            bottom: 0;
            padding: 8px 12px;
            font-size: 11px;
        }
    }
`