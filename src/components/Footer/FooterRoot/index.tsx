"use client";
import { ReactElement, ReactNode } from "react"
import { FooterRootSty } from "./style";
import { Footer } from "..";


type AllowedChildren = ReactElement<typeof Footer.Root>;

interface FooterRootProps{
    children: AllowedChildren[]
}

export const FooterRoot = ({children}:FooterRootProps)=>{
    return (
        <FooterRootSty>
            {children}
        </FooterRootSty>
    )
}