import { FC } from "react";
import { XCircle } from "lucide-react";
import Divider from "./Devider";
import { IProduct } from "./interfaces/Product";
import {v4 as uuidv4} from "uuid";


interface ICartProduct {
    listProducts: Array<IProduct>;
}

const CartProduct:FC<ICartProduct> = ({listProducts}) => {
    return listProducts.map(({pathImage, priceProduct, size, weightProduct, nameProduct}) => (
        <li className="container-item-shopping-cart" key={uuidv4()}>
            <div className="item-shopping-cart d-flex">
                <div className="container-image-product d-flex">
                    <img src={pathImage} alt="Imagem de uma Laranja" className="image-product" />
                </div>
                <div className="container-description-cart d-flex">
                    <h1 className="name-product">{nameProduct}</h1>
                    <div className="content-cart d-flex">
                        <span className="weight">{weightProduct}kg</span>
                        <span className="x">x</span>
                        <span className="price-product">{priceProduct} kz</span>
                    </div>
                </div>
                <div className="container-button-close-cart d-flex">
                    <button type="button" className="button-close-cart d-flex">
                        <XCircle size={size} style={{color: "var(--Gray-600)"}} absoluteStrokeWidth={true} />
                    </button>
                </div>
            </div>
            <Divider />
        </li>
    ));
};


export default CartProduct;