import styled from "@emotion/styled";
import Line from "../../main-components/TopLevelComponent/Box/Line";
import { Container } from "../../Container/Container";
import { Link } from "react-router-dom";


export const BGContainer = styled["div"]`
    width: 100%;
    min-height: var(100% - 150px);
    background-color: var(--Green-50);
    gap: 0;

    align-items: flex-start;
  `;
export const CustomDiv = styled["div"]`
    width: 100%;
    min-height: 150px;
    background-color: var(--White);
    // background-color: red;
    position: relative;

    & > .big {
      top: 27%;
      position: absolute;
    }
  `;

export const ProductsContainer = styled["div"]`
    width: 100%;
    // background-color: red;
    margin-top: 13.5%;
    padding-bottom: 3.3rem;
    flex-direction: column;

    // & > * {
    //     display: block;
    // }
  `;
export const TitleContainer = styled(Container)`
    min-height: 0;
    flex-direction: column;
    gap: 5px;
    // background-color: yellow;
    padding: 0;
    margin: 0;
  `;
export const Title = styled["h1"]`
    font: var(--Display03-600);
    color: var(--Gray-900);
  `;
export const MenuContainer = styled["nav"]`
    width: 100%;
    max-width: 605px;
    gap: 2px;

    & > button,
    a {
      flex: 1 1 88px;
    }
  `;
export const ButtonMenuCategory = styled["button"]``;
export const LinkMenuCategory = styled(Link)``;
export const Divider = styled(Line)`
    width: 1px;
    height: 15px;
    padding: 0;
    background-color: var(--Gray-500);
    margin: 0 1px;
  `;
export const NameCategory = styled["span"]``;

export const Products = styled(Container)`
    flex-direction: column;
    gap: 0;
    padding: 40px 0;
    // background-color: yellow;
  `;
export const ProductItemContainer = styled["nav"]`
    width: 100%;
    gap: 0;

    & > div {
      border-radius: 0;
      flex: 1 1 264px;
      box-shadow:
        inset 0 0 0 1px rgba(51, 51, 51, 0.1),
        0 0 1px 1px rgba(51, 51, 51, 0.03);
      &:hover {
        transform: scale(1.02);
      }

      & > .container-product-info {
        & > .container-info {
          & > .title-product {
            font: 0.955rem "Poppins-bold";
            color: var(--Green-700);
          }
          & > .container-price {
            & > .price-product {
              font: 1.025rem "Poppins-bold";
              color: var(--Green-900);

              & > .sale-result {
                font: 0.95rem "Poppins-bold";
                color: var(--Green-400);
              }
            }
          }
        }
        & > .container-add-to-cart {
          & > .btn-add-to-cart {
            background-color: var(--Green-100);

            & > .svg-cart {
              color: var(--Green-900);
            }
          }
        }
      }
    }
  `;