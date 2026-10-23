import type { LocalizationTexts } from "@/types/LocalizationTexts";

type GameDevProfile = LocalizationTexts["pages"]["gameDev"]["profile"];

export const gameDevProfilePT: GameDevProfile = {
    eyebrow: "GameDev",
    title: "Jogos e protótipos",
    intro: "Estudos de disciplina, engines e um jogo autoral em desenvolvimento. Cada projeto abre uma ficha com mídia, ferramentas e a ideia.",
    aboutTitle: "Perfil",
    aboutText: "Sou desenvolvedor de jogos no tempo livre, com experiência em Unity, C++ e Java. Ainda não tenho um jogo publicado, mas o Recipe for Ruin já está em desenvolvimento.",
    skillsTitle: "Ferramentas",
    skills: ["Unity", "C#", "C++", "Java", "Blender"],
    projectsTitle: "Projetos",
    featuredLabel: "Em desenvolvimento",
    focus: [
        { value: "Autoral", label: "Recipe for Ruin, em produção" },
        { value: "Unity", label: "Jogos, simulação e protótipos" },
        { value: "C++", label: "Engine 2D e física" },
        { value: "Estudos", label: "Disciplinas, testes e VFX" },
    ],
    sections: [
        {
            id: "projects",
            title: "Projetos",
            text: "Engine, simulação e estudos de disciplina. Com mais empenho, dariam um jogo publicado.",
        },
        {
            id: "tests",
            title: "Testes",
            text: "Experimentos curtos de física, fratura, VFX e cena.",
        },
    ],
};

export const gameDevProfileEN: GameDevProfile = {
    eyebrow: "GameDev",
    title: "Games and prototypes",
    intro: "Course studies, engines, and an original game in development. Each project opens a sheet with media, tools, and the idea.",
    aboutTitle: "Profile",
    aboutText: "I make games in my spare time, with experience in Unity, C++, and Java. I don't have a published game yet, but Recipe for Ruin is already in development.",
    skillsTitle: "Tools",
    skills: ["Unity", "C#", "C++", "Java", "Blender"],
    projectsTitle: "Projects",
    featuredLabel: "In development",
    focus: [
        { value: "Original", label: "Recipe for Ruin, in production" },
        { value: "Unity", label: "Games, simulation, and prototypes" },
        { value: "C++", label: "2D engine and physics" },
        { value: "Studies", label: "Courses, tests, and VFX" },
    ],
    sections: [
        {
            id: "projects",
            title: "Projects",
            text: "An engine, a simulation, and course studies. With more work, they could become a published game.",
        },
        {
            id: "tests",
            title: "Tests",
            text: "Short experiments in physics, fracture, VFX, and scene.",
        },
    ],
};
