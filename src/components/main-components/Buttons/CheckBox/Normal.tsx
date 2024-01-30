import { FC } from "react";

interface INormalCheckBox {
    name?: string;
    id?: string;
    classNameType?: string;
}

const Normal:FC<INormalCheckBox> = ({classNameType, name = 'checkBox', id}) => {
    return (
        <input type="checkbox" name={name} id={id} className={`checkbox-base ${classNameType}`} />
    );
};

export default Normal;