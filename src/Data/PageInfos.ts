import { PerfilInfo } from "@/hooks/PageInfoProvidere";
import { DevStacksTypes, GameDevStacksTypes, ScholarStacksTypes } from "@/types/stacks";

export const DevPageInfo : PerfilInfo = {
    perfilDescription: "Fullstack Developer",
    stacks: [
        DevStacksTypes.DotNet, 
        DevStacksTypes.ReactJs, 
        DevStacksTypes.NodeJs,
        DevStacksTypes.SpringBoot, 
    ]
}


export const ScholarInfo : PerfilInfo = {
    perfilDescription: "Bacharel em Ciência da Computação",
    stacks: [
        ScholarStacksTypes.AI,
        ScholarStacksTypes.CG,
        ScholarStacksTypes.Game,
        ScholarStacksTypes.Alg,
    ]
}


export const GameDevInfo : PerfilInfo = {
    perfilDescription: "Desenvolvedor de Jogos",
    stacks: [
        GameDevStacksTypes.Unity,
        GameDevStacksTypes.Blender,
    ]
}