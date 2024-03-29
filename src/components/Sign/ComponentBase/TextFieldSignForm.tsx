import React, { ButtonHTMLAttributes, FC } from "react";
import { ButtonClearTextField } from "./ComponentBase";
import { X } from "lucide-react";

type TextFieldSignFormType<T extends ButtonHTMLAttributes<HTMLButtonElement>> = T;
type ITextFieldSignForm = {
    props?: TextFieldSignFormType<ButtonHTMLAttributes<HTMLButtonElement>>;
    dispatch: React.Dispatch<React.SetStateAction<string>>;
}
const ButtonClearTextFieldSignForm: FC<ITextFieldSignForm> = ({ props, dispatch }) => {
    return (
        <ButtonClearTextField {...props} className="d-flex" onClick={(e) => {
            e.stopPropagation();
            dispatch('');
        }}>
            <X className="btnclose-svg-icon" size={12} />
        </ButtonClearTextField>
    )
};

export default ButtonClearTextFieldSignForm;