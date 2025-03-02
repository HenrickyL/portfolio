import { ContainerTopCenterSty } from "./style"

interface ContainerTopCenterProp{
    children: React.ReactNode
}
export const ContainerTopCenter = ({children}:ContainerTopCenterProp)=>{
    return(
        <ContainerTopCenterSty>
            {children}
        </ContainerTopCenterSty>
    )
}