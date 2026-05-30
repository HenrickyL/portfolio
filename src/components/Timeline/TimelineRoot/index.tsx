"use client";
import { useEffect, useRef, useState } from "react";
import { TimelineRootSty, TimelineLineSty, TimelineItemsSty, TimeLineItemsContainerSty } from "./style";
import { TimelineItem } from "../TimelineItem";
import { Experience } from "@/types/Experience";

export type TimelineRootProps = {
	items: Experience[];
	total?: number;
};

export const TimelineRoot = ({ items }: TimelineRootProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const timelineRef = useRef<HTMLDivElement>(null);
	const leftItems = items.filter((_, index) => index % 2 === 0);
	const rightItems = items.filter((_, index) => index % 2 === 1);
	const total = items.length * 0.5;

	useEffect(() => {
		const currentTimeline = timelineRef.current;
		if (!currentTimeline || isVisible) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.18 }
		);

		observer.observe(currentTimeline);

		return () => observer.disconnect();
	}, [isVisible]);

	return (
		<TimelineRootSty ref={timelineRef}>
			<TimelineItemsSty>
				<TimeLineItemsContainerSty>
					{leftItems.map((xp, index) =>
						<TimelineItem
							key={xp.id}
							$alternate={false}
							experience={xp}
							index={index}
							$isVisible={isVisible}
						/>
					)}
				</TimeLineItemsContainerSty>

				<TimelineLineSty total={total} $isVisible={isVisible}/>
				
				<TimeLineItemsContainerSty $alternate>
					{rightItems.map((xp, index) =>
						<TimelineItem
							key={xp.id}
							$alternate={true}
							experience={xp}
							index={index}
							$isVisible={isVisible}
						/>
					)}
				</TimeLineItemsContainerSty>
			</TimelineItemsSty>
		</TimelineRootSty>
	)
};
