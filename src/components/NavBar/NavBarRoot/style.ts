import styled from "styled-components";

export const NavBarRootSty = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid ${prop=>prop.theme.contrastLight};
    border-radius: 8px;
    padding: 0 1rem;
    height: 3rem;
    min-width: 3rem;
    background-color: ${prop=>prop.theme.backgroundSnd};
    gap: 4px;
    background-image: url(${(props) => props.theme.noise});
    /* overflow: hidden; */
`