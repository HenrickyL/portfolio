export type GameMedia = {
    kind: "image" | "video";
    src: string;
    alt: string;
    poster?: string;
};

export type GameLink = {
    label: string;
    href: string;
};

export type GameFact = {
    value: string;
    label: string;
};

export type GameNote = {
    title: string;
    text: string;
};

export type GameSpec = {
    field: string;
    value: string;
};

export type GamePage = {
    kicker: string;
    tags: string[];
    categories: string[];
    synopsis: string;
    overview: string;
    about: GameNote[];
    references: GameNote[];
    specs: GameSpec[];
    credits: string;
};

export type GameProject = {
    id: string;
    name: string;
    summary: string;
    date: string;
    cover: string;
    idea: string;
    tools: string[];
    facts?: GameFact[];
    related: string[];
    media: GameMedia[];
    links: GameLink[];
    linkDisabled?: boolean;
    page?: GamePage;
};
