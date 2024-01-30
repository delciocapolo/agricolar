import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";
import BaseNormalButton from "./BaseNormalButton";

const NormalGhostTrue:FC<Omit<IBaseNormalButton, 'classNameTypeButton'>> = ({content, sizeButton, eventClick}) => 
    (<BaseNormalButton content={content} eventClick={eventClick} classNameTypeButton="ghost-true" sizeButton={sizeButton}/>);

export default NormalGhostTrue;