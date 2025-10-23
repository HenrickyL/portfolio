import { CardContainer, CardImageSty, CardSty, CardSubTitle, CardTitleSty } from "./style"

interface CardProps{
    src: string
    title: string
    subtitle?: string,
    date?: string
}

export const Card = ({src, title, subtitle}:CardProps)=>{
    return(
        <CardSty>
            <CardImageSty>
                <img src={src} alt="" />
            </CardImageSty>
            <CardContainer>
                <CardTitleSty>{title}</CardTitleSty>
                {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
            </CardContainer>
        </CardSty>
    )
}