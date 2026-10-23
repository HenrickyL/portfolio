import { moreGamesPT } from "@/Data/MoreGames";
import { moreGamesEN } from "@/Data/MoreGamesEN";
import { GameProject } from "@/types/Game";

export const gamesPT: GameProject[] = [
    {
        id: "recipe-for-ruin",
        name: "Recipe for Ruin",
        summary: "Jogo",
        date: "2025.2",
        cover: "/img/Recipe.png",
        idea: "Jogo de receitas e recursos. A mesa reúne cartas de ação, como Plant Gathering, e recursos como Labor para produção, construção e crafting.",
        tools: ["Unity", "C#", "Blender"],
        related: [],
        media: [
            { kind: "image", src: "/projects/recipe-for-ruin/Recipe.png", alt: "Mesa com a carta Plant Gathering" },
            { kind: "video", src: "/projects/recipe-for-ruin/main.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Vídeo de Recipe for Ruin" },
            { kind: "video", src: "/projects/recipe-for-ruin/v02.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Segunda versão de Recipe for Ruin" },
            { kind: "video", src: "/projects/recipe-for-ruin/vfx.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Efeitos de Recipe for Ruin" },
        ],
        links: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/perikan_studio/",
            },
        ],
        page: {
            kicker: "Jogo autoral · Em desenvolvimento · Unity",
            tags: ["Autoral", "Experimentação"],
            categories: ["Crafting", "Card-Based", "Alquimia", "Gestão de Recursos", "Descoberta", "Mistério", "Gestão de Tempo", "Single-Player"],
            synopsis: "Um aprendiz de alquimista destrói acidentalmente o grimório de seu mestre. Com a ajuda de um misterioso Daemon, ele precisa redescobrir as receitas perdidas antes que o mestre retorne — mas as intenções de seu novo aliado são incertas.",
            overview: "Recipe for Ruin é um jogo de crafting com cartas e estações alquímicas. Em uma mesa interativa, o jogador coleta e processa recursos, experimenta combinações e reconstrói receitas para recuperar o grimório perdido.",
            about: [
                { title: "Crafting com cartas", text: "Combine recursos e processos para descobrir receitas." },
                { title: "Estações alquímicas", text: "Colete, refine e transforme materiais em novos produtos." },
                { title: "Experimentação", text: "Descubra receitas e registre-as no grimório." },
                { title: "Gestão de recursos", text: "Administre trabalho, moedas e instrumentos." },
                { title: "Ciclo de dias", text: "Equilibre as atividades com o tempo limitado antes do retorno do mestre." },
            ],
            references: [
                { title: "Cultist Simulator", text: "Cartas, sistemas emergentes e descoberta indireta." },
                { title: "Potion Craft", text: "Crafting alquímico, economia e progressão de ferramentas." },
                { title: "Inscryption", text: "Ambientação misteriosa e narrador manipulador." },
                { title: "Yes, Your Grace", text: "Estrutura de dias e progressão temporal." },
            ],
            specs: [
                { field: "Engine", value: "Unity" },
                { field: "Linguagem", value: "C#" },
                { field: "Gênero", value: "Crafting, estratégia e gestão de recursos" },
                { field: "Estado", value: "Em desenvolvimento." },
            ],
            credits: "Projeto autoral em Unity, com experimentação de mecânicas, programação e iteração de design.",
        },
    },
    {
        id: "clash-royale-clone",
        name: "Clone de Clash Royale",
        summary: "Java",
        date: "2019.2",
        cover: "/projects/clash-royale-clone/main.png",
        idea: "Clone feito em 2019 para a disciplina de POO, em Java puro.",
        tools: ["Java"],
        related: [],
        media: [
            { kind: "image", src: "/projects/clash-royale-clone/main.png", alt: "Clone de Clash Royale" },
            { kind: "video", src: "/projects/clash-royale-clone/clash-royale.mp4", poster: "/projects/clash-royale-clone/main.png", alt: "Vídeo do clone" },
        ],
        links: [],
        page: {
            kicker: "Java · 2019",
            tags: ["Disciplina", "POO"],
            categories: [],
            synopsis: "",
            overview: "Clone feito em 2019 para a disciplina de POO, em Java puro.",
            about: [
                { title: "Java puro", text: "" },
                { title: "POO", text: "" },
            ],
            references: [],
            specs: [
                { field: "Linguagem", value: "Java" },
                { field: "Disciplina", value: "POO" },
                { field: "Ano", value: "2019.2" },
            ],
            credits: "",
        },
    },
    ...moreGamesPT,
];

