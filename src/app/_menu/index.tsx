"use client";
import { Menu } from "@/components/Menu";
import { useLocalization } from "@/hooks/LocalizationProvider";
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

const Nav2 = () => {
  const { content: { pages } } = useLocalization();

  const menuItems: MenuItem[] = [
    {
      title: pages.professional.label,
      icon: HomeIcon,
      href: "/"
    },
    {
      title: pages.scholar.label,
      icon: FormationIcon,
      href: "/scholar"
    },
    {
      title: pages.gameDev.label,
      icon: GameIcon,
      href: "/game-dev"
    },
    {
      title: pages.projects.label,
      icon: ProjectIcon,
      href: "/projects"
    },
    {
      title: pages.contact.label,
      icon: ContactIcon,
      href: "/contact"
    },
  ];

  return (
    <Menu.Root>
      {menuItems.map((item, i) => (
        <Menu.Item
          index={i}
          key={i}
          href={item.href}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </Menu.Root>
  );
};

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
