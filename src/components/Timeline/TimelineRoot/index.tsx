"use client";
import { ReactNode } from "react";
import { TimelineContainer } from "./style";

type TimelineRootProps = {
	children: ReactNode;
};

export const TimelineRoot = ({ children }: TimelineRootProps) => {
	return (
		<TimelineContainer>
			{children}
		</TimelineContainer>
	)
};

