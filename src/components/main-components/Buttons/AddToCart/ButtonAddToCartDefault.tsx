import { FC } from "react";
import ButtonAddToCart from "./ButtonAddToCartNone";
import { IButtonAddToCart } from "./interfaces";

const ButtonAddToCartDefault:FC<Pick<IButtonAddToCart, 'size' | 'eventClick'>> = ({size, eventClick}) => (
    <ButtonAddToCart size={size} eventClick={eventClick} colorVarSvg='var(--White)' classNameTypeButton="default" />
);

export default ButtonAddToCartDefault;