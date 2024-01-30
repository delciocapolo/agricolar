import { FC } from "react";
import { IButtonAddWishList } from "./interface";
import ButtonAddToWishListDefault from "./ButtonAddToWishListDefault";

const ButtonAddToWishListHover:FC<Pick<IButtonAddWishList, 'size' | 'eventClick'>> = ({size, eventClick}) => 
    (
        <ButtonAddToWishListDefault 
            classNameTypeButton="hover"
            colorVarSvg="var(--White)" 
            fillSvg="transparent" 
            size={size} 
            eventClick={eventClick} 
        />
    );

export default ButtonAddToWishListHover;