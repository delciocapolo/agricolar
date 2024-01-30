import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";
import BaseNormalButton from "./BaseNormalButton";

const NormalBorderFalse:FC<Omit<IBaseNormalButton, 'classNameTypeButton'>> = ({content, sizeButton, eventClick}) => 
    (<BaseNormalButton content={content} eventClick={eventClick} classNameTypeButton="border-false" sizeButton={sizeButton}/>);

export default NormalBorderFalse;