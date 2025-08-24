import { Icon } from "@/components/Icon"
import { IconType } from "react-icons"


interface InputIconProps{
    icon?: IconType
    size?: number
}
export const InputIcon = ({icon, size }: InputIconProps)=>{

    return(
        <Icon icon={icon} size={size}/>
    )
}