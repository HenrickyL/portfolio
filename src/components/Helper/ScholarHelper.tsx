"use client"
import { ScholarInfo } from "@/Data/PageInfos";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";

export const ScholarHelper = ()=>{
    const { setPageInfo } = usePageInfo();

    useEffect(() => {
        setPageInfo(ScholarInfo);
    }, [setPageInfo]);

    return(
        <></>
    )
}