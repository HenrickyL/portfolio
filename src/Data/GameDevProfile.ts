import type { LocalizationTexts } from "@/types/LocalizationTexts";

type GameDevProfile = LocalizationTexts["pages"]["gameDev"]["profile"];

export const gameDevProfilePT: GameDevProfile = {
    eyebrow: "GameDev",
    title: "Portfólio de jogos",
    intro: "Projetos em ordem de ano, com ficha, mídia e ferramentas de cada jogo.",
    aboutTitle: "Perfil",
    aboutText: "Faço jogos e protótipos, de estudos em Java a projetos autorais. Uso Unity, C#, Java, Blender e C++.",
    skillsTitle: "Competências",
    skills: ["Unity", "C#", "Java", "Blender", "C++"],
    projectsTitle: "Projetos",
    gamesLabel: "Jogos",
    sinceLabel: "Desde",
};

export const gameDevProfileEN: GameDevProfile = {
    eyebrow: "GameDev",
    title: "Game portfolio",
    intro: "Projects ordered by year, with notes, media, and tools for each game.",
    aboutTitle: "Profile",
    aboutText: "I build games and prototypes, from Java studies to original projects. I use Unity, C#, Java, Blender, and C++.",
    skillsTitle: "Skills",
    skills: ["Unity", "C#", "Java", "Blender", "C++"],
    projectsTitle: "Projects",
    gamesLabel: "Games",
    sinceLabel: "Since",
};
