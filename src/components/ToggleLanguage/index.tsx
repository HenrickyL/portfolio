"use client"

import { useState } from "react"
import { LiquidGlass } from "../LiquidGlass";
import { ToggleLanguageSty } from "./style";


export const ToggleLanguage = ()=>{
    const [isPt,setPt] = useState<boolean>(true);

    const handleClick = ()=>{
        setPt(!isPt);
    }
    return(
        <LiquidGlass.Root onClick={handleClick}> 
            <ToggleLanguageSty $isActive={isPt} >
                <span>PT</span>
                <span>EN</span>
            </ToggleLanguageSty>
        </LiquidGlass.Root>
    )
}