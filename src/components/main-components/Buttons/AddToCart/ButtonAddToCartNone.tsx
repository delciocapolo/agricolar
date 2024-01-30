import { FC } from "react"
import { ShoppingBasket } from "lucide-react";
import { IButtonAddToCart } from "./interfaces";

const ButtonAddToCartNone:FC<IButtonAddToCart> = ({classNameTypeButton='none', size, colorVarSvg='var(--Gray-900)', eventClick}) => {
    return (
        <button className={`btn-add-to-cart color-btn-add-to-cart-${classNameTypeButton}} d-flex`} onClick={eventClick}>
            <ShoppingBasket size={size} style={{ color: colorVarSvg }} />
        </button>
    );
}

export default ButtonAddToCartNone;