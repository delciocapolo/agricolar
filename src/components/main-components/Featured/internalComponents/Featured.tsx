import styled from "@emotion/styled";
import { Container } from "../../../Container/Container";

export const FeaturedContainer = styled(Container)`
    min-height: 105px;
    box-shadow: var(--box-shadow-double-face);
    border-radius: var(--border-radius);
    gap: 3px;
    padding: 0;
    background-color: var(--White);
`;

export const FeaturedSubContainer = styled['div']`
    padding: 0;
    gap: 1px;
    height: 100%;
    min-height: 105px;
    border-radius: var(--border-radius);
    flex: 1 1 350px;
`;