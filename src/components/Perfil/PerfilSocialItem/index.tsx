import { SocialMedia } from "@/Data/SocialMedia"
import { PerfilSocialItemSty } from "./style"

interface PerfilSocialIconProps{
    item: SocialMedia
}

export const PerfilSocialItem = ({item}: PerfilSocialIconProps)=>{
    return(
        <PerfilSocialItemSty title={item.name +  (item.resume ? `: ${item.resume}` : "")}
            href={item.url} about={item.name} 
            passHref rel="noopener noreferrer" target="_blank">
            {<item.Icon className="icon"/>}
        </PerfilSocialItemSty>
    )
}