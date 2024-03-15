import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { useContext, useState } from "react";
import { PaddingContext } from "../contexts/padding";
import Featured from "../main-components/Featured/Featured";
import Box from "../main-components/TopLevelComponent/Box/Box";
import Line from "../main-components/TopLevelComponent/Box/Line";
import Normal from "../main-components/Product5n/Normal";
import { Container } from "../Container/Container";

const BG = () => {
    const { padding } = useContext(PaddingContext);
    const prevPadding = String(padding).split(' ')[1];

    const BGContainer = styled['div']`
        width: 100%;
        min-height: var(100% - 150px);
        background-color: var(--Green-50);
        gap: 0;

        align-items: flex-start;
    `;
    const CustomDiv = styled['div']`
        width: 100%;
        min-height: 150px;
        background-color: var(--White);
        // background-color: red;
        position: relative;
        padding: 0 ${prevPadding};
        

        & > .big {
            top: 23%;
            position: absolute;
        }
    `;

    const ProductsContainer = styled['div']`
        width: 100%;
        // background-color: red;
        margin-top: 13.5%;
        padding-bottom: 3.3rem;
        flex-direction: column;

        // & > * {
        //     display: block;
        // }
    `;
    const TitleContainer = styled(Box)`
        flex-direction: column;
        gap: 5px;
        // background-color: yellow;
        padding: 0;
        margin: 0;
    `;
    const Title = styled['h1']`
        font: var(--Display03-600);
        color: var(--Gray-900);
    `;
    const MenuContainer = styled['nav']`
        width: 100%;
        max-width: 605px;
        gap: 2px;

        & > button, a {
            flex: 1 1 88px;
        }
    `;
    const ButtonMenuCategory = styled['button']``;
    const LinkMenuCategory = styled['a']``;
    const Divider = styled(Line)`
        width: 1px;
        height: 15px;
        padding: 0;
        background-color: var(--Gray-500);
        margin: 0 1px;
    `;
    const NameCategory = styled['span']``;

    const Products = styled(Container)`
        flex-direction: column;
        gap: 0;
        padding: 40px 0;
        // background-color: yellow;
    `;
    const ProductItemContainer = styled['nav']`
        width: 100%;
        gap: 0;
        
        & > div {
            border-radius: 0;
            flex: 1 1 264px;
            box-shadow: inset 0 0 0 1px rgba(51, 51, 51, 0.1), 0 0 1px 1px rgba(51, 51, 51, 0.03);

            & > .container-product-info {
                & > .container-info {
                    & > .title-product {
                        font: 0.955rem 'Poppins-bold';
                        color: var(--Green-700);
                    }
                    & > .container-price {
                        & > .price-product {
                            font: 1.025rem 'Poppins-bold';
                            color: var(--Green-900);

                            & > .sale-result {
                                font: 0.95rem 'Poppins-bold';
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
    const [dataProducts, setDataProducts] = useState();

    return (
        <BGContainer className="d-flex">
            <Global styles={
                css`
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
                <TitleContainer>
                    <Title>Introduzingo nossos produtos</Title>
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
                        <LinkMenuCategory href="/product/all" className="btn-menu-category d-flex">
                            <NameCategory>ver todos</NameCategory>
                            <div></div>
                        </LinkMenuCategory>
                    </MenuContainer>
                </TitleContainer>
                <Products className="d-flex">
                    <ProductItemContainer className="product-item-container d-flex">
                        {/* O limite para cada container eh de 4 items */}
                        {
                            [1, 2, 3, 4].map(_ => (<Normal price={3000} ratingNumber={3} saleStatus={['new']} />))
                        }
                    </ProductItemContainer>
                    <ProductItemContainer className="product-item-container d-flex">
                        {/* O limite para cada container eh de 4 items */}
                        {
                            [1, 2, 3, 4].map(_ => (<Normal price={3000} ratingNumber={3} saleStatus={['sale']} saleValue={20} />))
                        }
                    </ProductItemContainer>
                </Products>
            </ProductsContainer>
        </BGContainer>
    );
};

export default BG;