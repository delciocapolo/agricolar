import styled from "@emotion/styled";
import { useContext } from "react";
import { PaddingContext } from "../contexts/padding";

const BG = () => {
    const { padding } = useContext(PaddingContext);

    const BGContainer = styled['div']`
        width: 100%;
        min-height: 500px;
        padding: ${padding};
        background-color: var(--Green-50);
        padding: 0.5rem;
    `;

    return (
        <BGContainer>

        </BGContainer>
    );
};

export default BG;