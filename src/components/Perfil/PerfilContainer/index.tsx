import { PerfilCardSty } from "./style"

interface PerfilContainerProps{
    children: React.ReactNode
}

export const PerfilCard = ({children}:PerfilContainerProps)=>{
    return(
        <PerfilCardSty>
            {children}
        </PerfilCardSty>
    )
}