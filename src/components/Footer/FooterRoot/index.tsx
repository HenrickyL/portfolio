"use client";
import { ReactElement } from "react"
import { FooterRootSty } from "./style";
import { Footer } from "..";


type AllowedChildren = ReactElement<typeof Footer.Text>;

interface FooterRootProps{
    children: AllowedChildren
}

export const FooterRoot = ({children}:FooterRootProps)=>{
    return (
        <FooterRootSty>
            {children}
        </FooterRootSty>
    )
}