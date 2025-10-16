"use client"
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";

const ScholarPage = ()=>{
    const {content:{pages:{scholar} }} =useLocalization()
    const { setPageInfo } = usePageInfo();
                
    useEffect(() => {
        setPageInfo(scholar.info);
    }, [scholar]);

    return(
        <div className="container">
            <h1>{scholar.header}</h1>
        </div>
    )
}
export default ScholarPage;