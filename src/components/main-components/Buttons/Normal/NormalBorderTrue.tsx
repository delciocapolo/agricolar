import { FC } from "react";
import { IBaseNormalButton } from "./interfaces";
import BaseNormalButton from "./BaseNormalButton";

const NormalBorderTrue:FC<Omit<IBaseNormalButton, 'classNameTypeButton'>> = ({content, sizeButton, eventClick}) => 
    (<BaseNormalButton content={content} eventClick={eventClick} classNameTypeButton="border-true" sizeButton={sizeButton} />);

export default NormalBorderTrue;