import Link from "next/link";
import styled from "styled-components";

export const MenuItemSty = styled(Link)`
    &.active{
        color: ${prop=>prop.theme.primary};
    }
`