import styled from "@emotion/styled";
import { MoveLeft, MoveRight } from "lucide-react";

const ArrowContainer = styled['div']`
    position: absolute;
    width: 100%;

    justify-content: space-between;
    padding: 0.2rem 0.5rem;
`;
const ButtonArrow = styled['button']`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    box-shadow: var(--box-shadow-double-face);
`;

const Arrow = () => {
    const iconConfigs = {
        // color
        // size
    }
    return (
        <ArrowContainer className="d-flex">
            <ButtonArrow className="d-flex">
                <MoveLeft  {...iconConfigs} />
            </ButtonArrow>
            <ButtonArrow className="d-flex">
                <MoveRight {...iconConfigs} />
            </ButtonArrow>
        </ArrowContainer>
    )
};

export default Arrow;