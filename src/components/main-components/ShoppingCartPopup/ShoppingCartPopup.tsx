import { Cancel01Icon } from "hugeicons-react";
import {
  AllContainer,
  BG,
  Button,
  ButtonCloseFram229,
  ButtonGoToCart,
  ButtonsContainer,
  Fram228,
  Frame227,
  Frame229,
  ShoppingCartPopupContainer,
  SubTextFrame229,
  TextDescribeFrame229,
  TextFram229,
  TextFrame229Container,
  TextPriceFrame229,
} from "./InternalComponent/BaseShoppingCartPopup";
import CartProduct from "./InternalComponent/CartProduct";
import { Divider } from "@mui/material";
import { MouseEventHandler, useRef } from "react";

const ShoppingCartPopup = () => {
  const BGRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleCloseContainer: MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();
    if (BGRef) {
      BGRef.current.classList.remove("actived");
    }
  };
  const handleClickShoppingPopupContainer: MouseEventHandler<HTMLElement> = (
    event,
  ) => {
    event.stopPropagation();
  };
  return (
    <BG
      onClick={handleCloseContainer}
      ref={BGRef}
      className="shoppingcart-popup"
    >
      <ShoppingCartPopupContainer
        className="d-flex"
        onClick={handleClickShoppingPopupContainer}
      >
        <Frame227>
          <Frame229 className="d-flex">
            <TextFram229>
              Carrinho <SubTextFrame229>[{0}]</SubTextFrame229>
            </TextFram229>
            <ButtonCloseFram229
              className="d-flex"
              onClick={handleCloseContainer}
            >
              <Cancel01Icon size={20} />
            </ButtonCloseFram229>
          </Frame229>
          {[].map((_) => (
            <AllContainer className="d-flex">
              <CartProduct />
              <Divider sx={{ width: "100%" }} color="var(--Gray-900)" />
            </AllContainer>
          ))}
        </Frame227>
        <Fram228>
          <TextFrame229Container className="d-flex">
            <TextDescribeFrame229>{0} produtos</TextDescribeFrame229>
            <TextPriceFrame229>{0.0}kz</TextPriceFrame229>
          </TextFrame229Container>
          <ButtonsContainer className="d-flex">
            <Button>confirmar</Button>
            <ButtonGoToCart>ir ao carrinho</ButtonGoToCart>
          </ButtonsContainer>
        </Fram228>
      </ShoppingCartPopupContainer>
    </BG>
  );
};

export default ShoppingCartPopup;
