"use client"
import { GameDevInfo } from "@/Data/PageInfos";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";

export const GameHelper = ()=>{
    const { setPageInfo } = usePageInfo();

    useEffect(() => {
        setPageInfo(GameDevInfo);
    }, [setPageInfo]);

    return(
        <></>
    )
}