import styled from "@emotion/styled";
import { Container as ContainerBase } from "../../Container/Container";

const FillVoidSpace = () => {
    const FillVoidSpaceContainer = styled['div']`
        width: 100%;
        background-color: var(--Green-50);
    `;
    const Container = styled(ContainerBase)`
        margin: auto;
        min-height: 275px;
    `;

    return (
        <FillVoidSpaceContainer>
            <Container />
        </FillVoidSpaceContainer>
    )
};

export default FillVoidSpace;