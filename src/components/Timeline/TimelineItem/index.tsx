"use client";
import { Experience } from "@/types/Experience"
import { TimelineInfoSty, TimelineItemContainer, TimelineItemSty, TimelineItemTextBoxSty } from "./style";
import { MdLocationOn as LocationIcon, MdCalendarMonth as CalendarIcon } from "react-icons/md";


type TimelineItemProps = {
    experience: Experience
    $alternate?: boolean;
}


export const TimelineItem = ({experience:xp, $alternate}:TimelineItemProps)=>{
    return(
        <TimelineItemSty $alternate={$alternate}>
            <TimelineItemTextBoxSty $alternate={$alternate}>
                <h2>{xp.company}</h2>
                <h3>{xp.role}</h3>
                <TimelineInfoSty>
                    <TimelineItemContainer>
                        <LocationIcon/>
                        <span>{xp.startDate} - {xp.endDate?? "Atualmente"}</span>
                    </TimelineItemContainer>
                    <TimelineItemContainer>
                        <CalendarIcon/>
                        <span>{xp.location}</span>
                    </TimelineItemContainer>
                </TimelineInfoSty>
                <p>{xp.description}</p>
            </TimelineItemTextBoxSty>
        </TimelineItemSty>
    )
}