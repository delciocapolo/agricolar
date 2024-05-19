import { Global, css } from "@emotion/react";
import { useRef, useState } from "react";
import Featured from "../main-components/Featured/Featured";
import Normal from "../main-components/Product5n/Normal";
import {
  BGContainer,
  ButtonMenuCategory,
  CustomDiv,
  Divider,
  LinkMenuCategory,
  MenuContainer,
  NameCategory,
  ProductItemContainer,
  Products,
  ProductsContainer,
  Title,
  TitleContainer,
} from "./InternalComponents/BaseBG";

const BG = () => {
  const CardProductRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [dataProducts, setDataProducts] = useState();

  return (
    <BGContainer className="d-flex">
      <Global
        styles={css`
          .btn-menu-category {
            // padding: 0 20px;
            height: 39px;
            color: var(--Gray-500);
            font: var(--Body-Medium-400);
            background-color: transparent;

            flex-direction: column;
            gap: 3px;

            & > div {
              width: 0;
              transition: 0.2s ease-in;
              height: 1.3px;
              background-color: var(--Success);
            }
            &:hover > div {
              width: 100%;
            }

            &:hover {
              color: var(--Success);
              // border-bottom: 2px solid var(--Success);
            }
          }
        `}
      />
      <CustomDiv className="d-flex">
        <Featured className="big" />
      </CustomDiv>
      <ProductsContainer className="d-flex">
        <TitleContainer className="d-flex">
          <Title>Introduzindo nossos produtos</Title>
          <MenuContainer className="d-flex">
            <ButtonMenuCategory className="btn-menu-category d-flex">
              <NameCategory>todos</NameCategory>
              <div></div>
            </ButtonMenuCategory>
            <Divider />
            <ButtonMenuCategory className="btn-menu-category d-flex">
              <NameCategory>vegetais</NameCategory>
              <div></div>
            </ButtonMenuCategory>
            <Divider />
            <ButtonMenuCategory className="btn-menu-category d-flex">
              <NameCategory>frutas</NameCategory>
              <div></div>
            </ButtonMenuCategory>
            <Divider />
            <ButtonMenuCategory className="btn-menu-category d-flex">
              <NameCategory>carnes e peixe</NameCategory>
              <div></div>
            </ButtonMenuCategory>
            <Divider />
            <LinkMenuCategory
              to="/produtos/todos"
              className="btn-menu-category d-flex"
            >
              <NameCategory>ver todos</NameCategory>
              <div></div>
            </LinkMenuCategory>
          </MenuContainer>
        </TitleContainer>
        <Products className="d-flex">
          <ProductItemContainer className="product-item-container d-flex">
            {/* O limite para cada container eh de 4 items */}
            {[1, 2, 3, 4].map((_) => (
              <Normal
                price={Math.round(Math.random() * 4000)}
                ratingNumber={3}
                saleStatus={["new"]}
                data-id="delciocapolo"
                btnBuyProductEvent={(event) => {
                  if (!event) {
                    console.error("This element doesn't exists");
                    return;
                  }

                  const target = event.target as HTMLButtonElement;
                  console.log(target.parentNode);
                }}
              />
            ))}
          </ProductItemContainer>
          <ProductItemContainer className="product-item-container d-flex">
            {/* O limite para cada container eh de 4 items */}
            {[1, 2, 3, 4].map((_) => (
              <Normal
                price={Math.round(Math.random() * 4000)}
                ratingNumber={3}
                saleStatus={["sale"]}
                saleValue={9}
              />
            ))}
          </ProductItemContainer>
        </Products>
      </ProductsContainer>
    </BGContainer>
  );
};

export default BG;
