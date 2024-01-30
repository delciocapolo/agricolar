import { FC } from "react";

interface ISale {
    price: number;
    stade?: string;
    fontSize?: string;
}

const Sale:FC<ISale> = ({price, stade="saling", fontSize="body-medium-400"}) => {
    return (
        <span className={`price-text ${stade} ${fontSize}`}>Kz { price }</span>
    )
}

export default Sale;