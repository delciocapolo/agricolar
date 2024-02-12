import { FC, useEffect, useState } from "react";
import { Eye, Heart, ShoppingBasket } from "lucide-react";
import maca from "../../../assets/products/Rectangle 5.jpg";
import Default from "../Tag/Default";
import New from "../Tag/New";
import Rating from "../Product5n/internalComponents/Rating";
import Ads from "./internalComponents/Ads";

interface IBigProductCar {
    titleProduct: string;
    price: number;
    saleStatus?: Array<"sale" | "new" | "best sale" | "out of stock">;
    saleValue?: number;
    numFeedbacks?: number;
    ratingNumber?: number;
    offerTime?: string;
}

const BigProductCar:FC<IBigProductCar> = ({
    titleProduct, 
    price, 
    saleStatus=[], 
    saleValue=undefined, 
    numFeedbacks=0, 
    ratingNumber=1,
    offerTime
}) => {
    const sizeStar = 20;
    const [sale, setSale] = useState<number>(0);
    const saleStatusExists = saleStatus.includes("sale");

    // Timers

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
                <div className="container-big-product- d-flex">
                    <div className="container-info-image container-big-product-card-image d-flex">
                        <img src={maca} alt="Imagem de uma maça" />
                    </div>
                    <div className="container-tag d-flex">
                        <Default info="Desconto 50%" />
                        <New />
                    </div>
                </div>
                <div className="container-view buttons-view-big-product d-flex">
                    <button type="button" className="add-to-wish d-flex">
                        <Heart size={sizeStar} style={{color: "var(--Gray-900"}} />
                    </button>
                    <button type="button" className="btn-add-to-cart btn-add-to-big-product d-flex">
                        Adicionar ao carrinho
                        <ShoppingBasket size={sizeStar} style={{color: "var(--Gray-900"}} className="svg-big-product" />
                    </button>
                    <button type="button" className="btn-view d-flex">
                        <Eye size={sizeStar} style={{color: "var(--Gray-900"}} />
                    </button>
                </div>
            </div>
            <div className="container-info-product d-flex">
                <div className="subcontainer-info-product d-flex">
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
                            <h3 className="price-product">
                                <del className="price-product sale-result">{price}kz</del>
                            </h3>
                        }
                    </div>
                    <div className="container-feedback d-flex">
                        <Rating ratingNumber={ratingNumber} />
                        <span className="feedback">
                            ({numFeedbacks} Feedbacks)
                        </span>
                    </div>
                </div>
                { (offerTime && offerTime !== '') && <Ads offerTime={offerTime!} /> }
            </div>
        </div>
    )
}

export default BigProductCar;