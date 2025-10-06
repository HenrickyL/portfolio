import { getExperiences } from "@/lib/content";
import { Experience } from "@/types/Experience";
import { Timeline } from "@components/Timeline";


const ExperiencesField = async ()=>{
    const experiences:Experience[] = await getExperiences();

    return(
        <>
            <h1>Experiências</h1>
            <Timeline.Root total={experiences.length}>
                {experiences.map((xp,i) => (
                    <Timeline.Item 
                        key={xp.id}
                        total={experiences.length}
                        index={i+1} 
                        experience={xp} 
                        $alternate={i%2 === 1}
                        />
                ))}
            </Timeline.Root>
        </>
    )
}

export default ExperiencesField;