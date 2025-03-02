"use client";
import { ReactNode } from "react"
import { ContainerRootSty } from "./style";

interface ContainerRootProps{
    children: ReactNode
}

export const ContainerRoot = ({children}:ContainerRootProps)=>{
    return (
        <ContainerRootSty>
            {children}
        </ContainerRootSty>
    )
}