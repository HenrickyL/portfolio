"use client";
import { MediaCarousel } from "@/components/MediaCarousel";
import { iconSrcForTool } from "@/helpers/toolIcons";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { useLocalization } from "@/hooks/LocalizationProvider";
import { usePageInfo } from "@/hooks/PageInfoProvidere";
import { GameMedia } from "@/types/Game";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
    GameBackLink,
    GameBlockSty,
    GameBoardSty,
    GameDetailPageSty,
    GameHeaderSty,
    GameCategorySty,
    GameGenreListSty,
    GameGenreTrackSty,
    GameInfoLinkSty,
    GameMechanicGridSty,
    GameMechanicSty,
    GameMechanicTagSty,
    GameMetaSty,
    GamePanelTitleSty,
    GamePathSty,
    GameSheetBodySty,
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

    const aboutText = game.page?.overview || game.page?.synopsis || game.idea;
    const mechanics = game.page?.about ?? [];
    const specs = game.page?.specs ?? [];
    const categories = game.page?.categories ?? [];
    const references = game.page?.references ?? [];

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
                    {game.linkDisabled && (
                        <GameInfoLinkSty as="span" $disabled aria-disabled="true">
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
                    <GameSheetBodySty>
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
                        {aboutText && (
                            <GameBlockSty>
                                <GamePanelTitleSty>{labels.overview}</GamePanelTitleSty>
                                <GameTextSty>{aboutText}</GameTextSty>
                            </GameBlockSty>
                        )}
                        {mechanics.length > 0 && (
                            <GameBlockSty>
                                <GamePanelTitleSty>{labels.mechanics}</GamePanelTitleSty>
                                <GameMechanicGridSty>
                                    {mechanics.map((note) => (
                                        <GameMechanicTagSty key={note.title}>{note.title}</GameMechanicTagSty>
                                    ))}
                                </GameMechanicGridSty>
                            </GameBlockSty>
                        )}
                        {references.length > 0 && (
                            <GameBlockSty>
                                <GamePanelTitleSty>{labels.references}</GamePanelTitleSty>
                                {references.map((note) => (
                                    <GameMechanicSty key={note.title}>
                                        <strong>{note.title}. </strong>
                                        {note.text}
                                    </GameMechanicSty>
                                ))}
                            </GameBlockSty>
                        )}
                    </GameSheetBodySty>
                    <GameSheetFootSty>
                        {categories.length > 0 && (
                            <GameGenreListSty>
                                <GameGenreTrackSty>
                                    {[...categories, ...categories].map((tag, index) => (
                                        <GameCategorySty key={`${tag}-${index}`}>{tag}</GameCategorySty>
                                    ))}
                                </GameGenreTrackSty>
                            </GameGenreListSty>
                        )}
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
