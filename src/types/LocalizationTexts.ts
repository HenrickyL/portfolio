import { Experience } from "./Experience"
import { PerfilInfo } from "./PerfilInfo"
import { Project } from "./Project"

type HomeMetric = {
    value: string,
    label: string
}

type HomeSkillGroup = {
    title: string,
    skills: string[]
}

type HomeExpertise = {
    title: string,
    description: string
}

type ProfessionalHome = {
    eyebrow: string,
    title: string,
    intro: string,
    primaryAction: string,
    secondaryAction: string,
    aboutTitle: string,
    aboutText: string,
    skillsTitle: string,
    expertiseTitle: string,
    metrics: HomeMetric[],
    skillGroups: HomeSkillGroup[],
    expertises: HomeExpertise[]
}

export type LocalizationTexts = {
    experiences: Experience[],
    projects: Project[],
    pages: {
        professional: {
            header: string,
            info: PerfilInfo,
            experiences: string
            label: string,
            curriculum: string
            curriculumTitle: string
            curriculumSubtitle: string
            home: ProfessionalHome
        },
        scholar: {
            header: string
            info: PerfilInfo,
            label: string
        },
        gameDev: {
            header: string
            info: PerfilInfo,
            label: string
        },
        projects: {
            header: string,
            label: string
        },
        contact: {
            header: string,
            label: string,
            name: string,
            yourEmail: string
            subject: string,
            message: string
            send: string
        },
    }
}
