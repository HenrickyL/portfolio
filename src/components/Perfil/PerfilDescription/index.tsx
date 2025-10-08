import { PerfilDescriptionSty } from "./style"

interface PerfilDescriptionProps{
    text: string
}
export const PerfilDescription = ({text}:PerfilDescriptionProps)=>{
    return(
        <PerfilDescriptionSty>
            {text}
        </PerfilDescriptionSty>
    )
}