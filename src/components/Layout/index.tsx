"use client";
import { ReactNode } from "react"
import { LayoutWrapperSty } from "./style"
import { TestNavs } from "@/app/_menu"
import TestTheme from "../test"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { UrlLink } from "../UrlLink"
import { Perfil } from "../Perfil";

interface LayoutComponentProps {
    children : ReactNode
}

export const LayoutComponent = ({children}:LayoutComponentProps)=>{
    return(
        <LayoutWrapperSty>
            <TestNavs />
            <TestTheme />
            <div style={{display: "flex", position:"absolute", top:"30px", right:"0", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
                <h2>Em construção ...</h2>
            </div>
            <Container.Root>
                <Container.Row>
                    <Perfil.Root>
                        <Perfil.Container>
                            <Perfil.Image src="/perfil.jpg" />
                            <Perfil.Title text="Henricky Monteiro" />
                            <Perfil.Description text="Desenvolvedor Fullstack"/>
                        </Perfil.Container>
                    </Perfil.Root>
                    {/* <Container.Root> */}
                        {children}
                    {/* </Container.Root> */}
                </Container.Row>
            </Container.Root>
            <Footer.Root>
                <Footer.Text>Made by <UrlLink href="https://www.linkedin.com/in/henrickyl/">HenrickyL</UrlLink> | 2025</Footer.Text>
            </Footer.Root>

        </LayoutWrapperSty>
    )
}