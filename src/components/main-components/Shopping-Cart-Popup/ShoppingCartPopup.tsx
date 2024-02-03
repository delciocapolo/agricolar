import { useEffect, useState, FC } from "react";
import laranja from "../../../assets/products/Rectangle 5.jpg";
import maca from "../../../assets/products/Rectangle 5-1.jpg";
import SubTotal from "./SubTotal";
import CartProduct from "./CartProduct";
import { IProduct } from "./interfaces/Product";
import Checkout from "./Buttons/Checkout";
import GoToCart from "./Buttons/GoToCart";
import Divider from "./Devider";

const ShoppingCartPopup = () => {
    const size = 30;
    const listProducts: Array<IProduct> = [
        {
            "pathImage": maca,
            "priceProduct": 300,
            size,
            "weightProduct": 3,
            "nameProduct": "",
        },
        {
            "pathImage": laranja,
            "priceProduct": 200,
            size,
            "weightProduct": 5,
            "nameProduct": "",
        },
    ];
    const totalProducts = listProducts.length;
    const [controllCount, setControllCount] = useState<"" | "s">("");
    const totalPrice = listProducts.reduce((accumulator, {priceProduct}) => (accumulator += priceProduct), 0);

    useEffect(() => {
        if(totalProducts > 1) {
            setControllCount("s")
            return;
        }

        setControllCount("");
    }, [controllCount])

    return (
        <div className="shopping-cart-popup">
            <ul className="list-shopping-cart">
                <CartProduct listProducts={listProducts} />
            </ul>
            <SubTotal totalProduct={totalProducts} price={totalPrice} controllCount={controllCount} />
            <div className="buttons-shopping-cart d-grid">
            <Divider />
                <Checkout />
                <GoToCart />
            </div>
        </div>
    );
}

export default ShoppingCartPopup;