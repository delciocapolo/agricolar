import { v4 as uuid } from "uuid";
import {
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
  Frame223,
  Frame222,
  Frame221,
  TextIn_Fram221,
  Brand_Frame221,
  ShareContainer,
  Share,
  Frame224,
  TextFrame224,
  SmallDetails,
  Category,
  BaseTextcategory,
  BoldCategoryText,
} from "./ComponentBase/BaseProductDetails";
import image from "../../../assets/products/cove.jpg";
import brand from "../../../assets/header/Brand.jpg";
import Rating from "../Product5n/internalComponents/Rating";
import { Facebook02Icon, InstagramIcon, TwitterIcon } from "hugeicons-react";
import { FaPinterestP } from "react-icons/fa";
import CTA from "../CTA/CTA";
import { Divider } from "@mui/material";
import { FC, MouseEventHandler, useRef, useState } from "react";
import { useProductdetails } from "../../contexts/ProductDetails";
import ShareWith from "./internalComponents/Share";
import ItemSlide from "./internalComponents/SlideItem";

interface IProductDetailComponent {
  id_product?: string;
}

const ProductDetailComponent: FC<IProductDetailComponent> = () => {
  const {
    details: { actived },
    setDetails,
  } = useProductdetails();
  const links = [
    "www.facebook.com",
    "www.x.com",
    "www.instagram.com",
    "www.pinterest.com",
  ];
  const pathSlideImages: string[] = [image, brand];
  const imgSlide = useRef<HTMLImageElement>({} as HTMLImageElement);
  const containerImgSlideRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [counter, setCounter] = useState<number>(0);
  const [adore, setAdore] = useState<boolean>(false);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (imgSlide && containerImgSlideRef) {
      // Obter posição do mouse em relação ao contêiner
      const rect = containerImgSlideRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Calcular porcentagem de posição em relação ao contêiner
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      const isMouseOverImage =
        event.target === imgSlide.current ||
        imgSlide.current.contains(event.target as Node);

      // Aplicar ampliação apenas quando o mouse estiver sobre a imagem
      if (isMouseOverImage) {
        imgSlide.current.classList.add("zoomed");
        imgSlide.current.style.transformOrigin = `${percentX}% ${percentY}%`; // Definir origem da transformação
      } else {
        imgSlide.current.classList.remove("zoomed");
      }
    }
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    if (imgSlide && containerImgSlideRef) {
      imgSlide.current.style.transformOrigin = "0px";
      imgSlide.current.classList.remove("zoomed");
    }
  };
  const handleClickCloseBG: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    event.currentTarget.classList.remove("actived");
    setDetails((prev) => ({ ...prev, actived: false }));
  };
  const handleClickDetailsProductContainer: MouseEventHandler<
    HTMLDivElement
  > = (event) => {
    event.stopPropagation();
  };

  return (
    <ProductDetailsContainer
      className="d-flex"
      onClick={handleClickDetailsProductContainer}
    >
      <ProductDetailsImageContainer className="d-flex">
        {pathSlideImages.length > 0 && (
          <SlideContainer className="d-flex">
            <Slide className="d-grid">
              {pathSlideImages.map((path) => (
                <ItemSlide
                  pathImageProdc={path}
                  theRef={imgSlide}
                  key={uuid()}
                />
              ))}
            </Slide>
          </SlideContainer>
        )}

        <ImageProductDetailsContainer
          className={pathSlideImages.length <= 0 ? "empty" : undefined}
          ref={containerImgSlideRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <ImageProductDetails src={image} ref={imgSlide} />
        </ImageProductDetailsContainer>
      </ProductDetailsImageContainer>
      <ContainerDetails className="d-flex">
        <Frame219>
          <O_TitleStockContainer className="d-flex">
            <O_TitleStock>alface</O_TitleStock>
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
              <O_SpanSku className="d-flex" title="Avaliações por pessoa">
                AP: <O_BoldSku>+22</O_BoldSku>
              </O_SpanSku>
            </O_Div0>
          </O_Frame220>
          <PriceContainer className="d-flex">
            <Frame218 className="d-flex">
              <Original_Price>{2039}kz</Original_Price>
              <Computed_Sale>{1019.5}kz</Computed_Sale>
            </Frame218>
            <SpanSale>64% off</SpanSale>
          </PriceContainer>
        </Frame219>
        <Divider color="var(--Gray-800)" sx={{ width: "100%" }} />
        <Frame223 className="d-flex">
          <Frame222 className="d-flex">
            <Frame221 className="d-flex">
              <TextIn_Fram221>Marca</TextIn_Fram221>
              <Brand_Frame221 src={brand} />
            </Frame221>
            <ShareContainer className="d-flex">
              <TextIn_Fram221>Partilhar no:</TextIn_Fram221>
              <Share className="d-flex">
                <ShareWith
                  url={links[0]}
                  Icon={
                    <Facebook02Icon
                      strokeWidth={0.1}
                      fill="var(--Gray-700)"
                      size={17}
                      className="svg-icon"
                    />
                  }
                />
                <ShareWith
                  url={links[1]}
                  Icon={
                    <TwitterIcon
                      strokeWidth={0.1}
                      fill="var(--Gray-700)"
                      size={17}
                      className="svg-icon"
                    />
                  }
                />
                <ShareWith
                  url={links[2]}
                  Icon={
                    <FaPinterestP
                      color="var(--Gray-700)"
                      className="svg-icon-stroke"
                    />
                  }
                />
                <ShareWith
                  url={links[3]}
                  Icon={
                    <InstagramIcon
                      color="var(--Gray-700)"
                      strokeWidth={2}
                      size={17}
                      className="svg-icon-stroke"
                    />
                  }
                />
              </Share>
            </ShareContainer>
          </Frame222>
          <Frame224>
            <TextFrame224>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </TextFrame224>
          </Frame224>
        </Frame223>
        <Divider color="var(--Gray-800)" sx={{ width: "100%" }} />

        <CTA quantity={{ counter, setCounter }} adore={{ adore, setAdore }} />

        <Divider color="var(--Gray-800)" sx={{ width: "100%" }} />
        <SmallDetails className="d-flex">
          <Category className="d-flex">
            <BoldCategoryText>Categoria: </BoldCategoryText>
            <BaseTextcategory>Vegetal</BaseTextcategory>
          </Category>
          <Category className="d-flex">
            <BoldCategoryText>Tag: </BoldCategoryText>
            <BaseTextcategory>vegetal</BaseTextcategory>
            <div>|</div>
            <BaseTextcategory>legume</BaseTextcategory>
            <div>|</div>
            <BaseTextcategory>saudavel</BaseTextcategory>
          </Category>
        </SmallDetails>
      </ContainerDetails>
    </ProductDetailsContainer>
  );
};

export default ProductDetailComponent;
