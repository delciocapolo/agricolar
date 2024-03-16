import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { QuoteIcon } from "lucide-react";

const Card = () => {
    const CardContainer = styled['div']`
        width: 320px;
        min-height: 310px;

        & > div {
            display: block;
            width: 100%;
            min-height: 20px;
            // background-color: purple;

            &:first-child {
                margin-bottom: 9.13px;
            }
        }
    `;

    const Quote = styled['div']`
        position: relative;
        padding: 1.5rem 3rem;
        // background-color: pink;
    `;
    const CommentCostumerText = styled['p']`
        font: var(--Body-Medium-400);
        color: var(--Green-600);
        text-align: justify;
    `;
    const Customer = styled['div']`
    `;
    const ContainerIcon = styled['div']`
        width: 100%;
        padding: 0.3rem 0;
        // background-color: brown;
    `;
    const ImageCostumerContainer = styled['div']`
        
    `;
    const ImageCostumer = styled['img']`
    `;
    return (
        <CardContainer>
            <Global styles={css`
                .quote-icon {
                    fill: var(--Success);
                    stroke: transparent;
                }
            `} />
            <Quote>
                <ContainerIcon className="d-flex">
                    <QuoteIcon className="quote-icon" size={30} />
                </ContainerIcon>
                <CommentCostumerText>
                    “Proin sed neque nec tellus malesuada ultrices eget a justo.
                    Nullam a nibh faucibus, semper risus ac, ultricies est.
                    Maecenas eget purus in enim imperdiet dapibus in ac mi.
                    Fusce faucibus lacus felis”
                </CommentCostumerText>
            </Quote>
            <Customer>
                <ImageCostumerContainer>
                    <ImageCostumer />
                </ImageCostumerContainer>
            </Customer>
        </CardContainer>
    )
};

export default Card;