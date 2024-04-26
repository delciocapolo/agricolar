import { FC, MouseEvent, useEffect, useState } from "react";
import { ShoppingBag03Icon } from "hugeicons-react";
import laranja from "../../../assets/products/Rectangle 5.jpg";
import ImageSection from "./internalComponents/imageSection";
import Rating from "./internalComponents/Rating";
import maca from "../../../assets/products/Rectangle 5-1.jpg";

interface INormal {
  ratingNumber?: number;
  saleValue?: number;
  price: number;
  saleStatus?: Array<"sale" | "new" | "best sale" | "out of stock">;
  event?(e?: MouseEvent<HTMLButtonElement>): any;
}

const Normal: FC<INormal> = ({ ratingNumber = 1, saleStatus = [], saleValue = undefined, price, event }) => {
  const sizeStar = 15;
  const size = 30;
  const [sale, setSale] = useState<number>(0);
  const saleStatusExists = saleStatus.includes("sale");

  useEffect(() => {
    if (saleStatusExists === false && saleValue !== undefined) {
      throw new Error("Informe o valor do desconto ou informe que o produto está em promoção!");
    }

    const descount = ((saleValue! / 100) * price);
    const amount = price - descount;
    setSale(amount);
  }, [saleValue]);

  return (
    <div className="container-normal product5n">
      <ImageSection saleStatus={saleStatus} saleValue={saleValue} size={size} urlBaseImage={laranja} />
      <div className="container-product-info d-flex">
        <div className="container-info">
          <h1 className="title-product">green apple</h1>
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
          <Rating ratingNumber={ratingNumber} sizeStar={sizeStar} />
        </div>
        <div className="container-add-to-cart">
          <button type="button" className="btn-add-to-cart d-flex" title="Adicionar ao carrinho" onClick={event}>
            {/* <ShoppingBasket absoluteStrokeWidth={true} size={size} className="svg-cart" /> */}
            <ShoppingBag03Icon size={size} className="svg-cart" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Normal;
