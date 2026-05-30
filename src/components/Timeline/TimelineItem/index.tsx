"use client";

import { useState } from "react";
import { Experience } from "@/types/Experience"
import {
    TimelineDescriptionSty,
    TimelineExpandButtonSty,
    TimelineHeaderSty,
    TimelineInfoSty,
    TimelineItemContainer,
    TimelineItemSty,
    TimelineItemTextBoxSty,
    TimelineItemWrapperSty,
    TimelineTagListSty,
    TimelineTagSty,
} from "./style";
import {
    MdCalendarMonth as CalendarIcon,
    MdKeyboardArrowDown as ChevronIcon,
    MdLocationOn as LocationIcon,
} from "react-icons/md";


export type TimelineItemProps = {
    experience: Experience
    $alternate?: boolean;
    index: number,
}


export const TimelineItem = ({experience:xp, $alternate, index }:TimelineItemProps)=>{
    const [isOpen, setIsOpen] = useState(false);
    const period = `${xp.startDate} - ${xp.endDate ?? "Atualmente"}`;

    return(
        <TimelineItemWrapperSty index={index}>
            <TimelineItemSty $alternate={$alternate}>
                <TimelineItemTextBoxSty $alternate={$alternate}>
                    <TimelineHeaderSty>
                        <div>
                            <h2>{xp.company}</h2>
                            <h3>{xp.role}</h3>
                        </div>
                        <TimelineExpandButtonSty
                            type="button"
                            onClick={() => setIsOpen((current) => !current)}
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Recolher experiência" : "Expandir experiência"}
                            $isOpen={isOpen}
                        >
                            <ChevronIcon />
                        </TimelineExpandButtonSty>
                    </TimelineHeaderSty>
                    <TimelineInfoSty>
                        <TimelineItemContainer>
                            <CalendarIcon />
                            <span>{period}</span>
                        </TimelineItemContainer>
                        <TimelineItemContainer $badge>
                            <LocationIcon/>
                            <span>{xp.location}</span>
                        </TimelineItemContainer>
                    </TimelineInfoSty>
                    {xp.tags && xp.tags.length > 0 && (
                        <TimelineTagListSty>
                            {xp.tags.map((tag) => (
                                <TimelineTagSty key={tag}>{tag}</TimelineTagSty>
                            ))}
                        </TimelineTagListSty>
                    )}
                    <TimelineDescriptionSty $isOpen={isOpen}>
                        {xp.description && <p>{xp.description}</p>}
                        {xp.url && (
                            <a href={xp.url} target="_blank" rel="noreferrer">
                                Acessar experiência
                            </a>
                        )}
                    </TimelineDescriptionSty>
                </TimelineItemTextBoxSty>
            </TimelineItemSty>
        </TimelineItemWrapperSty>
    )
}
