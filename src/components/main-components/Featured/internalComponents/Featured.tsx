import styled from "@emotion/styled";
import { Container } from "../../../Container/Container";
import { minHeightFeaturedContainer } from "../DTO/minHeightFeaturedContainer";

export const FeaturedContainer = styled(Container)`
    min-height: ${minHeightFeaturedContainer};
    box-shadow: var(--box-shadow-double-face);
    border-radius: var(--border-radius);
    gap: 0;
    padding: 0;
    background-color: var(--White);

    &.big {
        min-height: 221px;

        & > .featured-sub-container {
            & > .feature {
                min-height: 221px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 0 0 2rem;
                
                &:hover {
                    background-color: var(--Success);

                    & > div > div {
                        background-color: var(--White);
                    }

                    & > div:nth-child(2) > h1, h2 {
                        color: var(--White);
                    }
                    
                }
                & > div:first-of-type > div {
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                    box-shadow: 0 0 1px 1px rgba(51, 51, 51, 0.1), 0 0 1px 1px rgba(51, 51, 51, 0.02);
                }
                & > div > div > svg {
                    color: var(--Success);
                    width: 2rem;
                    height: 2rem;
                }
                & > div:nth-child(2) {
                    gap: 5px;
                }
            }
        }
    }
`;

export const FeaturedSubContainer = styled['div']`
    padding: 0;
    gap: 1px;
    height: 100%;
    min-height: 105px;
    border-radius: var(--border-radius);
    flex: 1 1 350px;
`;