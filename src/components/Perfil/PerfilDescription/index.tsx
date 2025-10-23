import { PerfilDescriptionSty } from "./style"
import { FaMapMarkerAlt as MapIcon } from "react-icons/fa";


interface PerfilDescriptionProps{
    text: string
    region: string
}
export const PerfilDescription = ({text, region: localization}:PerfilDescriptionProps)=>{
    return(
        <PerfilDescriptionSty>
            <p>{text}</p>
            <span><MapIcon/> {localization}</span>
        </PerfilDescriptionSty>
    )
}