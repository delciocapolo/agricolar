import {
    BGContainer,
} from "./ComponentBase/BaseProductDetails";
import { FC, MouseEventHandler } from "react";
import { useProductdetails } from "../../contexts/ProductDetails";
import ProductDetailComponent from "../ProductDetails/ProductDetailsComponent";

interface IProductDetails {
    id_product?: string;
}

const ProductDetails: FC<IProductDetails> = ({ id_product }) => {
    const { details: { actived }, setDetails } = useProductdetails();

    const handleClickCloseBG: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        event.currentTarget.classList.remove('actived');
        setDetails(prev => ({ ...prev, actived: false }));
    }

    return (
        <BGContainer className={`d-flex ${actived ? 'actived' : ''}`} onClick={handleClickCloseBG}>
            <ProductDetailComponent id_product={id_product} />
        </BGContainer>
    );
};

export default ProductDetails;