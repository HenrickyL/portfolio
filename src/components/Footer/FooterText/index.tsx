import { FooterTextSty } from "./style"

interface FooterTextProps{
    children: React.ReactNode
}



export const FooterText = ({children}:FooterTextProps)=>{
    return (
        <FooterTextSty>
            {children}
        </FooterTextSty>
    )
}