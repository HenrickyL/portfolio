import { Experience } from "./Experience"
import { PerfilInfo } from "./PerfilInfo"
import { Project } from "./Project"

export type LocalizationTexts = {
    experiences: Experience[],
    projects: Project[],
    pages: {
        professional: {
            header: string,
            info: PerfilInfo,
            experiences: string,
            label: string
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
            label: string
        },
    }
}