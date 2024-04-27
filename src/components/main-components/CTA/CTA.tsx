import styled from "@emotion/styled";
import Quantity from "./InternalComponents/Quantity";
import ButtonAdoreProduct from "./InternalComponents/AdoreProduct";
import ButtonAddToCart from "./InternalComponents/ButtonAddToCart";
import React, { FC } from "react";

const CTAContainer = styled['div']`
    padding: 0.5rem 0;
    width: 100%;
    max-width: 568px;
    justify-content: space-between;
    gap: 0;
`;

const Div0 = styled['div']`
    width: fit-content;
`;
const Div01 = styled['div']`
    width: calc(100% - 165px);
    border-radius: 50px;
`;

interface ICTA {
    quantity: {
        counter: number;
        setCounter: React.Dispatch<React.SetStateAction<number>>;
    },
    adore: {
        adore: boolean,
        setAdore: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

const CTA: FC<ICTA> = ({ quantity, adore }) => {

    return (
        <CTAContainer className="d-flex">
            <Quantity {...quantity} />
            <Div01 className="d-flex">
                <ButtonAddToCart />
            </Div01>
            <Div0>
                <ButtonAdoreProduct {...adore} />
            </Div0>
        </CTAContainer>
    )
}

export default CTA;
