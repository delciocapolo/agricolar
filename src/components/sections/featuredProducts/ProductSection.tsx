import BannerProducts from "./bannerProducts/BannerProducts";
import BannerServices from "./bannerServices/BannerServices";
import BannerStarted from "./bannerStarted/BannerStarted";

const ProductSection = () => {
    return (
        <>
            <section className="product-section section mg-bottom">
                <BannerStarted />
                <BannerServices />
                <BannerProducts />
            </section>
            <footer className="product-footer"></footer>
        </>
    )
}

export default ProductSection;