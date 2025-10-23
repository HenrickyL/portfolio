import Link from "next/link"
import { 
    CardArrow, 
    CardContainer, 
    CardDateSty, 
    CardImageSty, 
    CardLink, 
    CardSty, 
    CardSubTitle, 
    CardTitleSty, 
} from "./style"

interface CardProps{
    img: string
    title: string
    subtitle?: string
    date?: string
    url?: string
    isDownload?: boolean
}

const Content = ({img, title, subtitle, date}:CardProps)=>{
    return(
        <>
            <CardImageSty>
                <img src={img} alt="" />
            </CardImageSty>
            <CardContainer>
                {date && <CardDateSty>{date}</CardDateSty>}
                <CardTitleSty>
                    {title}
                </CardTitleSty>
                {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
            </CardContainer>
        </>
    )
}

export const Card = ({ url, isDownload, ...rest }: CardProps) => {
    const isExtern:boolean = Boolean(url && url[0] !== "/");
    
    const content = (
        <>
        <CardArrow />
        <Content {...rest} />
        </>
    );

    return (
        <CardSty $isExtern={isExtern} $isDownload={isDownload}>
        {url ? (
            isExtern ? (
            <CardLink href={url} target="_blank" rel="noopener noreferrer" download={isDownload}>
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