import { useState } from "react";
import { Input } from ".."
import { InputPasswordInputSty, InputPasswordSty } from "./style"
import { 
    IoMdEye as EyeIcon,
    IoMdEyeOff as EyeOffIcon,
    IoMdLock as PasswordIcon,
    IoMdUnlock as PasswordOffIcon} from "react-icons/io";


interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement>{
    iconSize?: number
    name?: string
}

export const InputPassword = ({iconSize, name, ...rest}:InputPasswordProps)=>{
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setIsPassword(!isPassword)
    }
    return(
        <InputPasswordSty>
            <Input.Icon icon={isPassword ? PasswordIcon : PasswordOffIcon}/>
            <InputPasswordInputSty name={name || 'password'} {...rest} type={isPassword ? 'password' : 'text'} />
            <button onClick={handleClick}>
                {isPassword ? <EyeIcon size={iconSize || 24}/> : <EyeOffIcon  size={iconSize || 24}/>}
            </button>
        </InputPasswordSty>
    )
}