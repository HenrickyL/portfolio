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
              stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
            },
            experiences: "Experiências",
            label: "Dev"
        },
        scholar: {
            header: "Acadêmico",
            info:{
              title: "Bacharel em Ciência da Computação",
              stacks: [StacksTypes.CPP]
            },
            label: "Acadêmico"
        },
        gameDev: {
            header: "Desenvolvedor de Jogos",
            info:{
              title: "Desenvolvedor de Jogos",
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
        stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
      },
      experiences: "Experiences", // subtitle
      label: "Dev" // menu label
    },
    scholar: {
      header: "Academic",
      info:{
        title: "Bachelor in Computer Science",
        stacks: [StacksTypes.CPP ]
      },
      label: "Academic"
    },
    gameDev: {
      header: "Game Developer",
      info:{
        title: "Game Developer",
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