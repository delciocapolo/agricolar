import { ShoppingBasket } from "lucide-react";
import backgroundImageUrl from "../../../../assets/backgroundImage.jpg";

const BannerProducts = () => {
    const size = 19;

    return (
        <article className="banner-products">
            <div className="content">
                <h1 className="title">
                    fornecimento orgânico fresco direto da fazenda para casa
                </h1>
            </div>
            <div className="container">
                // Legumes
                <nav className="list-products">
                    <div className="card-product">
                        <div className="container-image-product">
                            <img src={backgroundImageUrl} alt="" className="image-product" />
                        </div>
                        <div className="container-content-product">
                            <div className="content-product">
                                <div className="container-text-product">
                                    <h3 className="name-product">green chill</h3>
                                </div>
                                <div className="container-text-product">
                                    <h3 className="price-product">Kz 400</h3>
                                </div>
                            </div>
                            <div className="container-btn-buy">
                                <button className="btn-buy">
                                <ShoppingBasket style={{color: "var(--White"}} size={size} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                // Vegetais
                <nav className="list-products">
                    <div className="card-product">
                        <div className="container-image-product">
                            <img src="" alt="" className="image-product" />
                        </div>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export default BannerProducts;