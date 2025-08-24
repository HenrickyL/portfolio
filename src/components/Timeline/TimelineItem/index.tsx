"use client";
import { Experience } from "@/types/Experience"
import { TimelineInfoSty, TimelineItemContainer, TimelineItemSty, TimelineItemTextBoxSty, TimelineItemWrapper } from "./style";
import { MdLocationOn as LocationIcon, MdCalendarMonth as CalendarIcon } from "react-icons/md";


type TimelineItemProps = {
    experience: Experience
    $alternate?: boolean;
    index: number,
    size: number
}


export const TimelineItem = ({experience:xp, $alternate, index, size }:TimelineItemProps)=>{
    return(
        <TimelineItemWrapper index={index} total={size}>
            <TimelineItemSty $alternate={$alternate}>
                <TimelineItemTextBoxSty $alternate={$alternate}>
                    <h2>{xp.company}</h2>
                    <h3>{xp.role}</h3>
                    <TimelineInfoSty>
                        <TimelineItemContainer>
                            <CalendarIcon />
                            <span>{xp.startDate} - {xp.endDate?? "Atualmente"}</span>
                        </TimelineItemContainer>
                        <TimelineItemContainer>
                            <LocationIcon/>
                            <span>{xp.location}</span>
                        </TimelineItemContainer>
                    </TimelineInfoSty>
                    <p>{xp.description}</p>
                </TimelineItemTextBoxSty>
            </TimelineItemSty>
        </TimelineItemWrapper>
    )
}