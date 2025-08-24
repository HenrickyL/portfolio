"use client";
import { AllowedChildren } from "..";
import { InputRootSty } from "./styled";

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