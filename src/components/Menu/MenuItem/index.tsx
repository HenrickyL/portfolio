import { IconType } from "react-icons"
import { MenuItemSty } from "./style"
import { usePathname } from "next/navigation"
import { useMenu } from "@/hooks/Menu"
import { useEffect } from "react"

interface MenuItemProp{
    href: string
    title: string
    icon: IconType
    index: number
}

export const MenuItem = ({index, href,title, icon: Icon}:MenuItemProp)=>{
    const pathname = usePathname();
    const isActive = pathname === href? "active" : "";
    const menuContext = useMenu();

    const HandleClick = ()=>{
        if(index !== menuContext.index)
            menuContext.setActiveItem(index, title)
    }
    useEffect(()=>{
        if(pathname === href){
            menuContext.setActiveItem(index, title)
        }
    },[])

    return(
        <MenuItemSty 
            href={href}
            onClick={HandleClick}
            className={isActive}>
                <Icon className="icon"/>
        </MenuItemSty>
    )
}