import styled from "@emotion/styled";
import { ShoppingBag03Icon } from "hugeicons-react";

const ButtonBuy = styled['button']`
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    background-color: var(--Success);
    flex: 1 1 85px;
`;
const SpanTextButton = styled['span']`
    color: var(--White);
    font: var(--Body-Small-600);
`;
const ButtonAddToCart = () => {
    return (
        <ButtonBuy className="d-flex" >
            <SpanTextButton>Adicionar ao carrinho</SpanTextButton>
            <ShoppingBag03Icon color="var(--White)" size={15} strokeWidth={2.5} />
        </ButtonBuy>
    );
};

export default ButtonAddToCart;