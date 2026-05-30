"use client";
import { TimelineRootSty, TimelineLineSty, TimelineItemsSty, TimeLineItemsContainerSty } from "./style";
import { TimelineItem } from "../TimelineItem";
import { Experience } from "@/types/Experience";

export type TimelineRootProps = {
	items: Experience[];
	total?: number;
};

export const TimelineRoot = ({ items }: TimelineRootProps) => {
	//divide array, index odd left, even right
	const leftItems = items.filter((_, i) => i % 2 === 0);
	const rightItems = items.filter((_, i) => i % 2 === 1);
	const total = items.length * 0.5;

	return (
		<TimelineRootSty >
			<TimelineItemsSty>
				<TimeLineItemsContainerSty>
					{leftItems.map((xp, index) =>
						<TimelineItem
							key={xp.id}
							$alternate={false}
							experience={xp} index={index}						
						/>
					)}
				</TimeLineItemsContainerSty>

				<TimelineLineSty total={total}/>
				
				<TimeLineItemsContainerSty $alternate>
					{rightItems.map((xp, index) =>
						<TimelineItem
							key={xp.id}
							$alternate={true}
							experience={xp} index={index}						
						/>
					)}
				</TimeLineItemsContainerSty>
			</TimelineItemsSty>
		</TimelineRootSty>
	)
};

