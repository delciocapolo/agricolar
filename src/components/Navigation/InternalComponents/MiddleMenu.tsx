import styled from "@emotion/styled";
import {
  FavouriteIcon,
  Search01Icon,
  ShoppingBag03Icon,
} from "hugeicons-react";
import Logo from "../../../assets/Logo";
import Line from "../../main-components/TopLevelComponent/Box/Line";
import { MouseEventHandler } from "react";
import { Container as ContainerBase } from "../../Container/Container";

const MiddleMenu = () => {
  const Container = styled(ContainerBase)`
    padding: 1rem 0;
    margin: auto;
    min-height: 0;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const MiddleMenuContainer = styled["div"]`
    width: 100%;
    padding: 0;
  `;
  const Form = styled["form"]`
    width: 35%;
    min-width: 320px;
    gap: 0;
    border-radius: 50px;
    box-shadow: var(--box-shadow-outline);
    background-color: var(--White);
  `;
  const TextField = styled["input"]`
    outline: none;
    border: none;
  `;
  const TextFieldSearch = styled(TextField)`
    padding: 1rem 1.2rem;
    cursor: pointer;
    border-radius: 0 50px 50px 0;
    background-color: var(--Success);
    color: var(--White);
    font: var(--Body-Tiny-500);
  `;
  const ButtonWishList = styled["button"]`
    padding: 0.3rem;
    border-radius: var(--border-radius);
    width: 45px;
    height: 45px;
    background-color: transparent;
    transition: 0.1s ease-in;

    &:hover {
      background-color: var(--Gray-50);
    }
  `;
  const Divider = styled(Line)`
    // width: 2px;
    height: 25px;
  `;

  const ShoppingCard = styled["div"]`
    width: fit-content;
  `;
  const Cart = styled["div"]`
    width: 45px;
    height: 45px;

    position: relative;

    & > * {
      position: absolute;
    }
  `;

  const Span = styled["span"]`
    font: 0.625rem "Poppins-medium";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -1px;
    right: 0px;
    color: var(--White);
    background-color: var(--Success-Dark);
    border: 2px solid var(--White);
  `;

  const Title = styled["h1"]`
    font: 0.687rem "Poppins-regular";
    color: var(--Gray-700);
    padding: 0.12rem 0;
  `;
  const TotalPrice = styled["h2"]`
    font: 0.775rem "Poppins-medium";
    padding: 0.1rem 0;
    color: var(--Gray-900);
  `;
  const Info = styled["div"]`
    align-items: flex-start;
    gap: 0;
    flex-direction: column;
    color: 100%;
  `;
  const CartContainer = styled["div"]`
    min-width: 218px;
  `;

  const moeda = "AO";
  const handleClickShowShoppingCartPopup: MouseEventHandler<HTMLElement> = (
    event,
  ) => {
    event.stopPropagation();
    const shoppingcartPopup = document.querySelector(".shoppingcart-popup");

    if (shoppingcartPopup) {
      shoppingcartPopup.classList.toggle("actived");
      console.log("clicando");
    }
  };
  return (
    <MiddleMenuContainer>
      <Container className="d-flex">
        <Logo />
        <Form method="post" className="d-flex form">
          <div
            className="d-flex"
            style={{ padding: "0 0 0 0.5rem" }}
          >
            <Search01Icon color="var(--Gray-700)" size={20} />
          </div>
          <TextField
            type="search"
            name="search_bar"
            placeholder="Procure por algum produto ou @fazenda"
            style={{
              font: "var(--Body-Tiny-400)",
              flex: "1 1 200px",
              height: "47px",
              padding: "0.3rem",
            }}
          />
          <TextFieldSearch
            type="submit"
            name="submit_search_bar"
            value="Pesquisar"
          />
        </Form>
        <CartContainer className="d-flex">
          <ButtonWishList type="button" className="d-flex">
            <FavouriteIcon size={30} color="var(--Gray-800)" />
          </ButtonWishList>
          <Divider />
          <ShoppingCard className="d-flex">
            <Cart className="d-flex">
              <ButtonWishList
                type="button"
                className="d-flex"
                onClick={handleClickShowShoppingCartPopup}
              >
                <ShoppingBag03Icon size={30} color="var(--Gray-800)" />
              </ButtonWishList>
              <Span className="d-flex">0</Span>
            </Cart>
            <Info className="d-flex">
              <Title>carrinho</Title>
              <TotalPrice>{moeda} 0.0 kz</TotalPrice>
            </Info>
          </ShoppingCard>
        </CartContainer>
      </Container>
    </MiddleMenuContainer>
  );
};

export default MiddleMenu;
