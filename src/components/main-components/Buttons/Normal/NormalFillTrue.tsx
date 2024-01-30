import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";
import BaseNormalButton from "./BaseNormalButton";

const NormalFillTrue:FC<Omit<IBaseNormalButton, 'classNameTypeButton'>> = ({content, sizeButton, eventClick}) => 
    (<BaseNormalButton content={content} eventClick={eventClick} classNameTypeButton="fill-true" sizeButton={sizeButton}/>);

export default NormalFillTrue;