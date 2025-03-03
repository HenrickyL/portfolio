import Link from "next/link";
import styled from "styled-components";

export const MenuItemSty = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    line-height: 4.68rem;
    padding: 8px;
    z-index: 1;

    & > .icon{
        position: relative;
        display: block;
        font-size: 1.5em;
        color: ${prop=>prop.theme.contrast};
        transition: 0.5s;
    }

    &.active{
        color: ${prop=>prop.theme.primary};

        & > .icon{
            transform: translateY(-8px);
            color: ${prop=>prop.theme.primary};
        }
    }
`