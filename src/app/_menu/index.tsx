"use client";
import { Menu } from "@/components/Menu";
import { NavBar } from "@/components/NavBar";
import { IconType } from "react-icons";
import { BsFillMortarboardFill as FormationIcon } from "react-icons/bs";
import { BsBriefcaseFill as ExperienceIcon } from "react-icons/bs";
import { BsFillHouseFill as HomeIcon } from "react-icons/bs";
import { BsFillFolderFill as ProjectIcon } from "react-icons/bs";
import { BsEnvelopeFill as ContactIcon } from "react-icons/bs";
import styled from "styled-components";



interface MenuItem{
  title: string,
  icon: IconType
  href: string
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/"
  },
  {
    title: "Projetos",
    icon: ProjectIcon,
    href: "/projects"
  },
  {
    title: "Experiências",
    icon: ExperienceIcon,
    href: "/experiences"
  },
  {
    title: "Formação",
    icon: FormationIcon,
    href: "/formation"
  },
  {
    title: "Contato",
    icon: ContactIcon,
    href: "/contact"
  },

]


const Nav = ()=>{
  return(
    <NavBar.Root>
        {menuItems.map((item,i)=>
          <NavBar.Link key={i} href={item.href} title={item.title} icon={item.icon} />
        )}
    </NavBar.Root>
  )
}

const Nav2 = ()=>{
  return(
    <Menu.Root>
        {menuItems.map((item,i)=>
          <Menu.Item key={i} href={item.href} title={item.title} icon={item.icon} />
        )}
    </Menu.Root>
  )
}

const TestNavsSty = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${prop=>prop.theme.contrast};
    padding: 4px;
    gap: 2rem;
`


export const TestNavs = ()=>{
    return(
    <TestNavsSty>
        <Nav />
        <Nav2 />
    </TestNavsSty>
    )
}
