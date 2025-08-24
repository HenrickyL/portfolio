"use client";
import { ReactNode } from "react"
import { LayoutWrapperSty } from "./style"
import { TestNavs } from "@/app/_menu"
import TestTheme from "../test"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { UrlLink } from "../UrlLink"

interface LayoutComponentProps {
    children : ReactNode
}

export const LayoutComponent = ({children}:LayoutComponentProps)=>{
    return(
        <LayoutWrapperSty>
            <TestNavs />
            <TestTheme />
            <Container.Root>
                {children}
            </Container.Root>
            <Footer.Root>
                <Footer.Text>Made by <UrlLink href="https://www.linkedin.com/in/henrickyl/">HenrickyL</UrlLink> | 2025</Footer.Text>
            </Footer.Root>
        </LayoutWrapperSty>
    )
}