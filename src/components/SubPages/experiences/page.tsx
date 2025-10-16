import { useLocalization } from "@/hooks/LocalizationProvider";
import { Timeline } from "@components/Timeline";

const ExperiencesField = ()=>{
    const {content} = useLocalization();
    return(
        <div className="container">
            <h2>{content.pages.professional.experiences}</h2>
            <Timeline.Root>
                {content.experiences.map((xp,i) => (
                    <Timeline.Item 
                        key={xp.id}
                        index={i+1} 
                        experience={xp} 
                        $alternate={i%2 === 1}
                        />
                ))}
            </Timeline.Root>
        </div>
    )
}

export default ExperiencesField;