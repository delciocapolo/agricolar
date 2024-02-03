import { FC } from "react";

interface ISubTotal {
    totalProduct?: number;
    price?: number;
    controllCount: "" | "s";
}

const SubTotal:FC<ISubTotal> = ({price = 0, totalProduct = 0, controllCount = 0}) => {
    return (
        <div className="container-subtotal d-flex">
            <span className="total-products">{totalProduct} produto{controllCount}</span>
            <span className="total-payment">{price}kz</span>
        </div>
    )
}

export default SubTotal;