"use client";
import { Menu } from "@/components/Menu";
import { IconType } from "react-icons";
import { BsFillMortarboardFill as FormationIcon } from "react-icons/bs";
import { BsFillHouseFill as HomeIcon } from "react-icons/bs";
import { BsFillFolderFill as ProjectIcon } from "react-icons/bs";
import { BsEnvelopeFill as ContactIcon } from "react-icons/bs";
import { IoGameController as GameIcon } from "react-icons/io5";
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
    title: "Academico",
    icon: FormationIcon,
    href: "/scholar"
  },
  {
    title: "GameDev",
    icon: GameIcon,
    href: "/game-dev"
  },
  
  {
    title: "Projetos",
    icon: ProjectIcon,
    href: "/projects"
  },
  {
    title: "Contato",
    icon: ContactIcon,
    href: "/contact"
  },
]


// const Nav = ()=>{
//   return(
//     <NavBar.Root>
//         {menuItems.map((item,i)=>
//           <NavBar.Link key={i} href={item.href} title={item.title} icon={item.icon} />
//         )}
//     </NavBar.Root>
//   )
// }

const Nav2 = ()=>{
  return(
    <Menu.Root>
        {menuItems.map((item,i)=>
          <Menu.Item index={i} key={i} href={item.href} title={item.title} icon={item.icon} />
        )}
    </Menu.Root>
  )
}

const TestNavsSty = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border-bottom: 1px solid ${prop=>prop.theme.contrast}; */
    padding: 4px;
    gap: 2rem;


    @media screen and (max-width: 680px){
        &{
            margin-bottom: 1.8rem;
        }
    }
`


export const TestNavs = ()=>{
    return(
    <TestNavsSty>
        <Nav2 />
    </TestNavsSty>
    )
}
