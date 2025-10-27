import {InputTextAreaSty} from "./style"
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

export const InputTextArea = ({ ...rest }: TextAreaProps) => {
  return (
    <InputTextAreaSty >
      <textarea {...rest} />
    </InputTextAreaSty>
  )
}
