"use client";
import React, { ReactNode } from "react";
import { TimelineRootSty, TimelineLineSty, TimelineItemsSty } from "./style";
import { TimelineItemProps } from "../TimelineItem";

export type TimelineRootProps = {
	children: ReactNode;
	total?: number;
};

export const TimelineRoot = ({ children, total = 4 }: TimelineRootProps) => {
	return (
		<TimelineRootSty >
			<div>
				<TimelineLineSty total={total}/>
			</div>
			<TimelineItemsSty>
				{Array.isArray(children) &&
					children.map((child) =>
					React.cloneElement(child as React.ReactElement<TimelineItemProps>, {
						total: total,
					})
				)}
			</TimelineItemsSty>
		</TimelineRootSty>
	)
};

