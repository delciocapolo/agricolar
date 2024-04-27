import styled from "@emotion/styled";
import { FavouriteIcon } from "hugeicons-react";
import React, { FC, MouseEventHandler } from "react";

const ButtonAdoreProductContainer = styled['button']`
    padding: 0.80rem;
    border-radius: 50px;
    background-color: rgba(132, 209, 135, 0.1);

    & > .svg-icon.adore {
        fill: var(--Success-Dark);
    }
`;

interface IButtonAdoreProduct {
    adore: boolean;
    setAdore: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonAdoreProduct: FC<IButtonAdoreProduct> = ({ setAdore }) => {
    const handleClickAdoreProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
        const target = event.target as HTMLButtonElement;
        const svgIcon = target.querySelector('.svg-icon');
        if (svgIcon) {
            svgIcon.classList.toggle('adore');
            setAdore((prev) => (!prev));
        }
    }
    return (
        <ButtonAdoreProductContainer className="d-flex" onClick={handleClickAdoreProduct}>
            <FavouriteIcon color="var(--Success-Dark)" size={20} className="svg-icon" />
        </ButtonAdoreProductContainer>
    );
};

export default ButtonAdoreProduct;
