import Link from "next/link"
import { 
    CardArrow, 
    CardContainer, 
    CardImageSty, 
    CardLink, 
    CardSty, 
    CardSubTitle, 
    CardTitleSty, 
} from "./style"

interface CardProps{
    src: string
    title: string
    subtitle?: string
    date?: string
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

export const Card = ({ url, ...rest }: CardProps) => {
    const isExtern:boolean = Boolean(url && url[0] !== "/");
    
    const content = (
        <>
        <CardArrow />
        <Content {...rest} />
        </>
    );


    return (
        <CardSty $isExtern={isExtern}>
        {url ? (
            isExtern ? (
            <CardLink href={url} target="_blank" rel="noopener noreferrer">
                {content}
            </CardLink>
            ) : (
            <Link href={url} passHref legacyBehavior>
                <CardLink>{content}</CardLink>
            </Link>
            )
        ) : (
            <Content {...rest} />
        )}
        </CardSty>
    );
};