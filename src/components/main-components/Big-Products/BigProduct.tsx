import { Eye, Heart, ShoppingBasket } from "lucide-react";
import maca from "../../../assets/products/Rectangle 5.jpg";
import Default from "../Tag/Default";
import New from "../Tag/New";
import Rating from "../Product5n/internalComponents/Rating";
import { FC, useEffect, useState } from "react";

interface IBigProductCar {
    titleProduct: string;
    price: number;
    saleStatus?: Array<"sale" | "new" | "best sale" | "out of stock">;
    saleValue?: number;
    numFeedbacks?: number;
    ratingNumber?: number;
}

const BigProductCar:FC<IBigProductCar> = ({
    titleProduct, 
    price, 
    saleStatus=[], 
    saleValue=undefined, 
    numFeedbacks=0, 
    ratingNumber=1,
}) => {
    const sizeStar = 20;
    const [sale, setSale] = useState<number>(0);
    const saleStatusExists = saleStatus.includes("sale");

    useEffect(() => {
        if(saleStatusExists === false && saleValue !== undefined) {
            throw new Error("Informe o valor do desconto ou informe que o produto está em promoção!");
        }

        const descount = ((saleValue!/100) * price);
        const amount = price - descount;
        setSale(amount);
    }, [saleValue]);

    return (
        <div className="container-big-product">
            <div className="container-big-product-card-image">
                <div className="container-big-product-">
                    <div className="container-info-image d-flex">
                        <img src={maca} alt="Imagem de uma maça" />
                    </div>
                    <div className="container-tag d-flex">
                        <Default info="Desconto 50%" />
                        <New />
                    </div>
                </div>
                <div className="container-view d-flex">
                    <button type="button" className="add-to-wish">
                        <Heart size={sizeStar} style={{color: "var(--Gray-900"}} />
                    </button>
                    <button type="button" className="btn-add-to-cart d-flex">
                        adicionar ao carrinho
                        <ShoppingBasket size={sizeStar} style={{color: "var(--Gray-900"}} />
                    </button>
                    <button type="button" className="btn-view">
                        <Eye size={sizeStar} style={{color: "var(--Gray-900"}} />
                    </button>
                </div>
            </div>
            <div className="container-info-product d-flex">
                <div className="container-product">
                    <h1 className="title-product">{titleProduct}</h1>
                </div>
                <div className="container-price d-flex">
                    <h2 className="price-product">
                    {
                        (sale !== 0 && saleStatusExists) ?
                        sale : price
                    } kz
                    </h2>
                    {
                        (sale !== 0 && saleStatusExists) && 
                        <h2 className="price-product">
                            <del className="price-product sale-result">{price}kz</del>
                        </h2>
                    }
                </div>
                <div className="d-flex">
                    <Rating ratingNumber={ratingNumber} />
                    ({numFeedbacks} Feedbacks)
                </div>
                <div className="container-product-offer">

                </div>
            </div>
        </div>
    )
}

export default BigProductCar;