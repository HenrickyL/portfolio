import styled from "styled-components";

export const FooterRootSty = styled.footer`
    display: flex;
    justify-content: center;
    padding: 4px;
    background-color: ${p=>p.theme.backgroundSnd};
    background-image: url(${(props) => props.theme.noise});
`