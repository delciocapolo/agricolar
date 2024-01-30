import { Heart } from "lucide-react"
import { FC } from "react";
import { IButtonAddWishList } from "./interface";

const ButtonAddToWishListDefault: FC<IButtonAddWishList> = 
    ({
        classNameTypeButton='default', 
        size, 
        colorVarSvg='var(--Gray-900)', 
        fillSvg='transparent', 
        eventClick
    }) => {
        
    return (
        <button 
            className={`btn-add-to-wish-list color-btn-add-to-wish-list-${classNameTypeButton} d-flex`} 
            onClick={eventClick}
        >
            <Heart size={size} style={{color: colorVarSvg, fill: fillSvg }}/>
        </button>
    );
}

export default ButtonAddToWishListDefault;