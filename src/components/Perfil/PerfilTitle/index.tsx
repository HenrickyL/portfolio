import { PerfilTitleSty } from "./style"

interface PerfilTitleProps{
    text: string
}

export const PerfilTitle = ({text: title}:PerfilTitleProps)=>{

    return(
        <PerfilTitleSty>
            {title}
        </PerfilTitleSty>
    )
}