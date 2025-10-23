import { CardArrow, CardContainer, CardImageSty, CardLink, CardSty, CardSubTitle, CardTitleSty } from "./style"

interface CardProps{
    src: string
    title: string
    subtitle?: string,
    date?: string,
    url?: string 
}

const Content = ({src, title, subtitle}:CardProps)=>{
    return(
        <>
            <CardImageSty>
                <img src={src} alt="" />
            </CardImageSty>
            <CardContainer>
                <CardTitleSty>{title}</CardTitleSty>
                {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
            </CardContainer>
        </>
    )
}

export const Card = ({url, ...rest}:CardProps)=>{
    return(
        <>
        {url?
                <CardSty>
                    <CardLink href={url} target="_blank" rel="noopener noreferrer">
                        <CardArrow />
                        <Content {...rest}/>
                    </CardLink>
                </CardSty>
                :
                <CardSty>
                    <Content {...rest}/>
                </CardSty> 
            }
        </>
        
    )
}