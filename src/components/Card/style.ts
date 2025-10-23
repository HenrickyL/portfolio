import styled from "styled-components";



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

export const CardSubTitle = styled.span`
    font-size: 18px;
    color: ${p=> p.theme.text2};

`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${p=>p.theme.backgroundSnd};
    background-image: url(${(props) => props.theme.noise});
    padding: 1.2rem 1.8rem;
    width: 100%;
    gap: 0.5rem;
`

export const CardSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20rem;
    height: 20rem;

    border-radius: 12px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: 0.3s ease-in-out;

    &:hover{
        border: 2px solid ${p=>p.theme.primaryLight};
        
        ${CardTitleSty}{
            color: ${p=>p.theme.primary};
        }

        ${CardImageSty} img{
            transform: scale(1.1);
        }
    }
`