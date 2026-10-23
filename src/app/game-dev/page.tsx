"use client";
import { Card } from "@/components/Card";
import { sortGamesByYear } from "@/helpers/groupGamesByYear";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import Image from "next/image";
import { useEffect } from "react";
import {
    GameCardGridSty,
    GameDevPageSty,
    GameDevSectionSty,
    GameEyebrowSty,
    GameFeatureCopySty,
    GameFeatureMediaSty,
    GameFeatureSty,
    GameGridSty,
    GameHeroContentSty,
    GameHeroSty,
    GameLeadSty,
    GameMetricCardSty,
    GameMetricGridSty,
    GamePanelSty,
    GameSectionLeadSty,
    GameTagListSty,
    GameTagSty,
    GameTextSty,
    GameTitleSty,
} from "./style";

const SECTION_IDS: Record<string, string[]> = {
    projects: ["game-engine-cpp", "yumi-no-sekai", "tower-defense", "clash-royale-clone"],
    tests: ["fracture", "oblique-launch", "mini-world"],
};

const GameDevPage = () => {
    const { content: { pages: { gameDev } } } = useLocalization();
    const { setPageInfo } = usePageInfo();
    const { profile } = gameDev;
    const games = sortGamesByYear(gameDev.games.filter((game) => game.id !== "blender"));
    const featured = games.find((game) => game.id === "recipe-for-ruin");
    const listed = new Set(Object.values(SECTION_IDS).flat());
    const sections = profile.sections
        .map((section) => ({
            ...section,
            games: sortGamesByYear(games.filter((game) => SECTION_IDS[section.id]?.includes(game.id))),
        }))
        .filter((section) => section.games.length > 0);
    const rest = sortGamesByYear(games.filter((game) => game.id !== featured?.id && !listed.has(game.id)));

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
                    {profile.focus.map((item) => (
                        <GameMetricCardSty key={item.value}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </GameMetricCardSty>
                    ))}
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

            {featured && (
                <GameFeatureSty href={`/game-dev/${featured.id}`}>
                    <GameFeatureMediaSty>
                        <Image src={featured.cover} alt={featured.name} fill sizes="50vw" />
                    </GameFeatureMediaSty>
                    <GameFeatureCopySty>
                        <GameEyebrowSty>{profile.featuredLabel}</GameEyebrowSty>
                        <h2>{featured.name}</h2>
                        <p>{featured.idea}</p>
                        <span>{[featured.date, featured.summary].filter(Boolean).join(" · ")}</span>
                    </GameFeatureCopySty>
                </GameFeatureSty>
            )}

            {sections.map((section) => (
                <GameDevSectionSty key={section.id}>
                    <GameTitleSty $rule>{section.title}</GameTitleSty>
                    <GameSectionLeadSty>{section.text}</GameSectionLeadSty>
                    <GameCardGridSty>
                        {section.games.map((game) => (
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
            ))}

            {rest.length > 0 && (
                <GameCardGridSty>
                    {rest.map((game) => (
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
            )}
        </GameDevPageSty>
    );
};

export default GameDevPage;
