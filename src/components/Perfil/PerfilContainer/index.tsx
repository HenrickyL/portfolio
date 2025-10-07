import { PerfilContainerSty } from "./style"

interface PerfilContainerProps{
    children: React.ReactNode
}

export const PerfilContainer = ({children}:PerfilContainerProps)=>{
    return(
        <PerfilContainerSty>
            {children}
        </PerfilContainerSty>
    )
}