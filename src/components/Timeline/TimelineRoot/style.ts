import styled, {keyframes} from "styled-components";

const TimelineLineAnimation = keyframes`
	0% {
		height: 0;
	}
	100% {
		height: 100%;
	}
`

export const TimelineLineSty = styled.span<{total: number}>`
		position: absolute;
		top:0;
		width:6px;
		z-index: 0;
		height: 100%;
		border-radius: 4px;
		background-color: ${prop=>prop.theme.contrastLight};
		animation: ${TimelineLineAnimation} ${p=>p.total}s ease-out forwards;
		pointer-events: none;
`

export const TimelineItemsSty = styled.div`
    position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 3.5rem;
	z-index: 1;
	padding: 0 0 2rem 0;
`

export const TimeLineItemsContainerSty = styled.div<{ $alternate?: boolean }>`
    position:relative;
	display: flex;
	flex-direction: column;
	align-items: ${prop=> prop.$alternate ? 'flex-start' : 'flex-end'};
	justify-content: center;
	width: 100%;
	height: 100%;
	gap:4rem;
	z-index: 5;
`

export const TimelineRootSty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100%;
	max-width: 50rem;
	margin: 1rem auto 0;
	padding: 0.25rem 0;

	@media screen and (max-width: 680px){
		margin-top: 0.75rem;
	}
`;
