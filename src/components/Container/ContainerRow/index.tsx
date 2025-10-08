import { ContainerRowSty } from "./style"

interface ContainerRowProps{
    children?: React.ReactNode
}

export const ContainerRow = ({children}:ContainerRowProps)=>{
    return(
        <ContainerRowSty>
            {children}
        </ContainerRowSty>
    )
}