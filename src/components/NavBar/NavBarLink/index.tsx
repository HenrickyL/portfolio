"use client";
import { IconType } from "react-icons"
import { NavBarLinkSty } from "./style"
import { FaQuestion as Question } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface NavBarLinkProp {
    href: string
    icon: IconType
    title: string
}

export const NavBarLink = ({href, icon, title}:NavBarLinkProp)=>{
    const pathname = usePathname();
    const isActive = pathname === href? "active" : "";
    
    const IconComponent: IconType = icon || Question;
    return(
        <NavBarLinkSty href={href} title={title} className={isActive}>
            <IconComponent/>
        </NavBarLinkSty>
    )
}