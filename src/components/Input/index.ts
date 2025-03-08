import { ReactElement } from "react";
import { InputField } from "./InputField";
import { InputIcon } from "./InputIcon";
import { InputInput } from "./InputInput";
import { InputLabel } from "./InputLabel";
import { InputRoot } from "./InputRoot";

export const Input = {
    Root: InputRoot,
    Field: InputField,
    Input: InputInput,
    Label: InputLabel,
    Icon: InputIcon
}

export type AllowedChildren =
    | ReactElement<typeof Input.Field>
    | ReactElement<typeof Input.Input>
    | ReactElement<typeof Input.Label>
    | ReactElement<typeof Input.Icon>