import { IconType } from "react-icons"
import { MenuItemSty } from "./style"
import { usePathname } from "next/navigation"

interface MenuItemProp{
    href: string
    title: string
    icon: IconType
}

export const MenuItem = ({href,title, icon: Icon}:MenuItemProp)=>{
    const pathname = usePathname();
    const isActive = pathname === href? "active" : "";
    return(
        <MenuItemSty href={href} className={isActive}>
            <h2><Icon/>{title}</h2>
        </MenuItemSty>
    )
}