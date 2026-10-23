import { GameProject } from "@/types/Game";

export const gamesPT: GameProject[] = [
    {
        id: "recipe-for-ruin",
        name: "Recipe for Ruin",
        summary: "Jogo",
        date: "2025",
        cover: "/img/Recipe.png",
        idea: "Jogo de receitas e recursos. A mesa reúne cartas de ação, como Plant Gathering, e recursos como Labor para produção, construção e crafting.",
        tools: ["Unity", "C#", "Blender"],
        related: [],
        media: [
            { kind: "image", src: "/projects/recipe-for-ruin/Recipe.png", alt: "Mesa com a carta Plant Gathering" },
            { kind: "video", src: "/projects/recipe-for-ruin/main.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Vídeo de Recipe for Ruin" },
        ],
        links: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/perikan_studio/",
            },
        ],
        page: {
            kicker: "Jogo autoral · Em desenvolvimento · Unity",
            tags: ["Autoral", "Cartas", "Experimentação"],
            synopsis: "Jogo sobre culinária, experimentação e consequência. O jogador combina recursos e aprende com o resultado.",
            about: [
                { title: "Conceito", text: "Culinária, experimentação e consequência." },
                { title: "Jogabilidade", text: "Cartas de receita e recursos, como Labor e Plant Gathering." },
                { title: "Objetivo de design", text: "Fazer a descoberta de combinações ser o centro da experiência." },
                { title: "Estado atual", text: "Em desenvolvimento." },
            ],
            references: [
                { title: "Potion Craft", text: "Experimentação, combinação de elementos e descoberta de resultados." },
                { title: "Stacklands", text: "Cartas de recursos e receitas." },
                { title: "Inscryption", text: "Atmosfera, apresentação e identidade." },
            ],
            specs: [
                { field: "Status", value: "Em desenvolvimento" },
                { field: "Engine", value: "Unity" },
                { field: "Linguagem", value: "C# — confirmar" },
                { field: "Gênero", value: "A definir" },
                { field: "Plataforma", value: "A definir" },
                { field: "Desenvolvedor", value: "Projeto autoral" },
            ],
            credits: "Projeto autoral em Unity, com experimentação de mecânicas, programação e iteração de design.",
        },
    },
    {
        id: "clash-royale-clone",
        name: "Clone de Clash Royale",
        summary: "Java",
        date: "2019",
        cover: "/img/clash-royale-clone.png",
        idea: "Clone de estudo feito em Java em 2019.",
        tools: ["Java"],
        related: [],
        media: [
            { kind: "video", src: "/projects/clash-royale.mp4", alt: "Vídeo do clone" },
        ],
        links: [],
    },
];

export const gamesEN: GameProject[] = [
    {
        id: "recipe-for-ruin",
        name: "Recipe for Ruin",
        summary: "Game",
        date: "2025",
        cover: "/img/Recipe.png",
        idea: "A game of recipes and resources. The desk gathers action cards, such as Plant Gathering, and resources such as Labor for production, construction, and crafting.",
        tools: ["Unity", "C#", "Blender"],
        related: [],
        media: [
            { kind: "image", src: "/projects/recipe-for-ruin/Recipe.png", alt: "Desk with the Plant Gathering card" },
            { kind: "video", src: "/projects/recipe-for-ruin/main.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Recipe for Ruin video" },
        ],
        links: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/perikan_studio/",
            },
        ],
        page: {
            kicker: "Original game · In development · Unity",
            tags: ["Original", "Cards", "Experimentation"],
            synopsis: "A game about cooking, experimentation, and consequence. The player combines resources and learns from the result.",
            about: [
                { title: "Concept", text: "Cooking, experimentation, and consequence." },
                { title: "Gameplay", text: "Recipe cards and resources, such as Labor and Plant Gathering." },
                { title: "Design goal", text: "Make the discovery of combinations the center of the experience." },
                { title: "Current state", text: "In development." },
            ],
            references: [
                { title: "Potion Craft", text: "Experimentation, combining elements, and discovering results." },
                { title: "Stacklands", text: "Resource and recipe cards." },
                { title: "Inscryption", text: "Atmosphere, presentation, and identity." },
            ],
            specs: [
                { field: "Status", value: "In development" },
                { field: "Engine", value: "Unity" },
                { field: "Language", value: "C# — to confirm" },
                { field: "Genre", value: "To be defined" },
                { field: "Platform", value: "To be defined" },
                { field: "Developer", value: "Original project" },
            ],
            credits: "Original Unity project, covering gameplay experiments, programming, and design iteration.",
        },
    },
    {
        id: "clash-royale-clone",
        name: "Clash Royale Clone",
        summary: "Java",
        date: "2019",
        cover: "/img/clash-royale-clone.png",
        idea: "A study clone built with Java in 2019.",
        tools: ["Java"],
        related: [],
        media: [
            { kind: "video", src: "/projects/clash-royale.mp4", alt: "Clone video" },
        ],
        links: [],
    },
];
