"use client"
import { Card } from "@/components/Card";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";
import {
    ScholarAreaItemSty,
    ScholarAreaListSty,
    ScholarCardsSty,
    ScholarEyebrowSty,
    ScholarGridSty,
    ScholarHeroContentSty,
    ScholarHeroSty,
    ScholarLeadSty,
    ScholarMetricCardSty,
    ScholarMetricGridSty,
    ScholarPageSty,
    ScholarPanelSty,
    ScholarTagListSty,
    ScholarTagSty,
    ScholarTextSty,
    ScholarTitleSty,
} from "./style";

const ScholarPage = ()=>{
    const {content:{pages:{scholar} }} =useLocalization()
    const { setPageInfo } = usePageInfo();
    const { content } = scholar;
                
    useEffect(() => {
        setPageInfo(scholar.info);
    }, [scholar, setPageInfo]);

    return(
        <ScholarPageSty className="container">
            <ScholarHeroSty>
                <ScholarHeroContentSty>
                    <ScholarEyebrowSty>{content.eyebrow}</ScholarEyebrowSty>
                    <h1>{content.title}</h1>
                    <ScholarLeadSty>{content.intro}</ScholarLeadSty>
                </ScholarHeroContentSty>

                <ScholarMetricGridSty>
                    {content.metrics.map((metric) => (
                        <ScholarMetricCardSty key={`${metric.value}-${metric.label}`}>
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                        </ScholarMetricCardSty>
                    ))}
                </ScholarMetricGridSty>
            </ScholarHeroSty>

            <ScholarGridSty>
                <ScholarPanelSty>
                    <ScholarTitleSty>{content.aboutTitle}</ScholarTitleSty>
                    <ScholarTextSty>{content.aboutText}</ScholarTextSty>
                </ScholarPanelSty>

                <ScholarPanelSty>
                    <ScholarTitleSty>{content.skillsTitle}</ScholarTitleSty>
                    <ScholarTagListSty>
                        {content.skills.map((skill) => (
                            <ScholarTagSty key={skill}>{skill}</ScholarTagSty>
                        ))}
                    </ScholarTagListSty>
                </ScholarPanelSty>
            </ScholarGridSty>

            <ScholarPanelSty>
                <ScholarTitleSty>{content.areasTitle}</ScholarTitleSty>
                <ScholarAreaListSty>
                    {content.areas.map((area) => (
                        <ScholarAreaItemSty key={area.title}>
                            <strong>{area.title}</strong>
                            <span>{area.description}</span>
                        </ScholarAreaItemSty>
                    ))}
                </ScholarAreaListSty>
            </ScholarPanelSty>

            <ScholarCardsSty>
                <ScholarTitleSty>{content.materialsTitle}</ScholarTitleSty>
                <div className="content">
                    {content.materials.map((material) => (
                        <Card
                            key={material.url}
                            url={material.url}
                            src={material.src}
                            title={material.title}
                            subtitle={material.subtitle}
                            date={material.date}
                            isDownload
                        />
                    ))}
                </div>
            </ScholarCardsSty>
        </ScholarPageSty>
    )
}
export default ScholarPage;
