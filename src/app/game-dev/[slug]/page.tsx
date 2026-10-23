"use client";
import { MediaCarousel } from "@/components/MediaCarousel";
import { iconForTool } from "@/helpers/toolIcons";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { GameMedia, GameSpec } from "@/types/Game";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
    GameBackLink,
    GameBlockSty,
    GameBoardSty,
    GameDetailPageSty,
    GameHeaderSty,
    GameInfoLinkSty,
    GameMechanicSty,
    GameMetaSty,
    GamePanelTitleSty,
    GameReferenceLineSty,
    GameSheetSty,
    GameSpecGridSty,
    GameSpecSty,
    GameTagSty,
    GameTextSty,
    GameTitleRowSty,
    GameToolsSty,
    GameTopSty,
    GameYearSty,
} from "./style";

const mediaOf = (cover: string, name: string, media: GameMedia[]): GameMedia[] => {
    if (media.length > 0) {
        return media;
    }

    return [{ kind: "image", src: cover, alt: name }];
};

const shownSpecs = (specs: GameSpec[]): GameSpec[] => {
    const kept = ["Status", "Engine", "Linguagem", "Language", "Gênero", "Genre"];
    return specs.filter((spec) => kept.includes(spec.field)).slice(0, 4);
};

const GameDetailPage = () => {
    const { content: { pages: { gameDev } } } = useLocalization();
    const { setPageInfo } = usePageInfo();
    const params = useParams<{ slug: string }>();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const game = gameDev.games.find((item) => item.id === slug);
    const { labels } = gameDev;
    const media = game ? mediaOf(game.cover, game.name, game.media) : [];

    useEffect(() => {
        setPageInfo(gameDev.info);
    }, [gameDev, setPageInfo]);

    if (!game) {
        return (
            <GameDetailPageSty className="container">
                <GameBackLink href="/game-dev" aria-label={labels.back}>
                    <FaArrowLeft />
                </GameBackLink>
                <GameTextSty>{labels.missing}</GameTextSty>
            </GameDetailPageSty>
        );
    }

    const synopsis = game.page?.synopsis || game.idea;
    const mechanics = game.page?.about.slice(0, 2) ?? [];
    const specs = shownSpecs(game.page?.specs ?? []);
    const references = game.page?.references.map((note) => note.title).join(" · ");

    return (
        <GameDetailPageSty className="container">
            <GameTopSty>
                <GameTitleRowSty>
                    <GameBackLink href="/game-dev" aria-label={labels.back}>
                        <FaArrowLeft />
                    </GameBackLink>
                    <GameHeaderSty>
                        <h1>{game.name}</h1>
                    </GameHeaderSty>
                </GameTitleRowSty>
                <GameMetaSty>
                    {game.page?.tags.map((tag) => (
                        <GameTagSty key={tag}>{tag}</GameTagSty>
                    ))}
                    <GameYearSty>
                        <strong>{game.date}</strong>
                        <span>{labels.date}</span>
                    </GameYearSty>
                    {game.tools.length > 0 && (
                        <GameToolsSty>
                            {game.tools.map((tool) => {
                                const ToolIcon = iconForTool(tool);
                                return <ToolIcon key={tool} title={tool} />;
                            })}
                        </GameToolsSty>
                    )}
                    {game.links[0] && (
                        <GameInfoLinkSty href={game.links[0].href} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{labels.link}</span>
                        </GameInfoLinkSty>
                    )}
                </GameMetaSty>
            </GameTopSty>
            <GameBoardSty>
                <MediaCarousel
                    key={game.id}
                    items={media}
                    previousLabel={labels.previous}
                    nextLabel={labels.next}
                    openLabel={labels.open}
                    closeLabel={labels.close}
                />
                <GameSheetSty>
                    {specs.length > 0 && (
                        <GameBlockSty>
                            <GamePanelTitleSty>{labels.specs}</GamePanelTitleSty>
                            <GameSpecGridSty>
                                {specs.map((spec) => (
                                    <GameSpecSty key={spec.field}>
                                        <dt>{spec.field}</dt>
                                        <dd>{spec.value}</dd>
                                    </GameSpecSty>
                                ))}
                            </GameSpecGridSty>
                        </GameBlockSty>
                    )}
                    {mechanics.length > 0 && (
                        <GameBlockSty>
                            <GamePanelTitleSty>{labels.mechanics}</GamePanelTitleSty>
                            {mechanics.map((note) => (
                                <GameMechanicSty key={note.title}>
                                    <strong>{note.title}. </strong>
                                    {note.text}
                                </GameMechanicSty>
                            ))}
                        </GameBlockSty>
                    )}
                    {synopsis && (
                        <GameBlockSty>
                            <GamePanelTitleSty>{labels.synopsis}</GamePanelTitleSty>
                            <GameTextSty>{synopsis}</GameTextSty>
                        </GameBlockSty>
                    )}
                    {references && (
                        <GameReferenceLineSty>
                            {labels.references}: {references}
                        </GameReferenceLineSty>
                    )}
                </GameSheetSty>
            </GameBoardSty>
        </GameDetailPageSty>
    );
};

export default GameDetailPage;
