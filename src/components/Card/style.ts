import styled from "styled-components";
import { FaArrowRight as ArrowIcon} from "react-icons/fa";
import Link from "next/link";

export const CardImageSty = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
`

export const CardTitleSty = styled.span`
    font-size: 28px;
    font-weight: bold;
    transition: 0.3s ease;
`

export const CardDateSty = styled.span`
    position: absolute;
    bottom: 8px;
    right: 1rem;
    font-size: 14px;
    color: ${p=> p.theme.text3};
`

export const CardSubTitle = styled.span`
    font-size: 18px;
    color: ${p=> p.theme.text2};

`

export const CardContainer = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${p=>p.theme.backgroundSnd};
    background-image: url(${(props) => props.theme.noise});
    padding: 1.2rem 8px 1rem 1.2rem;
    width: 100%;
    gap: 4px;
`

export const CardArrow = styled(ArrowIcon)`
    position: absolute;
    color: ${p=>p.theme.gray};
    top: 1rem;
    right: 1rem;
    font-size: 20px;
    z-index: 2;
    transition: 0.3s ease-in-out;
`

interface CardStyProps {
  $isExtern?: boolean;
  $isDownload?: boolean;

}
export const CardSty = styled.div<CardStyProps>`
    position: relative;
    
    width: 20rem;
    height: 20rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: 0.3s ease-in-out;


    ${CardArrow}{
        ${p=>p.$isDownload && `
            transform: rotateZ(90deg);
            font-size:28px;
        `}
    }
    &:hover{
        border: 2px solid ${p=>p.theme.primaryLight};
        
        ${CardTitleSty}{
            color: ${p=>p.theme.primary};
        }

        ${CardArrow}{
            ${p=>p.$isDownload ? `
                transform: rotateZ(90deg) scale(1.2);
            `:
            `
                transform: rotateZ(${p.$isExtern? `-30deg`  : `30deg`});
            `}
            color: ${p=>p.theme.primaryLight};
        }

        ${CardImageSty} img{
            transform: scale(1.1);
        }
    }
`

export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;