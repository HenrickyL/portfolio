"use client";
import { NavBarRootSty } from "./style"

interface NavBarRootProp{
    children: React.ReactNode
}

export const NavBarRoot = ({children}:NavBarRootProp)=>{
    return(
        <NavBarRootSty>
            {children}
        </NavBarRootSty>
    )

}