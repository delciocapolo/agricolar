import styled from "@emotion/styled";
import { FC } from "react";
import { ICard } from "./@types/ICard";
import { minHeightBase } from "../Testimonies";
import { QuoteIcon } from "lucide-react";

const text = '“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam commodo lorem laoreet. Aliquam Aliquam Aliquam. Aliquam commodo lorem laoreet. Aliquam Aliquam Aliquam.”';

const Card: FC<ICard> = ({ textComment = text, image }) => {
    const Card = styled['div']`
        min-height: calc((${minHeightBase} - 100px) / 2);
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    `;
    const Quote = styled['div']`
        width: 100%;
        flex-direction: column;
        padding: 1.5rem 2rem 0.5rem 2rem;
        background-color: var(--White);
        border-radius: var(--border-radius);
        position: relative;


        &::before {
            content: '';
            position: absolute;
            background-color: var(--White);
            width: 15px;
            height: 15px;
            bottom: -8px;
            transform: rotate(45deg);
        }

        & > .icon-quote-svg {
            fill: var(--Success);
            stroke: none;
        }
    `;
    const TextComment = styled['p']`
        font: var(--Body-Medium-400);
        color: var(--Green-600);
        width: 100%;
        text-align: justify;
        line-height: 1.4;
        padding: 1rem 0;
    `;
    const CostumerContainer = styled['div']`
        flex-direction: column;
        gap: 0;
    `;
    const ImageCostumer = styled['img']`
        width: 64px;
        height: 64px;
        border-radius: 50%;
    `;
    const Content = styled['div']`
        flex-direction: column;
        gap: 0;
    `;
    const NameCostumer = styled['h1']`
        font: var(--Body-Medium-500);
        color: var(--Green-900);
    `;
    const TypeCostumer = styled['span']`
        font: var(--Body-Small-400);
        color: var(--Green-500);
    `;

    return (
        <Card className="d-flex">
            <Quote className="d-flex">
                <QuoteIcon className="icon-quote-svg" size={30} />
                <TextComment>{textComment}</TextComment>
            </Quote>
            <CostumerContainer className="d-flex">
                <ImageCostumer src={image?.path} />
                <Content className="d-flex">
                    <NameCostumer>Delcio Capolo</NameCostumer>
                    <TypeCostumer>costumer</TypeCostumer>
                </Content>
            </CostumerContainer>
        </Card>
    )
};

export default Card;