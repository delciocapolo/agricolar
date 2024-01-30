import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";

const BaseNormalButton:FC<IBaseNormalButton> = ({content, classNameTypeButton, sizeButton, eventClick}) => {
    if(!content) return null;

    return (
        <button 
            type="button"
            className={`base-normal-button btn-normal-${classNameTypeButton} size-button-${sizeButton}`}
            onClick={eventClick}
        >{content}</button>
    )
}

export default BaseNormalButton;