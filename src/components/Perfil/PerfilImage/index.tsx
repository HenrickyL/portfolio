import { PerfilImageSty } from "./style"

interface PerfilImageProps{
    src: string
}

export const PerfilImage = ({src}:PerfilImageProps)=>{
    return(
        <PerfilImageSty 
            src={src}
            alt="Perfil"
            width={2000}
            height={2000}
        />
    )
}