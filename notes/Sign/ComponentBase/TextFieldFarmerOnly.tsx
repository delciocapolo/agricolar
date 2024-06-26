import { Dispatch, FC, InputHTMLAttributes, SetStateAction } from "react";
import { ContainerInput, TextField } from "./ComponentBase";
import ButtonClearTextFieldSignForm from "./TextFieldSignForm";

type ITextFieldFarmerOnly = InputHTMLAttributes<HTMLInputElement> & {
    typeUser: 'farmer' | 'costumer' | null;
    content: string | number | undefined;
    setContent: Dispatch<SetStateAction<string>>;
}

const TextFieldFarmerOnly: FC<ITextFieldFarmerOnly> = (props) => {
    const { typeUser, content, setContent } = props;

    if (typeUser === 'farmer') {
        return (
            <ContainerInput className="d-flex">
                <TextField
                    {...props}
                    value={content}
                />
                {
                    content && (
                        <ButtonClearTextFieldSignForm dispatch={setContent} />
                    )
                }
            </ContainerInput>
        )
    }
    return <></>
};

export default TextFieldFarmerOnly;