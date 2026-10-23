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

interface NavigationItem{
  title: string,
  icon: IconType
  href: string
}

const MainNavigationContent = () => {
  const { content: { pages } } = useLocalization();

  const menuItems: NavigationItem[] = [
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
      {menuItems.map((item, index) => (
        <Menu.Item
          index={index}
          key={item.href}
          href={item.href}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </Menu.Root>
  );
};

const MainNavigationSty = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
    gap: 2rem;


    @media screen and (max-width: 680px){
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
        width: auto;
        margin: 0;
        gap: 0;
        padding: 0.2rem 0.5rem calc(0.2rem + env(safe-area-inset-bottom, 0px));
        background-color: ${prop => prop.theme.background};
        background-image: url(${prop => prop.theme.noise});
        border-top: 1px solid ${prop => prop.theme.contrastLight};
    }
`


export const MainNavigation = ()=>{
    return(
    <MainNavigationSty>
        <MainNavigationContent />
    </MainNavigationSty>
    )
}
