import { IconType } from "react-icons"
import { MenuItemSty } from "./style"
import { usePathname } from "next/navigation"
import { useMenu } from "@/hooks/Menu"

interface MenuItemProp{
    href: string
    title: string
    icon: IconType
    index: number
}

export const MenuItem = ({index, href,title, icon: Icon}:MenuItemProp)=>{
    const pathname = usePathname();
    const isActive = pathname === href? "active" : "";
    const { index: activeIndex, setActiveItem } = useMenu();

    const HandleClick = ()=>{
        if(index !== activeIndex)
            setActiveItem(index, title)
    }

    return(
        <MenuItemSty 
            href={href}
            title={title}
            onClick={HandleClick}
            className={isActive}>
                <Icon className="icon"/>
        </MenuItemSty>
    )
}
