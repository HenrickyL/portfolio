"use client"
import { Card } from "@/components/Card";
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
            <div className="content">
                <Card img="/img/Recipe.png" title="Recipe for Ruin" subtitle="Game" date="2025" url="https://www.instagram.com/perikan_studio/"/>
            </div>
        </div>
    )
}

export default GameDevPage;