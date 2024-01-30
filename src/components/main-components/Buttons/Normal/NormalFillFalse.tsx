import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";
import BaseNormalButton from "./BaseNormalButton";

const NormalFillFalse:FC<Omit<IBaseNormalButton, 'classNameTypeButton'>> = ({content, sizeButton, eventClick}) => 
    (<BaseNormalButton content={content} eventClick={eventClick} classNameTypeButton="fill-false" sizeButton={sizeButton} />);

export default NormalFillFalse;