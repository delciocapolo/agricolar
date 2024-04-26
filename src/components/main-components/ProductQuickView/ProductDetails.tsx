import {
    BGContainer,
    ContainerDetails,
    ImageProductDetails,
    ImageProductDetailsContainer,
    O_BoldSku,
    O_Div0,
    O_Frame220,
    O_RatingAndSku,
    O_Span220,
    O_DivSmalPoint,
    O_SpanSku,
    O_TitleStock,
    O_TitleStockContainer,
    Frame219,
    ProductDetailsContainer,
    ProductDetailsImageContainer,
    Slide,
    SlideContainer,
    StockTag,
    PriceContainer,
    Frame218,
    Original_Price,
    Computed_Sale,
    SpanSale,
    Frame224
} from "./ComponentBase/BaseProductDetails";
import { ItemSlide } from "./internalComponents/SlideItem";
import image from "../../../assets/products/cove.jpg";
import Rating from "../Product5n/internalComponents/Rating";

const ProductDetails = () => {
    return (
        <BGContainer className="d-flex">
            <ProductDetailsContainer className="d-flex">
                <ProductDetailsImageContainer className="d-flex">
                    <SlideContainer className="d-flex">
                        <Slide className="d-grid">
                            {
                                [1, 2, 3, 4].map((_) => (<ItemSlide pathImageProdc={null} />))
                            }
                        </Slide>
                    </SlideContainer>
                    <ImageProductDetailsContainer>
                        <ImageProductDetails src={image} />
                    </ImageProductDetailsContainer>
                </ProductDetailsImageContainer>
                <ContainerDetails>
                    <Frame219>
                        <O_TitleStockContainer className="d-flex">
                            <O_TitleStock>chinese cabbage</O_TitleStock>
                            <StockTag>em stock</StockTag>
                        </O_TitleStockContainer>
                        <O_Frame220 className="d-flex">
                            <O_RatingAndSku className="d-flex">
                                <Rating ratingNumber={5} />
                                <O_Span220>{4} Avaliações</O_Span220>
                            </O_RatingAndSku>
                            <O_Div0 className="d-flex">
                                <O_DivSmalPoint />
                            </O_Div0>
                            <O_Div0 className="d-flex">
                                <O_SpanSku className="d-flex">
                                    SKU: <O_BoldSku>2,51,594</O_BoldSku>
                                </O_SpanSku>
                            </O_Div0>
                        </O_Frame220>
                        <PriceContainer className="d-flex">
                            <Frame218 className="d-flex">
                                <Original_Price>{2039}kz</Original_Price>
                                <Computed_Sale>{2039}kz</Computed_Sale>
                            </Frame218>
                            <SpanSale>64% off</SpanSale>
                        </PriceContainer>
                    </Frame219>
                </ContainerDetails>
            </ProductDetailsContainer>
        </BGContainer>
    );
};

export default ProductDetails;