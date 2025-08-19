"use client";
import { ReactNode } from "react"
import { ContainerCenterSty } from "./style"

interface ContainerCenterProps{
    children: ReactNode
}

export const ContainerCenter = ({children}:ContainerCenterProps)=>{

    return(
        <ContainerCenterSty>
            {children}
        </ContainerCenterSty>
    )
}