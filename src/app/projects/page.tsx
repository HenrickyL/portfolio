"use client";
import { Card } from "@/components/Card";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { ProjectsPageSty, ProjectsSectionSty, ProjectsTitleSty } from "./style";

const ProjectsPage = () => {
    const { content: { pages: { projects } } } = useLocalization();

    return (
        <ProjectsPageSty className="container">
            <h1>{projects.header}</h1>
            {projects.sections.map((section) => (
                <ProjectsSectionSty key={section.id}>
                    <ProjectsTitleSty>{section.title}</ProjectsTitleSty>
                    <div className="content">
                        {section.projects.map((project) => (
                            <Card
                                key={project.id}
                                src={project.src}
                                title={project.name}
                                subtitle={project.summary}
                                date={project.date}
                                url={project.url}
                            />
                        ))}
                    </div>
                </ProjectsSectionSty>
            ))}
        </ProjectsPageSty>
    );
};

export default ProjectsPage;
