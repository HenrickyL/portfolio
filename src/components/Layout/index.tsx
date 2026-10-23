"use client";
import { ReactNode } from "react"
import { LayoutContentSty, LayoutNoticeSty, LayoutWrapperSty } from "./style"
import { MainNavigation } from "@/app/_menu"
import ThemeToggle from "../ThemeToggle"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { UrlLink } from "../UrlLink"
import { Perfil } from "../Perfil";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { SocialMedias } from "@/Data/SocialMedia";
import { ToggleLanguage } from "../ToggleLanguage";

interface LayoutComponentProps {
    children : ReactNode
}

export const LayoutComponent = ({children}:LayoutComponentProps)=>{
    const { pageInfo } = usePageInfo();
    
    return(
        <LayoutWrapperSty>
            <MainNavigation />
            <ThemeToggle />
            <LayoutNoticeSty>
                <h3>Under construction. ...</h3>
                <ToggleLanguage/>
            </LayoutNoticeSty>
            <Container.Root>
                <Container.Row>
                    <Perfil.Root>
                        <Perfil.Card>
                            <Perfil.Image src="/perfil.jpg" />
                            <Perfil.Title text="Henricky Monteiro" />
                            <Perfil.Description text={pageInfo.title} region={pageInfo.region}/>
                            <Perfil.Social items={SocialMedias}/>
                        </Perfil.Card>
                    </Perfil.Root>
                    <LayoutContentSty>
                        {children}
                    </LayoutContentSty>
                </Container.Row>
            </Container.Root>
            <Footer.Root>
                <Footer.Text>
                    <strong>Henricky Monteiro</strong>
                    <span>Developer</span>
                    <span>Academic</span>
                    <span>Gamedev</span>
                    <span>|</span>
                    <UrlLink href="https://www.linkedin.com/in/henrickyl/">LinkedIn</UrlLink>
                    <span>| 2025</span>
                </Footer.Text>
            </Footer.Root>

        </LayoutWrapperSty>
    )
}