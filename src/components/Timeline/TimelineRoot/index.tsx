"use client";
import React, { ReactNode } from "react";
import { TimelineContainer } from "./style";

type TimelineRootProps = {
	children: ReactNode;
	size?: number;
};

export const TimelineRoot = ({ children, size = 4 }: TimelineRootProps) => {
	return (
		<TimelineContainer size={size}>
			{Array.isArray(children) &&
				children.map((child, i) =>
				React.cloneElement(child as React.ReactElement<any>, {
					total: size,
				})
        	)}
		</TimelineContainer>
	)
};

