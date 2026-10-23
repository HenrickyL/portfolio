import { GameProject } from "@/types/Game";

export type GameYearGroup = {
    year: string;
    games: GameProject[];
};

const yearOf = (date: string) => date.match(/\d{4}/)?.[0] ?? "";

export const periodValue = (date: string): number | null => {
    const match = date.match(/(\d{4})(?:\.(\d+))?/);
    if (!match) {
        return null;
    }
    return Number(match[1]) * 10 + Number(match[2] ?? 0);
};

export const sortGamesByYear = (games: GameProject[]): GameProject[] => {
    return [...games].sort((a, b) => {
        const yearA = periodValue(a.date);
        const yearB = periodValue(b.date);
        if (yearA === null && yearB === null) {
            return 0;
        }
        if (yearA === null) {
            return 1;
        }
        if (yearB === null) {
            return -1;
        }
        return yearB - yearA;
    });
};

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
