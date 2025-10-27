import { ReactElement } from "react";
import { InputField } from "./InputField";
import { InputIcon } from "./InputIcon";
import { InputInput } from "./InputInput";
import { InputLabel } from "./InputLabel";
import { InputRoot } from "./InputRoot";
import { InputPassword } from "./InputPassword";
import { InputTextArea } from "./InputTextArea";
import { InputButton } from "./InputButton";

export const Input = {
    Root: InputRoot,
    Field: InputField,
    Input: InputInput,
    Label: InputLabel,
    Icon: InputIcon,
    Password: InputPassword,
    TextArea: InputTextArea,
    Button: InputButton
}

export type AllowedChildren =
    | ReactElement<typeof Input.Field>
    | ReactElement<typeof Input.Input>
    | ReactElement<typeof Input.Label>
    | ReactElement<typeof Input.Icon>
    | ReactElement<typeof Input.Password>
    | ReactElement<typeof Input.TextArea>