export const gamesEN: GameProject[] = [
    {
        id: "recipe-for-ruin",
        name: "Recipe for Ruin",
        summary: "Game",
        date: "2025.2",
        cover: "/img/Recipe.png",
        idea: "A game of recipes and resources. The desk gathers action cards, such as Plant Gathering, and resources such as Labor for production, construction, and crafting.",
        tools: ["Unity", "C#", "Blender"],
        related: [],
        media: [
            { kind: "image", src: "/projects/recipe-for-ruin/Recipe.png", alt: "Desk with the Plant Gathering card" },
            { kind: "video", src: "/projects/recipe-for-ruin/main.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Recipe for Ruin video" },
            { kind: "video", src: "/projects/recipe-for-ruin/v02.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Second Recipe for Ruin video" },
            { kind: "video", src: "/projects/recipe-for-ruin/vfx.mp4", poster: "/projects/recipe-for-ruin/Recipe.png", alt: "Recipe for Ruin effects" },
        ],
        links: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/perikan_studio/",
            },
        ],
        page: {
            kicker: "Original game · In development · Unity",
            tags: ["Original", "Experimentation"],
            categories: ["Crafting", "Card-Based", "Alchemy", "Resource Management", "Discovery", "Mystery", "Time Management", "Single-Player"],
            synopsis: "An alchemist's apprentice accidentally destroys his master's grimoire. With help from a mysterious Daemon, he must rediscover the lost recipes before the master returns — but his new ally's intentions are uncertain.",
            overview: "Recipe for Ruin is a crafting game of cards and alchemical stations. At an interactive desk, the player gathers and processes resources, tries combinations, and rebuilds recipes to recover the lost grimoire.",
            about: [
                { title: "Card crafting", text: "Combine resources and processes to discover recipes." },
                { title: "Alchemical stations", text: "Gather, refine, and turn materials into new products." },
                { title: "Experimentation", text: "Discover recipes and record them in the grimoire." },
                { title: "Resource management", text: "Manage labor, coins, and instruments." },
                { title: "Day cycle", text: "Balance the work against the limited time before the master returns." },
            ],
            references: [
                { title: "Cultist Simulator", text: "Cards, emergent systems, and indirect discovery." },
                { title: "Potion Craft", text: "Alchemical crafting, economy, and tool progression." },
                { title: "Inscryption", text: "Mysterious atmosphere and a manipulative narrator." },
                { title: "Yes, Your Grace", text: "Day structure and time progression." },
            ],
            specs: [
                { field: "Engine", value: "Unity" },
                { field: "Language", value: "C#" },
                { field: "Genre", value: "Crafting, strategy, and resource management" },
                { field: "Status", value: "In development." },
            ],
            credits: "Original Unity project, covering gameplay experiments, programming, and design iteration.",
        },
    },
    {
        id: "clash-royale-clone",
        name: "Clash Royale Clone",
        summary: "Java",
        date: "2019.2",
        cover: "/projects/clash-royale-clone/main.png",
        idea: "A 2019 clone for an OOP course, written in plain Java.",
        tools: ["Java"],
        related: [],
        media: [
            { kind: "image", src: "/projects/clash-royale-clone/main.png", alt: "Clash Royale clone" },
            { kind: "video", src: "/projects/clash-royale-clone/clash-royale.mp4", poster: "/projects/clash-royale-clone/main.png", alt: "Clone video" },
        ],
        links: [],
        page: {
            kicker: "Java · 2019",
            tags: ["Course", "OOP"],
            categories: [],
            synopsis: "",
            overview: "A 2019 clone for an OOP course, written in plain Java.",
            about: [
                { title: "Plain Java", text: "" },
                { title: "OOP", text: "" },
            ],
            references: [],
            specs: [
                { field: "Language", value: "Java" },
                { field: "Course", value: "OOP" },
                { field: "Year", value: "2019.2" },
            ],
            credits: "",
        },
    },
    ...moreGamesEN,
];
