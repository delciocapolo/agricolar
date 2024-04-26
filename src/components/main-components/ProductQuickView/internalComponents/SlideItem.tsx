import { FC } from "react";
import { ImageItemSlide, ItemSlide as ItemSlideBase } from "../ComponentBase/BaseProductDetails";
import image from "../../../../assets/products/cove.jpg";

interface IItemSlide {
    pathImageProdc: string | null;
}

export const ItemSlide: FC<IItemSlide> = ({ pathImageProdc = null }) => {
    return (
        <ItemSlideBase>
            <ImageItemSlide src={pathImageProdc ?? image} alt="Uma imagem" />
        </ItemSlideBase>
    )
}