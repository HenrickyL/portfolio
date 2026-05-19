"use client"
import { Card } from "@/components/Card";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";

const ScholarPage = ()=>{
    const {content:{pages:{scholar} }} =useLocalization()
    const { setPageInfo } = usePageInfo();
                
    useEffect(() => {
        setPageInfo(scholar.info);
    }, [scholar, setPageInfo]);

    return(
        <div className="container">
            <h1>{scholar.header}</h1>
            <div className="content">
                <Card url="/archives/TCC_2025.pdf" src="img/tcc.png" title="Monografia" subtitle="UFC" date="2025.1" isDownload/>
                <Card url="/archives/Resumo_CPP.pdf" src="img/cpp-resumo.png" title="Resumo C++" subtitle="Material - Slide" date="2025" isDownload/>
                <Card url="/archives/CG-revisao_algebra.pdf" src="img/cg-revisao.png" title="Revisão de Algebra" subtitle="Computação Gráfica" date="2024" isDownload/>
            </div>
        </div>
    )
}
export default ScholarPage;