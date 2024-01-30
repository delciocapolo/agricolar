import { FC } from "react";
import { IButtonAddWishList } from "./interface";
import ButtonAddToWishListDefault from "./ButtonAddToWishListDefault";

const ButtonAddToWishListActive:FC<Pick<IButtonAddWishList, 'size' | 'eventClick'>> = ({size, eventClick}) => 
    (
        <ButtonAddToWishListDefault 
            classNameTypeButton="active"
            colorVarSvg="var(--Sucess)" 
            fillSvg="var(--Sucess)" 
            size={size} 
            eventClick={eventClick} 
        />
    );

export default ButtonAddToWishListActive;