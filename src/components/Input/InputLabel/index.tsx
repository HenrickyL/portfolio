import { InputLabelSty } from "./style"

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
}

export const InputLabel = ({text}:InputLabelProps)=>{
    return(
        <InputLabelSty>
            {text}
        </InputLabelSty>
    )
}