"use client";
import { MediaCarousel } from "@/components/MediaCarousel";
import { iconSrcForTool } from "@/helpers/toolIcons";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { GameMedia, GameSpec } from "@/types/Game";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
    GameBackLink,
    GameBlockSty,
    GameBoardSty,
    GameDetailPageSty,
    GameHeaderSty,
    GameGenreListSty,
    GameGenreTrackSty,
    GameInfoLinkSty,
    GameMechanicSty,
    GameMetaSty,
    GamePanelTitleSty,
    GamePathSty,
    GameReferenceLineSty,
    GameSheetFootSty,
    GameSheetSty,
    GameSpecGridSty,
    GameSpecSty,
    GameTagSty,
    GameTextSty,
    GameTitleRowSty,
    GameToolSty,
    GameToolsSty,
    GameTopSty,
} from "./style";

const mediaOf = (cover: string, name: string, media: GameMedia[]): GameMedia[] => {
    if (media.length > 0) {
        return media;
    }

    return [{ kind: "image", src: cover, alt: name }];
};

const shownSpecs = (specs: GameSpec[]): GameSpec[] => {
    const kept = ["Status", "Engine", "Linguagem", "Language"];
    return specs.filter((spec) => kept.includes(spec.field));
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
    const genreField = game.page?.specs.find((spec) => spec.field === "Gênero" || spec.field === "Genre");
    const genreTags = game.page?.tags.length ? game.page.tags : genreField ? [genreField.value] : [];
    const references = game.page?.references.map((note) => note.title).join(" · ");

    return (
        <GameDetailPageSty className="container">
            <GameTopSty>
                <GameTitleRowSty>
                    <GameBackLink href="/game-dev" aria-label={labels.back}>
                        <FaArrowLeft />
                    </GameBackLink>
                    <GamePathSty>
                        <Link href="/game-dev">{gameDev.label}</Link>
                        <span>/</span>
                        <span>{game.name}</span>
                    </GamePathSty>
                </GameTitleRowSty>
                <GameHeaderSty>
                    <h1>{game.name}</h1>
                </GameHeaderSty>
                <GameMetaSty>
                    {game.page?.tags.map((tag) => (
                        <GameTagSty key={tag}>{tag}</GameTagSty>
                    ))}
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
                    {(specs.length > 0 || genreTags.length > 0) && (
                        <GameBlockSty>
                            <GamePanelTitleSty>{labels.specs}</GamePanelTitleSty>
                            {specs.length > 0 && (
                                <GameSpecGridSty>
                                    {specs.map((spec) => (
                                        <GameSpecSty key={spec.field}>
                                            <dt>{spec.field}</dt>
                                            <dd>{spec.value}</dd>
                                        </GameSpecSty>
                                    ))}
                                </GameSpecGridSty>
                            )}
                            {genreTags.length > 0 && (
                                <GameGenreListSty>
                                    <GameGenreTrackSty>
                                        {[...genreTags, ...genreTags].map((tag, index) => (
                                            <GameTagSty key={`${tag}-${index}`}>{tag}</GameTagSty>
                                        ))}
                                    </GameGenreTrackSty>
                                </GameGenreListSty>
                            )}
                        </GameBlockSty>
                    )}
                    {synopsis && (
                        <GameBlockSty>
                            <GameTextSty>{synopsis}</GameTextSty>
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
                    <GameSheetFootSty>
                        <GameReferenceLineSty>
                            {references ? `${labels.references}: ${references}` : ""}
                        </GameReferenceLineSty>
                        {game.tools.length > 0 && (
                            <GameToolsSty>
                                {game.tools.map((tool) => {
                                    const src = iconSrcForTool(tool);
                                    if (!src) {
                                        return null;
                                    }
                                    return (
                                        <GameToolSty key={tool}>
                                            <img src={src} alt={tool} />
                                            <em>{tool}</em>
                                        </GameToolSty>
                                    );
                                })}
                            </GameToolsSty>
                        )}
                    </GameSheetFootSty>
                </GameSheetSty>
            </GameBoardSty>
        </GameDetailPageSty>
    );
};

export default GameDetailPage;
