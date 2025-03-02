import { ReactElement } from "react";
import { MenuRootSty } from "./style"
import { Menu } from "..";


type AllowedChildren = ReactElement<typeof Menu.Item>;

interface MenuRootProp{
    children: AllowedChildren | AllowedChildren[]
}

export const MenuRoot = ({children}:MenuRootProp)=>{

        return(
            <MenuRootSty>
                {children}
            </MenuRootSty>
        )
}