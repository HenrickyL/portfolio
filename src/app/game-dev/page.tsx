"use client";
import { Card } from "@/components/Card";
import { periodValue, sortGamesByYear } from "@/helpers/groupGamesByYear";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";
import {
    GameDevPageSty,
    GameCardGridSty,
    GameDevSectionSty,
    GameEyebrowSty,
    GameGridSty,
    GameHeroContentSty,
    GameHeroSty,
    GameLeadSty,
    GameMetricCardSty,
    GameMetricGridSty,
    GamePanelSty,
    GameTagListSty,
    GameTagSty,
    GameTextSty,
    GameTitleSty,
} from "./style";

const GameDevPage = () => {
    const { content: { pages: { gameDev } } } = useLocalization();
    const { setPageInfo } = usePageInfo();
    const { profile } = gameDev;
    const games = sortGamesByYear(gameDev.games.filter((game) => game.id !== "blender"));
    const since = games.reduce<string>((oldest, game) => {
        const current = periodValue(game.date);
        const previous = periodValue(oldest);
        if (current === null) {
            return oldest;
        }
        if (previous === null || current < previous) {
            return game.date;
        }
        return oldest;
    }, "");

    useEffect(() => {
        setPageInfo(gameDev.info);
    }, [gameDev, setPageInfo]);

    return (
        <GameDevPageSty className="container">
            <GameHeroSty>
                <GameHeroContentSty>
                    <GameEyebrowSty>{profile.eyebrow}</GameEyebrowSty>
                    <h1>{profile.title}</h1>
                    <GameLeadSty>{profile.intro}</GameLeadSty>
                </GameHeroContentSty>
                <GameMetricGridSty>
                    <GameMetricCardSty>
                        <strong>{games.length}</strong>
                        <span>{profile.gamesLabel}</span>
                    </GameMetricCardSty>
                    <GameMetricCardSty>
                        <strong>{since}</strong>
                        <span>{profile.sinceLabel}</span>
                    </GameMetricCardSty>
                </GameMetricGridSty>
            </GameHeroSty>

            <GameGridSty>
                <GamePanelSty>
                    <GameTitleSty>{profile.aboutTitle}</GameTitleSty>
                    <GameTextSty>{profile.aboutText}</GameTextSty>
                </GamePanelSty>
                <GamePanelSty>
                    <GameTitleSty>{profile.skillsTitle}</GameTitleSty>
                    <GameTagListSty>
                        {profile.skills.map((skill) => (
                            <GameTagSty key={skill}>{skill}</GameTagSty>
                        ))}
                    </GameTagListSty>
                </GamePanelSty>
            </GameGridSty>

            <GameDevSectionSty>
                <GameCardGridSty>
                    {games.map((game) => (
                        <Card
                            key={game.id}
                            src={game.cover}
                            title={game.name}
                            subtitle={game.summary}
                            date={game.date || undefined}
                            url={`/game-dev/${game.id}`}
                        />
                    ))}
                </GameCardGridSty>
            </GameDevSectionSty>
        </GameDevPageSty>
    );
};

export default GameDevPage;
