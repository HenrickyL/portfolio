import { InputFieldSty } from "./styled"

interface InputFieldProps{
    children: React.ReactNode
}

export const InputField = ({children}:InputFieldProps)=>{
    return(
        <InputFieldSty>
            {children}
        </InputFieldSty>
    )
}