"use client"
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";


const GameDevPage = ()=>{
    const {content:{pages}} =useLocalization()
    const { setPageInfo } = usePageInfo();
                
    useEffect(() => {
        setPageInfo(pages.gameDev.info);
    }, [pages]);

    return(
        <div className="container">
            <h1>{pages.gameDev.header}</h1>
        </div>
    )
}

export default GameDevPage;