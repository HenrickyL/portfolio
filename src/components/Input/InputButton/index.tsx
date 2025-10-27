import React from "react";
import { InputButtonSty } from "./Style";

export interface InputButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}


export const InputButton= ({ text, children, ...rest }:InputButtonProps) => {
  return (
    <InputButtonSty {...rest}>
      {text ?? children }
    </InputButtonSty>
  );
};
