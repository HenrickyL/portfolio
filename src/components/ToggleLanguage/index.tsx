"use client"
import { useEffect, useState } from "react";
import { LiquidGlass } from "../LiquidGlass";
import { ToggleLanguageSty } from "./style";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { LocalizationSupported } from "@/types/LocalizationSupported";

export const ToggleLanguage = ()=>{
    const {currentLanguage, setLanguage} = useLocalization();
    const isPt = currentLanguage === LocalizationSupported.PT;

    const handleClick = () => {
        const nextLang = isPt ? LocalizationSupported.EN : LocalizationSupported.PT;
        setLanguage(nextLang);
    };


    return(
        <LiquidGlass.Root onClick={handleClick}> 
            <ToggleLanguageSty $isActive={isPt} >
                <span>PT</span>
                <span>EN</span>
            </ToggleLanguageSty>
        </LiquidGlass.Root>
    )
}