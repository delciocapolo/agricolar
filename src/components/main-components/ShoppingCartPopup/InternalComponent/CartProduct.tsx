import styled from "@emotion/styled";
import { Cancel01Icon } from "hugeicons-react";
import laranja from "../../../../assets/products/Rectangle 5-1.jpg";

const CartProductContainer = styled['div']`
    width: 100%;
    height: 75px;
    justify-content: space-between;
    // background-color: yellow;
    gap: 0;
`;

const Frame1 = styled['div']`
    width: calc(100% - 45px);
    height: 100%;
    // background-color: orange;
    justify-content: flex-start;
`;

const CloseContainer = styled['div']`
    width: 45px;
    height: 100%;
    // background-color: cyan;
`;
const ButtonClose = styled['button']`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    box-shadow: var(--box-shadow-outline);
    background-color: var(--White);
`;

const ContainerImage = styled['div']`
    width: 65px;
    height: 65px;
    // background-color: brown;
`;
const Image = styled['img']`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const ContainerDescribe = styled['div']`
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`;
const TextDescribe = styled['h1']`
    font: var(--Body-Small-400);
    color: var(--Gray-800);
`;
const WeightDescribe = styled['span']`
    font: var(--Body-Small-400);
    color: var(--Gray-500);
`;

const CartProduct = () => {
    return (
        <CartProductContainer className="d-flex">
            <Frame1 className="d-flex">
                <ContainerImage>
                    <Image src={laranja} />
                </ContainerImage>
                <ContainerDescribe className="d-flex">
                    <TextDescribe>Fresh Indian Orange</TextDescribe>
                    <WeightDescribe>{1} kg x {14}</WeightDescribe>
                </ContainerDescribe>
            </Frame1>
            <CloseContainer className="d-flex">
                <ButtonClose className="d-flex">
                    <Cancel01Icon size={15} strokeWidth={1.8} />
                </ButtonClose>
            </CloseContainer>
        </CartProductContainer>
    );
};

export default CartProduct;