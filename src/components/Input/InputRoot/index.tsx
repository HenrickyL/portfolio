"use client";
import { InputRootSty } from "./styled";

type AllowedChildren = React.ReactNode//ReactElement<typeof Menu.Item>;

interface InputRootProps{
    children: AllowedChildren | AllowedChildren[]
}


export const InputRoot = ({children}:InputRootProps)=>{
    return(
        <InputRootSty>
            {children}
        </InputRootSty>
    )
}