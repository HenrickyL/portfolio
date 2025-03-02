import { IconType } from "react-icons"
import { MenuItemSty } from "./style"

interface MenuItemProp{
    href: string
    title: string
    icon: IconType
}

export const MenuItem = ({href,title, icon}:MenuItemProp)=>{
    return(
        <MenuItemSty href={href}>
            <h2>{title}</h2>
        </MenuItemSty>
    )
}