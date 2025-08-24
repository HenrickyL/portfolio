"use client";
import React, { ReactNode } from "react";
import { TimelineRootSty, TimelineLineSty, TimelineItemsSty } from "./style";

type TimelineRootProps = {
	children: ReactNode;
	size?: number;
};

export const TimelineRoot = ({ children, size = 4 }: TimelineRootProps) => {
	return (
		<TimelineRootSty >
			<div>
				<TimelineLineSty size={size}/>
			</div>
			<TimelineItemsSty>
				{Array.isArray(children) &&
					children.map((child, i) =>
					React.cloneElement(child as React.ReactElement<any>, {
						total: size,
					})
				)}
			</TimelineItemsSty>
		</TimelineRootSty>
	)
};

