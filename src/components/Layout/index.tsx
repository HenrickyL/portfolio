"use client";
import { ReactNode } from "react"
import { LayoutWrapperSty } from "./style"
import { TestNavs } from "@/app/_menu"
import ThemeToggle from "../ThemeToggle"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { UrlLink } from "../UrlLink"
import { Perfil } from "../Perfil";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { SocialMedias } from "@/Data/SocialMedia";

interface LayoutComponentProps {
    children : ReactNode
}

export const LayoutComponent = ({children}:LayoutComponentProps)=>{
    const { pageInfo } = usePageInfo();
    
    return(
        <LayoutWrapperSty>
            <TestNavs />
            <ThemeToggle />
            <div style={{display: "flex", position:"absolute", top:"30px", right:"0", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
                <h3>Em construção ...</h3>
            </div>
            <Container.Root>
                <Container.Row>
                    <Perfil.Root>
                        <Perfil.Card>
                            <Perfil.Image src="/perfil.jpg" />
                            <Perfil.Title text="Henricky Monteiro" />
                            <Perfil.Description text={pageInfo.perfilDescription}/>
                            <Perfil.Social items={SocialMedias}/>
                        </Perfil.Card>
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