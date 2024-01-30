import { FC } from "react";

interface IRadioCheck {
    name?: string;
    id?: string;
    classNameType?: string;
}

const Radio:FC<IRadioCheck> = ({classNameType, name = 'checkBox', id}) => {
    return (
        <input type="radio" name={name} id={id} className={`radio-base ${classNameType}`} />
    );
};

export default Radio;