import styled from "@emotion/styled";
import { Container as ContainerBase } from "../../Container/Container";
import { FC } from "react";

const FillVoidSpace: FC<{ className?: string }> = ({ className = '' }) => {
    const FillVoidSpaceContainer = styled['div']`
        width: 100%;
        background-color: var(--Green-50);
    `;
    const Container = styled(ContainerBase)`
        margin: auto;
        min-height: 275px;
    `;

    return (
        <FillVoidSpaceContainer className={`fill-void-space ${className}`}>
            <Container />
        </FillVoidSpaceContainer>
    )
};

export default FillVoidSpace;