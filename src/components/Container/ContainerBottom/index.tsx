"use client";
import { ReactNode } from "react"
import { ContainerBottomSty } from "./style"

interface ContainerBottomProps{
    children: ReactNode
}

export const ContainerBottom = ({children}:ContainerBottomProps)=>{
    return(
        <ContainerBottomSty>
            {children}
        </ContainerBottomSty>
    )
}