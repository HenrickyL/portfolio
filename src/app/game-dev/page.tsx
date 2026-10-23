"use client";
import { Card } from "@/components/Card";
import { groupGamesByYear } from "@/helpers/groupGamesByYear";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { useEffect } from "react";
import {
    GameDevPageSty,
    GameDevSectionSty,
    GameDevYearSty,
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
    GameYearBlockSty,
} from "./style";

const GameDevPage = () => {
    const { content: { pages: { gameDev } } } = useLocalization();
    const { setPageInfo } = usePageInfo();
    const { profile } = gameDev;
    const groups = groupGamesByYear(gameDev.games);
    const since = groups[groups.length - 1]?.year ?? "";

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
                        <strong>{gameDev.games.length}</strong>
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
                <GameTitleSty>{profile.projectsTitle}</GameTitleSty>
                {groups.map((group) => (
                    <GameYearBlockSty key={group.year}>
                        <GameDevYearSty>{group.year}</GameDevYearSty>
                        <div className="content">
                            {group.games.map((game) => (
                                <Card
                                    key={game.id}
                                    src={game.cover}
                                    title={game.name}
                                    subtitle={game.summary}
                                    date={game.date}
                                    url={`/game-dev/${game.id}`}
                                />
                            ))}
                        </div>
                    </GameYearBlockSty>
                ))}
            </GameDevSectionSty>
        </GameDevPageSty>
    );
};

export default GameDevPage;
