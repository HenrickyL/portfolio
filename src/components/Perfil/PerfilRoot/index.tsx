// "use client";
import { PerfilRootSty } from "./style";


interface PerfilRootProp{
    children?: React.ReactNode
}

export const PerfilRoot = ({children}:PerfilRootProp)=>{
    
    return(
        <PerfilRootSty>
            {children}
        </PerfilRootSty>
    )
}