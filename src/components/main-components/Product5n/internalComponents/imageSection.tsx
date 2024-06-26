import { FavouriteIcon, ViewIcon } from "hugeicons-react";
import { FC, MouseEventHandler } from "react";
import Default from "../../Tag/Default";
import New from "../../Tag/New";
import BestSale from "../../Tag/BestSale";
import OutOfStock from "../../Tag/OutOfStock";
import { useProductdetails } from "../../../contexts/ProductDetails";
import { SalesStatusType } from "../@types/ProductType";

interface IImageSection {
    urlBaseImage: string;
    saleValue: number | undefined;
    saleStatus: Array<SalesStatusType>;
    size: number;
    productId?: string
}

const ImageSection: FC<IImageSection> = ({ urlBaseImage, saleValue, saleStatus = [], size, productId }) => {
    const saleStatusExists = saleStatus.includes("sale");
    const { setDetails } = useProductdetails();

    const handleClickShowDetailsProduct = () => {
        setDetails((prev) => ({ ...prev, actived: true, id: productId! }));
    }
    const handleClickAddToFavorite: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        // fetch graphql api to add to favorite
    }

    if (saleStatus.length > 2) {
        throw new Error('Selecione apenas 2 ou menos tags!');
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
                    <button type="button" className="btn-adore d-flex" title="Adicionar a lista de desejo" onClick={handleClickAddToFavorite}>
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