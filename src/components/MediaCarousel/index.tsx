"use client";
import { GameMedia } from "@/types/Game";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";
import {
    CarouselRoot,
    Stage,
    StageButton,
    StageHit,
    StagePlay,
    Strip,
    StripButton,
    Thumb,
    ThumbPlay,
    Track,
    ViewerBackdrop,
    ViewerButton,
    ViewerClose,
    ViewerStage,
    ViewerVideo,
} from "./style";

type MediaCarouselProps = {
    items: GameMedia[];
    previousLabel: string;
    nextLabel: string;
    openLabel: string;
    closeLabel: string;
};

const VISIBLE = 3;

export const MediaCarousel = ({
    items,
    previousLabel,
    nextLabel,
    openLabel,
    closeLabel,
}: MediaCarouselProps) => {
    const [start, setStart] = useState(0);
    const [index, setIndex] = useState(0);
    const [focus, setFocus] = useState(0);
    const [open, setOpen] = useState(false);
    const visibleCount = Math.min(VISIBLE, items.length);
    const maxStart = Math.max(0, items.length - VISIBLE);
    const canScroll = items.length > VISIBLE;

    useEffect(() => {
        if (!open) {
            return;
        }

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
            if (event.key === "ArrowRight") {
                setIndex((value) => (value + 1) % items.length);
            }
            if (event.key === "ArrowLeft") {
                setIndex((value) => (value - 1 + items.length) % items.length);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, items.length]);

    if (items.length === 0) {
        return null;
    }

    const current = items[index] ?? items[0];
    const focused = items[focus] ?? items[0];
    const stagePreview = focused.kind === "video" ? focused.poster : focused.src;
    const canStep = items.length > 1;
    const shown = Array.from({ length: visibleCount }, (_, offset) => {
        const itemIndex = start + offset;
        return { item: items[itemIndex], itemIndex };
    });

    const scroll = (step: number) => {
        setStart((value) => Math.min(maxStart, Math.max(0, value + step)));
    };

    const openAt = (itemIndex: number) => {
        setFocus(itemIndex);
        setIndex(itemIndex);
        setOpen(true);
    };

    const stepFocus = (step: number) => {
        setFocus((value) => (value + step + items.length) % items.length);
    };

    return (
        <CarouselRoot>
            <Stage>
                {stagePreview && (
                    <Image src={stagePreview} alt={focused.alt} fill sizes="70vw" />
                )}
                <StageHit type="button" aria-label={openLabel} onClick={() => openAt(focus)} />
                {focused.kind === "video" && (
                    <StagePlay>
                        <FaPlay />
                    </StagePlay>
                )}
                <StageButton
                    type="button"
                    $side="previous"
                    aria-label={previousLabel}
                    disabled={!canStep}
                    $disabled={!canStep}
                    onClick={() => stepFocus(-1)}
                >
                    <FaChevronLeft />
                </StageButton>
                <StageButton
                    type="button"
                    $side="next"
                    aria-label={nextLabel}
                    disabled={!canStep}
                    $disabled={!canStep}
                    onClick={() => stepFocus(1)}
                >
                    <FaChevronRight />
                </StageButton>
            </Stage>
            <Strip>
                <StripButton type="button" aria-label={previousLabel} disabled={!canScroll || start === 0} $disabled={!canScroll || start === 0} onClick={() => scroll(-1)}>
                    <FaChevronLeft />
                </StripButton>
                <Track>
                    {shown.map(({ item, itemIndex }) => {
                        const preview = item.kind === "video" ? item.poster : item.src;
                        return (
                            <Thumb
                                key={`${item.src}-${itemIndex}`}
                                type="button"
                                $active={itemIndex === focus}
                                aria-label={openLabel}
                                onClick={() => setFocus(itemIndex)}
                            >
                                {preview && (
                                    <Image src={preview} alt={item.alt} fill sizes="160px" />
                                )}
                                {item.kind === "video" && (
                                    <ThumbPlay>
                                        <FaPlay />
                                    </ThumbPlay>
                                )}
                            </Thumb>
                        );
                    })}
                </Track>
                <StripButton type="button" aria-label={nextLabel} disabled={!canScroll || start === maxStart} $disabled={!canScroll || start === maxStart} onClick={() => scroll(1)}>
                    <FaChevronRight />
                </StripButton>
            </Strip>
            {open && (
                <ViewerBackdrop onClick={() => setOpen(false)}>
                    <ViewerStage onClick={(event) => event.stopPropagation()}>
                        <ViewerClose type="button" aria-label={closeLabel} onClick={() => setOpen(false)}>
                            <FaTimes />
                        </ViewerClose>
                        {current.kind === "video" ? (
                            <ViewerVideo
                                key={current.src}
                                src={current.src}
                                poster={current.poster}
                                controls
                                autoPlay
                                playsInline
                            />
                        ) : (
                            <Image src={current.src} alt={current.alt} fill sizes="90vw" />
                        )}
                        {items.length > 1 && (
                            <>
                                <ViewerButton
                                    type="button"
                                    $side="previous"
                                    aria-label={previousLabel}
                                    onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}
                                >
                                    <FaChevronLeft />
                                </ViewerButton>
                                <ViewerButton
                                    type="button"
                                    $side="next"
                                    aria-label={nextLabel}
                                    onClick={() => setIndex((value) => (value + 1) % items.length)}
                                >
                                    <FaChevronRight />
                                </ViewerButton>
                            </>
                        )}
                    </ViewerStage>
                </ViewerBackdrop>
            )}
        </CarouselRoot>
    );
};
