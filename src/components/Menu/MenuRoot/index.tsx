"use client";
import { ReactElement, useState } from "react";
import { Indicator, MenuRootSty } from "./style"
import { Menu } from "..";
import { MenuContext } from "@/hooks/Menu";


type AllowedChildren = ReactElement<typeof Menu.Item>;

interface MenuRootProp{
    children: AllowedChildren[]
}

export const MenuRoot = ({children}:MenuRootProp)=>{
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTitle, setActiveTitle] = useState<string>("");
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const setActiveItem = (index: number, title: string) => {
        setIsTransitioning(true);
        setActiveIndex(index);
        setActiveTitle(title);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };
    
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