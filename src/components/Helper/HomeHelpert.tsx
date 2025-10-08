"use client"
import { DevPageInfo } from "@/Data/PageInfos";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";

export const HomeHelper = ()=>{

    const { setPageInfo } = usePageInfo();

    useEffect(() => {
        setPageInfo(DevPageInfo);
    }, [setPageInfo]);

    return(
        <></>
    )
}