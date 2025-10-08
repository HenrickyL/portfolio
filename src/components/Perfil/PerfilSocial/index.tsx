import { SocialMedia } from "@/Data/SocialMedia"
import { PerfilSocialSty } from "./style"
import { PerfilSocialItem } from "../PerfilSocialItem"

interface PerfilSocialProps{
    items: SocialMedia[]
}

export const PerfilSocial = ({items}:PerfilSocialProps)=>{

    return(
        <PerfilSocialSty>
            {items.map((social, i) => (
                <PerfilSocialItem
                    key={social.name+i}
                    item={social}
                    />
            ))}
        </PerfilSocialSty>
    )
}