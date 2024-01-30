import { FC, useState, ChangeEvent } from "react";
import { AlertCircle, AlertTriangle, Check } from "lucide-react";
import { validateEmail } from "../../utils/validateEmail";

interface IInputFieldType {
    type?: "email" | "text";
    name?: string;
    id: string;
    placeholder?: string
}

const InputField:FC<IInputFieldType> = ({id, name, placeholder, type = 'email'}) => {

    const [content, setContent] = useState<string>("");
    const [validationState, setValidationState] = useState<"Warning" | "Success" | "Error" | "">("");
    const size:number = 24;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        setContent(inputValue);

        if(validateEmail(inputValue)) {
            setValidationState('Success');
            return;
        }

        setValidationState('Warning');
    }

    return (
        <div className={`container-inputfield d-grid ${validationState}`}>
            <div 
                className="container-field d-flex"
                style={{
                    border: `1px solid var(--${validationState})`
                }}
            >
                <input 
                    onChange={handleChange} 
                    value={content} 
                    type={type} 
                    name={name} 
                    id={id} 
                    placeholder={placeholder} 
                />
                { validationState === 'Warning' && <AlertCircle style={{color: `var(--Warning)`}} size={size} /> }
                { validationState === 'Success' && <Check style={{color: `var(--Success)`}} size={size} /> }
                { validationState === 'Error' && <AlertTriangle style={{color: `var(--Error)`}} size={size} /> }
            </div>
            {
                (validationState === 'Error' || validationState === 'Warning') && 
                <label htmlFor={name} className="lbl-inputfield">O email não está no formato correcto</label>
            }
        </div>
    )
}

export default InputField;