import { FC } from "react";
import Sale from "./Sale";

interface IUnsale {
    price: number;
}

const Unsale:FC<IUnsale> = ({price}) => (<Sale price={price} stade="unsale"/>)

export default Unsale;