import { FavouriteIcon, ViewIcon } from "hugeicons-react";
import { FC } from "react";
import Default from "../../Tag/Default";
import New from "../../Tag/New";
import BestSale from "../../Tag/BestSale";
import OutOfStock from "../../Tag/OutOfStock";
import { ProductdetalisContext, useProductdetails } from "../../../contexts/ProductDetails";

interface IImageSection {
    urlBaseImage: string;
    saleValue: number | undefined;
    saleStatus: Array<"sale" | "new" | "best sale" | "out of stock">;
    size: number;
}

const ImageSection: FC<IImageSection> = ({ urlBaseImage, saleValue, saleStatus = [], size }) => {
    const saleStatusExists = saleStatus.includes("sale");
    const { setDetails } = useProductdetails();

    const handleClickShowDetailsProduct = () => {
        setDetails((prev) => ({ ...prev, actived: true }));
    }

    if (saleStatus.length > 2) {
        throw new Error('Seleccione apenas 2 ou menos tags!');
    }
    if (saleStatusExists === false && saleValue !== undefined) {
        throw new Error("Informe o valor do desconto ou informe que o produto está em promoção!");
    }
    return (
        <div className="container-product-image d-flex">
            <img src={urlBaseImage} alt="Maçã" />
            <div className="container-view-more-options d-flex">
                <div className="sales-status d-flex">
                    {saleStatus.includes('sale') && <Default info={`Desconto ${saleValue}%`} classNameTag="i" />}
                    {saleStatus.includes('new') && <New />}
                    {saleStatus.includes('best sale') && <BestSale />}
                    {saleStatus.includes('out of stock') && <OutOfStock />}
                </div>
                <div className="container-view d-flex">
                    <button type="button" className="btn-adore d-flex" title="Adicionar a lista de desejo">
                        <FavouriteIcon color="var(--Gray-900)" size={size} />
                    </button>
                    <button type="button" className="btn-view d-flex" title="Visualizar os detalhes do produto" onClick={handleClickShowDetailsProduct}>
                        <ViewIcon color="var(--Gray-900)" size={size} />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ImageSection;