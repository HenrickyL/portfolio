import styled, {keyframes} from "styled-components";


const TimelineLineAnimation = keyframes`
	0% {
		height: 0;
	}
	100% {
		height: 100%;
	}
`

export const TimelineContainer = styled.div<{size: number}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	grid-template-columns: 1fr;
	row-gap: 1.5rem;
	position: relative;
	flex: 1;
	padding: 12px 0; 
	margin: 8px 0;

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
		animation: ${TimelineLineAnimation} ${p=>p.size}s ease-out forwards;
	}



	@media screen and (max-width: 680px){
		&{
			margin: 50px auto;
		}

		&::after{
			left: 31px;
		}
	}

`;



