import styled from "@emotion/styled";
import React, { FC } from "react";

const QuantityContainer = styled['div']`
    width: 100%;
    min-width: 110px;
    max-width: 110px;
    flex-wrap: nowrap;
    gap: 5px;
    border-radius: 50px;
    padding: 0.2rem;
    justify-content: space-between;
    background-color: var(--White);
    box-shadow: var(--box-shadow-outline);
`;
const CounterContainer = styled['div']``;
const Counter = styled['button']`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: var(--Gray-50);
    color: var(--Gray-60);
`;
const TextCount = styled['h1']`
    font: var(--Body-Medium-400);
    color: var(--Gray-900);
    text-align: center;
`;

interface IQuantity {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Quantity: FC<IQuantity> = ({ counter, setCounter }) => {
    const handleClickIncrase = () => {
        setCounter((prev) => (prev += 1));
    }

    const handleClickDecrement = () => {
        setCounter((prev) => {
            const next = prev - 1;
            if (next < 0) {
                return prev;
            }
            return next;
        });
    }
    return (
        <QuantityContainer className="d-flex">
            <CounterContainer>
                <Counter onClick={handleClickDecrement}>-</Counter>
            </CounterContainer>
            <CounterContainer>
                <TextCount>{counter}</TextCount>
            </CounterContainer>
            <CounterContainer>
                <Counter onClick={handleClickIncrase}>+</Counter>
            </CounterContainer>
        </QuantityContainer>
    )
}

export default Quantity;