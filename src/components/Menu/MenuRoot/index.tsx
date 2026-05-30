"use client";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Indicator, MenuRootSty } from "./style"
import { MenuContext } from "@/hooks/Menu";

type MenuChildProps = {
    href: string,
    title: string,
    index: number
};

type AllowedChildren = ReactElement<MenuChildProps>;

interface MenuRootProp{
    children: AllowedChildren[]
}

export const MenuRoot = ({children}:MenuRootProp)=>{
    const pathname = usePathname();
    const activeChild = children.find((child) => child.props.href === pathname) ?? children[0];
    const menuKey = useMemo(
        () => children.map((child) => `${child.props.href}:${child.props.title}`).join("|"),
        [children]
    );
    const [activeIndex, setActiveIndex] = useState<number>(activeChild.props.index);
    const [activeTitle, setActiveTitle] = useState<string>(activeChild.props.title);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const setActiveItem = (index: number, title: string) => {
        setIsTransitioning(true);
        setActiveIndex(index);
        setActiveTitle(title);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    useEffect(() => {
        const currentChild = children.find((child) => child.props.href === pathname) ?? children[0];
        if (currentChild.props.index === activeIndex && currentChild.props.title === activeTitle) return;

        setActiveItem(currentChild.props.index, currentChild.props.title);
    }, [pathname, menuKey]);
    
    return(
        <MenuContext.Provider value={{ index: activeIndex, title: activeTitle, setActiveItem }}>
            <MenuRootSty>
                {children}
                <Indicator 
                    $index={activeIndex} 
                    title={activeTitle}
                    className={isTransitioning ? "" : "transition-end"}
                    onTransitionEnd={handleTransitionEnd}
                />
            </MenuRootSty>
        </MenuContext.Provider>
    )
}
