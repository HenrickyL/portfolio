import { GameProject } from "@/types/Game";

export type GameYearGroup = {
    year: string;
    games: GameProject[];
};

const yearOf = (date: string) => date.match(/\d{4}/)?.[0] ?? date;

export const groupGamesByYear = (games: GameProject[]): GameYearGroup[] => {
    const groups = new Map<string, GameProject[]>();

    games.forEach((game) => {
        const year = yearOf(game.date);
        const current = groups.get(year) ?? [];
        current.push(game);
        groups.set(year, current);
    });

    return Array.from(groups.entries())
        .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
        .map(([year, items]) => ({ year, games: items }));
};
