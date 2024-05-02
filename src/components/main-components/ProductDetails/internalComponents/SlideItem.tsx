import { FC, MutableRefObject } from "react";
import { ImageItemSlide, ItemSlide as ItemSlideBase } from "../ComponentBase/BaseProductDetails";
import image from "../../../../assets/products/cove.jpg";

interface IItemSlide {
    pathImageProdc: string;
    theRef: MutableRefObject<HTMLImageElement>;
}

const ItemSlide: FC<IItemSlide> = ({ pathImageProdc, theRef }) => {
    return (
        <ItemSlideBase onMouseOver={(e) => {
            e.stopPropagation();

            if (theRef) {
                theRef.current.src = pathImageProdc;
            }
        }}>
            <ImageItemSlide src={pathImageProdc ?? image} alt="Uma imagem" />
        </ItemSlideBase>
    )
};

export default ItemSlide;