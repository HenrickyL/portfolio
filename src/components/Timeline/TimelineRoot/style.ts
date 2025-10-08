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
		width: 6px;
		height: 0;
		top: 0;
		z-index: -1;
		background-color: ${prop=>prop.theme.contrastLight};
		border-radius: 4px;
		animation: ${TimelineLineAnimation} ${p=>p.total}s ease-out forwards;
`

export const TimelineItemsSty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const TimelineRootSty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	/* transform: scale(0.9); */
	transform: scale(calc(calc(100vw*0.75)/100vw));



	@media screen and (max-width: 680px){
		&{
			flex-direction: row;
			justify-content: center;
			transform: scale(1);
		}

		${TimelineItemsSty}{ 
			transform: translateX(4px);
		}
	}
`;



