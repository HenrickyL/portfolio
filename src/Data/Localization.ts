import { LocalizationTexts } from "@/types/LocalizationTexts";
import { experiencesEN, experiencesPT } from "./Experiences";
import { StacksTypes } from "@/types/stacks";

export const LocalizationPT: LocalizationTexts = {
    experiences: experiencesPT,
    projects: [],
    pages: {
        professional: {
            header: "Profissional",
            info:{
              title: "Fullstack Developer",
              region: "Fortaleza, CE, Brasil",
              stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
            },
            experiences: "Experiências",
            label: "Dev"
        },
        scholar: {
            header: "Acadêmico",
            info:{
              title: "Bacharel em Ciência da Computação",
              region: "Fortaleza, CE, Brasil",
              stacks: [StacksTypes.CPP]
            },
            label: "Acadêmico"
        },
        gameDev: {
            header: "Desenvolvedor de Jogos",
            info:{
              title: "Desenvolvedor de Jogos",
              region: "Fortaleza, CE, Brasil",
              stacks: [ StacksTypes.CSharp, StacksTypes.Unity, StacksTypes.Blender, StacksTypes.CPP]
            },
            label: "GameDev"

        },
        projects: {
            header: "Projetos",
            label: "Projetos"
        },
        contact: {
            header: "Contato",
            label: "Contato"
        }
    }
}


export const LocalizationEN: LocalizationTexts = {
  experiences: experiencesEN,
  projects: [],
  pages: {
    professional: {
      header: "Professional", // Header h1 page
      info:{
        title: "Fullstack Developer",
        region: "Fortaleza, CE, Brazil",
        stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
      },
      experiences: "Experiences", // subtitle
      label: "Dev" // menu label
    },
    scholar: {
      header: "Academic",
      info:{
        title: "Bachelor in Computer Science",
        region: "Fortaleza, CE, Brazil",
        stacks: [StacksTypes.CPP ]
      },
      label: "Academic"
    },
    gameDev: {
      header: "Game Developer",
      info:{
        title: "Game Developer",
        region: "Fortaleza, CE, Brazil",
        stacks: [ StacksTypes.CSharp, StacksTypes.Unity, StacksTypes.Blender, StacksTypes.CPP]
      },
      label: "GameDev"
    },
    projects: {
      header: "Projects",
      label: "Projects"
    },
    contact: {
      header: "Contact",
      label: "Contact"
    }
  }
}