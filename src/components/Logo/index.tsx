"use client";
import { useTheme } from "@/hooks/ThemeProvider";
import { darkTheme } from "@/styles/themes";

import LogoSVGDark from "@assets/logo_dark.svg";
import LogoSVGLight from "@assets/logo_light.svg";
import Image from "next/image";
import { useEffect, useState } from "react";


interface LogoProp{
    size?: number
}

export const Logo = ({size}:LogoProp) => {
    const {theme} = useTheme();
    const [LogoSvg, setLogoSvg] = useState(theme == darkTheme? LogoSVGLight : LogoSVGDark)

    useEffect(()=>{
        setLogoSvg(theme == darkTheme? LogoSVGLight : LogoSVGDark)
    },[theme])

    return (
        <Image src={LogoSvg}  alt={"aaa"} width={size ?? 80}  />
    );
};
