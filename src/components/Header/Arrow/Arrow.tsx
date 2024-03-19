import styled from "@emotion/styled";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { FC, MouseEvent } from "react";

const ArrowContainer = styled['div']`
    position: absolute;
    width: 97%;

    justify-content: space-between;
    padding: 0.2rem 0.5rem;
    z-index: 1;
`;
const ButtonArrow = styled['button']`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--White);

    box-shadow: var(--box-shadow-double-face);
`;

interface IArrow {
    onClickRight?(e: MouseEvent<HTMLButtonElement>): void;
    onClickLeft?(e: MouseEvent<HTMLButtonElement>): void;
}

const Arrow: FC<IArrow> = ({ onClickRight, onClickLeft }) => {
    const iconConfigs = {
        color: 'var(--Green-900)',
        size: 20
    }
    return (
        <ArrowContainer className="d-flex">
            <ButtonArrow className="d-flex" onClick={onClickLeft}>
                <ArrowLeft  {...iconConfigs} />
            </ButtonArrow>
            <ButtonArrow className="d-flex" onClick={onClickRight}>
                <ArrowRight {...iconConfigs} />
            </ButtonArrow>
        </ArrowContainer>
    )
};

export default Arrow;