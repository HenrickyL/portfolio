import { useLocalization } from "@/hooks/LocalizationProvider";
import { Timeline } from "@components/Timeline";

const ExperiencesField = ()=>{
    const {content} = useLocalization();
    return(
        <div className="container">
            <h2>{content.pages.professional.experiences}</h2>
            <Timeline.Root items={content.experiences} total={content.experiences.length} />
        </div>
    )
}

export default ExperiencesField;