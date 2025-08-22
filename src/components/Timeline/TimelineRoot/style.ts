import styled from "styled-components";

export const TimelineContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 1.5rem;
	position: relative;
	margin: 6.25rem auto;
	max-width: 75rem;

	&::after{
		content: '';
		position: absolute;
		width: 6px;
		height: 100%;
		top: 0;
		left: 50%;
		margin-left: -3px;
		z-index: -1;
		background-color: ${prop=>prop.theme.contrastLight};
		border-radius: 4px;
	}

`;

